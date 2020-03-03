'use strict'

const credits = 23580;
const pricePerDroid = 3000;
let message;

let useInput = prompt('Какое количество Вы хотите купить?');

let totalPrice = pricePerDroid * Number(useInput);
let total = credits - totalPrice;


if (useInput === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else {
    message = `Вы купили ${useInput} дроидов, на счету осталось ${total} кредитов.`;
}
alert(message);