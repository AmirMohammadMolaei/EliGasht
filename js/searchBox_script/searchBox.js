// Hover choose city
const reversCity_btn = document.getElementById("reversCity_btn");
reversCity_btn.onmouseover = () => {
    lineRight_icon.style.outline = "2px solid #007aff";
    lineLeft_icon.style.outline = "2px solid #007aff";
}
reversCity_btn.onmouseout = () => {
    lineRight_icon.style.outline = "none";
    lineLeft_icon.style.outline = "none";
}
const firstCity = document.getElementById("firstCity");
const lastCity = document.getElementById("lastCity");
firstCity.onmouseover = () => {
    firstCity.style.outline = "2px solid #007aff";
    lineRight_icon.style.outline = "2px solid #007aff";
}
firstCity.onmouseout = () => {
    firstCity.style.outline = "none";
    lineRight_icon.style.outline = "none";
}
lastCity.onmouseover = () => {
    lastCity.style.outline = "2px solid #007aff";
    lineLeft_icon.style.outline = "2px solid #007aff";
}
lastCity.onmouseout = () => {
    lastCity.style.outline = "none";
    lineLeft_icon.style.outline = "none";
}

informationSearch = [
    {id:"1", townName:"تهران", nameAirport:"(IKA)",},
    {id:"2", townName:"استانبول", nameAirport:"(IST)",},
    {id:"3", townName:"آنتالیا", nameAirport:"(AYT)",},
    {id:"4", townName:"دبی", nameAirport:"(DXB)",},
    {id:"5", townName:"مشهد", nameAirport:"(MHD)",},
    {id:"6", townName:"کیش", nameAirport:"(KIH)",},
    {id:"7", townName:"نجف", nameAirport:"(NJF)",},
    {id:"8", townName:"آنکارا", nameAirport:"(ESB)",},
    {id:"9", townName:"ازمیر", nameAirport:"(ADB)",},
    {id:"10", townName:"شیراز", nameAirport:"(SYZ)",},
    {id:"11", townName:"اهواز", nameAirport:"(AWZ)",},
    {id:"12", townName:"قشم", nameAirport:"(GSM)",},
    {id:"13", townName:"اصفهان", nameAirport:"(IFN)",},
    {id:"14", townName:"تفلیس", nameAirport:"(TBS)",},
    {id:"15", townName:"مسقط", nameAirport:"(MCT)",},
    {id:"16", townName:"بندرعباس", nameAirport:"(BND)",},
    {id:"17", townName:"تبریز", nameAirport:"(TBZ)",},
    {id:"18", townName:"پاریس", nameAirport:"(QRY)",},
    {id:"19", townName:"چابهار", nameAirport:"(ZBR)",},
    {id:"20", townName:"یزد", nameAirport:"(AZD)",},
    {id:"21", townName:"بوشهر", nameAirport:"(BUZ)",},
    {id:"22", townName:"آبادان", nameAirport:"(ABD)",},
    {id:"23", townName:"کوالالامپور", nameAirport:"(همه فرودگاه ها)",},
    {id:"24", townName:"کرمانشاه", nameAirport:"(KSH)",},
    {id:"25", townName:"کرمان", nameAirport:"(KER)",},
    {id:"26", townName:"عسلویه", nameAirport:"(PGU)",},
    {id:"27", townName:"اردبیل", nameAirport:"(ADU)",},
    {id:"28", townName:"لندن", nameAirport:"(همه فرودگاه ها)",},
    {id:"29", townName:"ارومیه", nameAirport:"(OMH)",},
    {id:"30", townName:"بغداد", nameAirport:"(همه فرودگاه ها)",},
];

