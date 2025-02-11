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
                'imie_nick' => $row[1],
                'adres' => $row[2],
                'kod' => $row[3],
                'miasto' => $row[4],
                'telefon' => $row[5],
                'email' => $row[6]
            ]);
            fclose($handle);
            exit;
        }
    }

    fclose($handle);
    echo json_encode(['error' => 'Brak danych dla wybranego województwa']);
}
?>
