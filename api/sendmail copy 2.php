<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
// header('Access-Control-Allow-Headers: Content-Type');
// header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'Exception.php';
require 'SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // $json = file_get_contents('php://input');
    // $data = json_decode($json, true);
    
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];

    
    $mail = new PHPMailer(true);
 
    try {
        // Configuración del servidor
        $mail->isSMTP();
        $mail->Host = "c2151369.ferozo.com";
        $mail->SMTPAuth = true;
        $mail->Username = "hexa@hexa-automation.com.ar";
        $mail->Password ="MMah0239";
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Remitente y destinatario
        $mail->setFrom("hexa@hexa-automation.com.ar", 'Hexa Automation');
        $mail->addAddress($email);

        // Contenido del correo
        $mail->isHTML(false);
        $mail->Subject = 'Nuevo mensaje de ' . $name;
        $mail->Body    = $mensaje;

        $mail->send();
        // echo json_encode(['success' => true, 'message' => 'Correo enviado exitosamente']);
        echo "Correo enviado exitosamente";
        http_response_code(200);

        ?>
        <script>
            alert("Correo enviado exitosamente");
            window.location.href = "https://hexa-automation.com.ar";
        </script>
        <?php

        exit();
    } catch (Exception $e) {
        error_log('Error al enviar el correo: ' . $mail->ErrorInfo);
        http_response_code(500);
        // echo json_encode(['success' => false, 'message' => 'Error al enviar el correo']);
        echo "Error al enviar el correo";
    }
} else {
    http_response_code(407);
    // echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    echo "metodo no permitido";
}
?> 