// show followUp modal
const followUp = document.getElementById("followUp");
followUp.onclick = () => {
    showML(followUp_modal_cover,followUp_modal);
}
const followUp_modal_close = document.getElementById("followUp_modal_close");
followUp_modal_close.onclick = () => {
    hiddenML(followUp_modal_cover,followUp_modal);
}