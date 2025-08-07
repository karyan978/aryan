<?php
// Database configuration: adjust these according to your setup.
$servername = "localhost";
$username = "root";
$password = "";      // Change if your database has a password
$dbname = "digitweb"; // Replace with your database name

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get form values
$name = $_POST['name'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$message = $_POST['message'];

// Insert data into table (table must already exist, e.g., 'users')
$sql = "INSERT INTO user_data (name, email, mobile, message) VALUES ('$name', '$email', '$mobile', '$message')";

if (mysqli_query($conn, $sql)) {
    echo '<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>Thank You</title>
        <style>
            .popup-overlay {
                position: fixed;
                top: 0; left: 0;
                width: 100vw; height: 100vh;
                background: rgba(0, 0, 0, 0.7);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 9999;
                animation: fadeIn 0.5s ease forwards;
            }
            .popup-box {
                background: #fff;
                border-radius: 12px;
                padding: 30px 40px;
                text-align: center;
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
                max-width: 400px;
                width: 90%;
                font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
                animation: scaleUp 0.5s ease forwards;
                position: relative;
            }
            .popup-box h2 {
                color: #27ae60;
                margin-bottom: 15px;
            }
            .popup-box p {
                color: #555;
                font-size: 1.1rem;
                margin-bottom: 25px;
            }
            .btn-home {
                background: linear-gradient(135deg, #27ae60, #2ecc71);
                border: none;
                color: white;
                padding: 12px 25px;
                font-size: 1rem;
                border-radius: 30px;
                cursor: pointer;
                transition: background 0.3s ease;
                text-decoration: none;
                display: inline-block;
                font-weight: 600;
                box-shadow: 0 4px 15px rgba(46, 204, 113, 0.4);
            }
            .btn-home:hover {
                background: linear-gradient(135deg, #2ecc71, #27ae60);
                box-shadow: 0 6px 20px rgba(39, 174, 96, 0.6);
            }
            @keyframes fadeIn {
                from {opacity: 0;}
                to {opacity: 1;}
            }
            @keyframes scaleUp {
                from {transform: scale(0.8); opacity: 0;}
                to {transform: scale(1); opacity: 1;}
            }
        </style>
    </head>
    <body>
        <div class="popup-overlay" id="popup">
            <div class="popup-box" id="popupBox">
                <h2>'.$name.'</h2>
                <p>Thank you for contacting me. I will get back to you soon.</p>
                <a href="index.php" class="btn-home">Go to Homepage</a>
            </div>
        </div>
        <script>
            // Close popup when clicking outside the popup box
            document.getElementById("popup").addEventListener("click", function(event) {
                var popupBox = document.getElementById("popupBox");
                if (!popupBox.contains(event.target)) {
                    this.style.display = "none";
                    window.location.href = "index.php";
                }
            });
            // Redirect after 5 seconds
            setTimeout(function() {
                window.location.href = "index.php";
            }, 5000);
        </script>
    </body>
    </html>';
} else {
    echo "ERROR: Could not store data. " . mysqli_error($conn);
}

mysqli_close($conn);
?>
