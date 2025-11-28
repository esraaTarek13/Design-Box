const listIcon = document.querySelector(".list-icon");
const showList = document.querySelector(".list-toggle");
const hideList = document.querySelector(".list-toggle-icon");

listIcon.addEventListener("click", () => {
    showList.classList.toggle("show-list-toggle")
})

hideList.addEventListener("click", () => {
    showList.classList.remove("show-list-toggle")
})