'use strict' 

const inputNewTask = document.querySelector('.js-text-task-add');
const addBtn = document.querySelector('.js-btn-add');
const inputFilter = document.querySelector('.js-text-task-filter');
const searchBtn = document.querySelector('js-btn-filter');
const taskList = document.querySelector('.js-task-list');
const inputList = document.querySelector('.js-inputList');
const li = document.querySelector('.js-li');




const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];

console.log(tasks[0]);



const renderTask = () => {
    for (let eachTask of tasks) {
    taskList.innerHTML += `<li>
    <input type="checkbox">
    <label class="item">${eachTask.name}</label>
</li>`
    };
    
    if (eachTask === chekbox.checked) {
        eachTask.classList.add('tachado')
    } else {
        eachTask.classList.remove('tachado')
    };
};




console.log(renderTask);
renderTask();





/* const handleClick = (event) => {
    event.preventDefault();
    let userInput = inputNewTask.value;
    taskList.innerHTML += `<li>
    <input type="checkbox">
    <label class="item">${userInput}</label>
</li>`
   /*  tasks.push(userInput); */




// condicional para saber si la tarea es completed: true

/* function checkedTask(event) {
    const checkbox = event.currentTarget;
    const listItem = checkbox.parentNode('li');
    
    if (listItem) {
        if (checkbox.checked) {
            listItem.classList.add('tachado');
        } else {
            listItem.classList.remove('tachado');
        }
    }
} */


  
/* taskList.addEventListener('input', checkedTask); */
/* addBtn.addEventListener('click', handleClick); */


/* const handleSearch = tasks.filter((task) => {
    if (task === inputFilter.value ) {
        taskList.innerHTML += `<li>
    <input type="checkbox">
    <label class="item">${inputFilter.value}</label>
</li>`
    } else {
        taskList.innerHTML = "";
    }

})
    
 */



/* searchBtn.addEventListener('click', handleSearch) */


