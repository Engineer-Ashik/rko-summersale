console.log('Connected to the Rko-SummerSale Webpage JS successfully !!!');

//PromoCode Button
document.getElementById('btn-sell').addEventListener('click', function sell() {
    const couponInput = document.getElementById('coupon');
    const couponVal = couponInput.value;
    couponInput.value = "SELL200";

})

//-------------------------
//itemList section :
function additem(itemName) {
    const itemList = document.getElementById('item-list');
    const counts = itemList.childElementCount;
    console.log('added successfully itemlist');
    const newList = document.createElement('p');
    newList.innerHTML = counts + ' . ' + itemName;
    itemList.appendChild(newList);
}

//-------------------------
//Reusable getText button code :
function getText(elementID) {
    const getTextInput = document.getElementById(elementID);
    const getTextText = getTextInput.innerText;
    const getTextParse = parseFloat(getTextText);
    return getTextParse;
}

//-------------------------
//Reusable SetText code :
function setTotal(elementID, value) {
    const finalTotal = document.getElementById(elementID);
    finalTotal.innerText = value;
    if (value >= 200) {
        document.getElementById('btn-apply').disabled = false;
    }

    else { document.getElementById('btn-apply').disabled = true; }

}

//-------------------------
// One slide
document.getElementById('btn-one').addEventListener('click', function one() {
    const buttonOneInput = getText('para-one');
    const totalPriceInput = getText('total-price');
    //Make Purchase Button:
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonOneInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('K Accessories');

})

// Two slide
document.getElementById('btn-two').addEventListener('click', function two() {
    const buttonTwoInput = getText('para-two');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonTwoInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('K Supplements');
})

// Three slide
document.getElementById('btn-three').addEventListener('click', function three() {
    const buttonThreeInput = getText('para-three');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonThreeInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('Home Cooker');
})

// Four slide
document.getElementById('btn-four').addEventListener('click', function four() {
    const buttonFourInput = getText('para-four');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonFourInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('Sports Black Cap');
})

// Five slide
document.getElementById('btn-five').addEventListener('click', function five() {
    const buttonFiveInput = getText('para-five');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonFiveInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('Full Jersey Set');
})

// Six slide
document.getElementById('btn-six').addEventListener('click', function six() {
    const buttonSixInput = getText('para-six');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonSixInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('Sports cates');
})

// Seven slide
document.getElementById('btn-seven').addEventListener('click', function seven() {
    const buttonSevenInput = getText('para-seven');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonSevenInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('Single Relax Chair');
})

// Eight slide
document.getElementById('btn-eight').addEventListener('click', function eight() {
    const buttonEightInput = getText('para-eight');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonEightInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('Children play');
})

// Nine slide
document.getElementById('btn-nine').addEventListener('click', function nine() {
    const buttonNineInput = getText('para-nine');
    const totalPriceInput = getText('total-price');
    if (totalPriceInput >= 0) {
        document.getElementById('purchase').disabled = false;
    }
    else {
        document.getElementById('purchase').disabled = true;
    }
    const totalValue = (buttonNineInput + totalPriceInput);
    const totalPrice = setTotal('total-price', totalValue);
    additem('Flexible Sofa');
})

//-------------------------
//Apply Button:
document.getElementById('btn-apply').addEventListener('click', function apply() {
    const haveCouponInput = document.getElementById('coupon');
    const haveCouponValue = haveCouponInput.value;
    const getTotalPrice = getText('total-price');
    console.log(getTotalPrice);

    if (haveCouponValue === "SELL200") {
        getDiscount = ((getTotalPrice * (0.20)));
        console.log(getDiscount);
        const prevDiscount = document.getElementById('discount');
        const prevDiscountVal = prevDiscount.innerText;
        const prevDiscountParse = parseFloat(prevDiscountVal);
        prevDiscount.innerText = getDiscount;

        getTotal = (getTotalPrice - getDiscount);
        console.log(getTotal);
        const prevTotal = document.getElementById('total');
        const prevTotalVal = prevTotal.innerText;
        const prevTotalParse = parseFloat(prevTotalVal);
        prevTotal.innerText = getTotal;

    }
    else {
        alert("Please Enter The Correct Discount Coupon");
    }
})



