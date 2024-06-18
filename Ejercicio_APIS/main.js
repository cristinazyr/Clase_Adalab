"use strict";
const taskUl = document.querySelector(".js__taskUl");

/*const tasks = [
  {
    id: 102,
    name: "sacar punta a los lápices",
    completed: true,
  },
  {
    id: 240,
    name: "poner la lavadora",
    completed: false,
  },
  {
    id: 278,
    name: "comprar bragas",
    completed: false,
  },
  {
    id: 509,
    name: "Sacar punta a los lápices",
    completed: false,
  },
];
*/

let tasks = [];
fetch("https://dev.adalab.es/api/todo/Adalab")
  .then((response) => response.json())
  .then((data) => {
    tasks = data.results;
    renderAllTasks();
  });

function generateOneTask(taskObj) {
  if (taskObj.completed) {
    const html = `<li>
                  <input type="checkbox" id="task-${taskObj.id}">
                  <label class="completed" for="task-${taskObj.id}">${taskObj.name}</label>
                </li>`;
    return html;
  } else {
    const html = `<li>
                  <input type="checkbox" id="task-${taskObj.id}">
                  <label for="task-${taskObj.id}">${taskObj.name}</label>
                </li>`;
    return html;
  }
}

function renderAllTasks() {
  taskUl.innerHTML = "";
  let html = "";

  for (const oneTask of tasks) {
    html += generateOneTask(oneTask);
  }
  taskUl.innerHTML = html;
}

renderAllTasks();
