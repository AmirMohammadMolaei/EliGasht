// SortItems => rotate icon
let memury_sort_default = true;
const sort_default_ticket = document.getElementById("sort_default_ticket");
var memury_sort_price = true;
const sort_price_ticket = document.getElementById("sort_price_ticket");
let memury_sort_time = true;
const sort_time_ticket = document.getElementById("sort_time_ticket");
let memury_sort_stop = true;
const sort_stop_ticket = document.getElementById("sort_stop_ticket");
sort_default_ticket.onclick = () => {
    if (memury_sort_default == true) {
        sort_default_icon.classList.add("rotate_sortIcon");
        memury_sort_default = false;
    }
    else if(memury_sort_default == false){
        sort_default_icon.classList.remove("rotate_sortIcon");
        memury_sort_default = true;
    }
}
sort_price_ticket.onclick = () => {
    if (memury_sort_price == true) {
        sort_price_icon.classList.add("rotate_sortIcon");
        memury_sort_price = false;
        sortPrice_text.innerHTML = "گران ترین";
        chepsetPrice.style.height = "0px";
    }
    else if(memury_sort_price == false){
        sort_price_icon.classList.remove("rotate_sortIcon");
        memury_sort_price = true;
        sortPrice_text.innerHTML = "ارزان ترین";
        chepsetPrice.style.height = "47px";
    }
}
sort_time_ticket.onclick = () => {
    if (memury_sort_time == true) {
        sort_time_icon.classList.add("rotate_sortIcon");
        memury_sort_time = false;
    }
    else if(memury_sort_time == false){
        sort_time_icon.classList.remove("rotate_sortIcon");
        memury_sort_time = true;
    }
}
sort_stop_ticket.onclick = () => {
    if (memury_sort_stop == true) {
        sort_stop_icon.classList.add("rotate_sortIcon");
        memury_sort_stop = false;
    }
    else if(memury_sort_stop == false){
        sort_stop_icon.classList.remove("rotate_sortIcon");
        memury_sort_stop = true;
    }
}
sort_default_ticket.click();