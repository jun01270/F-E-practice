const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDoLists() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const todoLists = e.target.parentElement;
  console.dir(todoLists);
  todoLists.remove();
  const cleanToDos = toDos.filter(todoFilter);
  toDos = cleanToDos;
  saveToDoLists();

  function todoFilter(newToDoObj) {
    return newToDoObj.id !== parseInt(li.id);
  }
}

function paintToDo(newToDoObj) {
  const listOfToDo = document.createElement("li");
  listOfToDo.id = newToDoObj.Id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
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
    Id: toDos.length + 1,
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
