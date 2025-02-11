document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaSelect = document.getElementById("firma");
    const telefonInput = document.getElementById("telefon");
    const emailInput = document.getElementById("email");

    const selectedFirma = document.getElementById("selected-firma");
    const selectedTelefon = document.getElementById("selected-telefon");
    const selectedEmail = document.getElementById("selected-email");

    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value;
        firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';
        telefonInput.value = "";
        emailInput.value = "";

        selectedFirma.textContent = "-";
        selectedTelefon.textContent = "-";
        selectedEmail.textContent = "-";

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

            selectedFirma.textContent = selectedOption.value;
            selectedTelefon.textContent = selectedOption.dataset.telefon || "-";
            selectedEmail.textContent = selectedOption.dataset.email || "-";
        } else {
            selectedFirma.textContent = "-";
            selectedTelefon.textContent = "-";
            selectedEmail.textContent = "-";
        }
    });
});
