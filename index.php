<?php
header('Content-Type: application/json');

echo json_encode([
    "ip" => $_SERVER['REMOTE_ADDR'],
    "port" => $_SERVER['REMOTE_PORT']
]);
?>
