// Form animation

let buttonNewTask = document.getElementById("newTask")
let formElement = document.getElementById("formElement")
let cancelButton = document.getElementById("cancelForm")


buttonNewTask.addEventListener("click", () => {
    formElement.classList.add("active")
})

cancelButton.addEventListener("click", () => {
    formElement.classList.remove("active")
})