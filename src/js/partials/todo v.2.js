const isToDoPage = document.querySelector(".to-do-page");

// возвращает  false
// let a = "";
// let b;
// let c = 0;
// let d = null;
// let v = undefined;

if (isToDoPage) {
  window.onload = function () {
    let taskAddForm = document.querySelector("#taskAddForm");
    let taskIndex = JSON.parse(localStorage.getItem("taskIndex")) || [];
    const taskBar = document.querySelector(".task_bar");

    function renderTask(item) {
      const li = document.createElement("li");
      li.className = "taskList";

      const input = document.createElement("input");
      const label = document.createElement("label");
      input.setAttribute("type", "checkbox");

      const text = document.createElement("span");
      const button = document.createElement("span");

      li.appendChild(label);
      label.appendChild(input);
      label.appendChild(text);
      label.appendChild(button);

      button.className = "delete";
      text.className = "text";
      text.innerHTML = item.value;
      label.className = "label";
      taskBar.appendChild(li);
      input.className = "checkbox";

      if (item.complete == true) {
        input.setAttribute("checked", true);
      }
    }

    function createTask(event) {
      event.preventDefault();

      let inputTask = document.getElementById("task");
      let inputValue = inputTask.value;
      if (inputValue.trim()) {
        let taskObjects = {
          value: inputValue.trim(),
          complete: false,
        };
        taskIndex.push(taskObjects);
        localStorage.setItem("taskIndex", JSON.stringify(taskIndex));

        renderTask(inputTask);

        inputTask.value = "";
      }
    }
    taskIndex.forEach((item) => {
      renderTask(item);
    });
    taskAddForm.addEventListener("submit", createTask);

    taskBar.addEventListener("click", (e) => {
      if (e.target.className == "checkbox") {
        let checkbox = document.querySelectorAll(".checkbox");
        let checkboxArr = Array.from(checkbox);

        let indexElement = checkboxArr.indexOf(e.target);
        const checkboxClass =
          document.getElementsByClassName("checkbox")[indexElement];

        checkboxArr.forEach(() => {
          if (checkboxClass.checked) {
            taskIndex[indexElement].complete = true;
            localStorage.setItem("taskIndex", JSON.stringify(taskIndex));
          } else {
            taskIndex[indexElement].complete = false;
            localStorage.setItem("taskIndex", JSON.stringify(taskIndex));
          }
        });
      }
    });

    taskBar.addEventListener("click", function (e) {
      if (e.target.className == "delete") {
        let buttonsDeleteTasks = taskBar.querySelectorAll(".delete");

        const arr = Array.from(buttonsDeleteTasks);

        let indexElement = arr.indexOf(e.target);

        taskIndex.splice(indexElement, 1);
        localStorage.setItem("taskIndex", JSON.stringify(taskIndex));
        e.target.parentElement.parentElement.remove();
      }
    });

    const clearAll = document.querySelector(".clear_all");
    const taskList = document.getElementsByClassName("taskList");
    clearAll.addEventListener("click", () => {
      localStorage.clear();
      taskIndex = [];
      Array.from(taskList).forEach((element) => element.remove());
    });

    const clearDone = document.querySelector(".clear_done");
    clearDone.addEventListener("click", () => {
      clearTasks = taskIndex.filter((element) => element.complete == false);

      localStorage.setItem("taskIndex", JSON.stringify(clearTasks));

      Array.from(taskList).forEach((element) => element.remove());
      e = clearTasks;
      taskIndex = e;
      console.log(taskIndex);
      console.log(clearTasks);
      clearTasks.forEach((item) => {
        renderTask(item);
      });
    });
    const filterDone = document.querySelector(".filter_done");
    filterDone.addEventListener("click", () => {
      function sortDone(field) {
        return (a, b) => (a[field] > b[field] ? -1 : 1);
      }

      taskIndex.sort(sortDone("complete"));

      localStorage.setItem("taskIndex", JSON.stringify(taskIndex));
      Array.from(taskList).forEach((element) => element.remove());
      taskIndex.forEach((item) => {
        renderTask(item);
      });
    });
    const filterUndone = document.querySelector(".filter_undone");
    filterUndone.addEventListener("click", () => {
      function sortDone(field) {
        return (a, b) => (a[field] > b[field] ? 1 : -1);
      }

      taskIndex.sort(sortDone("complete"));

      localStorage.setItem("taskIndex", JSON.stringify(taskIndex));
      Array.from(taskList).forEach((element) => element.remove());
      taskIndex.forEach((item) => {
        renderTask(item);
      });
    });
  };
}
