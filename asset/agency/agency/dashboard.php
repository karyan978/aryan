<?php
session_start();

// Optional: If you want only logged-in users to see this page
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php");
    exit;
}

include "db.php";

$sql = "SELECT id, name, email, mobile, message FROM user_data";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Contact Messages</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 900px;
      margin: 40px auto;
      background: #f9f9f9;
      padding: 20px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      background: #fff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    th, td {
      padding: 12px 15px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    th {
      background-color: #2563eb;
      color: white;
    }
    tr:nth-child(even) {
      background-color: #f3f7ff;
    }
    h2 {
      color: #2563eb;
      text-align: center;
      margin-bottom: 25px;
    }
  </style>
</head>
<body>
  <h2>Contact Messages</h2>
  <?php if ($result && $result->num_rows > 0): ?>
  <table>
    <thead>
      <tr>
        <th>ID</th><th>Name</th><th>Email</th><th>Mobile</th><th>Message</th>
      </tr>
    </thead>
    <tbody>
      <?php while($row = $result->fetch_assoc()): ?>
      <tr>
        <td><?=htmlspecialchars($row['id'])?></td>
        <td><?=htmlspecialchars($row['name'])?></td>
        <td><?=htmlspecialchars($row['email'])?></td>
        <td><?=htmlspecialchars($row['mobile'])?></td>
        <td><?=htmlspecialchars($row['message'])?></td>
      </tr>
      <?php endwhile; ?>
    </tbody>
  </table>
  <?php else: ?>
    <p style="text-align:center;">No contact messages found.</p>
  <?php endif; ?>

  <p><a href="index.php">Back to Home Page</a> | <a href="logout.php">Logout</a></p>
</body>
</html>

<?php
$conn->close();
?>
