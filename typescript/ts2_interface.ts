/* interface (나이 체크) */
/**
 * 인터페이스는 객체의 구조를 정의하는데 사용됩니다.
 * 인터페이스는 클래스가 특정 구조를 따르도록 강제할 수 있습니다.
 */
interface IsAult {
  (age:number):boolean;
}
const adult:IsAult = (age) => {
  return age > 19;
}
console.log( "adult : " + adult(33) );


/* 클래스 인터페이스 (car) */
console.log("----- 클래스 인터페이스 (car) -----");
interface Car2 {
  color: string;
  wheels: number;
  start(): void;
}

class Kia implements Car2 {
  color;
  wheels = 4;

  constructor(color:string){
    this.color = color;
  }
  start(){
    console.log("Kia.start : " + "go...");
  }
}

const myCar = new Kia('green');
console.log( "myCar.color : " + myCar.color );
myCar.start();


console.log("----- Car2 인터페이스 확장 -----");
interface NewCar extends Car2 {
  door : number;
  stop(): void;
}
class Hd implements NewCar {
  color = 'red';
  wheels = 4;
  constructor(color:string){
    this.color = color;
  }
  start(){
    console.log("Hd.start : " + "go...");
  }
  
  door = 5;
  stop(){
    console.log("Hd.stop : " + "stop...");
  }
}
const myHd = new Hd('blue');
console.log( "myHd.color : " + myHd.color );
myHd.stop()