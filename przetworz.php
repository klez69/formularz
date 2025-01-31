<?php
// Dane do połączenia z bazą danych
$host = 'localhost'; // Adres hosta
$dbname = 'nazwa_bazy'; // Nazwa bazy danych
$user = 'uzytkownik'; // Nazwa użytkownika bazy danych
$password = 'haslo'; // Hasło użytkownika bazy danych

// Sprawdź, czy formularz został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobierz i zwaliduj dane z formularza
    $imie_nick = filter_input(INPUT_POST, 'imie_nick', FILTER_SANITIZE_STRING);
    $adres = filter_input(INPUT_POST, 'adres', FILTER_SANITIZE_STRING);
    $kod = filter_input(INPUT_POST, 'kod', FILTER_SANITIZE_STRING);
    $miasto = filter_input(INPUT_POST, 'miasto', FILTER_SANITIZE_STRING);
    $wojewodztwo = filter_input(INPUT_POST, 'wojewodztwo', FILTER_SANITIZE_STRING);
    $telefon = filter_input(INPUT_POST, 'telefon', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $marka = filter_input(INPUT_POST, 'marka', FILTER_SANITIZE_STRING);
    $model = filter_input(INPUT_POST, 'model', FILTER_SANITIZE_STRING);
    $kod_silnika = filter_input(INPUT_POST, 'kod_silnika', FILTER_SANITIZE_STRING);
    $moc = filter_input(INPUT_POST, 'moc', FILTER_VALIDATE_INT);
    $pojemnosc = filter_input(INPUT_POST, 'pojemnosc', FILTER_VALIDATE_INT);
    $rok_produkcji = filter_input(INPUT_POST, 'rok_produkcji', FILTER_VALIDATE_INT);

    // Sprawdź poprawność danych
    if ($imie_nick && $adres && $kod && $miasto && $wojewodztwo && $telefon && $email && $marka && $model && $kod_silnika && $moc && $pojemnosc && $rok_produkcji) {
        try {
            // Połączenie z bazą danych za pomocą PDO
            $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $password);
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Przygotowanie zapytania SQL
            $sql = "INSERT INTO zgloszenia (imie_nick, adres, kod, miasto, wojewodztwo, telefon, email, marka, model, kod_silnika, moc, pojemnosc, rok_produkcji)
                    VALUES (:imie_nick, :adres, :kod, :miasto, :wojewodztwo, :telefon, :email, :marka, :model, :kod_silnika, :moc, :pojemnosc, :rok_produkcji)";
            $stmt = $pdo->prepare($sql);

            // Wiązanie parametrów
            $stmt->bindParam(':imie_nick', $imie_nick);
            $stmt->bindParam(':adres', $adres);
            $stmt->bindParam(':kod', $kod);
            $stmt->bindParam(':miasto', $miasto);
            $stmt->bindParam(':wojewodztwo', $wojewodztwo);
            $stmt->bindParam(':telefon', $telefon);
            $stmt->bindParam(':email', $email);
            $stmt->bindParam(':marka', $marka);
            $stmt->bindParam(':model', $model);
            $stmt->bindParam(':kod_silnika', $kod_silnika);
            $stmt->bindParam(':moc', $moc);
            $stmt->bindParam(':pojemnosc', $pojemnosc);
            $stmt->bindParam(':rok_produkcji', $rok_produkcji);

            // Wykonanie zapytania
            $stmt->execute();

            // Komunikat o sukcesie
            echo "<h1>Dziękujemy za zgłoszenie!</h1>";
            echo "<p>Twoje dane zostały zapisane w bazie danych.</p>";
        } catch (PDOException $e) {
            // Obsługa błędów
            echo "<p style='color: red;'>Błąd podczas zapisywania danych: " . $e->getMessage() . "</p>";
        }
    } else {
        // Błąd walidacji
        echo "<p style='color: red;'>Wystąpił błąd podczas przetwarzania formularza. Sprawdź poprawność danych.</p>";
    }
} else {
    // Jeśli formularz nie został wysłany, przekieruj użytkownika
    header("Location: formularz.html");
    exit();
}
?>
