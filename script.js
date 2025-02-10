// Funkcja do aktualizacji wyświetlanych wartości
function updateSelectedValues() {
    console.log('Aktualizowanie wyświetlanych wartości...');

    // Pobierz wartości z pól input
    const fields = [
        "imie_nick", "adres", "kod", "miasto", "wojewodztwo",
        "telefon", "email", "marka", "model", "kod_silnika",
        "moc", "pojemnosc", "rok_produkcji"
    ];

    fields.forEach(field => {
        const input = document.getElementById(field);
        const output = document.getElementById(`selected-${field}`);
        if (input && output) {
            output.textContent = input.value.trim() || '-';
        }
    });
}

// Poczekaj na załadowanie DOM i dodaj event listenery
document.addEventListener("DOMContentLoaded", () => {
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', updateSelectedValues);
    });

    // Wywołaj funkcję na start, by uzupełnić dane domyślnie
    updateSelectedValues();
});
