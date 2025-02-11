document.addEventListener("DOMContentLoaded", function () {
    const sprawdzButton = document.getElementById("sprawdz-button");
    const daneKlientaDiv = document.getElementById("dane-klienta");
    const submitButton = document.getElementById("submit-button");

    const pojazdFields = ["marka", "model", "moc", "pojemnosc", "rok_produkcji"];

    function sprawdzPojazd() {
        let wszystkieUzupelnione = pojazdFields.every(fieldId => document.getElementById(fieldId).value.trim());
        if (wszystkieUzupelnione) {
            daneKlientaDiv.style.display = "block";
        } else {
            alert("Proszę uzupełnić wszystkie wymagane pola pojazdu.");
        }
    }

    sprawdzButton.addEventListener("click", sprawdzPojazd);

    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    wojewodztwoSelect.addEventListener("change", function () {
        fetch(`get_client.php?wojewodztwo=${wojewodztwoSelect.value}`)
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    Object.keys(data).forEach(key => {
                        let input = document.getElementById(key);
                        if (input) input.value = data[key];
                    });
                }
            });
    });

    document.querySelectorAll("#dane-klienta input").forEach(input => {
        input.addEventListener("input", function () {
            let wszystkieUzupelnione = [...document.querySelectorAll("#dane-klienta input")].every(field => field.value.trim());
            submitButton.disabled = !wszystkieUzupelnione;
        });
    });
});
