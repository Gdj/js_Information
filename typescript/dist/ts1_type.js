"use strict";
/* array */
let num1 = [1, 2, 3, 5];
let num2 = [1, 2, 3, 5];
let str1 = ["mon", "tur", "wed"];
let str2 = ["mon", "tur", "wed"];
/* tuple : 배열값의 타입을 정의 */
let tup;
tup = ["mon", 1];
console.log("o의 위치 : " + tup[0].indexOf("o"));
/* function */
const hello = (name) => {
    console.log(`Hello, ${name}`);
};
hello("TypeScript");
