console.log('Connected to the Rko-SummerSale Webpage JS successfully !!!');

//PromoCode Button
document.getElementById('btn-sell').addEventListener('click', function sell(){
    const couponInput = document.getElementById('coupon');
    const couponVal = couponInput.value;
    couponInput.value = "SELL200";

})


//Make Purchase Button

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
    if( value >= 200){
        document.getElementById('btn-apply').disabled = false;}

    else{ document.getElementById('btn-apply').disabled = true;}

}

//-------------------------
// One slide
document.getElementById('btn-one').addEventListener('click', function one(){
    const buttonOneInput = getText('para-one');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Two slide
document.getElementById('btn-two').addEventListener('click', function two(){
    const buttonOneInput = getText('para-two');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Three slide
document.getElementById('btn-three').addEventListener('click', function three(){
    const buttonOneInput = getText('para-three');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Four slide
document.getElementById('btn-four').addEventListener('click', function four(){
    const buttonOneInput = getText('para-four');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Five slide
document.getElementById('btn-five').addEventListener('click', function five(){
    const buttonOneInput = getText('para-five');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Six slide
document.getElementById('btn-six').addEventListener('click', function six(){
    const buttonOneInput = getText('para-six');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Seven slide
document.getElementById('btn-seven').addEventListener('click', function seven(){
    const buttonOneInput = getText('para-seven');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Eight slide
document.getElementById('btn-eight').addEventListener('click', function eight(){
    const buttonOneInput = getText('para-eight');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

// Nine slide
document.getElementById('btn-nine').addEventListener('click', function nine(){
    const buttonOneInput = getText('para-nine');
    const totalPriceInput = getText('total-price');
    const totalValue = ( buttonOneInput + totalPriceInput );
    const totalPrice = setTotal('total-price',totalValue);
})

//-------------------------
//Discount Section
//const discountOne = document.getElementById('discount');
//const discountTwo = getText(discountOne);
//const discountThree = ( ( 20 / 100 ) * totalPriceInput ); 

//    if ( couponValue === "SELL200"){
        //total code ><
      //  document.getElementById('btn.apply').disabled = false;
 //   }
   // else {
     //   document.getElementById('btn-apply').disabled = false;
    //}
    //Apply Button
document.getElementById('btn-apply').addEventListener('click', function apply(){
    const haveCouponInput = document.getElementById('coupon');
    const haveCouponValue = haveCouponInput.value;
    const totalApply = document.getElementById('total');
    const getTotal = getText('total');
    const discountApply = document.getElementById('discount');
    const getDiscount = getText('discount');
    const totalPriceApply = document.getElementById('total-price');
    const getTotalPrice = getText('total-price');

    if(haveCouponValue === "SELL200"){
        getDiscount = ( getTotal - (getTotal * (0.05)) );
        getTotalPrice = ( getTotal - getDiscount);

    }
    else{
        alert("Enter the Correct Discount Coupon");
    }
})
    