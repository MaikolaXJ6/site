
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

function toggleTheme() {
    body.classList.toggle('dark');
    const isDark = body.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
}

themeToggle.addEventListener('click', toggleTheme);


const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
    themeToggle.textContent = '☀️';
}


const typed = new Typed('#typed-text', {
    strings: ['Desenvolvedor musical', 'Inovador em hits', 'Apaixonado por Musica'],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
});


const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === modal) modal.style.display = 'none';
});


Inputmask("(99) 99999-9999").mask("#telefone");
Inputmask({ alias: "email" }).mask("#email");

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    alert('Mensagem enviada! (Simulação)');
    this.reset();
});