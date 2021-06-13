const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');

const sidebar = document.querySelector('.sidebar'); // получаем наш блок с названиями
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount = mainSlide.querySelectorAll('div').length; // берем кол-во дивов в нашем слайдере - тем самым находим все картинки - их число

let activeSlideId = 0; // задаем активность слайда

sidebar.style.top = `-${(slidesCount-1)* 100}vh` // вычисляем первую надпись - которая зависит от кол-ва слайдов в нашем слайдере

upBtn.addEventListener('click', () => {
    changeSlide('up')
})

downBtn.addEventListener('click', () => {
    changeSlide('down')
})


function changeSlide(dir){
    if(dir === 'up'){
        activeSlideId++; // увеличиваем активность слайдов на 1
        if(activeSlideId === slidesCount){ // проверяем равна ли наша активность кол-ву слайдов, чтобы не выходить за рамки слайдера - проверяем наш максимальный индекс
            activeSlideId = 0;  // если мы вышли за рамки слайдера - обнуляем нашу активность
        }
    } else if(dir === 'down'){
        activeSlideId--;
        if(activeSlideId < 0){ // если активность стала меньше первого элемента
            activeSlideId = slidesCount -1; // чтобы слайдер отправлял нас вверх
        }
    }

    const height = container.clientHeight; // получаем всю высоту нашего блока

    mainSlide.style.transform = `translateY(-${activeSlideId * height}px)` // - или + дает просто направление движения
    sidebar.style.transform = `translateY(${activeSlideId * height}px)`; // слайдеры меняются в зависимости от активного слайда
}

