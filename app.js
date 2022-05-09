const form = document.querySelector("form");
const input = document.querySelector(".input");
const button = document.querySelector(".button");
const list = document.querySelector(".list");
const p = document.querySelector("p");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  toDo();
  input.value = "";
});

function toDo() {
  // reading the input value
  const value = input.value;

  if (value === "") {
    p.innerText = "Your task is empty!!!  Enter again";
    return;
  } else {
    p.innerText = "Enter your Task";
  }

  // creating new Element li to add value
  const li = document.createElement("li");

  // adding input value to li
  li.append(value);

  //   creating delete button
  // const dlt = document.createElement("button");
  // dlt.innerText = 'delete';

  // appending delete button with li
  // li.append(' ' , dlt);

  // appending li to ul
  list.append(li);

  // adds line-through on clicking
  li.addEventListener("click", () => {
    li.style.textDecoration = "line-through";
  });

  // removes li on double clicking
  li.addEventListener("dblclick", () => {
    list.removeChild(li);
  });
}
