// Funkcja do aktualizacji wyświetlanych wartości
function updateSelectedValues() {
	console.log('Aktualizowanie wyświetlanych wartości...') // Debugowanie

	// Pobierz wartości z pól input
	const imie_nick = document.getElementById('imie_nick').value
	const adres = document.getElementById('adres').value
	const kod = document.getElementById('kod').value
	const miasto = document.getElementById('miasto').value
	const wojewodztwo = document.getElementById('wojewodztwo').value
	const telefon = document.getElementById('telefon').value
	const email = document.getElementById('email').value
	const marka = document.getElementById('marka').value
	const model = document.getElementById('model').value
	const kod_silnika = document.getElementById('kod_silnika').value
	const moc = document.getElementById('moc').value
	const pojemnosc = document.getElementById('pojemnosc').value
	const rok_produkcji = document.getElementById('rok_produkcji').value
	const cena = document.getElementById('cena').value

	// Zaktualizuj zawartość elementów HTML
	document.getElementById('selected-imie_nick').textContent = imie_nick || '-'
	document.getElementById('selected-adres').textContent = adres || '-'
	document.getElementById('selected-kod').textContent = kod || '-'
	document.getElementById('selected-miasto').textContent = miasto || '-'
	document.getElementById('selected-wojewodztwo').textContent = wojewodztwo || '-'
	document.getElementById('selected-telefon').textContent = telefon || '-'
	document.getElementById('selected-email').textContent = email || '-'
	document.getElementById('selected-marka').textContent = marka || '-'
	document.getElementById('selected-model').textContent = model || '-'
	document.getElementById('selected-kod_silnika').textContent = kod_silnika || '-'
	document.getElementById('selected-moc').textContent = moc || '-'
	document.getElementById('selected-pojemnosc').textContent = pojemnosc || '-'
	document.getElementById('selected-rok_produkcji').textContent = rok_produkcji || '-'
	document.getElementById('selected-cena').textContent = cena || '-'
}

// Funkcja do aktualizacji ceny i opisu
function updateCena() {
	const marka = document.getElementById('marka').value.toLowerCase() // Pobierz markę i zamień na małe litery
	const model = document.getElementById('model').value.toLowerCase() // Pobierz model i zamień na małe litery
	const kodSilnika = document.getElementById('kod_silnika').value.toUpperCase() // Pobierz kod silnika i zamień na wielkie litery
	const cenaInput = document.getElementById('cena')
	const submitButton = document.getElementById('submit-button')
	const opisSchematu = document.getElementById('opis-schematu') // Element do wyświetlania opisu
	const daneKlienta = document.getElementById('dane-klienta') // Sekcja danych klienta

	let cenaBazowa = 0
	let dodatkowaCena = 0

	// Ustaw cenę bazową na 4500 zł, jeśli marka to "audi"
	if (marka === 'audi') {
		cenaBazowa = 4500

		// Dodaj dodatkową cenę w zależności od modelu
		if (model === 'a1') {
			dodatkowaCena = 300
		} else if (model === 'a2') {
			dodatkowaCena = 350
		}
	}

	// Dodaj 200 zł, jeśli kod silnika to "DDAA"
	if (kodSilnika === 'DDAA') {
		dodatkowaCena += 200
	}

	// Oblicz całkowitą cenę
	const cenaCalkowita = cenaBazowa + dodatkowaCena

	// Ustaw wartość pola cena
	cenaInput.value = cenaCalkowita > 0 ? cenaCalkowita : ''

	// Aktywuj przycisk "Wyślij", jeśli kod silnika nie jest "DDAA"
	if (kodSilnika !== 'DDAA') {
		submitButton.disabled = false
	} else {
		submitButton.disabled = true // Dezaktywuj przycisk, jeśli kod silnika to "DDAA"
	}

	// Wyświetl opis tylko po wpisaniu kodu silnika
	if (kodSilnika) {
		if (marka === 'audi' && (model === 'a1' || model === 'a2') && kodSilnika === 'DDAA') {
			opisSchematu.textContent = 'Do tego modelu samochodu jest opracowany schemat.'
		} else {
			opisSchematu.textContent =
				'Nie posiadamy opracowania do tego samochodu. Wyślij zapytanie do warsztatu w Twoim regionie.'
		}
	} else {
		opisSchematu.textContent = '' // Ukryj opis, jeśli kod silnika nie został wpisany
	}

	// Ukryj lub pokaż dane klienta w zależności od kodu silnika
	if (kodSilnika) {
		daneKlienta.style.display = 'none' // Ukryj dane klienta, jeśli kod silnika jest wpisany
	} else {
		daneKlienta.style.display = 'block' // Pokaż dane klienta, jeśli kod silnika nie jest wpisany
	}

	// Zaktualizuj wyświetlane wartości
	updateSelectedValues()
}

// Nasłuchuj zmian we wszystkich polach formularza
const inputs = document.querySelectorAll('input, textarea')
inputs.forEach(input => {
	input.addEventListener('input', updateSelectedValues)
})

// Nasłuchuj zmian w polach "marka", "model" i "kod_silnika", aby aktualizować cenę i opis
document.getElementById('marka').addEventListener('input', updateCena)
document.getElementById('model').addEventListener('input', updateCena)
document.getElementById('kod_silnika').addEventListener('input', updateCena)

// Wywołaj funkcję updateCena na starcie, aby ustawić początkowy stan
updateCena()
