// Приветствие
window.addEventListener('DOMContentLoaded', () => {
    console.log('Страница загружена');
});

// Копирование телефона
const phone = document.querySelector('.card:nth-child(3) p strong');
if (phone) {
    phone.parentElement.style.cursor = 'pointer';
    phone.parentElement.addEventListener('click', () => {
        navigator.clipboard.writeText(phone.textContent);
        alert('Номер скопирован: ' + phone.textContent);
    });
}

// Эффект при наведении на карточки
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-3px)';
        card.style.boxShadow = '0 15px 30px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
    });
});

// Клик по ссылкам
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        alert('Ссылка на ' + link.textContent + ' будет добавлена позже');
    });
});

// Клик по фото
const photo = document.querySelector('.photo');
let count = 0;
if (photo) {
    photo.style.cursor = 'pointer';
    photo.addEventListener('click', () => {
        count++;
        alert('📸 Нажатий на фото: ' + count);
    });
}