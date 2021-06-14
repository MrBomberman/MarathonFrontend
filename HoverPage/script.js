const board = document.querySelector('#board'); 
const colors = ['#ede6e3', '#5bc3eb', '#f06449', '#aec5eb', '#e9afa3', '#969696', '#b49fcc']
const squaresNumber = 800; // общее кол-во квадратов

for (let i =0; i < squaresNumber; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    
    square.addEventListener('mouseover', () => setColor(square)) // событие будет вызываться, когда мы будем наводить мышь на квадрат
    
    square.addEventListener('mouseleave', () => {
        removeColor(square) // убираем цвет когда мышка уходит с квадрата
    })
    
    board.append(square)


} // динамически будем создавать нужное кол-во элементов в зависимости от кол-ва квадратов

function setColor(elem){ // задает цвет

    const color = getColor()
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(elem){
    elem.style.backgroundColor = '#1d1d1d'
    elem.style.boxShadow = '0 0 2px black'
}

function getColor(){
    const index = Math.floor(Math.random() * colors.length); // получаем рандомный индекс для выбора цвета

    return colors[index]
}