// this code is for total Price calculation
let total = 0;
// const totalPriceButton = document.getElementById('totalPriceButton');


function productName(target) {
    // const itemsName = target.parentNode.childNodes[1].value;
    const h2Element = target.querySelector('h2').innerText;

    // for selected card
    const selectedName = document.getElementById('selectedName-entry');

    const count = selectedName.childElementCount;
    const p = document.createElement('p');
    p.classList.add('py-2');
    p.innerText = `${count + 1}. ${h2Element}`;

    // for selected
    selectedName.appendChild(p);


    // select card number
    const selectMoney = target.querySelector('p').innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(selectMoney);
    document.getElementById('totalPrice').innerText = total;


    if (total > 0) {
        totalPriceButton.removeAttribute('disabled');
        totalPriceButton.classList.remove('bg-gray-400');
        totalPriceButton.classList.add('bg-[#E527B2]');
    }
    else {
        totalPriceButton.setAttribute('disabled', 'disabled');
        totalPriceButton.classList.remove('bg-[#E527B2]');
        totalPriceButton.classList.add('bg-gray-400');
    }


    // condition for special coupon
    // document.getElementById('couponId').addEventListener('click', function(){
    //     const specialCouponField = document.getElementById('couponCode');
    //     const specialField = specialCouponField.value;
    //     if(specialField === 'SELL20' && total >= 200){
    //         console.log('USA');
    //     }
    //     else{
    //         console.log('BAN');
    //     }
    // });
    toggleApplyButtonState();
}


var couponCodeField = document.getElementById('couponCode');
var applyButton = document.getElementById('couponId');

function toggleApplyButtonState(){
    const couponCode = couponCodeField.value;
    if(couponCode === 'SELL20' && total >= 200){
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('bg-gray-400');
        applyButton.classList.add('bg-[#E527B2]');
    }else{
        applyButton.setAttribute('disabled', 'disabled');
        applyButton.classList.remove('bg-[#E527B2]');
        applyButton.classList.add('bg-gray-400');
    }
}
couponCodeField.addEventListener('input', toggleApplyButtonState);

