<?php
	session_start();
	if (!empty($_POST))
	{	
		if (!isset($_POST['botcheck']) || $_POST['botcheck'] != $_SESSION["botcheck"]) {
			die('failure');
		}
				
		$to      = 'danilocardia@gmail.com,claudio.santos@hsevolutione.com,cmos2001@hotmail.com,cmos2007@gmail.com';
		$subject = 'CONTATO VIA SITE - '.date('d/m/Y h:i', time());
		$message = '<b>Nome: </b>'.$_POST['name'].'<br>';
		$message .= '<b>Email: </b>'.$_POST['email'].'<br>';
		$message .= '<b>Assunto: </b>'.$_POST['assunto'].'<br>';
		$message .= '<b>Mensagem: </b>'.$_POST['message'].'<br>';
		$headers = 'From: noreply@hsevolutione.com' . "\r\n" .
			'Reply-To: noreply@hsevolutione.com' . "\r\n" .
			"Content-Type: text/html; charset=ISO-8859-1\r\n" .
			'X-Mailer: PHP/' . phpversion();

		mail($to, $subject, $message, $headers);
		
		echo '{ "alert": "success", "message": "Recebemos sua mensagem! Responderemos o mais rápido que pudermos." }';;
	}
?> 