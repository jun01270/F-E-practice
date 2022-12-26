const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const toDos = [];

function saveToDoLists() {
  localStorage("todos", JSON.stringify(toDos));
}

function deleteToDo(e) {
  const todoLists = e.target.parentElement;
  todoLists.remove();
}

function paintToDo(newToDo) {
  const listOfToDo = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
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
  toDos.push(newToDo);
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

paintToDo();
