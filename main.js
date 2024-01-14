'use strict' 

const inputNewTask = document.querySelector('.js-text-task-add');
const addBtn = document.querySelector('.js-btn-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const searchBtn = document.querySelector('js-btn-filter');
const taskList = document.querySelector('.js-task-list');
const inputList = document.querySelector('.js-inputList');
const itemOfTheList = document.querySelector('.item');

const tasks = [
    
];


const handleClick = (event) => {
    event.preventDefault();
    let userInput = inputNewTask.value;
    itemOfTheList.innerHTML += userInput;
    tasks.push(userInput);
    console.log(tasks);
}

/* const crossout = () => {
    tasks
}
 */
/*const newTask = () => {
    if (checked:true) {
        tasks.classList.add('tachado');
    } else {
        tasks.classList.remove('tachado');
    }
}
};*/

// hacer otra función con un condicional que añada la clase crossout si se selecciona el input 

addBtn.addEventListener('click', handleClick);

if (inputList: checkbox.checked) {
    inputList.classList.add('tachado');
}

inputList.addEventListener('focus', newTask);
