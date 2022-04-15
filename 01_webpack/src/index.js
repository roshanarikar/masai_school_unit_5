import "./index.js";

let form = document.querySelector("form");
form.setAttribute("class", "taskForm");
document.querySelector("#submit").addEventListener("submit", (e) => {
  e.preventDefault();
  let task = document.getElementById("task").value;
  append(task);
});

function append(task, id) {
  let row = document.createElement("tr");
  row.setAttribute("class", "row");
  let td1 = document.createElement("td");
  td1.textContent = task;
  row.append(td1);
  document.querySelector("tbody").append(row);
}
