// Funkcja do aktualizacji wyświetlanych wartości
function updateSelectedValues() {
    const fields = [
        "imie_nick",
        "adres",
        "kod",
        "miasto",
        "wojewodztwo",
        "telefon",
        "email",
        "marka",
        "model",
        "kod_silnika",
        "moc",
        "pojemnosc",
        "rok_produkcji",
        "cena"
    ];

    fields.forEach(field => {
        const inputElement = document.getElementById(field);
        const displayElement = document.getElementById(`selected-${field}`);

        if (inputElement && displayElement) {
            displayElement.textContent = inputElement.value || "-";
        }
    });
}

// Funkcja do aktualizacji ceny i obsługi sekcji danych klienta
function updateCena() {
    const marka = document.getElementById('marka').value.toLowerCase();
    const model = document.getElementById('model').value.toLowerCase();
    const kodSilnika = document.getElementById('kod_silnika').value.toUpperCase();
    const cenaInput = document.getElementById('cena');
    const submitButton = document.getElementById('submit-button');
    const daneKlienta = document.getElementById('dane-klienta');

    let cenaBazowa = 0;
    let dodatkowaCena = 0;

    if (marka === 'audi') {
        cenaBazowa = 4500;
        if (model === 'a1') dodatkowaCena = 300;
        else if (model === 'a2') dodatkowaCena = 350;
    }

    if (kodSilnika === 'DDAA') {
        dodatkowaCena += 200;
    }

    const cenaCalkowita = cenaBazowa + dodatkowaCena;
    cenaInput.value = cenaCalkowita > 0 ? cenaCalkowita : '';

    submitButton.disabled = kodSilnika === 'DDAA';

    daneKlienta.style.display = kodSilnika ? 'none' : 'block';

    updateSelectedValues();
}

// Nasłuchuj zmian we wszystkich polach formularza
document.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', () => {
        updateSelectedValues();
        updateCena();
    });
});

// Inicjalizacja
updateCena();
