// DOM элементы
const themeBtn = document.getElementById('themeBtn');
const ctaButton = document.getElementById('ctaButton');
const counterValue = document.getElementById('counterValue');
const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const messageForm = document.getElementById('messageForm');
const formMessage = document.getElementById('formMessage');
const welcomeModal = document.getElementById('welcomeModal');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const navLinks = document.querySelectorAll('.nav-link');

// Состояние приложения
let counter = 0;
let isDarkTheme = false;

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Приложение загружено!');
    
    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkTheme();
    }
    
    // Показываем модальное окно при загрузке
    setTimeout(() => {
        welcomeModal.style.display = 'flex';
    }, 1000);
    
    // Инициализация счетчика
    updateCounter();
});

// Переключение темы
themeBtn.addEventListener('click', function() {
    isDarkTheme = !isDarkTheme;
    
    if (isDarkTheme) {
        enableDarkTheme();
        localStorage.setItem('theme', 'dark');
    } else {
        disableDarkTheme();
        localStorage.setItem('theme', 'light');
    }
    
    // Анимация кнопки
    this.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        this.style.transform = '';
    }, 300);
});

function enableDarkTheme() {
    document.body.classList.add('dark-theme');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    themeBtn.setAttribute('aria-label', 'Включить светлую тему');
    isDarkTheme = true;
}

function disableDarkTheme() {
    document.body.classList.remove('dark-theme');
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeBtn.setAttribute('aria-label', 'Включить темную тему');
    isDarkTheme = false;
}

// CTA кнопка
ctaButton.addEventListener('click', function() {
    // Анимация кнопки
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 150);
    
    // Показать сообщение
    showNotification('🎯 Вы готовы начать!', 'success');
    
    // Прокрутка к форме
    document.querySelector('.contact-form').scrollIntoView({
        behavior: 'smooth'
    });
});

// Работа со счетчиком
decreaseBtn.addEventListener('click', function() {
    counter--;
    updateCounter