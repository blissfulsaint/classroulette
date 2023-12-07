// registerclass.js

const apiUrl = 'https://prayerselectorapi.onrender.com';
// const apiUrl = 'http://localhost:3000';


// register function
async function addClass(event) {
    event.preventDefault();

    const departmentInput = document.getElementById('department');
    const codeInput = document.getElementById('course_code');
    const nameInput = document.getElementById('name');
    const sectionInput = document.getElementById('section');
    const capacityInput = document.getElementById('capacity');

    const department = departmentInput.value;
    const code = codeInput.value;
    const name = nameInput.value;
    const section = sectionInput.value;
    const capacity = capacityInput.value;

    const response = await fetch(`${apiUrl}/classes/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({department, code, name, section, capacity}),
    });

    if (response.ok) {
        alert('Registration succeeded');
        
        window.location.href = '/user/classregistration.html';
    } else {
        alert('Class addition failed. Please check that all fields are filled out correctly.');
    }
}

document.getElementById('addClassForm').addEventListener('submit', addClass);