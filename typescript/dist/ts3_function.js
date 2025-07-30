"use strict";
/* -------------------------- ( 함수: ?선택적 매개변수 ) ------------------------------------- */
function hi(name) {
    return `Hello, ${name || "world"}`;
}
function hi2(name = "world") {
    return `Hello, ${name}`;
}
const result = hi("TypeScript1");
const result2 = hi2("TypeScript2");
console.log(result);
console.log(result2);
/* -------------------------- ( 선택적 매개변수는 우회하기 ) ------------------------------------- */
function Hello3(age, name) {
    if (age !== undefined) {
        return `Hello, ${name}. You are ${age} years old.`;
    }
    else {
        return `Hello, ${name}`;
    }
}
console.log(Hello3(30, "Alice"));
console.log(Hello3(undefined, "Bob"));
/* -------------------------- ( ... 배열 )-------------------------------------- */
function Add(...nums) {
    return nums.reduce((result, num) => result + num, 0);
}
console.log("Add = " + Add(1, 2, 3, 4)); // 10
console.log("Add = " + Add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
const Sam = { name: 'Sam' };
function showName3() {
    console.log(this.name);
}
const a_name = showName3.bind(Sam);
a_name(); // Sam
function join(name, age) {
    if (typeof age === "number") {
        return { name, age };
    }
    else {
        return "나이는 숫자로 입력해주세요.";
    }
}
const sam = join("Sam", 25); // 리턴 타입이 2가지 종류일때
const jan = join("Jan", "35"); // 리턴 타입이 2가지 종류일때
console.log(" 밸리데이션 :: " + join("Alice", 30)); // { name: 'Alice', age: 30 }
console.log(" 밸리데이션 :: " + join("Bob", "twenty")); // 나이는 숫자로 입력해주세요.
