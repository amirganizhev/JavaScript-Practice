//Работа с select
function funcSelector() {
	var selector = document.getElementById('mySelect').selectedIndex;
	var options = document.getElementById('mySelect').options;
	alert('Выбана опция ' + options[selector].text);
}

//Работа с ползунком (input type="range")
function funcRange() {
    var range = document.getElementById('range'); 
    var rangeText = document.getElementById('rangeText'); 
    rangeText.innerHTML = range.value;
}

function funcRangeInput() {
    var rangeInput = document.getElementById('rangeInput'); 
    var rangeTextInput = document.getElementById('rangeTextInput'); 
    rangeTextInput.value = rangeInput.value;
}

//Изменение размера блока с помощью ползунка
function funcRangeRegulation() {
	var rangeRegulation = document.getElementById('rangeRegulation');
	var divRegulation = document.querySelector('.range-regulation');
	divRegulation.style.width = rangeRegulation.value + 'px';
	divRegulation.style.height = rangeRegulation.value + 'px';
}

/*Событие oninput срабатывае при любом изменении в элементе, тоесть к примеру при добавлении буквы или переноса ползунка*/