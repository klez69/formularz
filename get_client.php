<?php
if (isset($_GET['wojewodztwo'])) {
    $wojewodztwo = $_GET['wojewodztwo'];
    $file = 'klienci.csv';

    if (!file_exists($file)) {
        echo json_encode(['error' => 'Brak pliku klienci.csv']);
        exit;
    }

    $handle = fopen($file, 'r');
    fgetcsv($handle); // Pomijamy nagłówek

    while ($row = fgetcsv($handle)) {
        if ($row[0] === $wojewodztwo) {
            echo json_encode([
                'firma' => $row[1],
                'imie_nick' => $row[2],
                'adres' => $row[3],
                'kod' => $row[4],
                'miasto' => $row[5],
                'telefon' => $row[6],
                'email' => $row[7]
            ]);
            fclose($handle);
            exit;
        }
    }

    fclose($handle);
    echo json_encode(['error' => 'Brak danych dla wybranego województwa']);
}
?>
