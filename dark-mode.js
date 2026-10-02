const toggleBtn = document.getElementById('dark-mode-toggle');
const body = document.body;

// التحقق من الوضع المحفوظ
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️ الوضع النهاري';
}

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = '☀️ الوضع النهاري';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = '🌙 الوضع الليلي';
    }
});