<?php

namespace BitApps\FM\Vendor\BitApps\WPKit\Utils;

use BitApps\FM\Vendor\BitApps\WPKit\Hooks\Hooks;

final class Capabilities
{
    public static function check($cap, ...$args)
    {
        return current_user_can($cap, ...$args);
    }

    public static function filter($cap, $default = 'manage_options')
    {
        return static::check($cap) || static::check(Hooks::applyFilter($cap, $default));
    }
}
