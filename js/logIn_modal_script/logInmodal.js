// show modal
const logIn = document.getElementById("logIn");
logIn.onclick = () => {
    showML(modalCover_logIn,logIn_modal);
    passengerArrival.click();
}
const logIn_modal_closeBtn = document.getElementById("logIn_modal_closeBtn");
logIn_modal_closeBtn.onclick = () => {
    hiddenML(modalCover_logIn,logIn_modal);
}
// change value of title box
const passengerArrival = document.getElementById("passengerArrival");
passengerArrival.onclick = () => {
    titleBox_logInmodal.innerHTML = "شماره موبایل یا ایمیل :";
}
const agencyArrival = document.getElementById("agencyArrival");
agencyArrival.onclick = () => {
    titleBox_logInmodal.innerHTML = "نام کاربری :";
}