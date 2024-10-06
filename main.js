
const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show-nav-links');
});

const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    
    if (fullName === '' || email === '' || message === '') {
        alert('Please fill in all required fields.');
        return;
    }
    console.log('Form submitted:', fullName, email, subject, message);
});