const menu_container = document.getElementById("menu_container");
function create_searchMenuItems(searchDataItems){
    let itMenusearch = document.createElement("li");
    itMenusearch.className = "menuItems";

    itMenusearch.addEventListener("click", function(){
        let sherched = searchDataItems.townName + searchDataItems.nameAirport;
        searchBoxmenu.style.display = "none";
        if(memury_searchedValue == true){firstCity_value.innerHTML = sherched;}
        else{lastCity_value.innerHTML = sherched;}
    });

    let NAcity = document.createElement("span");
    NAcity.className = "city";
    NAcity.innerHTML = searchDataItems.townName;

    let NAairport = document.createElement("span");
    NAairport.className = "airport";
    NAairport.innerHTML = searchDataItems.nameAirport;

    itMenusearch.appendChild(NAairport);
    itMenusearch.appendChild(NAcity);
    menu_container.appendChild(itMenusearch);
}
function navigationSearchdata(searchData){
    menu_container.innerHTML = "";
    for(let i = 0; i < searchData.length; i++){
        create_searchMenuItems(searchData[i]);
    }
}
navigationSearchdata(informationSearch);
// choose
var memury_searchedValue;
firstCity.onclick = () => {
    searchBoxmenu.style.right = "0";
    searchBoxmenu.style.display = "flex";
    memury_searchedValue = true;
    searhBoxinput.placeholder = "شهر یا فرودگاه مبدا ؟";
    defaultValue_firstCity.style.display = "none";
}
lastCity.onclick = () => {
    searchBoxmenu.style.right = "410px";
    searchBoxmenu.style.display = "flex";
    memury_searchedValue = false;
    searhBoxinput.placeholder = "شهر یا فرودگاه مقصد ؟";
    defaultValue_lastCity.style.display = "none";
}
const searhBoxinput = document.getElementById("searhBoxinput");
searhBoxinput.onkeyup = function(){
    var searchedCityname = informationSearch.filter((el) => {
        return el.townName.indexOf(searhBoxinput.value) != -1
    });
    navigationSearchdata(searchedCityname);
}
const back_searchBtn = document.getElementById("back_searchBtn");
back_searchBtn.onclick = () => {
    searchBoxmenu.style.display = "none";
}
const delete_searchBtn = document.getElementById("delete_searchBtn");
delete_searchBtn.onclick = () => {
    searhBoxinput.value = "";
    navigationSearchdata(informationSearch);
}
// reverse
var licence_reversBtn_search = true;
reversCity_btn.onclick = () => {
    let first = firstCity_value.innerHTML;
    let last = lastCity_value.innerHTML;
    if(licence_reversBtn_search == true){
        firstCity_value.innerHTML = last;
        lastCity_value.innerHTML = first;
        licence_reversBtn_search = false;
    }
    else{
        firstCity_value.innerHTML = first;
        lastCity_value.innerHTML = last;
        licence_reversBtn_search = true;
    }
}
// filterOnsearch
const way_toolbar = document.getElementById("way_toolbar");
const classOffly_toolbar = document.getElementById("classOffly_toolbar");
const passengers_toolbar = document.getElementById("passengers_toolbar");
const CancelBtn_passengerToolbar = document.getElementById("CancelBtn_passengerToolbar");
const registrationBtn_passengerToolbar = document.getElementById("registrationBtn_passengerToolbar");
passengers_toolbar.onclick = () => {
    passengers_toolbar_containerMenu.style.display = "flex";
    passengers_toolbar.style.overflow = "visible";
}
CancelBtn_passengerToolbar.onclick = () => {
    setTimeout(()=>{
        passengers_toolbar_containerMenu.style.display = "none";
        passengers_toolbar.style.overflow = "hidden";
    },100);
}
registrationBtn_passengerToolbar.onclick = () => {
    setTimeout(()=>{
        passengers_toolbar_containerMenu.style.display = "none";
        passengers_toolbar.style.overflow = "hidden";
    },100);
    passengers_toolbar_text.innerHTML = memuryRenge + " " + "مسافر";
}
way_toolbar.onclick = () => {
    way_toolbar_containerMenu.style.display = "flex";
}
classOffly_toolbar.onclick = () => {
    classOffly_toolbar_containerMenu.style.display = "flex";
}

const wmi1_text = document.getElementById("wmi1_text");
const wmi2_text = document.getElementById("wmi2_text");
const wmi3_text = document.getElementById("wmi3_text");
wmi1_text.onclick = () => {
    way_toolbar_text.innerHTML = wmi1_text.innerHTML;
    setTimeout(() => {way_toolbar_containerMenu.style.display = "none";},100);
}
wmi2_text.onclick = () => {
    way_toolbar_text.innerHTML = wmi2_text.innerHTML;
    setTimeout(() => {way_toolbar_containerMenu.style.display = "none";},100);
}
wmi3_text.onclick = () => {
    way_toolbar_text.innerHTML = wmi3_text.innerHTML;
    setTimeout(() => {way_toolbar_containerMenu.style.display = "none";},100);
}
const cmi1_text = document.getElementById("cmi1_text");
const cmi2_text = document.getElementById("cmi2_text");
const cmi3_text = document.getElementById("cmi3_text");
cmi1_text.onclick = () => {
    classOffly_toolbar_text.innerHTML = cmi1_text.innerHTML;
    setTimeout(() => {classOffly_toolbar_containerMenu.style.display = "none";},100);
}
cmi2_text.onclick = () => {
    classOffly_toolbar_text.innerHTML = cmi2_text.innerHTML;
    setTimeout(() => {classOffly_toolbar_containerMenu.style.display = "none";},100);
}
cmi3_text.onclick = () => {
    classOffly_toolbar_text.innerHTML = cmi3_text.innerHTML;
    setTimeout(() => {classOffly_toolbar_containerMenu.style.display = "none";},100);
}
// type Of passenger
var NumberOfadult = 1;
var NumberOfkid = 0;
var NumberOfbaby = 0;
// decrease
let rangeOfNumber_decrease_num1 = true;
let rangeOfNumber_decrease_num2 = true;
let rangeOfNumber_decrease_num3 = true;
// increase
let rangeOfNumber_increase_num1 = true;
let rangeOfNumber_increase_num2 = true;
let rangeOfNumber_increase_num3 = true;
// all passenger
let memuryRenge = 1;

