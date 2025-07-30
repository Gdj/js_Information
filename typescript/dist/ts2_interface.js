"use strict";
/* interface (나이 체크) */
console.log("----- interface (나이 체크) -----");
const adult = (age) => {
    return age > 19;
};
console.log("adult : " + adult(33));
/* 클래스 인터페이스 (car) */
console.log("----- 클래스 인터페이스 (car) -----");
class Kia {
    constructor(color) {
        this.wheels = 4;
        this.color = color;
    }
    start() {
        console.log("Kia.start : " + "go...");
    }
}
const myCar = new Kia('green');
console.log("myCar.color : " + myCar.color);
myCar.start();
console.log("----- Car2 인터페이스 확장 -----");
class Hd {
    constructor(color) {
        this.color = 'red';
        this.wheels = 4;
        this.door = 5;
        this.color = color;
    }
    start() {
        console.log("Hd.start : " + "go...");
    }
    stop() {
        console.log("Hd.stop : " + "stop...");
    }
}
const myHd = new Hd('blue');
console.log("myHd.color : " + myHd.color);
myHd.stop();
