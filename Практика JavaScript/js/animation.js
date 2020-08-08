function myMove(){
	var elem = document.getElementById("myAnimation");
	var position = 0;
	var id = setInterval(frame, 10); /*setInterval - метод выполняет код много раз через 
	равные промежутки времени пока он не будет остановлен с помощью clearInterval, первый 
	аргумент в ней (в нашем случае это - frame) это функция или строка для выполнения кода, 
	а второй аргумент (в нашем случае это - 10) это интервал в миллисекундах*/
	function frame(){
		if (position == 350) { /*как только position = 350px (так как сам красный квадрат занимаает 50px), 
			выполниться clearInterval(id), тоеть остановка анимации*/
			clearInterval(id); 
		} else {
			position++; /*до тех пор пока переменная position не равна 350, она будет увеличиваться каждые 
			10 миллисекунд*/
			elem.style.top = position + 'px';
			elem.style.left = position + 'px';
		}
	}
}


