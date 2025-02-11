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

    $firmy = [];

    while ($row = fgetcsv($handle)) {
        if ($row[0] === $wojewodztwo) {
            $firmy[] = [
                'firma' => $row[1],
                'telefon' => $row[2],
                'email' => $row[3]
            ];
        }
    }

    fclose($handle);

    if (!empty($firmy)) {
        echo json_encode($firmy);
    } else {
        echo json_encode(['error' => 'Brak firm dla wybranego województwa']);
    }
}
?>
