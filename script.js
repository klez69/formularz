document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const sprawdzButton = document.getElementById("sprawdz-button");
    const submitButton = document.getElementById("submit-button");
    const daneKlientaDiv = document.getElementById("dane-klienta");
    const firmaList = document.getElementById("selected-firma-list");

    const pojazdFields = ["marka", "model", "moc", "pojemnosc", "rok_produkcji"];
    const klientFields = ["imie_nick", "adres", "kod", "miasto", "telefon", "email", "wojewodztwo"];

    function aktualizujPodsumowanie() {
        [...pojazdFields, ...klientFields].forEach(fieldId => {
            const inputElement = document.getElementById(fieldId);
            const outputElement = document.getElementById(`selected-${fieldId}`);

            if (inputElement && outputElement) {
                outputElement.textContent = inputElement.value.trim() || "-";
            }
        });
    }

    function sprawdzPojazd() {
        let wszystkieUzupelnione = pojazdFields.every(fieldId => {
            return document.getElementById(fieldId).value.trim() !== "";
        });

        if (wszystkieUzupelnione) {
            daneKlientaDiv.style.display = "block";
        } else {
            alert("Proszę uzupełnić wszystkie wymagane pola pojazdu.");
        }
    }

    function sprawdzKlienta() {
        let wszystkieUzupelnione = klientFields.every(fieldId => {
            return document.getElementById(fieldId).value.trim() !== "";
        });

        submitButton.disabled = !wszystkieUzupelnione;
    }

    sprawdzButton.addEventListener("click", sprawdzPojazd);
    [...pojazdFields, ...klientFields].forEach(fieldId => {
        document.getElementById(fieldId).addEventListener("input", function () {
            aktualizujPodsumowanie();
            sprawdzKlienta();
        });
    });

    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value.trim();
        document.getElementById("selected-wojewodztwo").textContent = wojewodztwo || "-";
        firmaList.innerHTML = "<p>Ładowanie...</p>";

        if (wojewodztwo) {
            fetch(`get_firmy.php?wojewodztwo=${encodeURIComponent(wojewodztwo)}`)
                .then(response => response.json())
                .then(data => {
                    firmaList.innerHTML = "";
                    if (Array.isArray(data) && data.length > 0) {
                        data.forEach(firma => {
                            const firmaDiv = document.createElement("div");
                            firmaDiv.innerHTML = `
                                <p><strong>Firma:</strong> ${firma.firma}</p>
                                <p><strong>Telefon:</strong> ${firma.telefon}</p>
                                <p><strong>Email:</strong> ${firma.email}</p>
                                <hr>
                            `;
                            firmaList.appendChild(firmaDiv);
                        });
                    } else {
                        firmaList.innerHTML = "<p>Brak firm dla wybranego województwa.</p>";
                    }
                })
                .catch(error => {
                    console.error("Błąd pobierania firm:", error);
                    firmaList.innerHTML = "<p>Błąd ładowania firm.</p>";
                });
        } else {
            firmaList.innerHTML = "<p>Wybierz województwo, aby zobaczyć dostępne firmy.</p>";
        }
    });
});
