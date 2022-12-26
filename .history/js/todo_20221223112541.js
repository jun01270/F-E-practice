const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newToDo) {
  const listOfToDo = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newToDo;
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  listOfToDo.appendChild(span);
  listOfToDo.appendChild(deleteButton);

  toDoList.appendChild(listOfToDo);
  localStorage.setItem("할 일", newToDo);
}

function handleToDoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  paintToDo(newToDo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

paintToDo();
