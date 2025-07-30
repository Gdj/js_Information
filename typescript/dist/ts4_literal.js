"use strict";
// 리터럴 (Literal) Types
const userName1 = 'John';
let userName2 = 'Tom';
let userName3 = 'Tom';
userName3 = 123; // userName3은 문자열 또는 숫자일 수 있습니다.
let person = {
    name: 'John',
    job: 'ployer'
};
let student = {
    name: 'John',
    grade: 2
};
function getGift(gift) {
    console.log(`Received a ${gift.color} ${gift.name}`);
    if (gift.name === "car") {
        gift.start();
    }
    else if (gift.name === "mobild") {
        gift.call();
    }
}
const toyCar = {
    name: 'Toy Car',
    color: 'red',
    price: 1000,
    start() {
        console.log(`${this.name} is starting...`);
    }
};
