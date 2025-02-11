document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaSelect = document.getElementById("firma");
    const allFields = ["marka", "model", "moc", "pojemnosc", "rok_produkcji", "firma", "imie_nick", "adres", "kod", "miasto", "telefon", "email"];

    function aktualizujPodsumowanie() {
        allFields.forEach(fieldId => {
            const inputElement = document.getElementById(fieldId);
            const outputElement = document.getElementById(`selected-${fieldId}`);

            if (inputElement && outputElement) {
                outputElement.textContent = inputElement.value.trim() || "-";
            }
        });
    }

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
                            option.dataset.telefon = firma.telefon;
                            option.dataset.email = firma.email;
                            firmaSelect.appendChild(option);
                        });
                    }
                });
        }
    });

    firmaSelect.addEventListener("change", function () {
        const selectedOption = firmaSelect.options[firmaSelect.selectedIndex];

        if (selectedOption.value) {
            document.getElementById("telefon").value = selectedOption.dataset.telefon || "";
            document.getElementById("email").value = selectedOption.dataset.email || "";
        }

        aktualizujPodsumowanie();
    });

    allFields.forEach(fieldId => {
        document.getElementById(fieldId).addEventListener("input", aktualizujPodsumowanie);
    });
});
