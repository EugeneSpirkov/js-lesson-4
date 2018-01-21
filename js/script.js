'use strict'

var h1 = document.getElementById('timer');
var start = document.getElementById('start');
var pause = document.getElementById('pause');
var clear = document.getElementById('clear');
var	millisecond = 0;
var	second = 0;
var	minute = 0;
var hour = 0;
var setIntervalId;
h1.innerHTML = '00 : 00 : 00 : 000';


function ran() {

	millisecond = millisecond + 3;

	(millisecond > 999) ? (millisecond = 0, second++) : true;   	//сама логика таймера
	(second > 59) ? (second = 0, minute++) : true;					
	(minute > 59) ? (minute = 0, hour++) : true;

	h1.innerHTML = (hour ? (hour > 9 ? hour : '0' + hour) : '00') + ' : ' +		//проверяем, если число меньше 10 - то добавляем 0 (01, 02, 03....)
	(minute ? (minute > 9 ? minute: '0' + minute) : '00') + ' : ' +
	(second ? (second > 9 ? second : '0' + second) : '00') + ' : ' + 
	(millisecond > 9 ? (millisecond > 99 ? millisecond: '0' + millisecond) : '00' + millisecond);

};

function startTime() {							//ф-я запуска таймера
	setIntervalId = setInterval(ran, 1);
}
function pauseTime() {							//ф-я паузы таймера
	clearInterval(setIntervalId)
}
function clearTime() {							//ф-я очистки таймера					
	clearInterval(setIntervalId)
	h1.innerHTML = '00 : 00 : 00 : 000';
	millisecond = 0;
	second = 0;
	minute = 0;
	hour = 0
}

start.addEventListener('click', startTime);			//обработчики событий
pause.addEventListener('click', pauseTime);
clear.addEventListener('click', clearTime);



