"use strict";
/* 클래스 */
class Car5_1 {
    constructor(color, name) {
        this.color = color;
        this.name = name; // (readonly에 초기값을 넣지 않고 생성자에서 초기화함)
    }
    start() {
        console.log("start");
        console.log(this.name);
        console.log(Car5_1.wheels);
    }
}
Car5_1.wheels = 4;
/* 상속 */
class Bmw extends Car5_1 {
    constructor(color, name) {
        super(color, name);
    }
    showName() {
        console.log(this.name);
    }
}
/* 사용 */
const z4 = new Bmw("block", "z4");
console.log("name: " + z4.name + "  color: " + z4.color + "  wheels: " + Car5_1.wheels);
