console.log('Connected to the Rko-SummerSale Webpage JS successfully !!!');

//PromoCode Button
const promocode = document.getElementById('btn-sell');


//coupon input 
const couponInput = document.getElementById('coupon');
const couponValue = couponInput.value;
if (couponValue === "SELL200") {
    //total code ><
    document.getElementById('btn.apply').disabled = false;
}
else {
    document.getElementById('btn-apply').disabled = true;
}
//Make Purchase Button

//Apply Button
//document.getElementById('btn-apply').addEventListener('click', function apply(){})

//Reusable inputValue button code
function getElement(elementID) {
    const getElementInput = document.getElementById(elementID);
    const getElementValue = getElementInput.value;
    const getElementInputParse = parseFloat(getElementValue);
    getElementInput.value = "";
    return getElementInputParse;
}

//Reusable textValue button code
function textElement(elementID,value){
    const getElement = document.getElementById(elementID);
    const getElementText = getElement.innerText;
    const getElementTextParse = parseFloat(getElementText);
    return getElementTextParse;
}

function setval(){
    const total = getElementInputParse + getElementTextParse;
    const newTotal = getElement.innerTextb = value;
}

//btn-one
document.getElementById('btn-one').addEventListener('click', function one(){
    const buttonOne = document.getElementById('btn-one');
    const totalValue = ( getElementInputParse + setElementParse );
})