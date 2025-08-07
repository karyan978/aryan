<?php
session_start();
include "db.php";
$error = "";
if (isset($_SESSION['user_id'])) {
    header("Location: dashboard.php");
    exit;
}
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = trim($_POST["email"]);
    $password = $_POST["password"];
    $stmt = $conn->prepare("SELECT id, name, password_hash FROM users WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    if ($stmt->num_rows === 1) {
        $stmt->bind_result($user_id, $name, $password_hash);
        $stmt->fetch();
        if (password_verify($password, $password_hash)) {
            $_SESSION['user_id'] = $user_id;
            $_SESSION['user_name'] = $name;
            header("Location: dashboard.php");
            exit;
        } else {
            $error = "Incorrect password.";
        }
    } else {
        $error = "No user found with that email.";
    }
    $stmt->close();
    $conn->close();
}
?>
<!DOCTYPE html>
<html>
<head>
<title>Login</title>
<style>
<?php include('style.css'); ?>
</style>
</head>
<body>
<div class="container">
<h2>Sign In</h2>
<?php if ($error) echo "<div class='error'>$error</div>"; ?>
<form method="post">
  <input type="email" name="email" placeholder="Email Address" required>
  <input type="password" name="password" placeholder="Password" required>
  <button type="submit">Login</button>
</form>
<!-- <div class="links">
    <a href="signup.php">Sign Up</a>
</div> -->
</div>
</body>
</html>
