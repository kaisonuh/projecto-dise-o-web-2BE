document.getElementById('loginButton').addEventListener('click', function() {
    window.location.href = 'login.html'; // Assuming your login page is named login.html
});

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMessageDiv = document.getElementById('error-message');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Validate username
    if (username.length < 8 || username.length > 20) {
        displayErrorMessage('Username must be 8-20 characters long');
        return false;
    }

    // Validate password
    if (password.length < 6) {
        displayErrorMessage('Password must be at least 6 characters.');
        return false;
    }
    if (!/[a-z]/.test(password)) {
        displayErrorMessage('Password must include lowercase letters.');
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        displayErrorMessage('Password must include uppercase letters.');
        return false;
    }
    if (!/[0-9]/.test(password)) {
        displayErrorMessage('Password must include numbers.');
        return false;
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
        displayErrorMessage('Password must include special characters.');
        return false;
    }

    // If validation passes, proceed with login logic
    displaySuccessMessage('Welcome, ' + username + '! your password is ' + password);
});

function displayErrorMessage(message) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block';
}

function displaySuccessMessage(message) {
    errorMessageDiv.textContent = message;
    errorMessageDiv.style.display = 'block';
    errorMessageDiv.style.color = 'green';
}