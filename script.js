document.addEventListener("DOMContentLoaded", function () {
	// Pobranie pól formularza
	const formFields = document.querySelectorAll("input, select");
	const kodSilnika = document.getElementById("kod_silnika");
	const daneKlienta = document.getElementById("dane-klienta");
	const submitButton = document.getElementById("submit-button");

	// Sekcja podsumowania
	const summaryFields = {
		marka: document.getElementById("selected-marka"),
		model: document.getElementById("selected-model"),
		kod_silnika: document.getElementById("selected-kod_silnika"),
		moc: document.getElementById("selected-moc"),
		pojemnosc: document.getElementById("selected-pojemnosc"),
		rok_produkcji: document.getElementById("selected-rok_produkcji"),
		imie_nick: document.getElementById("selected-imie_nick"),
		adres: document.getElementById("selected-adres"),
		kod: document.getElementById("selected-kod"),
		miasto: document.getElementById("selected-miasto"),
		wojewodztwo: document.getElementById("selected-wojewodztwo"),
		telefon: document.getElementById("selected-telefon"),
		email: document.getElementById("selected-email"),
	};

	// Funkcja aktualizująca podsumowanie
	function updateSummary(event) {
		const field = event.target;
		if (summaryFields[field.id]) {
			summaryFields[field.id].textContent = field.value || "-";
		}
		checkFormCompletion();
	}

	// Ukrywanie sekcji "Dane klienta", jeśli kod silnika jest pusty
	function toggleDaneKlienta() {
		daneKlienta.style.display = kodSilnika.value.trim() ? "block";
	}

	// Sprawdzenie, czy wszystkie wymagane pola są uzupełnione
	function checkFormCompletion() {
		let allFilled = true;
		document.querySelectorAll("input[required]").forEach((input) => {
			if (!input.value.trim()) {
				allFilled = false;
			}
		});
		submitButton.disabled = !allFilled;
	}

	// Nasłuchiwanie zmian w formularzu
	formFields.forEach((field) => {
		field.addEventListener("input", updateSummary);
	});

	// Ukrycie sekcji na początku
	toggleDaneKlienta();
	kodSilnika.addEventListener("input", toggleDaneKlienta);
});
