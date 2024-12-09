function showML(name_modal_cover,name_modal){
    name_modal_cover.style.opacity = "1";
    name_modal_cover.style.visibility = "visible";
    name_modal.classList.add("showModal");
}
function hiddenML(name_modal_cover,name_modal){
    name_modal_cover.style.opacity = "0";
    name_modal_cover.style.visibility = "hidden";
    name_modal.classList.remove("showModal");
}