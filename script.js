document.addEventListener("DOMContentLoaded", function () {
    const sprawdzButton = document.getElementById("sprawdz-button");
    const daneKlientaDiv = document.getElementById("dane-klienta");
    const submitButton = document.getElementById("submit-button");

    const pojazdFields = ["marka", "model", "moc", "pojemnosc", "rok_produkcji"];
    const klientFields = ["imie_nick", "adres", "kod", "miasto", "telefon", "email", "wojewodztwo"];

    function sprawdzPojazd() {
        let wszystkieUzupelnione = true;

        pojazdFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                wszystkieUzupelnione = false;
            }
        });

        if (wszystkieUzupelnione) {
            daneKlientaDiv.style.display = "block"; // Pokazujemy sekcję klienta
        } else {
            alert("Proszę uzupełnić wszystkie wymagane pola pojazdu.");
        }
    }

    function sprawdzKlienta() {
        let wszystkieUzupelnione = true;

        klientFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!field.value.trim()) {
                wszystkieUzupelnione = false;
            }
        });

        submitButton.disabled = !wszystkieUzupelnione; // Aktywujemy "Wyślij" tylko gdy wszystkie pola są uzupełnione
    }

    sprawdzButton.addEventListener("click", sprawdzPojazd);

    klientFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener("input", sprawdzKlienta);
        field.addEventListener("change", sprawdzKlienta);
    });

    // Aktualizacja wybranych wartości w podsumowaniu
    const allFields = [...pojazdFields, "kod_silnika", ...klientFields];
    allFields.forEach(fieldId => {
        const inputElement = document.getElementById(fieldId);
        const outputElement = document.getElementById(`selected-${fieldId}`);

        if (inputElement && outputElement) {
            inputElement.addEventListener("input", function () {
                outputElement.textContent = inputElement.value.trim() || "-";
            });

            if (fieldId === "wojewodztwo") {
                inputElement.addEventListener("change", function () {
                    outputElement.textContent = inputElement.options[inputElement.selectedIndex].text || "-";
                });
            }
        }
    });
});
