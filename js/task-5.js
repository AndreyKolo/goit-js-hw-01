'use strict'

let price;
let country;

country = prompt('Укажите страну доставки: .');
country = country.toUpperCase();

switch (country) {
    case 'КИТАЙ':
        price = 100;
        break;
    case 'ЧИЛИ':
        price = 250;
        break;
    case 'АВСТРАЛИЯ':
        price = 170;
        break;
    case 'ИНДИЯ':
        price = 80;
        break;
    case 'ЯМАЙКА':
        price = 120;
        break;

    default:
        alert('В вашей стране доставка не доступна.');
}
alert(`Доставка в ${country} будет стоить ${price} кредитов`);