document.addEventListener('DOMContentLoaded', function () {
    const wojewodztwoSelect = document.getElementById('wojewodztwo');
    const nazwaFirmySpan = document.getElementById('selected-nazwa-firmy');
    const telefonSpan = document.getElementById('selected-telefon');
    const emailSpan = document.getElementById('selected-email');

    let firmData = {};

    // Wczytanie danych z CSV
    fetch('dane.csv')
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n').slice(1); // Pomijamy nagłówek
            rows.forEach(row => {
                const cols = row.split(',');
                if (cols.length >= 5) {
                    firmData[cols[0].trim()] = {
                        nazwa: cols[1].trim(),
                        telefon: cols[3].trim(),
                        email: cols[4].trim()
                    };
                }
            });
        });

    // Obsługa zmiany województwa
    wojewodztwoSelect.addEventListener('change', function () {
        const selectedRegion = wojewodztwoSelect.value;
        if (firmData[selectedRegion]) {
            nazwaFirmySpan.textContent = firmData[selectedRegion].nazwa;
            telefonSpan.textContent = firmData[selectedRegion].telefon;
            emailSpan.textContent = firmData[selectedRegion].email;
        } else {
            nazwaFirmySpan.textContent = '-';
            telefonSpan.textContent = '-';
            emailSpan.textContent = '-';
        }
    });
});
