document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaSelect = document.getElementById("firma");
    const sprawdzButton = document.getElementById("sprawdz-button");
    const submitButton = document.getElementById("submit-button");
    const daneKlientaDiv = document.getElementById("dane-klienta");

    const pojazdFields = ["marka", "model", "moc", "pojemnosc", "rok_produkcji"];
    const klientFields = ["firma", "imie_nick", "adres", "kod", "miasto", "telefon", "email"];

    sprawdzButton.addEventListener("click", function () {
        let wszystkieUzupelnione = pojazdFields.every(fieldId => {
            return document.getElementById(fieldId).value.trim() !== "";
        });

        if (wszystkieUzupelnione) {
            daneKlientaDiv.style.display = "block";
        } else {
            alert("Proszę uzupełnić wszystkie wymagane pola pojazdu.");
        }
    });

    function sprawdzKlienta() {
        let wszystkieUzupelnione = klientFields.every(fieldId => {
            return document.getElementById(fieldId).value.trim() !== "";
        });

        submitButton.disabled = !wszystkieUzupelnione;
    }

    klientFields.forEach(fieldId => {
        document.getElementById(fieldId).addEventListener("input", sprawdzKlienta);
    });

    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value;
        firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';

        if (wojewodztwo) {
            fetch(`get_firmy.php?wojewodztwo=${wojewodztwo}`)
                .then(response => response.json())
                .then(data => {
                    if (!data.error) {
                        data.forEach(firma => {
                            const option = document.createElement("option");
                            option.value = firma.firma;
                            option.textContent = firma.firma;
                            firmaSelect.appendChild(option);
                        });
                    }
                });
        }
    });
});
