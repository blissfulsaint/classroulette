// script.js

// const apiUrl = 'https://prayerselectorapi.onrender.com';
const apiUrl = 'http://localhost:3000';

// Function to check if the user is logged in
function checkLoginStatus() {
    const token = localStorage.getItem('token');
    return Boolean(token);
}

// Function to simulate a logout (clear the token)
// eslint-disable-next-line no-unused-vars
function logout() {
    localStorage.removeItem('token');
    
    window.location.href = '/index.html';
}

// document.getElementById('logout-btn').addEventListener('click', logout);

// eslint-disable-next-line no-unused-vars
async function login(event) {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput.value;
    const password = passwordInput.value;

    const response = await fetch(`${apiUrl}/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
        alert('Login succeeded');
        const { token } = await response.json();
        localStorage.setItem('token', token);
        
        window.location.href = '/user/index.html';
    } else {
        alert('Login failed. Please check your credentials.');
    }
}

document.getElementById('loginForm').addEventListener('submit', login);

// Check login status when the page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
});
  