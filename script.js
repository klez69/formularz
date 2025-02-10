document.addEventListener("DOMContentLoaded", () => {
    // Funkcja do aktualizacji wyświetlanych wartości
    function updateSelectedValues() {
        console.log("Aktualizowanie wybranych wartości...");

        // Lista pól do synchronizacji
        const fields = [
            "imie_nick", "adres", "kod", "miasto", "wojewodztwo",
            "telefon", "email", "marka", "model", "kod_silnika",
            "moc", "pojemnosc", "rok_produkcji"
        ];

        fields.forEach(field => {
            const input = document.getElementById(field);
            const output = document.getElementById(`selected-${field}`);

            if (input && output) {
                output.textContent = input.value.trim() || "-";
            }
        });
    }

    // Pobranie wszystkich pól formularza i dodanie nasłuchiwaczy
    const inputs = document.querySelectorAll("input, select, textarea");
    inputs.forEach(input => {
        input.addEventListener("input", updateSelectedValues);
    });

    // Wywołanie na starcie, aby domyślnie wypełnić wartości
    updateSelectedValues();
});
