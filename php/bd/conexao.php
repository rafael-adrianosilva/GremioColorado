<?php
$host = "localhost";
$user = "root";     // seu usuário do MySQL
$pass = "";         // sua senha
$db   = "cadastro_alunos";

// Conectar ao banco
$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die("Erro na conexão: " . $conn->connect_error);
}
?>