<?php

if (isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email'])) {
    require ('lib.php');

    $first_name = $_POST['first_name'];
    $last_name  = $_POST['last_name'];
    $email      = $_POST['email'];

    $obj = new CRUD();

    $obj->Create($first_name, $last_name, $email);
}
