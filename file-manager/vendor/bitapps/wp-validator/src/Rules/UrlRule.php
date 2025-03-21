<?php
namespace BitApps\FM\Vendor\BitApps\WPValidator\Rules;

use BitApps\FM\Vendor\BitApps\WPValidator\Rule;

class UrlRule extends Rule
{
    private $message = "The :attribute format is invalid";

    public function validate($value): bool
    {
        return filter_var($value, FILTER_VALIDATE_URL) !== false;
    }

    public function message()
    {
        return $this->message;
    }
}
