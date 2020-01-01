document.querySelector("#navbar i").addEventListener("click", showMenu);
function showMenu() {
    let menuBtnContainer = document.getElementById("menu-buttons-container");
    menuBtnContainer.className = "menu-buttons-container-shown";
    /*Please read the description of css class .menu-buttons-container-shown in css file*/


    document.querySelector("#navbar i").removeEventListener("click", showMenu);
    document.querySelector("#navbar i").addEventListener("click", hideMenu);
}
function hideMenu() {
    let menuBtnContainer = document.getElementById("menu-buttons-container");
    menuBtnContainer.className = "menu-buttons-container-hidden";
    /*Please read the description of css class .menu-buttons-container-hidden in css file*/

    document.querySelector("#navbar i").removeEventListener("click", hideMenu);
    document.querySelector("#navbar i").addEventListener("click", showMenu);
}
