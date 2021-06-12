const item = document.querySelector('.item'); // берем нашу плавующую панель
const placeholders = document.querySelectorAll('.placeholder'); // получаем все места - куда можно переместить наш плавающий элемент

item.addEventListener('dragstart',dragStart ) // говорит что мы начали перетаскивать элемент
item.addEventListener('dragend', dragEnd) // закончили перетаскивание


placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', dragOver) // вызывается - когда элемент, который мы перетаскиваем находится над текущем полем-куда можем поместить
    placeholder.addEventListener('dragenter', dragEnter) // когда заходим на территорию конкретной зоны 
    placeholder.addEventListener('dragleave', dragLeave) // когда мы перетащили туда, но покинули зону
    placeholder.addEventListener('drop', drop) // когда мы отпустили элемент
})

function dragStart(e){
    
    e.target.classList.add('hold') // этот класс будет работать в момент перетаскивания
    setTimeout(() => {
        e.target.classList.add('hide')
    }, 0); // элемент исчезнет из своей позиции - но до завершения перетаскивания останется на мышке
    
}

function dragEnd(e){
    
    e.target.classList.remove('hold', 'hide')
   
}

function dragOver(e){
    e.preventDefault(); // отменяем действие - чтобы элемент переместился в нужное поле
}

function dragEnter(e){
    e.target.classList.add('hovered'); // добавляем класс к нашему полю - когда на него наводим элементом
}

function dragLeave(e){
    e.target.classList.remove('hovered'); // когда покидаем поле - удаляется класс наведения
}

function drop(e){
    e.target.classList.remove('hovered');
    // когда отпускаю мышку с элементом на конкретной зоне - он там остается
    e.target.append(item) // конкретная зона - на которую наводим - вставляем в нее наш элемент
    // Событие drop запускается, когда мы наш элемент перемещаем  на допустимый целевой объект drop(нашу текущую зону).
    
}
