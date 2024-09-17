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
    document.getElementById('btn-apply').disabled = false;
}
//Make Purchase Button

//Apply Button
//document.getElementById('btn-apply').addEventListener('click', function apply(){})

//Reusable getText button code :
function getText(elementID) {
    const getTextInput = document.getElementById(elementID);
    const getTextText = getTextInput.innerText;
    const getTextParse = parseFloat(getTextText);
    return getTextParse;
}

//Reusable SetText code :
function setTotal(elementID,value){
    const finalTotal = document.getElementById(elementID);
    finalTotal.innerText = value;
}

// One slide
document.getElementById('btn-one').addEventListener('click', function one(){
    const buttonOneInput = getText('para-one');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

