<?php
header("Content-Type: application/json");

if (isset($_GET['wojewodztwo'])) {
    $wojewodztwo = urldecode($_GET['wojewodztwo']);
    $file = 'klienci.csv';

    if (!file_exists($file)) {
        echo json_encode([]);
        exit;
    }

    $handle = fopen($file, 'r');
    fgetcsv($handle); // Pomijamy nagłówek

    $firmy = [];

    while (($row = fgetcsv($handle, 1000, ",")) !== FALSE) {
        if (trim($row[0]) === trim($wojewodztwo)) {
            $firmy[] = [
                'firma' => $row[1],
                'telefon' => $row[2],
                'email' => $row[3]
            ];
        }
    }

    fclose($handle);

    echo json_encode($firmy);
}
?>
