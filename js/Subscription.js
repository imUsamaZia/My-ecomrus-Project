const btnMinus = document.querySelectorAll('.btn-minus');
const btnPlus = document.querySelectorAll('.btn-plus');
const increasingNumber = document.querySelectorAll('.increasing-number');
const dollerPrice = document.querySelectorAll('.product-plate2-content');
const initialPrice = 0;

btnPlus.forEach((plus, index) => {
    plus.addEventListener('click', (e) => {
        const inputValue = increasingNumber[index];
        inputValue.value = (parseInt(inputValue.value, 10) + 1) || 0;
        updateDollerPrice(inputValue.value, dollerPrice[index]);
    });
});

btnMinus.forEach((minus, index) => {
    minus.addEventListener('click', (e) => {
        const inputValue = increasingNumber[index];
        if (inputValue.value > 0) {
            inputValue.value = (parseInt(inputValue.value, 10) - 1) || 0;
            updateDollerPrice(inputValue.value, dollerPrice[index]);
        }
    });
});
increasingNumber.forEach((input, index) => {
    input.addEventListener('input', (e) => {
        const inputValue = input.value;
        updateDollerPrice(inputValue, dollerPrice[index]);
    });
});

const updateDollerPrice = (quantity, dollarValue) => {
    const validQuantity = parseInt(quantity, 10) || 0;
    const totalPrice = initialPrice + validQuantity;
    if (isNaN(totalPrice)) {
        dollarValue.textContent = `$${initialPrice.toFixed(2)}`;
    } else {
        dollarValue.textContent = `$${totalPrice.toFixed(2)}`;
    }
};
const btnDelete = document.querySelectorAll('.btn-delete')
const finalPrice = document.querySelectorAll('.final-price')
btnDelete.forEach((card, index)=>{
    card.addEventListener('click', (e)=>{
        finalPrice[index].remove()
    })
})
















