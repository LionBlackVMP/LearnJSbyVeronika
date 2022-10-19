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
  let taskBar = document.querySelector(".task_bar");

  function search(event) {
    event.preventDefault();

    let li = document.createElement("li");
    let inputTask = document.getElementById("task");
    if (inputTask.value) {
      taskBar.appendChild(li);

      if (taskIndex) {
        let arrayToDo = JSON.parse(localStorage.getItem("taskIndex"));

        arrayToDo.push(inputTask.value);

        localStorage.setItem("taskIndex", JSON.stringify(arrayToDo));
        let taskIndex = JSON.parse(localStorage.getItem("taskIndex"));
        console.log(arrayToDo);
        let lastElem = taskIndex.slice(-1);
        li.className = "taskList";

        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        checkbox.setAttribute("type", "checkbox");

        let text = document.createElement("span");
        let button = document.createElement("button");

        li.appendChild(label);
        label.appendChild(checkbox);
        label.appendChild(text);
        label.appendChild(button);
        button.textContent = "del";
        button.className = "delete";
        text.innerHTML = lastElem;
        label.className = "label";
      } else {
        taskArrow.push(inputTask.value);
        localStorage.setItem("taskIndex", JSON.stringify(taskArrow));

        let taskIndex = JSON.parse(localStorage.getItem("taskIndex"));

        let lastElem = taskIndex.slice(-1);
        li.className = "taskList";
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        checkbox.setAttribute("type", "checkbox");

        let text = document.createElement("span");
        let button = document.createElement("button");
        li.appendChild(label);
        label.appendChild(checkbox);
        label.appendChild(text);
        label.appendChild(button);
        button.textContent = "del";
        button.className = "delete";
        text.innerHTML = lastElem;
        label.className = "label";
      }

      console.log(taskArrow);
    }
  }

  taskAddForm.addEventListener("submit", search);

  // let task = { description: inputTask.value, comleted: y };
  // let element = document.querySelector("input[type=checkbox]");

  // if (element.checked) {
  //   alert("hi");
  // }

  taskBar.addEventListener("click", function (e) {
    const btn = e.target.closest(".label");
    if (!btn) {
      return;
    }

    btn.parentElement.remove();
    // btn.closest('li').remove();
  });
  window.onload = function () {
    if (taskIndex) {
      let taskBar = document.querySelector(".task_bar");

      // li.innerHTML = localStorage.taskIndex;

      taskIndex.forEach((item) => {
        let li = document.createElement("li");
        li.className = "taskList";
        taskBar.appendChild(li);
        let checkbox = document.createElement("input");
        let label = document.createElement("label");
        checkbox.setAttribute("type", "checkbox");

        let text = document.createElement("span");
        let button = document.createElement("button");

        li.appendChild(label);
        label.appendChild(checkbox);
        label.appendChild(text);
        label.appendChild(button);
        button.textContent = "del";
        button.className = "delete";
        text.innerHTML = item;
        label.className = "label";
      });
    }
  };
}
