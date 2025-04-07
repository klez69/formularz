document.addEventListener('DOMContentLoaded', function () {
	// Zakładamy, że zmienne vehicleData oraz firmy są zdefiniowane w data.js

	// Referencje do elementów formularza dotyczących pojazdu
	const markaSelect = document.getElementById('marka')
	const modelSelect = document.getElementById('model')
	const markaManualDiv = document.getElementById('marka-manual')
	const modelManualDiv = document.getElementById('model-manual')

	// Obsługa zmiany marki
	markaSelect.addEventListener('change', function () {
		const selectedMarka = this.value
		if (selectedMarka === 'Inna') {
			markaManualDiv.style.display = 'block'
			modelSelect.innerHTML = '<option value="Inny">Inny model</option>'
			modelManualDiv.style.display = 'block'
		} else {
			markaManualDiv.style.display = 'none'
			modelSelect.innerHTML = '<option value="">-- Wybierz model --</option>'
			if (vehicleData[selectedMarka]) {
				// Wypełniamy listę modeli (nazwa główna, np. "A1")
				Object.keys(vehicleData[selectedMarka]).forEach(function (model) {
					modelSelect.innerHTML += '<option value="' + model + '">' + model + '</option>'
				})
			}
			modelManualDiv.style.display = 'none'
		}
	})

	// Obsługa zmiany modelu
	modelSelect.addEventListener('change', function () {
		if (this.value === 'Inny') {
			modelManualDiv.style.display = 'block'
		} else {
			modelManualDiv.style.display = 'none'
		}
	})

	// Funkcja aktualizująca podsumowanie formularza oraz wyświetlająca sugestię AI
	function aktualizujPodsumowanie() {
		let markaVal = markaSelect.value
		if (markaVal === 'Inna') {
			const manualMarka = document.getElementById('marka_input').value.trim()
			markaVal = manualMarka || markaVal
		}
		document.getElementById('selected-marka').textContent = markaVal

		let modelVal = modelSelect.value
		if (modelVal === 'Inny') {
			const manualModel = document.getElementById('model_input').value.trim()
			modelVal = manualModel || modelVal
		}
		document.getElementById('selected-model').textContent = modelVal

		// Aktualizacja innych pól podsumowania
		;['pojemnosc', 'rok_produkcji', 'wojewodztwo'].forEach(function (fieldId) {
			const inputElement = document.getElementById(fieldId)
			const outputElement = document.getElementById('selected-' + fieldId)
			if (inputElement && outputElement) {
				outputElement.textContent = inputElement.value.trim() || '-'
			}
		})
		;['imie_nick', 'miasto', 'email'].forEach(function (fieldId) {
			const inputElement = document.getElementById(fieldId)
			const outputElement = document.getElementById('selected-' + fieldId)
			if (inputElement && outputElement) {
				outputElement.textContent = inputElement.value.trim() || '-'
			}
		})
		// Aktualizacja pola mocy
		const mocInput = document.getElementById('moc')
		const mocOutput = document.getElementById('selected-moc')
		if (mocInput && mocOutput) {
			mocOutput.textContent = mocInput.value.trim() || '-'
		}

		// Aktualizacja pola firmy (pobrana z ukrytego pola)
		const hiddenFirma = document.getElementById('email_firmy')
		const firmaOutput = document.getElementById('selected-firma')
		if (hiddenFirma && firmaOutput) {
			firmaOutput.textContent = hiddenFirma.value.trim() || '-'
		}

		// Aktualizacja sugestii AI przy użyciu elementów DOM, by tagi <ul> i <li> nie były widoczne jako tekst
		const aiContainer = document.getElementById('selected-ai')
		aiContainer.innerHTML = '' // czyścimy poprzednią zawartość

		// Dodajemy nagłówek sugestii
		const header = document.createElement('div')
		header.textContent = ' ' + markaVal + ' ' + modelVal + ':'
		aiContainer.appendChild(header)

		let vehicle = vehicleData[markaVal] && vehicleData[markaVal][modelVal]
		if (vehicle) {
			if (vehicle.variants && vehicle.variants.length > 0) {
				const ul = document.createElement('ul')
				vehicle.variants.forEach(function (variant, index) {
					const li = document.createElement('li')
					li.textContent =
						+(index + 1) +
						' : Moc: ' +
						variant.moc +
						' KM, ' +
						'Poj.: ' +
						variant.pojemnosc +
						' cm³, ' +
						'Rok produkcji: ' +
						variant.rok_produkcji +
						' r, ' +
						'Kod silnika: ' +
						variant.kod_silnika +
						''
					ul.appendChild(li)
				})
				aiContainer.appendChild(ul)
			} else if (vehicle.default) {
				const defaultText = document.createElement('div')
				defaultText.textContent =
					'Moc: ' +
					vehicle.default.moc +
					' KM, ' +
					'Poj.: ' +
					vehicle.default.pojemnosc +
					' cm³, ' +
					'Rok produkcji: ' +
					vehicle.default.rok_produkcji +
					' r, ' +
					'Kod silnika: ' +
					vehicle.default.kod_silnika
				aiContainer.appendChild(defaultText)
			}
		}
	}

	// Funkcja sprawdzająca wymagane pola pojazdu (marka i model)
	function sprawdzPojazd() {
		let wszystkieUzupelnione = true
		;['marka', 'model'].forEach(function (fieldId) {
			const field = document.getElementById(fieldId)
			if (field.value.trim() === '') {
				wszystkieUzupelnione = false
			}
		})
		if (markaSelect.value === 'Inna') {
			const manualMarka = document.getElementById('marka_input')
			if (!manualMarka || manualMarka.value.trim() === '') {
				wszystkieUzupelnione = false
			}
		}
		if (modelSelect.value === 'Inny') {
			const manualModel = document.getElementById('model_input')
			if (!manualModel || manualModel.value.trim() === '') {
				wszystkieUzupelnione = false
			}
		}
		if (wszystkieUzupelnione) {
			document.getElementById('dane-klienta').style.display = 'block'
			aktualizujPodsumowanie()
		} else {
			alert('Proszę uzupełnić wszystkie wymagane pola pojazdu.')
		}
	}

	// Funkcja sprawdzająca wymagane pola klienta
	function sprawdzKlienta() {
		let wszystkieUzupelnione = ['imie_nick', 'miasto', 'email'].every(function (fieldId) {
			return document.getElementById(fieldId).value.trim() !== ''
		})
		document.getElementById('submit-button').disabled = !wszystkieUzupelnione
	}

	document.getElementById('sprawdz-button').addEventListener('click', sprawdzPojazd)

	// Rejestracja zdarzeń input – aktualizacja podsumowania i walidacja
	;['marka', 'model', 'pojemnosc', 'rok_produkcji', 'imie_nick', 'miasto', 'email', 'wojewodztwo'].forEach(function (
		fieldId
	) {
		document.getElementById(fieldId).addEventListener('input', function () {
			aktualizujPodsumowanie()
			sprawdzKlienta()
		})
	})

	document.getElementById('moc').addEventListener('input', function () {
		const output = document.getElementById('selected-moc')
		output.textContent = this.value.trim() || '-'
	})

	document.querySelector('form').addEventListener('submit', function (e) {
		ustawWartosciFinalne()
	})

	// Funkcja ustawiająca wartości finalne przed wysłaniem formularza
	function ustawWartosciFinalne() {
		let wybranaMarka = markaSelect.value
		if (wybranaMarka === 'Inna') {
			wybranaMarka = document.getElementById('marka_input').value.trim()
		}
		document.getElementById('marka_final').value = wybranaMarka

		let wybranyModel = modelSelect.value
		if (wybranyModel === 'Inny') {
			wybranyModel = document.getElementById('model_input').value.trim()
		}
		document.getElementById('model_final').value = wybranyModel
	}

	// ===== Obsługa wyboru firmy wg województwa =====
	const wojewodztwoSelect = document.getElementById('wojewodztwo')
	const firmaSelect = document.getElementById('firma')
	const daneFirmyDiv = document.getElementById('daneFirmy')

	wojewodztwoSelect.addEventListener('change', function () {
		const wybraneWoj = this.value
		firmaSelect.innerHTML = '<option value="">-- Wybierz firmę --</option>'
		daneFirmyDiv.innerHTML = '' // czyścimy poprzednie dane
		if (firmy[wybraneWoj]) {
			firmy[wybraneWoj].forEach(function (item) {
				firmaSelect.innerHTML +=
					'<option value="' + item.firma + '" data-email="' + item.email + '">' + item.firma + '</option>'
				// Dodajemy sugestię firmy do diva
				daneFirmyDiv.innerHTML +=
					'<p><b>' + item.firma + ' <i>' + item.miasto + '</i></b> ' + item.telefon + ' ' + item.email + '</p>'
			})
		}
	})

	firmaSelect.addEventListener('change', function () {
		const selectedOption = this.options[this.selectedIndex]
		// Aktualizujemy ukryte pole – zapisujemy e-mail firmy
		document.getElementById('email_firmy').value = selectedOption.getAttribute('data-email') || ''
		aktualizujPodsumowanie()
	})

	// Obsługa menu mobilnego
	const menuToggle = document.querySelector('.menu-toggle')
	const nav = document.querySelector('nav')

	menuToggle.addEventListener('click', function () {
		menuToggle.classList.toggle('active')
		nav.classList.toggle('active')
	})

	// Zamykanie menu po kliknięciu w link
	const navLinks = document.querySelectorAll('nav a')
	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			menuToggle.classList.remove('active')
			nav.classList.remove('active')
		})
	})
})

