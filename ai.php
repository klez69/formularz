<?php
// ai.php
header('Content-Type: application/json');

$marka = $_POST['marka'] ?? '';
$model = $_POST['model'] ?? '';

// Budowanie promptu – z prośbą o sugerowane dane dla pojazdu
$prompt = "Dane pojazdu:\nMarka: $marka\nModel: $model\nProszę podaj sugerowane wartości dla benzyny i rożne pojemności tego modelu, tj. moc silnika (KM), pojemność (cm³) oraz rok produkcji.";

// Pozostała część kodu jak wcześniej...
$apiKey = '461046f9-49a8-4607-a161-c312b2486640'; // Pamiętaj o bezpiecznym przechowywaniu klucza!
$data = [
    'prompt' => $prompt,
    'max_tokens' => 100,
    'temperature' => 0.7,
];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.openai.com/v1/engines/davinci-codex/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $apiKey
]);

$response = curl_exec($ch);
if(curl_errno($ch)){
    echo json_encode(['message' => 'Błąd: ' . curl_error($ch)]);
    exit;
}
curl_close($ch);

$result = json_decode($response, true);
$suggestions = $result['choices'][0]['text'] ?? 'Brak sugestii.';

echo json_encode(['message' => $suggestions]);

?>
