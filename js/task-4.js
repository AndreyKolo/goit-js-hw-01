'use strict'

const credits = 23580;
const pricePerDroid = 3000;
let message;

const useInput = prompt('Какое количество Вы хотите купить?');

const totalPrice = pricePerDroid * Number(useInput);
const total = credits - totalPrice;


if (useInput === null) {
    message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
    message = 'Недостаточно средств на счету!';
} else {
    message = `Вы купили ${useInput} дроидов, на счету осталось ${total} кредитов.`;
}
alert(message);