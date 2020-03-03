'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let userInput = prompt('Введите пароль: ');

if (userInput === null) {
    message = 'Отменено пользователем!';

} else if (ADMIN_PASSWORD === userInput) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);