const changeType_mood = document.getElementById("changeType_mood");
        /* get element by class name and create array */
const flightInformation_part = document.getElementsByClassName("flightInformation_part");
const fullPrice_part = document.getElementsByClassName("fullPrice_part");
const modal_description = document.getElementsByClassName("modal_description");
const tab = document.getElementsByClassName("tab");
        /* dark Mood function */
function changeThemeTo(){
    if (memuryChangetype == true) {
        /* switch to */

        typeSwitchto.style.left = "50px";
        typeMood.innerHTML = "شب";
        typeMood.style.right = "40px";
        memuryChangetype = false;

        /* Dark */
        /* body */
        webBody.classList.add("Dark");
        /* header */
        header.style.backgroundColor = "#1c1c1c";
        /* content */
        /* searchBox */
        searchBox.style.color = "#fff";
        mainSearch_toolbar.style.backgroundColor = "#414141";
        reversCity_btn.style.backgroundColor = "#414141";
        /* side */
        side.style.color = "#fff";
        /* modal */
        logIn.style.backgroundImage = "url(images/icon/logIn_cover_light.png)";
        myTicket.style.backgroundImage = "url(images/icon/myTickets_icon_light.png)";
        followUp.style.backgroundImage = "url(images/icon/followUp_cover_light.png)";
        bg_noStop.style.backgroundImage = "url(images/icon/no_stopIcon_light.png)";
        bg_oneStop.style.backgroundImage = "url(images/icon/one_stopIcon_light.png)";
        bg_twoStop.style.backgroundImage = "url(images/icon/two_stopIcon_light.png)";
        animate_menu.style.color = "#fff";
        footer.style.backgroundColor = "#1c1c1c";
        footer.style.color = "#fff";
        airplane_ticket.style.backgroundImage = "url(images/icon/airplane_tiket_light.png)";
        hotel_ticket.style.backgroundImage = "url(images/icon/hotel_tiket_light.png)";
        tor_ticket.style.backgroundImage = "url(images/icon/tor_tiket_light.png)";
        package_ticket.style.backgroundImage = "url(images/icon/package_tiket_light.png)";
        train_ticket.style.backgroundImage = "url(images/icon/train_tiket_light.png)";
        bime_ticket.style.backgroundImage = "url(images/icon/bime_tiket_light.png)";
        showMenu_header.style.backgroundImage = "url(images/icon/menu_icon_light.png)";
        menu_header.style.backgroundColor = "#414141";
        menu_header.style.color = "#fff";
        airplane_ticket_headerMenu.style.backgroundImage = "url(images/icon/airplane_tiket_light.png)";
        hotel_ticket_headerMenu.style.backgroundImage = "url(images/icon/hotel_tiket_light.png)";
        tor_ticket_headerMenu.style.backgroundImage = "url(images/icon/tor_tiket_light.png)";
        package_ticket_headerMenu.style.backgroundImage = "url(images/icon/package_tiket_light.png)";
        train_ticket_headerMenu.style.backgroundImage = "url(images/icon/train_tiket_light.png)";
        bime_ticket_headerMenu.style.backgroundImage = "url(images/icon/bime_tiket_light.png)";
        torist_headerMenu.style.backgroundImage = "url(images/icon/tourism_icon_light.png)";
        help_headerMenu.style.backgroundImage = "url(images/icon/help_icon_light.png)";
        close_menu.style.backgroundImage = "url(images/icon/close_icon_light.png)";
        modal_information.style.backgroundColor = "#414141";
        modal_information.style.color = "#fff";
        flightInformation_part[0].style.color = "#fff";
        flightInformation_part[0].style.backgroundColor = "#414141";
        fullPrice_part[0].style.color = "#fff";
        fullPrice_part[0].style.backgroundColor = "#414141";
        closeBtn_informationFly.style.backgroundColor = "#414141";
        closeBtn_informationFly.style.backgroundImage = "url(images/icon/close_icon_light.png)";
        followUp_modal.style.backgroundColor = "#414141";
        modal_description[0].style.color = "#fff";
        followUp_modal_close.style.backgroundImage = "url(images/icon/close_icon_light.png)";
        logIn_modal.style.backgroundColor = "#414141";
        logIn_modal_closeBtn.style.backgroundImage = "url(images/icon/close_icon_light.png)";
        tab[0].style.color = "#fff";
        myTicket_modal.style.backgroundColor = "#414141";
        closeBtn_myTicket_modal.style.backgroundImage = "url(images/icon/close_icon_light.png)";
        textWarn_ticket.style.backgroundColor = "#414141";
        textWarn_ticket.style.color = "#fff";
        searchIn_myticketModal.style.backgroundColor = "#fff";
        searchIn_myticketModal.style.color = "#000";
        searchIn_myticketModal.style.backgroundImage = "url(images/icon/searchIcon.png)";
        passengers_toolbar_containerMenu.style.backgroundColor = "#414141";
        way_toolbar_containerMenu.style.backgroundColor = "#414141";
        classOffly_toolbar_containerMenu.style.backgroundColor = "#414141";
    } else {
        typeSwitchto.style.left = "3px";
        typeMood.innerHTML = "روز";
        typeMood.style.right = "10px";
        memuryChangetype = true;

        /* Dark */

        webBody.classList.remove("Dark");
        searchBox.style.color = "#212529";
        header.style.backgroundColor = "#fff";
        logIn.style.backgroundImage = "url(images/icon/logIn_cover.png)";
        myTicket.style.backgroundImage = "url(images/icon/myTickets_icon.png)";
        followUp.style.backgroundImage = "url(images/icon/followUp_cover.png)";
        mainSearch_toolbar.style.backgroundColor = "#fff";
        reversCity_btn.style.backgroundColor = "#fff";
        sortBox_container.style.backgroundColor = "#fff";
        bg_noStop.style.backgroundImage = "url(images/icon/no_stopIcon.png)";
        bg_oneStop.style.backgroundImage = "url(images/icon/one_stopIcon.png)";
        bg_twoStop.style.backgroundImage = "url(images/icon/two_stopIcon.png)";
        side.style.color = "#465280";
        animate_menu.style.color = "#525658";
        footer.style.backgroundColor = "#fff";
        footer.style.color = "#5f6368";
        airplane_ticket.style.backgroundImage = "url(images/icon/airplane_tiket.png)";
        hotel_ticket.style.backgroundImage = "url(images/icon/hotel_tiket.png)";
        tor_ticket.style.backgroundImage = "url(images/icon/tor_tiket.png)";
        package_ticket.style.backgroundImage = "url(images/icon/package_tiket.png)";
        train_ticket.style.backgroundImage = "url(images/icon/train_tiket.png)";
        bime_ticket.style.backgroundImage = "url(images/icon/bime_tiket.png)";
        showMenu_header.style.backgroundImage = "url(images/icon/menu_icon.png)";
        menu_header.style.backgroundColor = "#fff";
        menu_header.style.color = "#000";
        airplane_ticket_headerMenu.style.backgroundImage = "url(images/icon/airplane_tiket.png)";
        hotel_ticket_headerMenu.style.backgroundImage = "url(images/icon/hotel_tiket.png)";
        tor_ticket_headerMenu.style.backgroundImage = "url(images/icon/tor_tiket.png)";
        package_ticket_headerMenu.style.backgroundImage = "url(images/icon/package_tiket.png)";
        train_ticket_headerMenu.style.backgroundImage = "url(images/icon/train_tiket.png)";
        bime_ticket_headerMenu.style.backgroundImage = "url(images/icon/bime_tiket.png)";
        torist_headerMenu.style.backgroundImage = "url(images/icon/tourism_icon.png)";
        help_headerMenu.style.backgroundImage = "url(images/icon/help_icon.png)";
        close_menu.style.backgroundImage = "url(images/icon/close_icon.png)";
        modal_information.style.backgroundColor = "#fff";
        modal_information.style.color = "#000";
        flightInformation_part[0].style.color = "#000";
        flightInformation_part[0].style.backgroundColor = "#fff";
        fullPrice_part[0].style.color = "#000";
        fullPrice_part[0].style.backgroundColor = "#fff";
        closeBtn_informationFly.style.backgroundColor = "#fff";
        closeBtn_informationFly.style.backgroundImage = "url(images/icon/close_icon.png)";
        followUp_modal.style.backgroundColor = "#fff";
        modal_description[0].style.color = "#383838";
        followUp_modal_close.style.backgroundImage = "url(images/icon/close_icon.png)";
        logIn_modal.style.backgroundColor = "#fff";
        logIn_modal_closeBtn.style.backgroundImage = "url(images/icon/close_icon.png)";
        tab[0].style.color = "#333";
        myTicket_modal.style.backgroundColor = "#fff";
        closeBtn_myTicket_modal.style.backgroundImage = "url(images/icon/close_icon.png)";
        textWarn_ticket.style.backgroundColor = "#fff";
        textWarn_ticket.style.color = "#000";
        searchIn_myticketModal.style.backgroundColor = "#414141";
        searchIn_myticketModal.style.color = "#fff";
        searchIn_myticketModal.style.backgroundImage = "url(images/icon/searchIcon_light.png)";
        passengers_toolbar_containerMenu.style.backgroundColor = "#fff";
        way_toolbar_containerMenu.style.backgroundColor = "#fff";
        classOffly_toolbar_containerMenu.style.backgroundColor = "#fff";
    }
    fill_main(flyTickets);
}