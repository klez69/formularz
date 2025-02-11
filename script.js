document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaSelect = document.getElementById("firma");
    const telefonInput = document.getElementById("telefon");
    const emailInput = document.getElementById("email");

    const selectedFirma = document.getElementById("selected-firma");
    const selectedWojewodztwo = document.getElementById("selected-wojewodztwo");

    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value;
        selectedWojewodztwo.textContent = wojewodztwo ? wojewodztwoSelect.options[wojewodztwoSelect.selectedIndex].text : "-";
        
        firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';
        telefonInput.value = "";
        emailInput.value = "";
        selectedFirma.textContent = "-";

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
                        console.error("Brak firm dla wybranego województwa");
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
        } else {
            telefonInput.value = "";
            emailInput.value = "";
            selectedFirma.textContent = "-";
        }
    });
});
