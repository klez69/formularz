<?php
// Dane do połączenia z bazą danych
$host = 'localhost'; // Adres hosta
$dbname = 'nazwa_bazy'; // Nazwa bazy danych
$user = 'uzytkownik'; // Nazwa użytkownika bazy danych
$password = 'haslo'; // Hasło użytkownika bazy danych

// Sprawdź, czy formularz został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobierz dane z formularza
    $imie_nick = $_POST['imie_nick'] ?? '';
    $adres = $_POST['adres'] ?? '';
    $kod = $_POST['kod'] ?? '';
    $miasto = $_POST['miasto'] ?? '';
    $wojewodztwo = $_POST['wojewodztwo'] ?? '';
    $telefon = $_POST['telefon'] ?? '';
    $email = $_POST['email'] ?? '';
    $marka = $_POST['marka'] ?? '';
    $model = $_POST['model'] ?? '';
    $kod_silnika = $_POST['kod_silnika'] ?? '';
    $moc = $_POST['moc'] ?? 0;
    $pojemnosc = $_POST['pojemnosc'] ?? 0;
    $rok_produkcji = $_POST['rok_produkcji'] ?? 0;
    $cena = $_POST['cena'] ?? 0;

    // Połączenie z bazą danych za pomocą mysqli
    $mysqli = new mysqli($host, $user, $password, $dbname);

    // Sprawdź, czy połączenie się udało
    if ($mysqli->connect_error) {
        die("Błąd połączenia z bazą danych: " . $mysqli->connect_error);
    }

    // Przygotowanie zapytania SQL
    $sql = "INSERT INTO zgloszenia (
        imie_nick, adres, kod, miasto, wojewodztwo, telefon, email, 
        marka, model, kod_silnika, moc, pojemnosc, rok_produkcji, cena
    ) VALUES (
        ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )";

    // Przygotowanie statement
    $stmt = $mysqli->prepare($sql);
    if (!$stmt) {
        die("Błąd przygotowania zapytania: " . $mysqli->error);
    }

    // Wiązanie parametrów
    $stmt->bind_param(
        'ssssssssssiiid', // Typy danych: s - string, i - integer, d - double
        $imie_nick, $adres, $kod, $miasto, $wojewodztwo, $telefon, $email,
        $marka, $model, $kod_silnika, $moc, $pojemnosc, $rok_produkcji, $cena
    );

    // Wykonanie zapytania
    if ($stmt->execute()) {
        // Komunikat o sukcesie
        echo "<h1>Dziękujemy za zgłoszenie!</h1>";
        echo "<p>Twoje dane zostały zapisane w bazie danych.</p>";
    } else {
        // Obsługa błędów
        echo "<p style='color: red;'>Błąd podczas zapisywania danych: " . $stmt->error . "</p>";
    }

    // Zamknięcie statement i połączenia
    $stmt->close();
    $mysqli->close();
} else {
    // Jeśli formularz nie został wysłany, przekieruj użytkownika
    header("Location: formularz.html");
    exit();
}
?>
