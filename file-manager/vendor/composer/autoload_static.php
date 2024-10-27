<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit412b4c3f91fa33d0e78c5efd291dff0f
{
    public static $prefixLengthsPsr4 = array (
        'B' => 
        array (
            'BitApps\\WPValidator\\' => 20,
            'BitApps\\WPTelemetry\\' => 20,
            'BitApps\\WPKit\\' => 14,
            'BitApps\\WPDatabase\\' => 19,
            'BitApps\\FM\\' => 11,
        ),
        'A' => 
        array (
            'Automattic\\Jetpack\\Autoloader\\' => 30,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'BitApps\\WPValidator\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-validator/src',
        ),
        'BitApps\\WPTelemetry\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-telemetry/src',
        ),
        'BitApps\\WPKit\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-kit/src',
        ),
        'BitApps\\WPDatabase\\' => 
        array (
            0 => __DIR__ . '/..' . '/bitapps/wp-database/src',
        ),
        'BitApps\\FM\\' => 
        array (
            0 => __DIR__ . '/../..' . '/backend/app',
        ),
        'Automattic\\Jetpack\\Autoloader\\' => 
        array (
            0 => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src',
        ),
    );

    public static $classMap = array (
        'Automattic\\Jetpack\\Autoloader\\AutoloadFileWriter' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadFileWriter.php',
        'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
        'Automattic\\Jetpack\\Autoloader\\AutoloadProcessor' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/AutoloadProcessor.php',
        'Automattic\\Jetpack\\Autoloader\\CustomAutoloaderPlugin' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/CustomAutoloaderPlugin.php',
        'Automattic\\Jetpack\\Autoloader\\ManifestGenerator' => __DIR__ . '/..' . '/automattic/jetpack-autoloader/src/ManifestGenerator.php',
        'BitApps\\FM\\Config' => __DIR__ . '/../..' . '/backend/app/Config.php',
        'BitApps\\FM\\Exception\\PreCommandException' => __DIR__ . '/../..' . '/backend/app/Exception/PreCommandException.php',
        'BitApps\\FM\\Http\\Controllers\\FileManagerController' => __DIR__ . '/../..' . '/backend/app/Http/Controllers/FileManagerController.php',
        'BitApps\\FM\\Http\\Controllers\\LogController' => __DIR__ . '/../..' . '/backend/app/Http/Controllers/LogController.php',
        'BitApps\\FM\\Http\\Controllers\\PermissionsController' => __DIR__ . '/../..' . '/backend/app/Http/Controllers/PermissionsController.php',
        'BitApps\\FM\\Http\\Controllers\\SettingsController' => __DIR__ . '/../..' . '/backend/app/Http/Controllers/SettingsController.php',
        'BitApps\\FM\\Http\\Controllers\\TelemetryPopupController' => __DIR__ . '/../..' . '/backend/app/Http/Controllers/TelemetryPopupController.php',
        'BitApps\\FM\\Http\\Middleware\\CapCheckerMiddleware' => __DIR__ . '/../..' . '/backend/app/Http/Middleware/CapCheckerMiddleware.php',
        'BitApps\\FM\\Http\\Middleware\\NonceCheckerMiddleware' => __DIR__ . '/../..' . '/backend/app/Http/Middleware/NonceCheckerMiddleware.php',
        'BitApps\\FM\\Http\\Requests\\Log\\DeleteLogRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Log/DeleteLogRequest.php',
        'BitApps\\FM\\Http\\Requests\\Permissions\\AddUserPermissionRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Permissions/AddUserPermissionRequest.php',
        'BitApps\\FM\\Http\\Requests\\Permissions\\DeleteUserPermissionRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Permissions/DeleteUserPermissionRequest.php',
        'BitApps\\FM\\Http\\Requests\\Permissions\\PermissionsGetRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Permissions/PermissionsGetRequest.php',
        'BitApps\\FM\\Http\\Requests\\Permissions\\PermissionsUpdateRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Permissions/PermissionsUpdateRequest.php',
        'BitApps\\FM\\Http\\Requests\\Permissions\\SearchUserRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Permissions/SearchUserRequest.php',
        'BitApps\\FM\\Http\\Requests\\Settings\\LangUpdateRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Settings/LangUpdateRequest.php',
        'BitApps\\FM\\Http\\Requests\\Settings\\SettingsRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Settings/SettingsRequest.php',
        'BitApps\\FM\\Http\\Requests\\Settings\\SettingsUpdateRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Settings/SettingsUpdateRequest.php',
        'BitApps\\FM\\Http\\Requests\\Settings\\ThemeUpdateRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Settings/ThemeUpdateRequest.php',
        'BitApps\\FM\\Http\\Requests\\Settings\\ToggleViewRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/Settings/ToggleViewRequest.php',
        'BitApps\\FM\\Http\\Requests\\TryPluginRequest' => __DIR__ . '/../..' . '/backend/app/Http/Requests/TryPluginRequest.php',
        'BitApps\\FM\\Http\\Rules\\ValidPathRule' => __DIR__ . '/../..' . '/backend/app/Http/Rules/ValidPathRule.php',
        'BitApps\\FM\\Http\\Rules\\ValidUIOptionRule' => __DIR__ . '/../..' . '/backend/app/Http/Rules/ValidUIOptionRule.php',
        'BitApps\\FM\\Http\\Rules\\ValidateCommandsRule' => __DIR__ . '/../..' . '/backend/app/Http/Rules/ValidateCommandsRule.php',
        'BitApps\\FM\\Http\\Rules\\ValidateLangRule' => __DIR__ . '/../..' . '/backend/app/Http/Rules/ValidateLangRule.php',
        'BitApps\\FM\\Http\\Rules\\ValidateRolesRule' => __DIR__ . '/../..' . '/backend/app/Http/Rules/ValidateRolesRule.php',
        'BitApps\\FM\\Http\\Rules\\ValidateThemeRule' => __DIR__ . '/../..' . '/backend/app/Http/Rules/ValidateThemeRule.php',
        'BitApps\\FM\\Http\\Rules\\ValidateUsersRule' => __DIR__ . '/../..' . '/backend/app/Http/Rules/ValidateUsersRule.php',
        'BitApps\\FM\\Http\\Services\\LogService' => __DIR__ . '/../..' . '/backend/app/Http/Services/LogService.php',
        'BitApps\\FM\\Model\\Log' => __DIR__ . '/../..' . '/backend/app/Model/Log.php',
        'BitApps\\FM\\Model\\User' => __DIR__ . '/../..' . '/backend/app/Model/User.php',
        'BitApps\\FM\\Plugin' => __DIR__ . '/../..' . '/backend/app/Plugin.php',
        'BitApps\\FM\\Providers\\AccessControlProvider' => __DIR__ . '/../..' . '/backend/app/Providers/AccessControlProvider.php',
        'BitApps\\FM\\Providers\\FileEditValidator' => __DIR__ . '/../..' . '/backend/app/Providers/FileEditValidator.php',
        'BitApps\\FM\\Providers\\FileManager\\ClientOptions' => __DIR__ . '/../..' . '/backend/app/Providers/FileManager/ClientOptions.php',
        'BitApps\\FM\\Providers\\FileManager\\FileManagerProvider' => __DIR__ . '/../..' . '/backend/app/Providers/FileManager/FileManagerProvider.php',
        'BitApps\\FM\\Providers\\FileManager\\FileRoot' => __DIR__ . '/../..' . '/backend/app/Providers/FileManager/FileRoot.php',
        'BitApps\\FM\\Providers\\FileManager\\FinderConnector' => __DIR__ . '/../..' . '/backend/app/Providers/FileManager/FinderConnector.php',
        'BitApps\\FM\\Providers\\FileManager\\Options' => __DIR__ . '/../..' . '/backend/app/Providers/FileManager/Options.php',
        'BitApps\\FM\\Providers\\HookProvider' => __DIR__ . '/../..' . '/backend/app/Providers/HookProvider.php',
        'BitApps\\FM\\Providers\\InstallerProvider' => __DIR__ . '/../..' . '/backend/app/Providers/InstallerProvider.php',
        'BitApps\\FM\\Providers\\Logger' => __DIR__ . '/../..' . '/backend/app/Providers/Logger.php',
        'BitApps\\FM\\Providers\\MediaSynchronizer' => __DIR__ . '/../..' . '/backend/app/Providers/MediaSynchronizer.php',
        'BitApps\\FM\\Providers\\MimeProvider' => __DIR__ . '/../..' . '/backend/app/Providers/MimeProvider.php',
        'BitApps\\FM\\Providers\\PermissionsProvider' => __DIR__ . '/../..' . '/backend/app/Providers/PermissionsProvider.php',
        'BitApps\\FM\\Providers\\PreferenceProvider' => __DIR__ . '/../..' . '/backend/app/Providers/PreferenceProvider.php',
        'BitApps\\FM\\Providers\\VersionMigrationProvider' => __DIR__ . '/../..' . '/backend/app/Providers/VersionMigrationProvider.php',
        'BitApps\\FM\\Views\\Admin' => __DIR__ . '/../..' . '/backend/app/Views/Admin.php',
        'BitApps\\FM\\Views\\Shortcode' => __DIR__ . '/../..' . '/backend/app/Views/Shortcode.php',
        'BitApps\\WPDatabase\\Blueprint' => __DIR__ . '/..' . '/bitapps/wp-database/src/Blueprint.php',
        'BitApps\\WPDatabase\\Connection' => __DIR__ . '/..' . '/bitapps/wp-database/src/Connection.php',
        'BitApps\\WPDatabase\\Model' => __DIR__ . '/..' . '/bitapps/wp-database/src/Model.php',
        'BitApps\\WPDatabase\\QueryBuilder' => __DIR__ . '/..' . '/bitapps/wp-database/src/QueryBuilder.php',
        'BitApps\\WPDatabase\\Relations' => __DIR__ . '/..' . '/bitapps/wp-database/src/Relations.php',
        'BitApps\\WPDatabase\\Schema' => __DIR__ . '/..' . '/bitapps/wp-database/src/Schema.php',
        'BitApps\\WPKit\\Configs\\JsonConfig' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Configs/JsonConfig.php',
        'BitApps\\WPKit\\Helpers\\Arr' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/Arr.php',
        'BitApps\\WPKit\\Helpers\\DateTimeHelper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/DateTimeHelper.php',
        'BitApps\\WPKit\\Helpers\\JSON' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/JSON.php',
        'BitApps\\WPKit\\Helpers\\Slug' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Helpers/Slug.php',
        'BitApps\\WPKit\\Hooks\\Hooks' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Hooks/Hooks.php',
        'BitApps\\WPKit\\Hooks\\HooksWrapper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Hooks/HooksWrapper.php',
        'BitApps\\WPKit\\Http\\Client\\Http' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Client/Http.php',
        'BitApps\\WPKit\\Http\\Client\\HttpClient' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Client/HttpClient.php',
        'BitApps\\WPKit\\Http\\IpTool' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/IpTool.php',
        'BitApps\\WPKit\\Http\\RequestType' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/RequestType.php',
        'BitApps\\WPKit\\Http\\Request\\Request' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Request/Request.php',
        'BitApps\\WPKit\\Http\\Request\\Validator\\RuleInterface' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Request/Validator/RuleInterface.php',
        'BitApps\\WPKit\\Http\\Response' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Response.php',
        'BitApps\\WPKit\\Http\\Router\\APIRouter' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/APIRouter.php',
        'BitApps\\WPKit\\Http\\Router\\AjaxRouter' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/AjaxRouter.php',
        'BitApps\\WPKit\\Http\\Router\\Route' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/Route.php',
        'BitApps\\WPKit\\Http\\Router\\RouteBase' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/RouteBase.php',
        'BitApps\\WPKit\\Http\\Router\\RouteRegister' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/RouteRegister.php',
        'BitApps\\WPKit\\Http\\Router\\Router' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Http/Router/Router.php',
        'BitApps\\WPKit\\Installer' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Installer.php',
        'BitApps\\WPKit\\Migration\\Migration' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Migration/Migration.php',
        'BitApps\\WPKit\\Migration\\MigrationHelper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Migration/MigrationHelper.php',
        'BitApps\\WPKit\\Shortcode\\Shortcode' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Shortcode/Shortcode.php',
        'BitApps\\WPKit\\Shortcode\\ShortcodeWrapper' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Shortcode/ShortcodeWrapper.php',
        'BitApps\\WPKit\\Utils\\Capabilities' => __DIR__ . '/..' . '/bitapps/wp-kit/src/Utils/Capabilities.php',
        'BitApps\\WPTelemetry\\Telemetry\\Feedback\\Feedback' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Feedback/Feedback.php',
        'BitApps\\WPTelemetry\\Telemetry\\Report\\Report' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Report/Report.php',
        'BitApps\\WPTelemetry\\Telemetry\\Report\\ReportInfo' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Report/ReportInfo.php',
        'BitApps\\WPTelemetry\\Telemetry\\Telemetry' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/Telemetry.php',
        'BitApps\\WPTelemetry\\Telemetry\\TelemetryConfig' => __DIR__ . '/..' . '/bitapps/wp-telemetry/src/Telemetry/TelemetryConfig.php',
        'BitApps\\WPValidator\\ErrorBag' => __DIR__ . '/..' . '/bitapps/wp-validator/src/ErrorBag.php',
        'BitApps\\WPValidator\\Exception\\InvalidArgumentException' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Exception/InvalidArgumentException.php',
        'BitApps\\WPValidator\\Exception\\MethodNotFoundException' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Exception/MethodNotFoundException.php',
        'BitApps\\WPValidator\\Exception\\RuleErrorException' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Exception/RuleErrorException.php',
        'BitApps\\WPValidator\\Helpers' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Helpers.php',
        'BitApps\\WPValidator\\InputDataContainer' => __DIR__ . '/..' . '/bitapps/wp-validator/src/InputDataContainer.php',
        'BitApps\\WPValidator\\Rule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rule.php',
        'BitApps\\WPValidator\\Rules\\AcceptedRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/AcceptedRule.php',
        'BitApps\\WPValidator\\Rules\\ArrayRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/ArrayRule.php',
        'BitApps\\WPValidator\\Rules\\BetweenRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/BetweenRule.php',
        'BitApps\\WPValidator\\Rules\\BooleanRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/BooleanRule.php',
        'BitApps\\WPValidator\\Rules\\DateRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/DateRule.php',
        'BitApps\\WPValidator\\Rules\\DigitBetweenRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/DigitBetweenRule.php',
        'BitApps\\WPValidator\\Rules\\DigitsRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/DigitsRule.php',
        'BitApps\\WPValidator\\Rules\\EmailRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/EmailRule.php',
        'BitApps\\WPValidator\\Rules\\IP4Rule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IP4Rule.php',
        'BitApps\\WPValidator\\Rules\\IP6Rule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IP6Rule.php',
        'BitApps\\WPValidator\\Rules\\IPRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IPRule.php',
        'BitApps\\WPValidator\\Rules\\IntegerRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/IntegerRule.php',
        'BitApps\\WPValidator\\Rules\\JsonRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/JsonRule.php',
        'BitApps\\WPValidator\\Rules\\LowercaseRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/LowercaseRule.php',
        'BitApps\\WPValidator\\Rules\\MacAddressRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/MacAddressRule.php',
        'BitApps\\WPValidator\\Rules\\MaxRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/MaxRule.php',
        'BitApps\\WPValidator\\Rules\\MinRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/MinRule.php',
        'BitApps\\WPValidator\\Rules\\NullableRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/NullableRule.php',
        'BitApps\\WPValidator\\Rules\\NumericRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/NumericRule.php',
        'BitApps\\WPValidator\\Rules\\ObjectRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/ObjectRule.php',
        'BitApps\\WPValidator\\Rules\\RequiredRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/RequiredRule.php',
        'BitApps\\WPValidator\\Rules\\SameRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/SameRule.php',
        'BitApps\\WPValidator\\Rules\\SizeRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/SizeRule.php',
        'BitApps\\WPValidator\\Rules\\StringRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/StringRule.php',
        'BitApps\\WPValidator\\Rules\\UppercaseRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/UppercaseRule.php',
        'BitApps\\WPValidator\\Rules\\UrlRule' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Rules/UrlRule.php',
        'BitApps\\WPValidator\\SanitizationMethods' => __DIR__ . '/..' . '/bitapps/wp-validator/src/SanitizationMethods.php',
        'BitApps\\WPValidator\\Validator' => __DIR__ . '/..' . '/bitapps/wp-validator/src/Validator.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit412b4c3f91fa33d0e78c5efd291dff0f::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit412b4c3f91fa33d0e78c5efd291dff0f::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit412b4c3f91fa33d0e78c5efd291dff0f::$classMap;

        }, null, ClassLoader::class);
    }
}
