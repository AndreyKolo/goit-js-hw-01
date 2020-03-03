"use strict";

const total = 100;
const ordered = 50;

const messageTotal = "На складе недостаточно твоаров!";
const messageOrdered = "Заказ оформлен, с вами свяжется менеджер.";

if (ordered > total) {
    console.log(messageTotal);
} else {
    console.log(messageOrdered);
}