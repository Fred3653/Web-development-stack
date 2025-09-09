const openButton = document.querySelector("#sidebar-button");
const outButton1 = document.querySelector("#logo");
const outButton2 = document.querySelector("#sidebarout-button");
const sideBar = document.querySelector("#sidebar");
const main = document.querySelector("#main");
const sideBarMain = document.querySelector("#sidebar-main");
const sideBarHeader = document.querySelector("#sidebar-header");

function openClose() {
    sideBar.classList.toggle("w-[0vw]");
    sideBar.classList.toggle("w-[18vw]");
    main.classList.toggle("w-full");
    main.classList.toggle("w-[82vw]");
    sideBarMain.classList.toggle("hidden");
    openButton.classList.toggle("invisible");
}

openButton.addEventListener("click", openClose);
outButton1.addEventListener("click", openClose);
outButton2.addEventListener("click", openClose);