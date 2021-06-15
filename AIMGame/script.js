const start = document.querySelector('#start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
const timeEl = document.querySelector('#time'); // элемент в который нужно поместить наше время
let time = 0;
const board = document.querySelector("#board")
let score = 0;
const colors = ['#ede6e3', '#5bc3eb', '#f06449', '#aec5eb', '#e9afa3', '#969696', '#b49fcc']

start.addEventListener('click', (e) => {
   e.preventDefault();// чтобы не было хеша

    screens[0].classList.add('up'); // добавляем к первому экрану класс - чтобы он прокрутился
})

// будем задавать событие сразу на весь список

timeList.addEventListener('click', (e) => {
    if(e.target.classList.contains('time-btn')){ // если элемент содержит нужный класс- это наша кнопка
       time =  parseInt(e.target.getAttribute('data-time')) // получаем из атрибута нужное кол-во секунд из кнопки на которую нажали
       screens[1].classList.add('up'); // прокручиваем второй экран на третий при нажатии кнопки времени
       startGame();
    } else {
        return
    }
})

board.addEventListener('click', (e) => {
    if(e.target.classList.contains('circle')){
        score++;
        e.target.remove(); // убираем наш кружок при клике и сразу создаем новый
        createRandomCircle();
    }
})


function startGame(){
    setInterval(decreaseTime, 1000);
    createRandomCircle();
    setTime(time)// чтобы начиналось с нужного времени
}

function decreaseTime(){
    if(time === 0){ // чтобы время в нужный момент остановилось - когда оно истекло
        finishGame();
    } else {
        let current = --time; // каждую секунду уменьшаем значение на 1
        if(current < 10){
            current = `0${current}`
        } 
        setTime(current) // помещаем текущее время и уменьшаем его
    }

}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    timeEl.parentNode.remove(); // даляем родителя у нашего таймера - чтобы он весь исчез
    board.innerHTML = `<h1>Score: <span class='primary'>${score}</span></h1>`
}

// создаем поле с рандомными кружками

function createRandomCircle(){
    const circle = document.createElement('div'); // создаем кружок, который рандомно появится
    circle.classList.add('circle')
    const size = randomNumber(10, 65)
    const {width, height} = board.getBoundingClientRect(); // получаем всю информаицю о нашем поле -  деструктурируем объект
    const x = randomNumber(0, width - size); // получаем радномное число по оси x 
    const y = randomNumber(0, height - size)
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    
    const color = getColor()
    circle.style.background = color;
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    board.append(circle)
}

function randomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function getColor(){
    const index = Math.floor(Math.random() * colors.length); // получаем рандомный индекс для выбора цвета

    return colors[index]
}