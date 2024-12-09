// Show header menu
const showMenu_header = document.getElementById("showMenu_header");
showMenu_header.onclick = () => {
    coverMenu.style.opacity = "1";
    coverMenu.style.visibility = "visible";
    menu_header.style.right = "0px";
    animate_menu.style.zIndex = "-1";
} 
const close_menu = document.getElementById("close_menu");
close_menu.onclick = () => {
    coverMenu.style.opacity = "0";
    coverMenu.style.visibility = "hidden";
    menu_header.style.right = "-300px";
    animate_menu.style.zIndex = "999";
}