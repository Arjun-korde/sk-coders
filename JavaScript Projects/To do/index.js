let addBtn = document.getElementById("add-task");
let taskInput = document.querySelector("#input-task");
let taskList = document.querySelector(".task-list");
let delBtns = Array.from(document.querySelectorAll(".del-btn"));
let doneBtns = Array.from(document.querySelectorAll(".done-btn"));
let taskItems = document.querySelectorAll(".task-items");
let actionBtns = document.getElementsByTagName("button");

let task;

function updateTasksList() {
    delBtns = Array.from(document.querySelectorAll(".del-btn"));
    doneBtns = Array.from(document.querySelectorAll(".done-btn"));

    // listener for the delete btns
    delBtns.forEach(ele => {
        ele.addEventListener('click', (e) => {
            console.log("parent : " + e.target.parentElement.parentElement.remove());
        })
    });

    // listener for the done btns
    doneBtns.forEach(ele => {
        ele.addEventListener('click', (e) => {
            console.log("in done task" + e.target.tagName);
            e.target.parentElement.parentElement.firstElementChild.style.textDecoration = 'line-through';

        })
    });
}

// add task to the task list
addBtn.addEventListener('click', function (e) {
    task = taskInput.value.trim();
    // console.log("task ; " + task);

    if (!task) {
        alert("enter task please");
        return;
    }
    console.log(("in add btn"));


    let taskElement = document.createElement("div");
    taskElement.classList.add('task-item');
    taskElement.innerHTML = `
                            <div class='task-title'>
                            ${task}
                            </div>
                            <div class="hr"></div>
                            <div class='task-options'>
                                <button class='done-btn'> Done </button>
                                <button class='del-btn' > Delete </button>
                            </div>
                            `;
    taskList.appendChild(taskElement);
    taskItems = document.querySelectorAll(".task-items");
    updateTasksList();
});


