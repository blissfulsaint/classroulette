import { loadHeaderNavFooter } from './utils.mjs';
import Student from './Student.js';

loadHeaderNavFooter();

// here to detect mobile devices
function detectMob() {
    let mobile = false
    if ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 600 ) )
    return (mobile);
  }

// gettting information from folder "names", and using information
// to create student cards
async function fetchData() {
    let response = await fetch('../json/names.json');
    let data = await response.json();
    let students = data.students;

    let studentCards = new Array();
    let i = 0;  

    // if mobile device, create cards for all students, and include first names and image 
    if (detectMob() = true) {
        students.forEach(element => {
            studentCards[i] = new Student(element.fname, element.image);
            i++;
        })
    }
    // else, print cards of all students, and include first name, last name, and image
    else {
    students.forEach(element => {
        studentCards[i] = new Student(element.fname, element.lname, element.image);
        i++;
    })
    }

    // return the cards that we created
    return students;
}

fetchData();

// change inside of the function later
// pass is placholder for selecting students
function onButtonClick() {
    // pass;
}
  
// click button
const button = document.querySelector('button');
button.addEventListener('click', onButtonClick);
