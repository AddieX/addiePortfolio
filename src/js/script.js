const themeToggle = document.querySelector('.theme-toggle');
const themeIcon = themeToggle.querySelector('i');

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    
    themeIcon.classList.replace(
        isLight ? 'fa-moon' : 'fa-sun',
        isLight ? 'fa-sun' : 'fa-moon'
    );
    
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    alert('Thank you for your message! I will get back to you soon.');
    
    this.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.project-image img').forEach(img => {
    img.setAttribute('loading', 'lazy');
    
    
    img.addEventListener('load', function() {
        this.style.opacity = '1';
        this.parentElement.classList.add('loaded');
    });
    
     
    img.addEventListener('error', function() {
        if (!this.src.includes('via.placeholder.com')) {
            this.src = this.getAttribute('onerror').split("'")[1];
        }
    });
});
