//Работа с checkbox
function funcCheckbox() {
	var checkbox = document.querySelector('.checkbox');
	if (checkbox.checked) {
		alert('Выбран');
	} 
	else {
		alert('Не выбран');
	}
}

//Работа с radio кнопками
function funcRadio() {
	var radio = document.getElementsByName('radio1');
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			alert('Выбран ' +i+ ' элемент');
		}
	}
}

/*Событие onchange срабатывает при потере фокуса элементом, тоесть к примеру при выделении чекбокса*/