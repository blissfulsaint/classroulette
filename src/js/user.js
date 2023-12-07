// register.js
import { jwtDecode } from 'jwt-decode';

const apiUrl = 'https://classrouletteapi.onrender.com';
// const apiUrl = 'http://localhost:3000';


// update user info function
async function updateInfo(event) {
    event.preventDefault();

    const fnameInput = document.getElementById('first_name');
    const lnameInput = document.getElementById('last_name');
    const usernameInput = document.getElementById('username');

    const fname = fnameInput.value;
    const lname = lnameInput.value;
    const username = usernameInput.value;

    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const response = await fetch(`${apiUrl}/users/updateUserInfo/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({fname, lname, username}),
        });
    

        if (response.ok) {
            alert('Update succeeded');
            
            window.location.href = '/user/index.html';
        } else {
            alert('Update failed. Please check that all fields are filled out correctly.');
        }
    }
}

// change password function
async function updatePassword(event) {
    event.preventDefault();

    const passwordInput = document.getElementById('password');

    const password = passwordInput.value;

    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const response = await fetch(`${apiUrl}/users/updatePassword/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({password}),
        });

        if (response.ok) {
            alert('Update succeeded');
            
            window.location.href = '/user/index.html';
        } else {
            alert('Update failed. Please check that field is filled out correctly.');
        }
    }
}


document.addEventListener('DOMContentLoaded', async function() {
    // fetch('/json/classes.json') // Fetch JSON data (testing only)
    const token = localStorage.getItem('token');

    if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        await fetch(`${apiUrl}/users/${userId}`)
        .then(function (response) {
            // console.log(response.json());
            return response.json();
        })
        .then(function (data) {
            document.getElementById('first_name').value = data.fname;
            document.getElementById('last_name').value = data.lname;
            document.getElementById('username').value = data.username;
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });
    }
})

document.getElementById('updateForm').addEventListener('submit', updateInfo);
document.getElementById('changePassword').addEventListener('submit', updatePassword);