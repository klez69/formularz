<?php
include("dbt.php");


// Nawiązanie połączenia z bazą
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Odbiór danych z formularza
$marka         = $_POST['marka'];
$model         = $_POST['model'];
$moc           = $_POST['moc'];
$pojemnosc     = $_POST['pojemnosc'];
$rok_produkcji = $_POST['rok_produkcji'];
$kod_silnika   = $_POST['kod_silnika'];
$wojewodztwo   = $_POST['wojewodztwo'];
$firma         = $_POST['firma'];       // wartość pola select – nazwa firmy jest wyświetlana, a wartość to adres e-mail
$imie_nick     = $_POST['imie_nick'];
$adres         = $_POST['adres'];
$kod           = $_POST['kod'];
$miasto        = $_POST['miasto'];
$telefon       = $_POST['telefon'];
$email         = $_POST['email'];
$email_firmy   = $_POST['email_firmy']; // ukryte pole zawierające adres e-mail firmy

// Przygotowanie zapytania SQL
// Zakładamy, że tabela "zgloszenia" posiada następujące kolumny:
// id (AUTO_INCREMENT PRIMARY KEY), marka, model, moc, pojemnosc, rok_produkcji, kod_silnika, wojewodztwo, firma,
// imie_nick, adres, kod, miasto, telefon, email, email_firmy
$sql = "INSERT INTO zgloszenia (marka, model, moc, pojemnosc, rok_produkcji, kod_silnika, wojewodztwo, firma, imie_nick, adres, kod, miasto, telefon, email, email_firmy)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

// Powiązanie parametrów (przyjmujemy, że pola typu liczbowe są int, a pozostałe string)
// "ssiiissssssssss" oznacza kolejno: string, string, integer, integer, integer, string, string, string, string, string, string, string, string, string, string
$stmt->bind_param("ssiiissssssssss", 
    $marka, 
    $model, 
    $moc, 
    $pojemnosc, 
    $rok_produkcji, 
    $kod_silnika, 
    $wojewodztwo, 
    $firma, 
    $imie_nick, 
    $adres, 
    $kod, 
    $miasto, 
    $telefon, 
    $email, 
    $email_firmy
);

// Wykonanie zapytania i sprawdzenie wyniku
if ($stmt->execute()) {
    // Jeśli rekord został dodany, przekierowanie do formularz.html
    header("Location: formularz.html");
    exit;
} else {
    echo "Błąd: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
