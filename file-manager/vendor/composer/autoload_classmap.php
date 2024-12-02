<?php

// autoload_classmap.php @generated by Composer

$vendorDir = dirname(__DIR__);
$baseDir = dirname($vendorDir);

return array(
    'Automattic\\Jetpack\\Autoloader\\AutoloadFileWriter' => $vendorDir . '/automattic/jetpack-autoloader/src/AutoloadFileWriter.php',
    'Automattic\\Jetpack\\Autoloader\\AutoloadGenerator' => $vendorDir . '/automattic/jetpack-autoloader/src/AutoloadGenerator.php',
    'Automattic\\Jetpack\\Autoloader\\AutoloadProcessor' => $vendorDir . '/automattic/jetpack-autoloader/src/AutoloadProcessor.php',
    'Automattic\\Jetpack\\Autoloader\\CustomAutoloaderPlugin' => $vendorDir . '/automattic/jetpack-autoloader/src/CustomAutoloaderPlugin.php',
    'Automattic\\Jetpack\\Autoloader\\ManifestGenerator' => $vendorDir . '/automattic/jetpack-autoloader/src/ManifestGenerator.php',
    'BitApps\\FM\\Config' => $baseDir . '/backend/app/Config.php',
    'BitApps\\FM\\Exception\\PreCommandException' => $baseDir . '/backend/app/Exception/PreCommandException.php',
    'BitApps\\FM\\Http\\Controllers\\FileManagerController' => $baseDir . '/backend/app/Http/Controllers/FileManagerController.php',
    'BitApps\\FM\\Http\\Controllers\\LogController' => $baseDir . '/backend/app/Http/Controllers/LogController.php',
    'BitApps\\FM\\Http\\Controllers\\PermissionsController' => $baseDir . '/backend/app/Http/Controllers/PermissionsController.php',
    'BitApps\\FM\\Http\\Controllers\\SettingsController' => $baseDir . '/backend/app/Http/Controllers/SettingsController.php',
    'BitApps\\FM\\Http\\Controllers\\TelemetryPopupController' => $baseDir . '/backend/app/Http/Controllers/TelemetryPopupController.php',
    'BitApps\\FM\\Http\\Middleware\\CapCheckerMiddleware' => $baseDir . '/backend/app/Http/Middleware/CapCheckerMiddleware.php',
    'BitApps\\FM\\Http\\Middleware\\NonceCheckerMiddleware' => $baseDir . '/backend/app/Http/Middleware/NonceCheckerMiddleware.php',
    'BitApps\\FM\\Http\\Requests\\Log\\DeleteLogRequest' => $baseDir . '/backend/app/Http/Requests/Log/DeleteLogRequest.php',
    'BitApps\\FM\\Http\\Requests\\Permissions\\AddUserPermissionRequest' => $baseDir . '/backend/app/Http/Requests/Permissions/AddUserPermissionRequest.php',
    'BitApps\\FM\\Http\\Requests\\Permissions\\DeleteUserPermissionRequest' => $baseDir . '/backend/app/Http/Requests/Permissions/DeleteUserPermissionRequest.php',
    'BitApps\\FM\\Http\\Requests\\Permissions\\PermissionsGetRequest' => $baseDir . '/backend/app/Http/Requests/Permissions/PermissionsGetRequest.php',
    'BitApps\\FM\\Http\\Requests\\Permissions\\PermissionsUpdateRequest' => $baseDir . '/backend/app/Http/Requests/Permissions/PermissionsUpdateRequest.php',
    'BitApps\\FM\\Http\\Requests\\Permissions\\SearchUserRequest' => $baseDir . '/backend/app/Http/Requests/Permissions/SearchUserRequest.php',
    'BitApps\\FM\\Http\\Requests\\Settings\\LangUpdateRequest' => $baseDir . '/backend/app/Http/Requests/Settings/LangUpdateRequest.php',
    'BitApps\\FM\\Http\\Requests\\Settings\\SettingsRequest' => $baseDir . '/backend/app/Http/Requests/Settings/SettingsRequest.php',
    'BitApps\\FM\\Http\\Requests\\Settings\\SettingsUpdateRequest' => $baseDir . '/backend/app/Http/Requests/Settings/SettingsUpdateRequest.php',
    'BitApps\\FM\\Http\\Requests\\Settings\\ThemeUpdateRequest' => $baseDir . '/backend/app/Http/Requests/Settings/ThemeUpdateRequest.php',
    'BitApps\\FM\\Http\\Requests\\Settings\\ToggleViewRequest' => $baseDir . '/backend/app/Http/Requests/Settings/ToggleViewRequest.php',
    'BitApps\\FM\\Http\\Requests\\TryPluginRequest' => $baseDir . '/backend/app/Http/Requests/TryPluginRequest.php',
    'BitApps\\FM\\Http\\Rules\\ValidPathRule' => $baseDir . '/backend/app/Http/Rules/ValidPathRule.php',
    'BitApps\\FM\\Http\\Rules\\ValidUIOptionRule' => $baseDir . '/backend/app/Http/Rules/ValidUIOptionRule.php',
    'BitApps\\FM\\Http\\Rules\\ValidateCommandsRule' => $baseDir . '/backend/app/Http/Rules/ValidateCommandsRule.php',
    'BitApps\\FM\\Http\\Rules\\ValidateLangRule' => $baseDir . '/backend/app/Http/Rules/ValidateLangRule.php',
    'BitApps\\FM\\Http\\Rules\\ValidateRolesRule' => $baseDir . '/backend/app/Http/Rules/ValidateRolesRule.php',
    'BitApps\\FM\\Http\\Rules\\ValidateThemeRule' => $baseDir . '/backend/app/Http/Rules/ValidateThemeRule.php',
    'BitApps\\FM\\Http\\Rules\\ValidateUsersRule' => $baseDir . '/backend/app/Http/Rules/ValidateUsersRule.php',
    'BitApps\\FM\\Http\\Services\\LogService' => $baseDir . '/backend/app/Http/Services/LogService.php',
    'BitApps\\FM\\Model\\Log' => $baseDir . '/backend/app/Model/Log.php',
    'BitApps\\FM\\Model\\User' => $baseDir . '/backend/app/Model/User.php',
    'BitApps\\FM\\Plugin' => $baseDir . '/backend/app/Plugin.php',
    'BitApps\\FM\\Providers\\AccessControlProvider' => $baseDir . '/backend/app/Providers/AccessControlProvider.php',
    'BitApps\\FM\\Providers\\FileEditValidator' => $baseDir . '/backend/app/Providers/FileEditValidator.php',
    'BitApps\\FM\\Providers\\FileManager\\ClientOptions' => $baseDir . '/backend/app/Providers/FileManager/ClientOptions.php',
    'BitApps\\FM\\Providers\\FileManager\\FileManagerProvider' => $baseDir . '/backend/app/Providers/FileManager/FileManagerProvider.php',
    'BitApps\\FM\\Providers\\FileManager\\FileRoot' => $baseDir . '/backend/app/Providers/FileManager/FileRoot.php',
    'BitApps\\FM\\Providers\\FileManager\\FinderConnector' => $baseDir . '/backend/app/Providers/FileManager/FinderConnector.php',
    'BitApps\\FM\\Providers\\FileManager\\Options' => $baseDir . '/backend/app/Providers/FileManager/Options.php',
    'BitApps\\FM\\Providers\\HookProvider' => $baseDir . '/backend/app/Providers/HookProvider.php',
    'BitApps\\FM\\Providers\\InstallerProvider' => $baseDir . '/backend/app/Providers/InstallerProvider.php',
    'BitApps\\FM\\Providers\\Logger' => $baseDir . '/backend/app/Providers/Logger.php',
    'BitApps\\FM\\Providers\\MediaSynchronizer' => $baseDir . '/backend/app/Providers/MediaSynchronizer.php',
    'BitApps\\FM\\Providers\\MimeProvider' => $baseDir . '/backend/app/Providers/MimeProvider.php',
    'BitApps\\FM\\Providers\\PermissionsProvider' => $baseDir . '/backend/app/Providers/PermissionsProvider.php',
    'BitApps\\FM\\Providers\\PreferenceProvider' => $baseDir . '/backend/app/Providers/PreferenceProvider.php',
    'BitApps\\FM\\Providers\\VersionMigrationProvider' => $baseDir . '/backend/app/Providers/VersionMigrationProvider.php',
    'BitApps\\FM\\Views\\Admin' => $baseDir . '/backend/app/Views/Admin.php',
    'BitApps\\FM\\Views\\Shortcode' => $baseDir . '/backend/app/Views/Shortcode.php',
    'BitApps\\WPDatabase\\Blueprint' => $vendorDir . '/bitapps/wp-database/src/Blueprint.php',
    'BitApps\\WPDatabase\\Connection' => $vendorDir . '/bitapps/wp-database/src/Connection.php',
    'BitApps\\WPDatabase\\Model' => $vendorDir . '/bitapps/wp-database/src/Model.php',
    'BitApps\\WPDatabase\\QueryBuilder' => $vendorDir . '/bitapps/wp-database/src/QueryBuilder.php',
    'BitApps\\WPDatabase\\Relations' => $vendorDir . '/bitapps/wp-database/src/Relations.php',
    'BitApps\\WPDatabase\\Schema' => $vendorDir . '/bitapps/wp-database/src/Schema.php',
    'BitApps\\WPKit\\Configs\\JsonConfig' => $vendorDir . '/bitapps/wp-kit/src/Configs/JsonConfig.php',
    'BitApps\\WPKit\\Helpers\\Arr' => $vendorDir . '/bitapps/wp-kit/src/Helpers/Arr.php',
    'BitApps\\WPKit\\Helpers\\DateTimeHelper' => $vendorDir . '/bitapps/wp-kit/src/Helpers/DateTimeHelper.php',
    'BitApps\\WPKit\\Helpers\\JSON' => $vendorDir . '/bitapps/wp-kit/src/Helpers/JSON.php',
    'BitApps\\WPKit\\Helpers\\Slug' => $vendorDir . '/bitapps/wp-kit/src/Helpers/Slug.php',
    'BitApps\\WPKit\\Hooks\\Hooks' => $vendorDir . '/bitapps/wp-kit/src/Hooks/Hooks.php',
    'BitApps\\WPKit\\Hooks\\HooksWrapper' => $vendorDir . '/bitapps/wp-kit/src/Hooks/HooksWrapper.php',
    'BitApps\\WPKit\\Http\\Client\\Http' => $vendorDir . '/bitapps/wp-kit/src/Http/Client/Http.php',
    'BitApps\\WPKit\\Http\\Client\\HttpClient' => $vendorDir . '/bitapps/wp-kit/src/Http/Client/HttpClient.php',
    'BitApps\\WPKit\\Http\\IpTool' => $vendorDir . '/bitapps/wp-kit/src/Http/IpTool.php',
    'BitApps\\WPKit\\Http\\RequestType' => $vendorDir . '/bitapps/wp-kit/src/Http/RequestType.php',
    'BitApps\\WPKit\\Http\\Request\\Request' => $vendorDir . '/bitapps/wp-kit/src/Http/Request/Request.php',
    'BitApps\\WPKit\\Http\\Request\\Validator\\RuleInterface' => $vendorDir . '/bitapps/wp-kit/src/Http/Request/Validator/RuleInterface.php',
    'BitApps\\WPKit\\Http\\Response' => $vendorDir . '/bitapps/wp-kit/src/Http/Response.php',
    'BitApps\\WPKit\\Http\\Router\\APIRouter' => $vendorDir . '/bitapps/wp-kit/src/Http/Router/APIRouter.php',
    'BitApps\\WPKit\\Http\\Router\\AjaxRouter' => $vendorDir . '/bitapps/wp-kit/src/Http/Router/AjaxRouter.php',
    'BitApps\\WPKit\\Http\\Router\\Route' => $vendorDir . '/bitapps/wp-kit/src/Http/Router/Route.php',
    'BitApps\\WPKit\\Http\\Router\\RouteBase' => $vendorDir . '/bitapps/wp-kit/src/Http/Router/RouteBase.php',
    'BitApps\\WPKit\\Http\\Router\\RouteRegister' => $vendorDir . '/bitapps/wp-kit/src/Http/Router/RouteRegister.php',
    'BitApps\\WPKit\\Http\\Router\\Router' => $vendorDir . '/bitapps/wp-kit/src/Http/Router/Router.php',
    'BitApps\\WPKit\\Installer' => $vendorDir . '/bitapps/wp-kit/src/Installer.php',
    'BitApps\\WPKit\\Migration\\Migration' => $vendorDir . '/bitapps/wp-kit/src/Migration/Migration.php',
    'BitApps\\WPKit\\Migration\\MigrationHelper' => $vendorDir . '/bitapps/wp-kit/src/Migration/MigrationHelper.php',
    'BitApps\\WPKit\\Shortcode\\Shortcode' => $vendorDir . '/bitapps/wp-kit/src/Shortcode/Shortcode.php',
    'BitApps\\WPKit\\Shortcode\\ShortcodeWrapper' => $vendorDir . '/bitapps/wp-kit/src/Shortcode/ShortcodeWrapper.php',
    'BitApps\\WPKit\\Utils\\Capabilities' => $vendorDir . '/bitapps/wp-kit/src/Utils/Capabilities.php',
    'BitApps\\WPTelemetry\\Telemetry\\Feedback\\Feedback' => $vendorDir . '/bitapps/wp-telemetry/src/Telemetry/Feedback/Feedback.php',
    'BitApps\\WPTelemetry\\Telemetry\\Report\\Report' => $vendorDir . '/bitapps/wp-telemetry/src/Telemetry/Report/Report.php',
    'BitApps\\WPTelemetry\\Telemetry\\Report\\ReportInfo' => $vendorDir . '/bitapps/wp-telemetry/src/Telemetry/Report/ReportInfo.php',
    'BitApps\\WPTelemetry\\Telemetry\\Telemetry' => $vendorDir . '/bitapps/wp-telemetry/src/Telemetry/Telemetry.php',
    'BitApps\\WPTelemetry\\Telemetry\\TelemetryConfig' => $vendorDir . '/bitapps/wp-telemetry/src/Telemetry/TelemetryConfig.php',
    'BitApps\\WPValidator\\ErrorBag' => $vendorDir . '/bitapps/wp-validator/src/ErrorBag.php',
    'BitApps\\WPValidator\\Exception\\InvalidArgumentException' => $vendorDir . '/bitapps/wp-validator/src/Exception/InvalidArgumentException.php',
    'BitApps\\WPValidator\\Exception\\MethodNotFoundException' => $vendorDir . '/bitapps/wp-validator/src/Exception/MethodNotFoundException.php',
    'BitApps\\WPValidator\\Exception\\RuleErrorException' => $vendorDir . '/bitapps/wp-validator/src/Exception/RuleErrorException.php',
    'BitApps\\WPValidator\\Helpers' => $vendorDir . '/bitapps/wp-validator/src/Helpers.php',
    'BitApps\\WPValidator\\InputDataContainer' => $vendorDir . '/bitapps/wp-validator/src/InputDataContainer.php',
    'BitApps\\WPValidator\\Rule' => $vendorDir . '/bitapps/wp-validator/src/Rule.php',
    'BitApps\\WPValidator\\Rules\\AcceptedRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/AcceptedRule.php',
    'BitApps\\WPValidator\\Rules\\ArrayRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/ArrayRule.php',
    'BitApps\\WPValidator\\Rules\\BetweenRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/BetweenRule.php',
    'BitApps\\WPValidator\\Rules\\BooleanRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/BooleanRule.php',
    'BitApps\\WPValidator\\Rules\\DateRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/DateRule.php',
    'BitApps\\WPValidator\\Rules\\DigitBetweenRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/DigitBetweenRule.php',
    'BitApps\\WPValidator\\Rules\\DigitsRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/DigitsRule.php',
    'BitApps\\WPValidator\\Rules\\EmailRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/EmailRule.php',
    'BitApps\\WPValidator\\Rules\\IP4Rule' => $vendorDir . '/bitapps/wp-validator/src/Rules/IP4Rule.php',
    'BitApps\\WPValidator\\Rules\\IP6Rule' => $vendorDir . '/bitapps/wp-validator/src/Rules/IP6Rule.php',
    'BitApps\\WPValidator\\Rules\\IPRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/IPRule.php',
    'BitApps\\WPValidator\\Rules\\IntegerRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/IntegerRule.php',
    'BitApps\\WPValidator\\Rules\\JsonRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/JsonRule.php',
    'BitApps\\WPValidator\\Rules\\LowercaseRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/LowercaseRule.php',
    'BitApps\\WPValidator\\Rules\\MacAddressRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/MacAddressRule.php',
    'BitApps\\WPValidator\\Rules\\MaxRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/MaxRule.php',
    'BitApps\\WPValidator\\Rules\\MinRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/MinRule.php',
    'BitApps\\WPValidator\\Rules\\NullableRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/NullableRule.php',
    'BitApps\\WPValidator\\Rules\\NumericRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/NumericRule.php',
    'BitApps\\WPValidator\\Rules\\ObjectRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/ObjectRule.php',
    'BitApps\\WPValidator\\Rules\\RequiredRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/RequiredRule.php',
    'BitApps\\WPValidator\\Rules\\SameRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/SameRule.php',
    'BitApps\\WPValidator\\Rules\\SizeRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/SizeRule.php',
    'BitApps\\WPValidator\\Rules\\StringRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/StringRule.php',
    'BitApps\\WPValidator\\Rules\\UppercaseRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/UppercaseRule.php',
    'BitApps\\WPValidator\\Rules\\UrlRule' => $vendorDir . '/bitapps/wp-validator/src/Rules/UrlRule.php',
    'BitApps\\WPValidator\\SanitizationMethods' => $vendorDir . '/bitapps/wp-validator/src/SanitizationMethods.php',
    'BitApps\\WPValidator\\Validator' => $vendorDir . '/bitapps/wp-validator/src/Validator.php',
    'Composer\\InstalledVersions' => $vendorDir . '/composer/InstalledVersions.php',
);
