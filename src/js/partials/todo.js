const isToDoPage = document.querySelector(".to-do-page");

// возвращает  false
// let a = "";
// let b;
// let c = 0;
// let d = null;
// let v = undefined;

if (isToDoPage) {
  let taskArrow = [];

  let taskAddForm = document.querySelector("#taskAddForm");
  let taskIndex = JSON.parse(localStorage.getItem("taskIndex"));
  function search(event) {
    event.preventDefault();
    let taskBar = document.querySelector(".task_bar");
    let li = document.createElement("li");
    let inputTask = document.getElementById("task");

    taskBar.appendChild(li);
    // при обновлении страницы, массив обнуляется и нихера не работает как надо
    if (taskIndex) {
      let arrayToDo = JSON.parse(localStorage.getItem("taskIndex"));

      arrayToDo.push(inputTask.value);

      localStorage.setItem("taskIndex", JSON.stringify(arrayToDo));
      let taskIndex = JSON.parse(localStorage.getItem("taskIndex"));
      console.log(arrayToDo);
      let lastElem = taskIndex.slice(-1);
      li.className = "taskList";
      li.innerHTML = lastElem;
    } else {
      taskArrow.push(inputTask.value);
      localStorage.setItem("taskIndex", JSON.stringify(taskArrow));

      let taskIndex = JSON.parse(localStorage.getItem("taskIndex"));

      let lastElem = taskIndex.slice(-1);
      li.className = "taskList";
      li.innerHTML = lastElem;
    }

    console.log(taskArrow);
  }

  taskAddForm.addEventListener("submit", search);

  window.onload = function () {
    if (taskIndex) {
      let taskBar = document.querySelector(".task_bar");

      // li.innerHTML = localStorage.taskIndex;

      taskIndex.forEach((item, index, array) => {
        let li = document.createElement("li");
        li.className = "taskList";
        taskBar.appendChild(li);
        li.innerHTML = item;
        console.log(`${item} имеет позицию ${index} в ${array}`);
      });
    }
  };
}
