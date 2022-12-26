const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");

function handleToDoSubmit(e) {
  e.preventDefault();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
