document.addEventListener("DOMContentLoaded", function () {
    const fieldsToTrack = [
        { id: "marka", output: "selected-marka" },
        { id: "model", output: "selected-model" },
        { id: "kod_silnika", output: "selected-kod_silnika" },
        { id: "moc", output: "selected-moc" },
        { id: "pojemnosc", output: "selected-pojemnosc" },
        { id: "rok_produkcji", output: "selected-rok_produkcji" },
        { id: "imie_nick", output: "selected-imie_nick" },
        { id: "adres", output: "selected-adres" },
        { id: "kod", output: "selected-kod" },
        { id: "miasto", output: "selected-miasto" },
        { id: "telefon", output: "selected-telefon" },
        { id: "email", output: "selected-email" },
        { id: "wojewodztwo", output: "selected-wojewodztwo", isSelect: true }
    ];

    fieldsToTrack.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const outputElement = document.getElementById(field.output);

        if (inputElement) {
            inputElement.addEventListener("input", function () {
                outputElement.textContent = inputElement.value || "-";
            });

            if (field.isSelect) {
                inputElement.addEventListener("change", function () {
                    outputElement.textContent = inputElement.options[inputElement.selectedIndex].text || "-";
                });
            }
        }
    });
});
