// logics for add and delet card
const newCardBtns = document.querySelectorAll('.new-card-btn');
const saveCardBtns = document.querySelectorAll('.save-card-btn');
const creditContent = document.querySelector('.Credit-Content');
function deleteCard(card) {
    card.remove();
}
function addNewCard(index) {
    const addCard = creditContent.children[index].cloneNode(true);
    creditContent.appendChild(addCard);
    eventListeners(addCard);
}
function eventListeners(card) {
    const deleteBtn = card.querySelector('.btn-delete');
    const newCardBtn = card.querySelector('.new-card-btn');
    if (newCardBtn) {
        newCardBtn.addEventListener('click', () => addNewCard(0)); 
    }
    if (deleteBtn) {
        deleteBtn.addEventListener('click', () => deleteCard(card));
    }
}
newCardBtns.forEach((newCardBtn, index) => {
    newCardBtn.addEventListener('click', () => addNewCard(index));
});
const initialCards = document.querySelectorAll('.credit-card');
initialCards.forEach(card => {
    eventListeners(card);
});


// to focus on input feild
const focusOn = (cardId)=>{
    const inputFeild = document.getElementById(`card${cardId}-input`)
        inputFeild.focus()
   
}
