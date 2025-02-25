// form.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.registration-form');
    
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        let isValid = true;

        // Get form elements
        const username = document.getElementById('username');
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const department = document.getElementById('department');
        
        // Clear previous error messages
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(error => error.remove());

        // Validate username
        const usernamePattern = /^[A-Za-z\s]+$/;  // Only allows letters and spaces
        if (username.value.trim() === "") {
            isValid = false;
            displayError(username, "Username is required.");
        } else if (!usernamePattern.test(username.value.trim())) {
            isValid = false;
            displayError(username, "Username should only contain letters and spaces.");
        }

        // Validate email
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (email.value.trim() === "" || !emailPattern.test(email.value)) {
            isValid = false;
            displayError(email, "Please enter a valid email address.");
        }

        // Validate password
        if (password.value.trim() === "") {
            isValid = false;
            displayError(password, "Password is required.");
        }

        // Validate confirm password
        if (confirmPassword.value.trim() === "") {
            isValid = false;
            displayError(confirmPassword, "Please confirm your password.");
        } else if (password.value !== confirmPassword.value) {
            isValid = false;
            displayError(confirmPassword, "Passwords do not match.");
        }

        // Validate department selection
        if (department.value === "") {
            isValid = false;
            displayError(department, "Please select your department.");
        }

        // If all validations pass, submit the form
        if (isValid) {
            form.submit();  // Proceed with form submission
        }
    });

    // Function to display error messages
    function displayError(inputElement, message) {
        const errorMessage = document.createElement('span');
        errorMessage.classList.add('error-message');
        errorMessage.style.color = 'red';
        errorMessage.textContent = message;

        inputElement.parentElement.appendChild(errorMessage);
    }
});
