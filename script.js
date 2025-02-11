document.addEventListener('DOMContentLoaded', function () {
	// Pobranie elementów formularza
	const kodSilnika = document.getElementById('kod_silnika');
	const daneKlienta = document.getElementById('dane-klienta');
	const sprawdzButton = document.getElementById('sprawdz-button');
	const submitButton = document.getElementById('submit-button');

	// Obsługa przycisku "Sprawdź"
	sprawdzButton.addEventListener('click', function () {
		if (!kodSilnika.value.trim()) {
			daneKlienta.style.display = 'block';
		} else {
			daneKlienta.style.display = 'none';
		}
	});

	// Funkcja sprawdzająca czy formularz jest gotowy do wysłania
	function checkFormCompletion() {
		let allFilled = true;
		document.querySelectorAll('input[required]').forEach(input => {
			if (!input.value.trim()) {
				allFilled = false;
			}
		});
		submitButton.disabled = !allFilled;
	}

	// Nasłuchiwanie zmian w formularzu
	document.querySelectorAll('input, select').forEach(field => {
		field.addEventListener('input', checkFormCompletion);
	});
});
