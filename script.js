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

        // Pobranie referencji do elementów HTML
        let selectWojewodztwo = document.getElementById("wojewodztwo");
        let daneFirmyDiv = document.getElementById("daneFirmy");

        // Obsługa zmiany województwa
        selectWojewodztwo.addEventListener("change", function() {
            let wybraneWojewodztwo = this.value;
            daneFirmyDiv.innerHTML = ""; // Czyszczenie poprzednich danych

            if (wybraneWojewodztwo && firmy[wybraneWojewodztwo]) {
                let listaFirm = firmy[wybraneWojewodztwo];

                // Jeśli jest tylko jedna firma, wyświetl jej dane
                if (listaFirm.length === 1) {
                    wyswietlDaneFirmy(listaFirm[0]);
                } else {
                    // Jeśli jest więcej firm, wyświetl listę wszystkich firm
                    let listaHTML = "<h3>Dostępne firmy:</h3><ul>";
                    listaFirm.forEach(firma => {
                        listaHTML += `
                            <li>
                                <p><strong>Firma:</strong> ${firma.firma}</p><br>
                                <p><strong>Telefon:</strong> ${firma.telefon}</p><br>
                                <p><strong>Email:</strong> <a href="mailto:${firma.email}">${firma.email}</a></p>
                            </li>
                        `;
                    });
                    listaHTML += "</ul>";
                    daneFirmyDiv.innerHTML = listaHTML;
                }
            }
        });

        // Funkcja do wyświetlania danych firmy
        function wyswietlDaneFirmy(firma) {
            daneFirmyDiv.innerHTML = `
                <h3>Dane firmy:</h3>
                <p><strong>Firma:</strong> ${firma.firma}</p>
                <p><strong>Telefon:</strong> ${firma.telefon}</p>
                <p><strong>Email:</strong> <a href="mailto:${firma.email}">${firma.email}</a></p>
            `;
        }
    
});
