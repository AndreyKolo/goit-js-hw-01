'use strict'

let price;
let country;
let message;

country = prompt('Укажите страну доставки: .');
country = country.toUpperCase();

switch (country) {
    case 'КИТАЙ':
        price = 100;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    case 'ЧИЛИ':
        price = 250;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    case 'АВСТРАЛИЯ':
        price = 170;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    case 'ИНДИЯ':
        price = 80;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;
    case 'ЯМАЙКА':
        price = 120;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;

    default:
        message = 'В вашей стране доставка не доступна.';
}
alert(message);