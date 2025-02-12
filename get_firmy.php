<?php
header("Content-Type: application/json");

if (!isset($_GET['wojewodztwo'])) {
    echo json_encode(["error" => "Brak parametru wojewodztwo"]);
    exit;
}

$wojewodztwo = urldecode($_GET['wojewodztwo']);
$file = 'klienci.json';

if (!file_exists($file)) {
    echo json_encode(["error" => "Plik klienci.json nie istnieje"]);
    exit;
}

$json = file_get_contents($file);
$klienci = json_decode($json, true);

if (isset($klienci[$wojewodztwo])) {
    echo json_encode($klienci[$wojewodztwo]);
} else {
    echo json_encode(["error" => "Brak firm dla województwa: " . $wojewodztwo]);
}
?>
