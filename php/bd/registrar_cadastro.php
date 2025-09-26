<?php
include_once 'conexao.php';

// Receber dados do AJAX
$nome     = $_POST['nome'] ?? '';
$email    = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$idade    = $_POST['idade'] ?? 0;
$turma    = $_POST['turma'] ?? '';
$esporte  = $_POST['esporte'] ?? '';
$novidades = $_POST['novidades'] ?? 0;

// Preparar statement para evitar SQL Injection
$stmt = $conn->prepare("INSERT INTO alunos 
    (nome, email, telefone, idade, turma, esporte_favorito, receber_novidades) 
    VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssissi", $nome, $email, $telefone, $idade, $turma, $esporte, $novidades);



$stmt->close();
$conn->close();

header('Location: ../../cadastro_Confirmado.html');
exit();

?>

