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
$dataZapisu = date('Y-m-d H:i:s'); // pobiera bieżącą datę i godzinę

// Przygotowanie zapytania SQL
// Zakładamy, że tabela "zgloszenia" posiada następujące kolumny:
// id (AUTO_INCREMENT PRIMARY KEY), marka, model, moc, pojemnosc, rok_produkcji, kod_silnika, wojewodztwo, firma,
// imie_nick, adres, kod, miasto, telefon, email, email_firmy
$sql = "INSERT INTO zgloszenia (marka, model, moc, pojemnosc, rok_produkcji, kod_silnika, wojewodztwo, firma, imie_nick, adres, kod, miasto, telefon, email, email_firmy, data_zapisu)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

// Powiązanie parametrów (przyjmujemy, że pola typu liczbowe są int, a pozostałe string)
// "ssiiissssssssss" oznacza kolejno: string, string, integer, integer, integer, string, string, string, string, string, string, string, string, string, string
$stmt->bind_param("ssiiisssssssssss", 
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
    $email_firmy,
	$dataZapisu
);

if ($stmt->execute()) {
// Przygotowanie wiadomości e-mail do firmy
$to = $firma;

// Zakodowanie tematu wiadomości, aby polskie znaki były poprawnie wyświetlane
$subject = "=?UTF-8?B?" . base64_encode("Nowe zapytanie ze strony brc-maestro.pl w sprawie systemu Maestro") . "?=";

$message = "Witaj, klient $imie_nick wysłał ze strony brc-maestro.pl zapytanie w sprawie montażu samochodu $marka $model \n\nSzczegóły zgłoszenia:\n"
         . "Marka: $marka\n"
         . "Model: $model\n"
         . "Moc: $moc\n"
         . "Pojemność: $pojemnosc\n"
         . "Rok produkcji: $rok_produkcji\n"
         . "Kod silnika: $kod_silnika\n"
         . "Województwo: $wojewodztwo\n\n"
         . "Dane klienta:\n"
         . "Imię/Nick: $imie_nick\n"
         . "Adres: $adres\n"
         . "Kod pocztowy: $kod\n"
         . "Miasto: $miasto\n"
         . "Telefon: $telefon\n"
         . "Email klienta: $email\n\n"
         . "Pozdrawiam,\nSystem zgłoszeń wysłał $firma na adres e-mail $email_firmy \nw dniu $dataZapisu";

// Ustawienie nagłówków z informacją o kodowaniu
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: maestro@czakram.pl\r\n";
$headers .= "Reply-To: maestro@czakram.pl\r\n";
//$headers .= "Cc: fax@czakram.pl\r\n";  // dodaje kopię do dodatkowego adresu
$headers .= "X-Mailer: PHP/" . phpversion();

// Wysłanie wiadomości e-mail
mail($to, $subject, $message, $headers);
    
    // Po dodaniu rekordu przekierowanie z powrotem do formularza
    header("Location: formularz.html");
    exit;
} else {
    echo "Błąd: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>