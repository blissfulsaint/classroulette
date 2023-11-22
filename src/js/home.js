document.addEventListener("scroll", function() {
    // Get the scroll position
    const scrollPosition = window.scrollY;

    const screenWidthEm = window.innerWidth / parseFloat(getComputedStyle(document.documentElement).fontSize);

    let adjustmentValue = 4;

    if (screenWidthEm > 100) {
        adjustmentValue = 8
    }

    // Update the transform property of the parallax image
    document.querySelector(".parallax-img").style.backgroundPositionY = scrollPosition * .03 - adjustmentValue + "em";
});


const token = localStorage.getItem('token');

const heroLink = document.querySelector('.hero-content');

const homeLinksDiv = document.getElementById('home-links');


if (!token) {
    heroLink.href = 'user/login.html';

    let homeLinksHtml = '<a href="user/register.html" alt="Sign Up Link" class="button-link">Sign Up Now!</a>';
    homeLinksDiv.insertAdjacentHTML('beforeend', homeLinksHtml);
} else {
    heroLink.href = 'user/classroulette.html';

    let homeLinksHtml = '<a href="user/classroulette.html" alt="Class Roulette Link" class="button-link">Go to Class Roulette!</a>';
    homeLinksDiv.insertAdjacentHTML('beforeend', homeLinksHtml);
}