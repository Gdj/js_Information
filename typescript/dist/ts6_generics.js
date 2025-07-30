"use strict";
// Generic
// 제네릭은 타입을 매개변수로 받는 함수나 클래스를 만들 수 있게 해줍니다.
//# function getSize(arr:number[] | string[] ): number {
function getSize(arr) {
    return arr.length;
}
// 숫자
const arr1 = [1, 2, 3, 4, 5];
//# console.log( "numberType1 : " + getSize(arr1) );          // 5
console.log("numberType2 : " + getSize(arr1)); // 5
// 문자열
const arr2 = ['a', 'b', 'c'];
//# console.log( "stringType1 : " + getSize(arr2) );          // 3
console.log("stringType2 : " + getSize(arr2)); // 3
/* ------------------ any & T ------------------------ */
console.log("----- any & T -----");
// 사용
const m1 = {
    name: "s21",
    price: 1000,
    option: {
        color: "red",
        coupon: false
    }
};
const m2 = {
    name: "s22",
    price: 1100,
    option: "good"
};
/* ------------------ House6 사용시 name 추가 ------------------------ */
console.log("----- House6 사용시 name 추가 -----");
/* 사용 */
const user = { name: "a", age: 20 };
const car = { name: "bmw", color: "green" };
const house = { price: 2000 };
function showName(data) {
    return data.name;
}
console.log("User6 : " + showName(user));
console.log("Car6 : " + showName(car));
console.log("House6 : " + showName(Object.assign(Object.assign({}, house), { name: "아파트" })));
