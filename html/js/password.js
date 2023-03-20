const form1 = document.querySelector('form');
const username1 = document.querySelector('#username');
const password1 = document.querySelector('#password');

form1.addEventListener('submit', function (event) {
    event.preventDefault();

    if (username1.value === 'admin' && password1.value === '12345') {
        // Установка кук на 1 день
        document.cookie = `username=${username1.value}; expires=${new Date(Date.now() + 86400000).toUTCString()}`;
        window.location.href = 'start-page.html';
    } else {
        alert('Неверное имя пользователя или пароль');
    }
});
