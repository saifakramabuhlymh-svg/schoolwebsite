// تأثير الظهور عند التمرير
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .hero h1, .hero p').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});