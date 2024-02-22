function toggleDropdown() {
    let dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

//  code for  footer-form

(function() {
    const getData = localStorage.getItem('userData');
    let inputData = getData ? JSON.parse(getData) : [];
    if (!window.footerForm) {
        const footerForm = document.querySelector('#footer-form');
        if (footerForm) {
            footerForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const email = document.getElementById("emailInput").value;
                if (!isValidEmail(email)) {
                    alert("Please enter a valid email address");
                    return;
                }
                const userEmail = {
                    email: email
                };
                inputData.push(userEmail);

                localStorage.setItem('userData', JSON.stringify(inputData));
                footerForm.reset();
            });
            function isValidEmail(email) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailRegex.test(email);
            }
            window.footerForm = footerForm;
        }
    }
})();

// here i put my code in the IIFE function(immidiatly invoked function expression) due to this there is no
//   create any conflict b/w similer variable which may be
//  already declared in my code and this function run earliar then any other function


