const selectItem = document.querySelectorAll('.grid1');
const printMessage = document.querySelectorAll('.order-plate2-content');
let printContent = 'text';

selectItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        if (printContent === 'text') {
            printMessage[index].innerText = 'Selected';
            printContent = 'delivery';
        } else {
            printMessage[index].innerText = 'Delivered on Mar 23';
            printContent = 'text';
        }
    });
});
