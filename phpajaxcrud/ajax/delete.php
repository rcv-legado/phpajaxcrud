<?php

if (isset($_POST['id']) && isset($_POST['id']) != "") {
    require 'lib.php';

    $user_id = $_POST['id'];

    $obj = new CRUD();
    $obj->Delete($user_id);
}
