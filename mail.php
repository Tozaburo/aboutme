<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mail</title>
</head>
<body>
  <?php

if ($_POST['name'] != "" && $_POST['message'] != "" && $_POST['email'] != "")
  
  $to = "tozaburo.3d@gmail.com";
  $title = $_POST['name'] . "さんからのお問い合わせ";
  $message = $_POST['message'] . $_POST['email'];
  $headers = "From: tozaburo.3d@gmail.com";

  mb_send_mail($to, $title, $message, headers)
?>
</body>
</html>
