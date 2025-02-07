<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz samochodu i klienta</title>
    <script>
        function showClientForm() {
            let brand = document.getElementById("brand").value;
            let model = document.getElementById("model").value;
            let year = document.getElementById("year").value;

            if (brand !== "" && model !== "" && year !== "") {
                document.getElementById("clientForm").style.display = "block";
                document.getElementById("submitBtn").style.display = "block";
            }
        }
    </script>
    <style>
        body { font-family: Arial, sans-serif; }
        form { max-width: 400px; margin: auto; }
        .hidden { display: none; }
    </style>
</head>
<body>

<h2>Formularz pojazdu i klienta</h2>

<form method="POST" action="process.php">
    <h3>Dane samochodu:</h3>
    <label>Marka:</label>
    <input type="text" id="brand" name="brand" oninput="showClientForm()" required><br>

    <label>Model:</label>
    <input type="text" id="model" name="model" oninput="showClientForm()" required><br>

    <label>Rok produkcji:</label>
    <input type="number" id="year" name="year" oninput="showClientForm()" required><br>

    <div id="clientForm" class="hidden">
        <h3>Dane klienta:</h3>
        <label>Imię:</label>
        <input type="text" name="first_name" required><br>

        <label>Nazwisko:</label>
        <input type="text" name="last_name" required><br>

        <label>Email:</label>
        <input type="email" name="email" required><br>
    </div>

    <button type="submit" id="submitBtn" class="hidden">Wyślij</button>
</form>

</body>
</html>
