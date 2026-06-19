let donateClickCount = 0;

function handleDonateClick() {
    donateClickCount = donateClickCount + 1;
    alert('Thank you! You clicked ' + donateClickCount + ' times');

    let button = document.querySelector('.donate-btn');

    if (donateClickCount === 1) {
        button.textContent = 'Donated!';
    } else {
        button.textContent = 'Donate Again';
    }
}

document.querySelector('.donate-btn').onclick = handleDonateClick;

window.onload = function () {
    console.log('MAKALLA BRIGHTSTARS site loaded');
};

let volunteerForm = document.getElementById('volunteerForm');

if (volunteerForm) {
    volunteerForm.onsubmit = function (event) {
        event.preventDefault();

        let name = document.getElementById('volName').value;
        let email = document.getElementById('volEmail').value;
        let phone = document.getElementById('volPhone').value;
        let message = document.getElementById('volMessage').value;
        let errorText = document.getElementById('volError');

        if (name === '' || email === '' || phone === '' || message === '') {
            errorText.textContent = 'Please fill in all fields';
            errorText.style.color = 'red';
        } else if (email.includes('@') === false) {
            errorText.textContent = 'Please enter a valid email';
            errorText.style.color = 'red';
        } else {
            errorText.textContent = 'Thank you ' + name + '! We will contact you soon.';
            errorText.style.color = 'green';
            volunteerForm.reset();
        }
    };
}

if (document.title.includes('MAKALLA Bright Stars')) {
    window.addEventListener('load', function () {
        console.log('Welcome to MAKALLA Bright Stars homepage');
    });
}
let homeVolBtn = document.getElementById('homeVolBtn');

if (homeVolBtn)
    homeVolBtn.onmouseover = function () {
        homeVolBtn.textContent = 'Join Us Today!';
    };

homeVolBtn.onmouseout = function () {
    homeVolBtn.textContent = 'Volunteer';
};


