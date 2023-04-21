<!DOCTYPE html>
<html lang="en">

<head>
  <link rel="stylesheet" href="https://tozaburo.github.io/aboutme/contact.css"/>
  <script src="https://tozaburo.github.io/aboutme/contact.js"></script>
  <link rel="icon" href="tozaburo-box.png">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700;800;900&family=Roboto:wght@300;700&display=swap" rel="stylesheet">
  <link rel="icon" href="tozaburo-box.png">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact</title>
</head>

<body>
  <div class="main">
    <div class="title">
      <h1>コンタクトフォーム</h1>
    </div>
    <form action="#" method="post">
      <h2 id="question"></h2>
      <input name="name" type="text" class="center input" placeholder="お名前">
      <input name="email" type="email" class="center input" placeholder="メールアドレス">
      <textarea name="message" id="" class="center input" cols="30" rows="10" placeholder="本文"></textarea>
      <div class="centerdiv">
        <input class="button" type="submit" name="send" value="送信！">
      </div>
    </form>
    <?php

if ($_POST['name'] != "" && $_POST['message'] != "" && $_POST['email'] != "")
  
  $to = "tozaburo.3d@gmail.com";
  $title = $_POST['name'] . "さんからのお問い合わせ";
  $message = $_POST['message'] . $_POST['email'];
  $headers = "From: tozaburo.3d@gmail.com";

  mb_send_mail($to, $title, $message, headers)
?>
    <div class="icon">
      <a href="https://tozaburo.github.io/aboutme/">
        <img src="home.png" alt="">
      </a>
    </div>
</body>

</html>
