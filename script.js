document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const sprawdzButton = document.getElementById("sprawdz-button");
    const submitButton = document.getElementById("submit-button");
    const daneKlientaDiv = document.getElementById("dane-klienta");
    const firmaList = document.getElementById("selected-firma-list");

    const pojazdFields = ["marka", "model", "moc", "pojemnosc", "rok_produkcji"];
    const klientFields = ["imie_nick", "adres", "kod", "miasto", "telefon", "email"];

    function aktualizujPodsumowanie() {
        [...pojazdFields, ...klientFields, "wojewodztwo"].forEach(fieldId => {
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
            aktualizujPodsumowanie();
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
    [...pojazdFields, ...klientFields, "wojewodztwo"].forEach(fieldId => {
        document.getElementById(fieldId).addEventListener("input", function () {
            aktualizujPodsumowanie();
            sprawdzKlienta();
        });
    });

        // PRZECHOWYWANIE FIRM W PAMIĘCI (ZAMIAST GET_FIRMY.PHP)
    let firmy = {
        "mazowieckie": [
            { "firma": "AutoSerwis Jan", "telefon": "123456789", "email": "serwis.jan@example.com" },
            { "firma": "Mechanika Kowalski", "telefon": "987654321", "email": "mechanika.kowalski@example.com" }
        ],
        "malopolskie": [
            { "firma": "AutoNaprawa Nowak", "telefon": "555888999", "email": "naprawa.nowak@example.com" }
        ],
        "slaskie": [
            { "firma": "Serwis AutoFix", "telefon": "666777888", "email": "autofix@example.com" }
        ]
    };

    // FUNKCJA AKTUALIZUJĄCA LISTĘ FIRM
    function aktualizujListeFirm() {
        const wojewodztwo = wojewodztwoSelect.value.trim();
        firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';
        firmaList.innerHTML = "";

        if (wojewodztwo && firmy[wojewodztwo]) {
            firmy[wojewodztwo].forEach(firma => {
                const option = document.createElement("option");
                option.value = firma.firma;
                option.textContent = firma.firma;
                option.dataset.telefon = firma.telefon;
                option.dataset.email = firma.email;
                firmaSelect.appendChild(option);

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
    }

    // OBSŁUGA ZMIANY WOJEWÓDZTWA
    wojewodztwoSelect.addEventListener("change", aktualizujListeFirm);

    // DODAWANIE NOWEJ FIRMY DO LISTY
    dodajFirmeButton.addEventListener("click", function () {
        const wojewodztwo = wojewodztwoSelect.value.trim();
        const nowaFirma = nowaFirmaInput.value.trim();
        const telefon = nowaFirmaTelefon.value.trim();
        const email = nowaFirmaEmail.value.trim();

        if (wojewodztwo && nowaFirma && telefon && email) {
            if (!firmy[wojewodztwo]) {
                firmy[wojewodztwo] = [];
            }

            firmy[wojewodztwo].push({ "firma": nowaFirma, "telefon": telefon, "email": email });
            aktualizujListeFirm();

            nowaFirmaInput.value = "";
            nowaFirmaTelefon.value = "";
            nowaFirmaEmail.value = "";
        } else {
            alert("Wypełnij wszystkie pola, aby dodać firmę.");
        }
    });
});
