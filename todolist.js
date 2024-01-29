const inputDOM = document.querySelector("#task");
const btnDOM = document.querySelector("#taskadd");
const liDOM = document.querySelector("#list");
btnDOM.addEventListener("click", addNewTask);

function addNewTask() {
  if (inputDOM.value.trim().length == 0) {
    $("#errorToast").toast("show");
    return;
  }
  let newTask = inputDOM.value;
  inputDOM.value = "";
  let newLiDOM = document.createElement("li");
  newLiDOM.innerHTML = newTask;
  liDOM.appendChild(newLiDOM);
  $("#successToast").toast("show");
}

liDOM.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
  }
});

liDOM.addEventListener("dblclick", function (e) {
  if (e.target.tagName == "LI") {
    e.target.remove();
  }
});
