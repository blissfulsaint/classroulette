export default class Student {
    constructor (fname, lname, profilepic) {
        this.fname = fname;
        this.lname = lname;
        this.profilepic = profilepic;

        this.init();
    }

    async init() {
        let html = `<div class="student-name">
                <span class="first-name">${this.fname}</span>
                <span class="last-name">${this.lname}</span>

                <img class="details-btn" src="../images/moredetails-black.png" alt="More Details Icon">
                <img class="remove-btn" src="../images/remove-black.png" alt="Remove Icon">
            </div>`;

        document.getElementById('student-list').insertAdjacentHTML('beforeend', html);
    }
}