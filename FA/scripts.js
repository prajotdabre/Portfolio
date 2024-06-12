// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation and handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const response = document.getElementById('form-response');

    if (name === '' || email === '' || message === '') {
        response.textContent = 'Please fill in all fields.';
        response.style.color = 'red';
    } else {
        // Simulate form submission (in a real scenario, you would send this data to a server)
        response.textContent = 'Thank you for your message!';
        response.style.color = 'green';
        document.getElementById('contact-form').reset();
    }
});
