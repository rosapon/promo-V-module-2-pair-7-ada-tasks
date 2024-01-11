'use strict' 

const inputNewTask = document.querySelector('.js-text-task-add');
const addBtn = document.querySelector('.js-btn-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const searchBtn = document.querySelector('js-btn-filter');
const taskList = document.querySelector('.js-task-list');

const tasks = [];


const handleClick = (event) => {
    event.preventDefault();
    let userInput = inputNewTask.value;
    taskList.innerHTML += `<li><input type="checkbox"><label>${userInput}</label>`;
    tasks.push(userInput);
    console.log(tasks);
};


// hacer otra función con un condicional que añada la clase crossout si se selecciona el input 

addBtn.addEventListener('click', handleClick);



