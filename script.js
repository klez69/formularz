document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const klientInputs = {
        firma: document.getElementById("firma"),
        imie_nick: document.getElementById("imie_nick"),
        adres: document.getElementById("adres"),
        kod: document.getElementById("kod"),
        miasto: document.getElementById("miasto"),
        telefon: document.getElementById("telefon"),
        email: document.getElementById("email")
    };

    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value;

        if (wojewodztwo) {
            fetch(`get_client.php?wojewodztwo=${wojewodztwo}`)
                .then(response => response.json())
                .then(data => {
                    if (!data.error) {
                        Object.keys(klientInputs).forEach(key => {
                            klientInputs[key].value = data[key] || "";
                            document.getElementById(`selected-${key}`).textContent = data[key] || "-";
                        });
                    } else {
                        console.log(data.error);
                    }
                })
                .catch(error => console.error("Błąd pobierania danych:", error));
        }
    });

    // Aktualizacja wartości w podsumowaniu dla wszystkich pól
    const allFields = ["firma", "imie_nick", "adres", "kod", "miasto", "telefon", "email"];
    allFields.forEach(fieldId => {
        const inputElement = document.getElementById(fieldId);
        const outputElement = document.getElementById(`selected-${fieldId}`);

        if (inputElement && outputElement) {
            inputElement.addEventListener("input", function () {
                outputElement.textContent = inputElement.value.trim() || "-";
            });
        }
    });
});
