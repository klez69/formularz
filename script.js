document.addEventListener("DOMContentLoaded", function () {
    const sprawdzButton = document.getElementById("sprawdz-button");
    const daneKlientaDiv = document.getElementById("dane-klienta");
    const submitButton = document.getElementById("submit-button");

    sprawdzButton.addEventListener("click", function () {
        const marka = document.getElementById("marka").value.trim();
        const model = document.getElementById("model").value.trim();
        const moc = document.getElementById("moc").value.trim();
        const pojemnosc = document.getElementById("pojemnosc").value.trim();
        const rokProdukcji = document.getElementById("rok_produkcji").value.trim();

        if (marka && model && moc && pojemnosc && rokProdukcji) {
            daneKlientaDiv.style.display = "block"; // Pokaż sekcję z danymi klienta
        } else {
            alert("Proszę wypełnić wszystkie wymagane pola pojazdu.");
        }
    });

    const klientInputs = document.querySelectorAll("#dane-klienta input, #dane-klienta select");

    klientInputs.forEach(input => {
        input.addEventListener("input", function () {
            let wszystkieUzupelnione = true;

            klientInputs.forEach(field => {
                if (field.type !== "checkbox" && field.value.trim() === "") {
                    wszystkieUzupelnione = false;
                }
            });

            submitButton.disabled = !wszystkieUzupelnione;
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const selectedWojewodztwo = document.getElementById("selected-wojewodztwo");

    wojewodztwoSelect.addEventListener("change", function () {
        selectedWojewodztwo.textContent = wojewodztwoSelect.options[wojewodztwoSelect.selectedIndex].text;
    });
});
