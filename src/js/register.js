// register.js

const apiUrl = 'https://classrouletteapi.onrender.com';
// const apiUrl = 'http://localhost:3000';

// register function
async function register(event) {
    event.preventDefault();

    const fnameInput = document.getElementById('first_name');
    const lnameInput = document.getElementById('last_name');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const fname = fnameInput.value;
    const lname = lnameInput.value;
    const username = usernameInput.value;
    const password = passwordInput.value;

    const response = await fetch(`${apiUrl}/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({fname, lname, username, password }),
    });

    if (response.ok) {
        alert('Registration succeeded');
        const { token } = await response.json();
        localStorage.setItem('token', token);
        
        window.location.href = '/user/index.html';
    } else {
        alert('Registration failed. Please check that all fields are filled out correctly.');
    }
}

document.getElementById('registrationForm').addEventListener('submit', register);