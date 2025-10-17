<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // make sure you installed PHPMailer using composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $mobile = htmlspecialchars($_POST["mobile"]);

    $mail = new PHPMailer(true);
    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'ravirajsahu312@gmail.com'; // Your Gmail
        $mail->Password = 'rody xmzz xzyb jvvf';    // Gmail App Password (see below)
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // ========== 1️⃣ Send to Admin ==========
        $mail->setFrom('your-email@gmail.com', 'Website Contact Form');
        $mail->addAddress('your-email@gmail.com', 'Admin'); // Admin email
        $mail->Subject = "New Contact Form Submission";
        $mail->Body = "
        📬 New contact form submission:

        Name: $name
        Email: $email
        Phone: $mobile
        ";

        $mail->send();

        // ========== 2️⃣ Send Greeting to User ==========
        $mail->clearAddresses();
        $mail->addAddress($email, $name);
        $mail->Subject = "Thank You for Contacting Us!";
        $mail->Body = "Hi $name,\n\nThank you for reaching out! We’ve received your details and will contact you soon.\n\nBest regards,\nYour Company Name";
        $mail->send();

        echo "✅ Message sent successfully! Thank you, $name.";
    } catch (Exception $e) {
        echo "❌ Message could not be sent. Mailer Error: " . $mail->ErrorInfo;
    }
}
?>
