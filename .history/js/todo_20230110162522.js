const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const toDoId = document.querySelector("ul#todo-list div");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDoLists() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const toDoList = e.target.parentNode;
  toDoList.remove();
  const cleanToDos = toDos.filter((toDo) => toDo.id !== toDoId.id);
  toDos = cleanToDos;
  saveToDoLists();
}

function paintToDo(newToDoObj) {
  const listOfToDo = document.createElement("div");
  listOfToDo.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  listOfToDo.appendChild(span);
  listOfToDo.appendChild(deleteButton);
  toDoList.appendChild(listOfToDo);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: toDos.length + 1,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDoLists();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const getToDo = localStorage.getItem(TODOS_KEY);
if (getToDo !== null) {
  const parseToDo = JSON.parse(getToDo);
  toDos = parseToDo;
  parseToDo.forEach(paintToDo);
}