// ===== Efekt pisania ai =====

document.addEventListener('DOMContentLoaded', function () {
	let isTyping = false // flaga informująca, czy animacja trwa
	let lastSuggestion = '' // zapamiętuje ostatnio wypisany tekst

	// Funkcja efektu "pisania" – obsługuje nowe linie i przyjmuje opcjonalny callback
	function typeWriterEffect(element, text, speed, callback) {
		let i = 0
		element.innerHTML = '' // Czyścimy zawartość elementu
		let interval = setInterval(function () {
			if (i < text.length) {
				if (text.charAt(i) === '\n') {
					element.innerHTML += '<br>'
				} else {
					element.innerHTML += text.charAt(i)
				}
				i++
			} else {
				clearInterval(interval)
				isTyping = false
				lastSuggestion = text // zapisujemy wypisany tekst
				if (callback) callback()
			}
		}, speed)
	}

	// Funkcja aktualizująca sugestie AI na podstawie danych z vehicleData (data.js)
	function updateAISuggestions() {
		// Jeśli animacja już trwa lub tekst się nie zmienił, nie wykonujemy ponownie
		if (isTyping) return

		var marka = document.getElementById('marka').value
		var model = document.getElementById('model').value
		var suggestionText = ''

		if (vehicleData[marka] && vehicleData[marka][model]) {
			var modelData = vehicleData[marka][model]
			suggestionText += marka + ' ' + model + ':\n'
			if (modelData.variants && modelData.variants.length > 0) {
				for (var i = 0; i < modelData.variants.length; i++) {
					var variant = modelData.variants[i]
					suggestionText +=
						i +
						1 +
						': Moc: ' +
						variant.moc +
						' KM, Poj.: ' +
						variant.pojemnosc +
						' cm³, Rok produkcji: ' +
						variant.rok_produkcji +
						' r, Kod silnika: ' +
						variant.kod_silnika +
						'\n'
				}
			} else if (modelData.default) {
				var details = modelData.default
				suggestionText +=
					'1: Moc: ' +
					details.moc +
					' KM, Poj.: ' +
					details.pojemnosc +
					' cm³, Rok produkcji: ' +
					details.rok_produkcji +
					' r, Kod silnika: ' +
					details.kod_silnika +
					'\n'
			}
		} else {
			suggestionText = ' Nie wybrano modelu.'
		}

		// Jeżeli nowa propozycja jest taka sama jak ostatnio wyświetlona, nie uruchamiamy animacji
		if (suggestionText === lastSuggestion) return

		var displayAi = document.getElementById('selected-ai')
		if (displayAi) {
			isTyping = true
			// Tymczasowo wyłączamy przycisk "Sprawdź"
			document.getElementById('sprawdz-button').disabled = true
			typeWriterEffect(displayAi, suggestionText, 7, function () {
				// Po zakończeniu animacji przywracamy możliwość kliknięcia przycisku
				document.getElementById('sprawdz-button').disabled = false
			})
		}
	}

	// Nasłuchujemy kliknięcia przycisku "Sprawdź"
	var sprawdzButton = document.getElementById('sprawdz-button')
	if (sprawdzButton) {
		sprawdzButton.addEventListener('click', updateAISuggestions)
	}

	// Jeśli zmienią się wartości w polach "marka" lub "model", resetujemy lastSuggestion,
	// dzięki czemu przy kolejnym kliknięciu animacja się uruchomi
	var markaSelect = document.getElementById('marka')
	var modelSelect = document.getElementById('model')
	if (markaSelect) {
		markaSelect.addEventListener('change', function () {
			lastSuggestion = ''
			updateAISuggestions()
		})
	}
	if (modelSelect) {
		modelSelect.addEventListener('change', function () {
			lastSuggestion = ''
			updateAISuggestions()
		})
	}
})
