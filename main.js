let tasks = [];

const taskList = document.querySelector(".task-list");
const btnFilter = document.querySelector(".js-btn-filter");
const inputFilter = document.querySelector(".js-text-task-filter");

function handleFilter(event) {
  event.preventDefault();
  const valueInput = inputFilter.value;
  const arrayFilter = tasks.filter((task) => task.name.includes(valueInput));
  console.log(arrayFilter);
  renderTasks(arrayFilter);
}
btnFilter.addEventListener("click", handleFilter);

const listenCheck = () => {
  const allCheckbox = document.querySelectorAll(".js-check");
  for (const check of allCheckbox) {
    check.addEventListener("change", handleCheck);
  }
};
const renderTasks = (tasks) => {
  taskList.innerHTML = "";
  for (let index = 0; index < tasks.length; index++) {
    /*let classCss = tasks[index].completed ? 'tachado' : null;
    taskList.innerHTML += `<li class= "${classCss}"> 
      ${tasks[index].name}
    </li>`;*/
    if (tasks[index].completed) {
      //tasks[index].completed === true
      taskList.innerHTML += `<li class= "tachado"> 
      <input type="checkbox" class= "js-check" id="${index}" checked>
      ${tasks[index].name}
    </li>`;
    } else {
      taskList.innerHTML += `<li> 
      <input type="checkbox" class= "js-check" id="${index}" >
      ${tasks[index].name}
    </li>`;
    }
  }
  listenCheck();
};

function handleCheck(event) {
  const id = event.target.id;
  console.log(id);
  tasks[id].completed = !tasks[id].completed;
  console.log(tasks);
  renderTasks(tasks);
}
renderTasks(tasks);
/*
  pintar elementos en html
  escuchar eventos 
  una vez escuchas cambias los datos basado en el evento
  volver a pintar, volver a escuchar
  */


//2.13. Peticiones al servidor. 
fetch(`https://dev.adalab.es/api/todo`)
.then((response)=> response.json())
.then((data)=> {
    tasks = data.results;
    console.log(tasks);
    renderTasks(tasks); //pinta el listado en el html (punto 5 del 2.13)
})


