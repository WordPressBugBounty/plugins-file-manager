<?php

namespace BitApps\FM\Providers;

use BitApps\FM\Exception\PreCommandException;
use BitApps\FM\Plugin;

use elFinder;

\defined('ABSPATH') || exit();

class AccessControlProvider
{
    public $settings;

    private $maliciousPatterns = [
        '/<script\b[^>]*>.*?<\/script>/is',
        '/<[^>]+?\s(on\w+)\s*=\s*["\'].*?["\']/is',
        '/<[^>]+?href\s*=\s*["\']\s*javascript:.*?["\']/is',
        '/\/S\s*\/JavaScript\s*\/JS/is',
    ];

    private $scannedResult = [];

    public function __construct()
    {
        $this->settings = Plugin::instance()->preferences();
    }

    /**
     * Handles hidden file/folder access
     *
     * @param string    $attr    attribute name (read|write|locked|hidden)
     * @param string    $path    absolute file path
     * @param string    $data    value of volume option `accessControlData`
     * @param object    $volume  elFinder volume driver object
     * @param bool|null $isDir   path is directory (true: directory, false: file, null: unknown)
     * @param string    $relPath file path relative to volume root directory started with directory separator
     *
     * @return bool|null
     */
    public function control($attr, $path, $data, $volume, $isDir, $relPath)
    {
        $isAccessAllowed = null;
        if (strpos(basename($path), '.') !== 0 || \strlen($relPath) === 1 || $attr === 'locked') {
            return $isAccessAllowed;
        }

        $isAccessAllowed = true;

        if ($this->settings->getVisibilityOfHiddenFile() && $attr === 'hidden') {
            $isAccessAllowed = false;
        }

        if ($isAccessAllowed && !$this->settings->isHiddenFolderAllowed() && $attr == 'write') {
            $isAccessAllowed = false;
        }

        return $isAccessAllowed;
    }

    /**
     * Create or upload .( Dot) started files or folder based on settings.
     * reference : https://github.com/Studio-42/elFinder/wiki/Connector-configuration-options-2.1#acceptedName
     *
     * @param $name file.
     *
     * @return bool
     */
    public function validateName($name)
    {
        return ! (strpos($name, '.') === 0 && !$this->settings->isHiddenFolderAllowed());
    }

    public function checkPermission($command, ...$args)
    {
        if (\in_array($command, ['open', 'search'])) {
            return;
        }

        $error              = '';
        $permissionProvider = Plugin::instance()->permissions();
        $cmd                = $command;
        if ($command === 'file' || $command === 'zipdl') {
            $cmd = 'download';
        } elseif ($command === 'put' || $command === 'get') {
            $cmd = 'edit';
        }

        if (
            $this->isNotRequiredCommandForAllPermission($cmd, $permissionProvider)
             && !$permissionProvider->currentUserCanRun($cmd)) {
            $error = wp_sprintf(
                // translators: 1: elFInder Command
                __(
                    'You are not authorized to run this command [ %s ] on file manager',
                    'file-manager'
                ),
                $cmd
            );
        }

        if ($command == 'file' && $this->isFileAllowedToOpen($args)) {
            $error = '';
        }

        try {
            if (!empty($error)) {
                throw new PreCommandException($error);
            }
            $this->scanFile($command, $args);
        } catch (PreCommandException $th) {
            return $th->getError();
        }
    }

    /**
     * If a user has permission for any task to perform then they have
     * to be allowed to perform common commands.
     * Lets say, A user has permission to upload file then they will not be
     * able to upload if ls command is not allowed.
     * Checks if the command is required for all commands to perform.
     * Common commands are:
     * - ls
     * - tree
     * - search
     * - info
     * - size
     *
     * @param string              $cmd
     * @param PermissionsProvider $permissionProvider
     *
     * @return bool
     */
    public function isNotRequiredCommandForAllPermission($cmd, $permissionProvider)
    {
        $isNotRequired = true;

        if (
            \in_array($cmd, ['ls', 'tree', 'info', 'size'])
            && (
                $permissionProvider->isCurrentRoleHasPermission()
                || $permissionProvider->isCurrentUserHasPermission()
            )
        ) {
            $isNotRequired = false;
        }

        return $isNotRequired;
    }

    private function isFileAllowedToOpen($args)
    {
        if (isset($args[1]) && $args[1] instanceof elFinder) {
            $volume         = $args[1]->getVolume($args[0]['target']);
            $file           = $volume->getPath($args[0]['target']);
            $fileName       = wp_basename($file);
            $fileTypeAndExt = wp_check_filetype_and_ext($file, $fileName);
            if (isset($fileTypeAndExt['ext'], $fileTypeAndExt['type'])) {
                $fileType        = str_replace('/' . $fileTypeAndExt['ext'], '', $fileTypeAndExt['type']);
                $enabledFileType = Plugin::instance()->permissions()->getEnabledFileType();

                if (\in_array($fileType, $enabledFileType)) {
                    return true;
                }
            }
        }

        return false;
    }

    public function scanFile($command, $args)
    {
        if (!\in_array($command, ['put', 'upload']) || \in_array('javascript', Plugin::instance()->permissions()->getEnabledFileType())) {
            return;
        }

        if (isset($args[0]['chunk']) && !empty($args[0]['chunk'])) {
            return;
        }

        if (
            $command === 'upload' &&
            !empty($args[0]['FILES']['upload']['tmp_name']) &&
            is_array($args[0]['FILES']['upload']['tmp_name'])
        ) {
            $filePath       = '';
            $fileName       = '';
            $uploadedFiles = $args[0]['FILES']['upload']['tmp_name'];
            
            foreach ($uploadedFiles as $index => $tmpName) {
                $content = '';
                $filePath       = $args[0]['FILES']['upload']['tmp_name'][$index];
                $fileName       = $args[0]['FILES']['upload']['name'][$index];
                if (empty($filePath)) {
                    continue;
                }
                $fileTypeAndExt = wp_check_filetype_and_ext($filePath, $fileName);
                if (!empty($fileTypeAndExt['type'])) {
                    if (stripos($fileTypeAndExt['type'], 'javascript') !== false) {
                        $this->scannedResult[] = sprintf(__('This file %s type is not allowed', 'file-manager'), $fileName);
                    }
                    if (
                        stripos($fileTypeAndExt['type'], 'text') !== false ||
                        stripos($fileTypeAndExt['type'], 'pdf') !== false
                    ) {
                        $content = file_get_contents($filePath);
                    }
                } else {
                    try {
                        $content = file_get_contents($filePath);
                    } catch (\Exception $e) {
                        $this->scannedResult[] = sprintf(__('Failed to process this file %s', 'file-manager'), $fileName);
                    }
                }

                if (!empty($content)) {
                    $this->scanForPattern($content, $fileName);
                }
            }
        } elseif (isset($_REQUEST['content'])) {
            $this->scanForPattern($_REQUEST['content'], '');
        }

        if (count($this->scannedResult) > 0) {
            throw new PreCommandException(
                implode('. >> ', $this->scannedResult)
            );
        }

    }

    private function scanForPattern($content, $fileName)
    {
        $containsJs = false;
        foreach ($this->maliciousPatterns as $pattern) {
            if (preg_match($pattern, $content)) {
                $containsJs = true;
                
                break;
            }
        }

        if ($containsJs) {
            $this->scannedResult[] = sprintf(__('This file %s contains JS code. Please remove the code and try again. Or allow js mimetype', 'file-manager'), $fileName);
        }
    }
}

    
