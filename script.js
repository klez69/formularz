document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaSelect = document.getElementById("firma");
    const klientFields = ["imie_nick", "adres", "kod", "miasto", "telefon", "email"];

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
                })
                .catch(error => console.error("Błąd pobierania danych:", error));
        }
    });

    firmaSelect.addEventListener("change", function () {
        const selectedOption = firmaSelect.options[firmaSelect.selectedIndex];

        if (selectedOption.value) {
            document.getElementById("telefon").value = selectedOption.dataset.telefon || "";
            document.getElementById("email").value = selectedOption.dataset.email || "";

            document.getElementById("selected-firma").textContent = selectedOption.value;
            document.getElementById("selected-telefon").textContent = selectedOption.dataset.telefon || "-";
            document.getElementById("selected-email").textContent = selectedOption.dataset.email || "-";
        }
    });

    klientFields.forEach(fieldId => {
        document.getElementById(fieldId).addEventListener("input", function () {
            document.getElementById(`selected-${fieldId}`).textContent = this.value || "-";
        });
    });
});