function mathAllpassenger(){
    memuryRenge = NumberOfadult + NumberOfkid + NumberOfbaby;
    if (memuryRenge >= 9) {
        rangeOfNumber_increase_num1 = false;
        rangeOfNumber_increase_num2 = false;
        rangeOfNumber_increase_num3 = false;
        textWarn.innerHTML = "ظرفیت انتخابی تکمیل است";
    }else{
        rangeOfNumber_increase_num1 = true;
        rangeOfNumber_increase_num2 = true;
        rangeOfNumber_increase_num3 = true;
        textWarn.innerHTML = "";
    }
}
const increaseCounter_num1 = document.getElementById("increaseCounter_num1");
increaseCounter_num1.onclick = () => {
    if (rangeOfNumber_increase_num1 == true) {
        NumberOfadult++
        passengerValueCounter_num1.innerHTML = NumberOfadult;
    }
    mathAllpassenger();
}
const decreaseCounter_num1 = document.getElementById("decreaseCounter_num1");
decreaseCounter_num1.onclick = () => {
    if (NumberOfadult == 1) {
        rangeOfNumber_decrease_num1 = false;
    }else{rangeOfNumber_decrease_num1 = true;}
    if (NumberOfadult != NumberOfbaby && rangeOfNumber_decrease_num1 == true) {
        NumberOfadult--
        passengerValueCounter_num1.innerHTML = NumberOfadult;
    }

    if(NumberOfadult == NumberOfbaby && rangeOfNumber_decrease_num1 == true){
        NumberOfadult--
        passengerValueCounter_num1.innerHTML = NumberOfadult;
        NumberOfbaby--
        passengerValueCounter_num3.innerHTML = NumberOfbaby;
    }
}

const increaseCounter_num2 = document.getElementById("increaseCounter_num2");
increaseCounter_num2.onclick = () => {
    if (rangeOfNumber_increase_num2 == true) {
        NumberOfkid++
        passengerValueCounter_num2.innerHTML = NumberOfkid;
    }
    mathAllpassenger();
}
const decreaseCounter_num2 = document.getElementById("decreaseCounter_num2");
decreaseCounter_num2.onclick = () => {
    if (NumberOfkid == 0) {
        rangeOfNumber_decrease_num2 = false;
    }else{rangeOfNumber_decrease_num2 = true;}
    
    if (rangeOfNumber_decrease_num2 == true) {
        NumberOfkid--
        passengerValueCounter_num2.innerHTML = NumberOfkid;
    }
}

const increaseCounter_num3 = document.getElementById("increaseCounter_num3");
increaseCounter_num3.onclick = () => {
    if (rangeOfNumber_increase_num3 == true && NumberOfbaby != NumberOfadult && NumberOfbaby <= NumberOfadult) {
        NumberOfbaby++
        passengerValueCounter_num3.innerHTML = NumberOfbaby;
    }
    mathAllpassenger();
}
const decreaseCounter_num3 = document.getElementById("decreaseCounter_num3");
decreaseCounter_num3.onclick = () => {
    if (NumberOfbaby == 0) {
        rangeOfNumber_decrease_num3 = false;
    }else{rangeOfNumber_decrease_num3 = true;}
    
    if (rangeOfNumber_decrease_num3 == true) {
        NumberOfbaby--
        passengerValueCounter_num3.innerHTML = NumberOfbaby;
    }
}

// hidden menu
const passengers_toolbar_containerMenu = document.getElementById("passengers_toolbar_containerMenu");
const way_toolbar_containerMenu = document.getElementById("way_toolbar_containerMenu");
const classOffly_toolbar_containerMenu = document.getElementById("classOffly_toolbar_containerMenu");
const webBody = document.getElementById("webBody");
var memuryOfatendMenu = false;
passengers_toolbar_containerMenu.onmouseout = () => { memuryOfatendMenu = true;}
passengers_toolbar_containerMenu.onmouseover = () => { memuryOfatendMenu = false; }
passengers_toolbar.onmouseover = () => {memuryOfatendMenu = false;}

way_toolbar_containerMenu.onmouseout = () => { memuryOfatendMenu = true;}
way_toolbar_containerMenu.onmouseover = () => { memuryOfatendMenu = false; }
way_toolbar.onmouseover = () => {memuryOfatendMenu = false;}

classOffly_toolbar_containerMenu.onmouseout = () => { memuryOfatendMenu = true;}
classOffly_toolbar_containerMenu.onmouseover = () => { memuryOfatendMenu = false; }
classOffly_toolbar.onmouseover = () => {memuryOfatendMenu = false;}

function atendMenu(nameContainer, nameElement){
    if (memuryOfatendMenu == true) {
        setTimeout(()=>{
            nameContainer.style.display = "none";
            nameElement.style.overflow = "hidden";
            memuryOfatendMenu = false;
        },100);
    }
}

webBody.onclick = () => {atendMenu(passengers_toolbar_containerMenu,passengers_toolbar);}
