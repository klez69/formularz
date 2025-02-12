<?php
header("Content-Type: application/json");

if (isset($_GET['wojewodztwo'])) {
    $wojewodztwo = urldecode($_GET['wojewodztwo']);
    $file = 'klienci.csv';

    if (!file_exists($file)) {
        echo json_encode(["error" => "Plik klienci.csv nie istnieje"]);
        exit;
    }

    $handle = fopen($file, 'r');
    fgetcsv($handle); // Pomijamy nagłówek

    $firmy = [];
    while (($row = fgetcsv($handle, 1000, ",")) !== FALSE) {
        if (trim(mb_strtolower($row[0])) === trim(mb_strtolower($wojewodztwo))) {
            $firmy[] = [
                'firma' => trim($row[1]),
                'telefon' => trim($row[2]),
                'email' => trim($row[3])
            ];
        }
    }
    fclose($handle);

    if (empty($firmy)) {
        echo json_encode(["error" => "Brak firm dla województwa: " . $wojewodztwo]);
    } else {
        echo json_encode($firmy);
    }
}
?>
