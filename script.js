document.addEventListener('DOMContentLoaded', function () {
    // Elementy formularza
    const wojewodztwoSelect = document.getElementById('wojewodztwo');
    const sprawdzButton = document.getElementById('sprawdz-button');
    const submitButton = document.getElementById('submit-button');
    const daneKlientaDiv = document.getElementById('dane-klienta');
    // Pole wyboru firmy – musi być dodane w formularzu
    const firmaSelect = document.getElementById('firma');
    
    // Pola formularza pojazdu i klienta
    const pojazdFields = ['marka', 'model', 'moc', 'pojemnosc', 'rok_produkcji'];
    const klientFields = ['imie_nick', 'adres', 'kod', 'miasto', 'email'];
    
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
    
    // Dane firm przechowywane lokalnie – zamiast wywoływania GET_FIRMY.PHP
    let firmy = {
        mazowieckie: [
            { firma: 'CZAKRAM', telefon: '-', email: 'rojek@czakram.pl' },
            { firma: 'ENERGY GAZ POLSKA', telefon: '22 8100090', email: 'rojek@czakram.pl' },
            { firma: 'J.J. KARASIŃSCY  S.C.', telefon: '603 350 272', email: 'rojek@czakram.pl' },
			{ firma: 'ADGAZ ADAM  STĘPIEŃ', telefon: '509 191 929', email: 'rojek@czakram.pl' },
			{ firma: 'NOWOTCZYŃSKI PIOTR USŁUGI', telefon: '501 387 642', email: 'rojek@czakram.pl' },
        ],
        malopolskie: [
            { firma: 'CZAKRAM', telefon: '-', email: 'rojek@czakram.pl' },
            { firma: 'F.H.U. KARAT MARZENA ZIĘĆ', telefon: '508 187 622', email: 'rojek@czakram.pl' },
        ],
        slaskie: [
            { firma: 'CZAKRAM SP. Z O.O.', telefon: '32 2221587', email: 'slaskie@czakram.pl' },
            { firma: 'Serwis AutoFix', telefon: '6656777888', email: 'rojek@czakram.pl' },
            { firma: 'Serwis AutoFix', telefon: '5666777888', email: 'rojek@czakram.pl' },
        ],
    };
    
    // Element do tradycyjnego wyświetlania danych firm
    let daneFirmyDiv = document.getElementById('daneFirmy');
    
    // Po zmianie województwa – uzupełnienie pola wyboru firmy
    wojewodztwoSelect.addEventListener('change', function () {
        let wybraneWojewodztwo = this.value;
        // Czyścimy tradycyjny podgląd firm
        daneFirmyDiv.innerHTML = '';
        // Resetujemy select firm
        firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>';
        
        if (wybraneWojewodztwo && firmy[wybraneWojewodztwo]) {
            let listaFirm = firmy[wybraneWojewodztwo];
            
            // Uzupełniamy pole select – opcje mają wartość adresu e-mail, a wyświetlana jest nazwa firmy
            listaFirm.forEach(function(firma) {
                let opt = document.createElement('option');
                opt.value = firma.email;
                opt.textContent = firma.firma;
                firmaSelect.appendChild(opt);
            });
            
            // Wyświetlenie firm w tradycyjnym formacie
            if (listaFirm.length === 1) {
                wyswietlDaneFirmy(listaFirm[0]);
            } else {
                let listaHTML = '<h3>Dostępne firmy:</h3><ul>';
                listaFirm.forEach(function(firma) {
                    listaHTML += `
                        <li>
                            <p><strong>Firma:</strong> ${firma.firma}
                            <strong>Telefon:</strong> ${firma.telefon}
                            <strong>Email:</strong> <a href="mailto:${firma.email}">${firma.email}</a></p>
                        </li>
                    `;
                });
                listaHTML += '</ul>';
                daneFirmyDiv.innerHTML = listaHTML;
            }
        }
    });
    
    // Obsługa wyboru firmy – po wybraniu, wstawiamy e-mail firmy do ukrytego pola
    firmaSelect.addEventListener('change', function () {
        let selectedOption = firmaSelect.options[firmaSelect.selectedIndex];
        document.getElementById('selected-firma').textContent = (selectedOption.text && selectedOption.text !== '-- Wybierz firmę --') ? selectedOption.text : '-';
        // Przypisujemy e-mail firmy do ukrytego pola (upewnij się, że w formularzu masz input o id "email_firmy")
        let emailFirmaInput = document.getElementById('email_firmy');
        if (emailFirmaInput) {
            emailFirmaInput.value = selectedOption.value;
        }
    });
    
    // Funkcja do wyświetlania danych firmy w tradycyjnym formacie
    function wyswietlDaneFirmy(firma) {
        daneFirmyDiv.innerHTML = `
            <h3>Dane firmy:</h3>
            <p><strong>Firma:</strong> ${firma.firma}
             <strong>Telefon:</strong> ${firma.telefon}
             <strong>Email:</strong> <a href="mailto:${firma.email}">${firma.email}</a></p>
        `;
    }
});
