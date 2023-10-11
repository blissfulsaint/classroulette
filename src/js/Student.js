export default class Student {
    constructor (fname, lname, image) {
        this.fname = fname;
        this.lname = lname;
        this.image = image;

        this.init();
    }

    async init() {
        let html = `<div class="student-name">
                <span class="first-name">${this.fname}</span>
                <span class="last-name">${this.lname}</span>
            </div>`;

        document.getElementById('student-list').insertAdjacentHTML('beforeend', html);
    }
}