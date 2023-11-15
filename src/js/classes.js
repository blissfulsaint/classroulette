import Student from './Student.js';

const apiUrl = 'https://prayerselectorapi.onrender.com';
// const apiUrl = 'http://localhost:3000';

document.addEventListener('DOMContentLoaded', async function() {
    // fetch('/json/classes.json') // Fetch JSON data (testing only)
    await fetch(`${apiUrl}/classes`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            populateDropdown(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    // Assuming you have a dropdown element with id 'classDropdown'
    var dropdown = document.getElementById('classDropdown');
    
    // Add an event listener to the 'change' event
    dropdown.addEventListener('change', fetchClassData);
});

function populateDropdown(classes) {
    var dropdown = document.getElementById('classDropdown');

    classes.forEach(function(cls) {
        var option = document.createElement('option');
        option.value = cls._id;
        console.log(cls._id);
        option.text = cls.department + ' ' + cls.code;
        dropdown.appendChild(option);
    });
}

async function fetchClassData() {
    const element = document.getElementById('student-list');
    element.innerHTML = '';
    showLoadingIndicator();

    var dropdown = document.getElementById('classDropdown');
    var selectedValue = dropdown.value;

    if (selectedValue) {
        // fetch('/json/classes.json') // Fetch JSON data (testing only)
        await fetch(`${apiUrl}/classes`) // Fetch DB data (localhost only)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                var selectedClass = data.find(function (cls) {
                    return cls._id === selectedValue;
                });

                if (selectedClass) {
                    renderStudentCards(selectedClass);
                } else {
                    console.log('Class not found');
                    hideLoadingIndicator();
                }
            })
            .catch(function (err) {
                console.log('error: ' + err);
                hideLoadingIndicator();
            });
    } else {
        clearData();
        hideLoadingIndicator();
    }
}

function clearData() {
    var myDataContainer = document.getElementById('myData');
    myDataContainer.innerHTML = '';
}


async function renderStudentCards(classData) {

    let data = classData;
    console.log(data);
    let students = data.students;

    let studentCards = new Array();
    let i = 0;

    students.forEach(element => {
        studentCards[i] = new Student(element.fname, element.lname, element.profilepic);
        i++;
    })

    hideLoadingIndicator();
    return students;
}

// Function to show the loading indicator
function showLoadingIndicator() {
    const container = document.getElementById('student-list');
    container.insertAdjacentHTML('afterbegin', '<div id="loading-spinner"></div>');
    var loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'block';
}

// Function to hide the loading indicator
function hideLoadingIndicator() {
    var loadingSpinner = document.getElementById('loading-spinner');
    loadingSpinner.style.display = 'none';
}