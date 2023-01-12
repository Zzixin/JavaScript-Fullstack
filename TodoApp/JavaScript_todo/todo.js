let todoItems = [];

const InputBox = document.querySelector("#inputBox");
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("#todoList");

const displayContent = (todoItems) => {
  todoList.textContent = "";
  const newList = todoItems.map((todo, idx) => {
    const newItem = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.textContent = todo;
    const newBtn = document.createElement("button");
    newBtn.textContent = "Delete";
    //newBtn.onClick = "reply_click(this.id)";
    newBtn.onclick = delTodo;
    newBtn.id = `${idx}`;
    newItem.append(newSpan);
    newItem.append(newBtn);
    return newItem;
  });
  todoList.append(...newList);
};

addBtn.onclick = () => {
  const todo = InputBox.value;
  if (!todo.trim()) {
    alert("Please input the valid to-do");
    InputBox.value = "";
    return;
  }
  todoItems.push(todo);
  displayContent(todoItems);
  InputBox.value = "";
};

const delTodo = (event) => {
  const num = event.target.id;
  console.log(num);
  todoItems = [...todoItems.slice(0, num), ...todoItems.slice(num + 1)];
  //todoItems = newItems;
  displayContent(todoItems);
};

// function reply_click(clicked_id) {
//   console.log(clicked_id);
// }
// delBtn.addEventListener("click", (event) => {
//   let target = event.target;
//   console.log(target);
// });

// document.querySelectorAll("delBtn").forEach((occurence) => {
//   let id = occurence.getAttribute("id");
//   occurence.addEventListener("click", function () {
//     console.log("A button with ID " + id + " was clicked!");
//   });
// });
