document.addEventListener('DOMContentLoaded', function () {
    const wojewodztwoSelect = document.getElementById('wojewodztwo');
    const sprawdzButton = document.getElementById('sprawdz-button');
    const submitButton = document.getElementById('submit-button');
    const daneKlientaDiv = document.getElementById('dane-klienta');
    const firmaSelect = document.getElementById('firma'); // Pole wyboru firmy

    const pojazdFields = ['marka', 'model', 'moc', 'pojemnosc', 'rok_produkcji'];
    const klientFields = ['imie_nick', 'adres', 'kod', 'miasto', 'telefon', 'email'];

    function aktualizujPodsumowanie() {
        [...pojazdFields, ...klientFields, 'wojewodztwo'].forEach(fieldId => {
            const inputElement = document.getElementById(fieldId);
            const outputElement = document.getElementById(`selected-${fieldId}`);
            if (inputElement && outputElement) {
                outputElement.textContent = inputElement.value.trim() || '-';
            }
        });
    }

    function sprawdzPojazd() {
        let wszystkieUzupelnione = pojazdFields.every(fieldId => {
            return document.getElementById(fieldId).value.trim() !== '';
        });
        if (wszystkieUzupelnione) {
            daneKlientaDiv.style.display = 'block';
            aktualizujPodsumowanie();
        } else {
            alert('Proszę uzupełnić wszystkie wymagane pola pojazdu.');
        }
    }

    function sprawdzKlienta() {
        let wszystkieUzupelnione = klientFields.every(fieldId => {
            return document.getElementById(fieldId).value.trim() !== '';
        });
        submitButton.disabled = !wszystkieUzupelnione;
    }

    sprawdzButton.addEventListener('click', sprawdzPojazd);
    [...pojazdFields, ...klientFields, 'wojewodztwo'].forEach(fieldId => {
        document.getElementById(fieldId).addEventListener('input', function () {
            aktualizujPodsumowanie();
            sprawdzKlienta();
        });
    });

    // PRZECHOWYWANIE FIRM W PAMIĘCI (ZAMIAST GET_FIRMY.PHP)
    let firmy = {
        mazowieckie: [
            { firma: 'AutoSerwis Jan', telefon: '123456789', email: 'serwis.jan@example.com' },
            { firma: 'Mechanika Kowalski', telefon: '987654321', email: 'mechanika.kowalski@example.com' },
        ],
        malopolskie: [
            { firma: 'AutoNaprawa Nowak', telefon: '555888999', email: 'naprawa.nowak@example.com' }
        ],
        slaskie: [
            { firma: 'Serwis AutoFix', telefon: '6656777888', email: 'zautofix@example.com' },
            { firma: 'Serwis AutoFix', telefon: '5666777888', email: 'bautofix@example.com' },
        ],
    };

    // Referencje do elementów HTML
    let selectWojewodztwo = document.getElementById('wojewodztwo');
    let daneFirmyDiv = document.getElementById('daneFirmy');

    // Po zmianie województwa – uzupełnienie pola wyboru firmy
    selectWojewodztwo.addEventListener('change', function () {
        let wybraneWojewodztwo = this.value;
        daneFirmyDiv.innerHTML = ''; // Czyszczenie poprzednich danych

        // Czyszczenie opcji w select firmy i dodanie opcji domyślnej
        firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';

        if (wybraneWojewodztwo && firmy[wybraneWojewodztwo]) {
            let listaFirm = firmy[wybraneWojewodztwo];

            // Uzupełnienie pola select – opcje mają wartość adresu e-mail, a wyświetlana jest nazwa firmy
            listaFirm.forEach(function(firma) {
                let opt = document.createElement('option');
                opt.value = firma.email;
                opt.textContent = firma.firma;
                firmaSelect.appendChild(opt);
            });

            // Wyświetlenie firm w tradycyjnym formacie w divie daneFirmy
            if (listaFirm.length === 1) {
                wyswietlDaneFirmy(listaFirm[0]);
            } else {
                let listaHTML = '<h3>Dostępne firmy:</h3><ul>';
                listaFirm.forEach(function(firma) {
                    listaHTML += `
                        <li>
                            <p><strong>Firma:</strong> ${firma.firma}</p>
                            <p><strong>Telefon:</strong> ${firma.telefon}</p>
                            <p><strong>Email:</strong> <a href="mailto:${firma.email}">${firma.email}</a></p>
                        </li>
                    `;
                });
                listaHTML += '</ul>';
                daneFirmyDiv.innerHTML = listaHTML;
            }
        }
    });

    // Po wyborze firmy – aktualizacja podsumowania oraz wstawienie e-maila firmy do ukrytego pola
    firmaSelect.addEventListener('change', function () {
        let selectedOption = firmaSelect.options[firmaSelect.selectedIndex];
        document.getElementById('selected-firma').textContent = (selectedOption.text && selectedOption.text !== '-- Wybierz firmę --') ? selectedOption.text : '-';
        // Ustawienie adresu e-mail wybranej firmy do pola ukrytego (przyjmujemy, że istnieje input o id "email_firmy")
        let emailFirmaInput = document.getElementById('email_firmy');
        if (emailFirmaInput) {
            emailFirmaInput.value = selectedOption.value;
        }
    });

    // Funkcja do wyświetlania danych firmy w divie daneFirmy
    function wyswietlDaneFirmy(firma) {
        daneFirmyDiv.innerHTML = `
            <h3>Dane firmy:</h3>
            <p><strong>Firma:</strong> ${firma.firma}</p>
            <p><strong>Telefon:</strong> ${firma.telefon}</p>
            <p><strong>Email:</strong> <a href="mailto:${firma.email}">${firma.email}</a></p>
        `;
    }
});
