document.addEventListener("DOMContentLoaded", function () {
    const wojewodztwoSelect = document.getElementById("wojewodztwo");
    const firmaList = document.getElementById("selected-firma-list");

    wojewodztwoSelect.addEventListener("change", function () {
        const wojewodztwo = wojewodztwoSelect.value.trim();
        firmaList.innerHTML = "<p>Ładowanie...</p>";

        if (wojewodztwo) {
            fetch(`get_firmy.php?wojewodztwo=${encodeURIComponent(wojewodztwo)}`)
                .then(response => response.json())
                .then(data => {
                    console.log("Otrzymane firmy:", data);

                    firmaList.innerHTML = ""; // Wyczyść listę przed dodaniem nowych firm

                    if (Array.isArray(data) && data.length > 0) {
                        data.forEach(firma => {
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
                })
                .catch(error => {
                    console.error("Błąd pobierania firm:", error);
                    firmaList.innerHTML = "<p>Błąd ładowania firm.</p>";
                });
        } else {
            firmaList.innerHTML = "<p>Wybierz województwo, aby zobaczyć dostępne firmy.</p>";
        }
    });
});
