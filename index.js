// this code is for total Price calculation
let total = 0;

function productName(target) {
    const h2Element = target.querySelector('h2').innerText;

    // for selected main card
    const selectedName = document.getElementById('selectedName-entry');

    const count = selectedName.childElementCount;
    const p = document.createElement('p');
    p.classList.add('py-2');
    p.innerText = `${count + 1}. ${h2Element}`;
    selectedName.appendChild(p);

    // select card number
    const selectMoney = target.querySelector('p').innerText.split(' ')[0];
    total = parseFloat(total) + parseFloat(selectMoney);
    document.getElementById('totalPrice').innerText = total;


    // this condition is for Make Purchases
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

    // function call for calculation
    toggleApplyButtonState();
    calculateTotalAndDiscount();
}



const couponCodeField = document.getElementById('couponCode');
const applyButton = document.getElementById('couponId');

function toggleApplyButtonState() {
    const couponCode = couponCodeField.value;
    if (couponCode === 'SELL200' && total >= 200) {
        applyButton.removeAttribute('disabled');
        applyButton.classList.remove('bg-gray-400');
        applyButton.classList.add('bg-[#E527B2]');
    } 
    else {
        applyButton.setAttribute('disabled', 'disabled');
        applyButton.classList.remove('bg-[#E527B2]');
        applyButton.classList.add('bg-gray-400');
    }
}
couponCodeField.addEventListener('input', toggleApplyButtonState);




let discount = 0;
const totalPriceElement = document.getElementById('totalDiscountPrice');
const discountPriceElement = document.getElementById('totalDiscount');

// for calculation
function calculateTotalAndDiscount() {
    const couponCode = couponCodeField.value;
    if (couponCode === 'SELL200' && total >= 200) {
        discount = total * 0.2;
    } else {
        applyButton.addEventListener('click', function (){
            // Display the discount and total
            totalPriceElement.innerText = (total - discount).toFixed(2);
            discountPriceElement.innerText = (discount = total * 0.2).toFixed(2);
        });
    }
}

