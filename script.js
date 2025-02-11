document.addEventListener('DOMContentLoaded', function () {
    const kodSilnika = document.getElementById('kod_silnika');
    const daneKlienta = document.getElementById('dane-klienta');
    const sprawdzButton = document.getElementById('sprawdz-button');
    const submitButton = document.getElementById('submit-button');

    const summaryFields = {
        marka: document.getElementById('selected-marka'),
        model: document.getElementById('selected-model'),
        kod_silnika: document.getElementById('selected-kod_silnika'),
        moc: document.getElementById('selected-moc'),
        pojemnosc: document.getElementById('selected-pojemnosc'),
        rok_produkcji: document.getElementById('selected-rok_produkcji'),
        imie_nick: document.getElementById('selected-imie_nick'),
        adres: document.getElementById('selected-adres'),
        kod: document.getElementById('selected-kod'),
        miasto: document.getElementById('selected-miasto'),
        telefon: document.getElementById('selected-telefon'),
        email: document.getElementById('selected-email')
    };

    function updateSummary(event) {
        const field = event.target;
        if (summaryFields[field.id]) {
            summaryFields[field.id].textContent = field.value || '-';
        }
    }

    function checkFormCompletion() {
        let allFilled = true;
        document.querySelectorAll('input[required]').forEach(input => {
            if (!input.value.trim()) {
                allFilled = false;
            }
        });
        submitButton.disabled = !allFilled;
    }

    sprawdzButton.addEventListener('click', function () {
        if (!kodSilnika.value.trim()) {
            daneKlienta.style.display = 'block';
        } else {
            daneKlienta.style.display = 'none';
        }
    });

    document.querySelectorAll('input, select').forEach(field => {
        field.addEventListener('input', updateSummary);
        field.addEventListener('input', checkFormCompletion);
    });
});
