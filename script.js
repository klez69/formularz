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
	
}

// Funkcja do aktualizacji ceny i opisu
function updateCena() {
	const marka = document.getElementById('marka').value.toLowerCase() // Pobierz markę i zamień na małe litery
	const model = document.getElementById('model').value.toLowerCase() // Pobierz model i zamień na małe litery
	const kodSilnika = document.getElementById('kod_silnika').value.toUpperCase() // Pobierz kod silnika i zamień na wielkie litery
	
	const submitButton = document.getElementById('submit-button')
	const opisSchematu = document.getElementById('opis-schematu') // Element do wyświetlania opisu
	const daneKlienta = document.getElementById('dane-klienta') // Sekcja danych klienta

	

	
	// Aktywuj przycisk "Wyślij", jeśli kod silnika nie jest ""
	if (kodSilnika !== '') {
		submitButton.disabled = false
	} 

	

	// Zaktualizuj wyświetlane wartości
	updateSelectedValues()
}

// Nasłuchuj zmian we wszystkich polach formularza
const inputs = document.querySelectorAll('input, textarea')
inputs.forEach(input => {
	input.addEventListener('input', updateSelectedValues)
})

