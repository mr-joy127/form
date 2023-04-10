<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение промбетон")."?=";
    $headers = "Form: $name\r\nReply-to: $email\r\ncontent-type: text/html; cahrset=utf-8\r\n";

    $success = mail("mr.joy127@mail.ru", $subject, $headers);
    echo $success;
?>