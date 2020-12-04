<?php 

header("Access-Control-Allow-Origin:*"); 
require_once "../connect_bd.php"; 

$sql = "SELECT * FROM produtos"; 
$result = query($sql); 
$produtos = []; 


while ($row = mysqli_fetch_assoc($result)){
    $produtos [] = $row; 
}

echo json-encode($produtos);