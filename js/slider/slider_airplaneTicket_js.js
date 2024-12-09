ticketplane_items = [
    { id: 1, date: "دوشنبه، 13 فروردین", price: "4,208,207" },
    { id: 2, date: "سه شنبه، 14 فروردین", price: "4,208,207" },
    { id: 3, date: "چهار شنبه، 15 فروردین", price: "6,956,700" },
    { id: 4, date: "پنجشنبه، 16 فروردین", price: "4,208,207" },
    { id: 5, date: "جمعه، 17 فروردین", price: "4,208,207" },
    { id: 6, date: "شنبه، 18 فروردین", price: "4,208,207" },
    { id: 7, date: "یکشنبه، 19 فروردین", price: "4,167,701" },
    { id: 8, date: "دوشنبه، 20 فروردین", price: "4,208,207" },
    { id: 9, date: "سه شنبه، 21 فروردین", price: "4,208,207" },
    { id: 10, date: "چهار شنبه، 22 فروردین", price: "4,208,207" },
    { id: 11, date: "پنجشنبه، 23 فروردین", price: "4,208,207" },
    { id: 12, date: "جمعه، 24 فروردین", price: "4,208,207" },
    { id: 13, date: "شنبه، 25 فروردین", price: "6,956,700" },
    { id: 14, date: "یکشنبه، 26 فروردین", price: "4,208,207" },
    { id: 15, date: "دوشنبه، 27 فروردین", price: "4,208,207" },
    { id: 16, date: "شنبه، 28 فروردین", price: "4,208,207" },
    { id: 17, date: "یکشنبه، 29 فروردین", price: "4,167,701" },
    { id: 18, date: "دوشنبه، 30 فروردین", price: "3,819,194" },
    { id: 19, date: "سه شنبه، 31 فروردین", price: "4,208,207" },
    { id: 20, date: "چهار شنبه، 1 اردیبهشت", price: "4,208,207" },
    { id: 21, date: "پنجشنبه، 2 اردیبهشت", price: "4,208,207" },
]
for (let i = 0; i < ticketplane_items.length; i++) {
    let sliderPlane_items = document.createElement("div");
    sliderPlane_items.className = "ticketplaneSlider_items";

    let sliderPlane_date = document.createElement("div");
    sliderPlane_date.className = "date_move";
    sliderPlane_date.innerHTML = ticketplane_items[i].date;

    let sliderPlane_price = document.createElement("div");
    sliderPlane_price.className = "priceTicket";
    sliderPlane_price.innerHTML = ticketplane_items[i].price + "تومان";

    sliderPlane_items.appendChild(sliderPlane_date);
    sliderPlane_items.appendChild(sliderPlane_price);
    container_ticketSlider.appendChild(sliderPlane_items);
}

// move container
var container_ticketSlider_position = -100;
const ticketSlider_arrow_next = document.getElementById("ticketSlider_arrow_next");
ticketSlider_arrow_next.onclick = () => {
    if (container_ticketSlider_position < 400) {
        container_ticketSlider_position = container_ticketSlider_position - 50;
        container_ticketSlider.style.left = container_ticketSlider_position + "%";
    }
    if (container_ticketSlider_position <= (-350)) {
        container_ticketSlider_position = 0;
        container_ticketSlider.style.left = container_ticketSlider_position + "%";
    }
}
ticketSlider_arrow_prev.onclick = () => {
    if (container_ticketSlider_position < 0) {
        container_ticketSlider_position = container_ticketSlider_position + 50;
        container_ticketSlider.style.left = container_ticketSlider_position + "%";
    }
    else if (container_ticketSlider_position == 0) {
        container_ticketSlider_position = -300;
        container_ticketSlider.style.left = container_ticketSlider_position + "%";
    }
}