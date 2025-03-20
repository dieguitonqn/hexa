<?php


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer.php';
require 'Exception.php';
require 'SMTP.php';

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "hola";
    // $data = json_decode(file_get_contents('php://input'), true);
    $data= $_POST;
    $name = $data['name'];
    $email = $data['email'];
    $mensaje = $data['mensaje'];

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor
        $mail->isSMTP();
        $mail->Host = getenv('EMAIL_SERVER');
        $mail->SMTPAuth = true;
        $mail->Username = getenv('EMAIL_USER');
        $mail->Password = getenv('EMAIL_PASS');
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Remitente y destinatario
        $mail->setFrom(getenv('EMAIL_USER'), 'Mailer');
        $mail->addAddress($email);

        // Contenido del correo
        $mail->isHTML(false);
        $mail->Subject = 'Nuevo mensaje de ' . $name;
        $mail->Body    = $mensaje;

        $mail->send();
        echo json_encode(['message' => 'Correo enviado exitosamente']);
    } catch (Exception $e) {
        error_log('Error al enviar el correo: ' . $mail->ErrorInfo);
        http_response_code(500);
        echo json_encode(['message' => 'Error al enviar el correo']);
    }
} else {
    http_response_code(405);
    echo json_encode(['message' => 'Método no permitido']);
}
?>
