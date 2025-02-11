document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaSelect = document.getElementById("firma");
    const telefonInput = document.getElementById("telefon");
    const emailInput = document.getElementById("email");

    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value;

        if (wojewodztwo) {
            fetch(`get_firmy.php?wojewodztwo=${wojewodztwo}`)
                .then(response => response.json())
                .then(data => {
                    firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';

                    if (!data.error) {
                        data.forEach(firma => {
                            const option = document.createElement("option");
                            option.value = firma.firma;
                            option.textContent = firma.firma;
                            option.dataset.telefon = firma.telefon;
                            option.dataset.email = firma.email;
                            firmaSelect.appendChild(option);
                        });
                    } else {
                        console.log(data.error);
                    }
                })
                .catch(error => console.error("Błąd pobierania danych:", error));
        }
    });

    firmaSelect.addEventListener("change", function () {
        const selectedOption = firmaSelect.options[firmaSelect.selectedIndex];

        if (selectedOption.value) {
            telefonInput.value = selectedOption.dataset.telefon || "";
            emailInput.value = selectedOption.dataset.email || "";

            document.getElementById("selected-firma").textContent = selectedOption.value;
            document.getElementById("selected-telefon").textContent = selectedOption.dataset.telefon || "-";
            document.getElementById("selected-email").textContent = selectedOption.dataset.email || "-";
        }
    });

    // Aktualizacja sekcji "Wybrane wartości" na bieżąco
    const allFields = ["wojewodztwo", "firma", "telefon", "email"];
    allFields.forEach(fieldId => {
        const inputElement = document.getElementById(fieldId);
        const outputElement = document.getElementById(`selected-${fieldId}`);

        if (inputElement && outputElement) {
            inputElement.addEventListener("input", function () {
                outputElement.textContent = inputElement.value.trim() || "-";
            });
        }
    });
});
