document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaSelect = document.getElementById("firma");
    const telefonInput = document.getElementById("telefon");
    const emailInput = document.getElementById("email");
    const sprawdzButton = document.getElementById("sprawdz-button");
    const submitButton = document.getElementById("submit-button");
    const daneKlientaDiv = document.getElementById("dane-klienta");

    const pojazdFields = ["marka", "model", "moc", "pojemnosc", "rok_produkcji"];
    const klientFields = ["firma", "imie_nick", "adres", "kod", "miasto", "telefon", "email", "wojewodztwo"];

    function aktualizujPodsumowanie() {
        [...pojazdFields, ...klientFields].forEach(fieldId => {
            const inputElement = document.getElementById(fieldId);
            const outputElement = document.getElementById(`selected-${fieldId}`);

            if (inputElement && outputElement) {
                outputElement.textContent = inputElement.value.trim() || "-";
            }
        });
    }

    // Pokazanie sekcji klienta po kliknięciu "Sprawdź"
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

    // Sprawdzenie, czy dane klienta są uzupełnione
    function sprawdzKlienta() {
        let wszystkieUzupelnione = klientFields.every(fieldId => {
            return document.getElementById(fieldId).value.trim() !== "";
        });

        submitButton.disabled = !wszystkieUzupelnione;
    }

    klientFields.forEach(fieldId => {
        document.getElementById(fieldId).addEventListener("input", function () {
            aktualizujPodsumowanie();
            sprawdzKlienta();
        });
    });

    // Pobieranie firm po wyborze województwa
    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value;
        firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';
        telefonInput.value = "";
        emailInput.value = "";

        if (wojewodztwo) {
            fetch(`get_firmy.php?wojewodztwo=${encodeURIComponent(wojewodztwo)}`)
                .then(response => response.json())
                .then(data => {
                    if (Array.isArray(data) && data.length > 0) {
                        data.forEach(firma => {
                            const option = document.createElement("option");
                            option.value = firma.firma;
                            option.textContent = firma.firma;
                            option.dataset.telefon = firma.telefon;
                            option.dataset.email = firma.email;
                            firmaSelect.appendChild(option);
                        });
                    } else {
                        console.error("Brak firm dla wybranego województwa");
                    }
                })
                .catch(error => console.error("Błąd pobierania danych:", error));
        }
        aktualizujPodsumowanie();
    });

    // Automatyczne uzupełnianie telefonu i e-maila po wyborze firmy
    firmaSelect.addEventListener("change", function () {
        const selectedOption = firmaSelect.options[firmaSelect.selectedIndex];

        if (selectedOption.value) {
            telefonInput.value = selectedOption.dataset.telefon || "";
            emailInput.value = selectedOption.dataset.email || "";
        }

        aktualizujPodsumowanie();
    });
});
