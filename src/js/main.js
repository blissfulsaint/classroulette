import { loadHeaderNavFooter } from './utils.mjs';
import Student from './Student.js';

loadHeaderNavFooter();

async function fetchData() {
    let response = await fetch('../json/names.json');
    let data = await response.json();
    let students = data.students;

    let studentCards = new Array();
    let i = 0;

    students.forEach(element => {
        studentCards[i] = new Student(element.fname, element.lname, element.profilepic);
        i++;
    })

    return students;
}


const targetNode = document.querySelector('nav');

const config = { attributes: true, childList: true, subtee: true };

const callback = (mutationList, observer) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been mutated.');
            darkMode();
            observer.disconnect();
        } else if (mutation.type === 'attributes') {
            console.log(`The ${mutation.attributeName} attribute was mutated.`);
        }
    }
};

const observer = new MutationObserver(callback);

observer.observe(targetNode, config);

if (window.localStorage.getItem('darkmode') == 'TRUE') {
    let element = document.querySelector('body');

    element.classList.remove('light');
    element.classList.remove('dark');
    element.classList.add('dark');
}

async function darkMode() {
    let element = document.querySelector('body');

    const themeBtn = document.getElementById('theme-btn');
    if (window.localStorage.getItem('darkmode') == 'TRUE') {
        element.classList.remove('light');
        element.classList.add('dark');
        themeBtn.innerHTML = 'light_mode';
    }
    themeBtn.onclick = () => {
        if (themeBtn.innerHTML === 'dark_mode') {
            element.classList.remove('light');
            element.classList.add('dark');
            themeBtn.innerHTML = 'light_mode';
            window.localStorage.setItem('darkmode', 'TRUE')
        } else {
            element.classList.remove('dark');
            element.classList.add('light');
            themeBtn.innerHTML = 'dark_mode';
            window.localStorage.setItem('darkmode', 'FALSE');
        }
    }
}

fetchData();

// function to adjust how quickly the delay changes
function cubicEase(t) {
    return t < 0.5 ? 4 * t * t : (t - 1)  * (2 * t - 2) + 1;
}

// function to loop randomStudent selection
function onButtonClick() {
    // loop the function 20 times
    for (let i = 0; i < 20; i++) {
        // change i to a number between 0 and 1
        let t = i / 19;
        // scale t however much is desired
        let scaledT = t * 50;
        const delay = cubicEase(scaledT);
        // delay the function call by "delay" every iteration
        setTimeout(function() {
            randomStudent();
        }, delay);
    }
}

// reference button from html
const selectStudentButton = document.getElementById('select-student-button');

let previousRandomIndex = -1;

// randomly select a student after clicking the button
// highlight selected name
function randomStudent() {
    const students = document.querySelectorAll('.student-name');

    // remove previous highlights if any
    students.forEach(div => div.classList.remove('highlighted'));

    // random index and student
    let randomIndex;

    // keep selecting random indexes until it doesn't match the previous index
    do {
        randomIndex = Math.floor(Math.random() * students.length)
    } while (randomIndex === previousRandomIndex);

    // record the previous index
    previousRandomIndex = randomIndex;
    
    const randomStudent = students[randomIndex];

    // highlight random student chosen
    randomStudent.classList.add('highlighted');

}
  
// click button
selectStudentButton.addEventListener('click', onButtonClick);

