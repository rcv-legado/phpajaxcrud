<?php

/*
 * database connection constants
 */
define('HOST', 'localhost');
define('USER', 'homestead');
define('PASSWORD', 'secret');
define('DATABASE', 'phpajaxcrud');
define('CHARSET', 'utf8');


function DB()
{
    static $instance;
    if ($instance === null) {
        $opt = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false
        );
        $dsn = 'mysql:host=' . HOST . ';dbname=' . DATABASE . ';charset=' . CHARSET;
        $instance = new PDO($dsn, USER, PASSWORD, $opt);
    }
    return $instance;
}
