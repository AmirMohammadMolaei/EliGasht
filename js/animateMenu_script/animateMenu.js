// AnimateMenu
const header = document.getElementById("header");
window.onscroll = () => {
    if(window.pageYOffset > 150){
        header.classList.add("fixedElement_header");
        header.classList.add("header_boxShadow");
        movePage_toUp_btn.style.display = "block";
    }
    else{
        header.classList.remove("fixedElement_header");
        header.classList.remove("header_boxShadow");
        movePage_toUp_btn.style.display = "none";
    }
}