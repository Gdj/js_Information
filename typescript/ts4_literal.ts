// 리터럴 (Literal) Types

const userName1 = 'John';
let userName2 = 'Tom';
let userName3: string | number = 'Tom';
userName3 = 123;      // userName3은 문자열 또는 숫자일 수 있습니다.

/* -------------------------- 문자형 리터럴 타입  -------------------------------------- */
type Job = 'ployer' | 'developer' | 'manager';
interface TheUser {
  name : string;
  job: Job;
}
let person: TheUser = {
  name: 'John',
  job: 'ployer'
}


/* -------------------------- 숫자형 리터럴 타입  -------------------------------------- */
interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;       // 1, 2, 3학년만 허용
}
let student: HighSchoolStudent = {
  name: 'John',
  grade: 2
} 


/* -------------------------- 유이온 타입  -------------------------------------- */
interface Car4 {
  name: "car";
  color: string;
  start(): void;
}
interface Mobile4 {
  name: "mobild";
  color: string;
  call(): void;
}

function getGift(gift: Car4 | Mobile4) {  
  console.log(`Received a ${gift.color} ${gift.name}`);
  if (gift.name === "car") {
    gift.start();
  } else if (gift.name === "mobild") {
    gift.call();
  }
}


/* -------------------------- 교차 타입  -------------------------------------- */
interface Tcar {
  name: string;
  start(): void;
}
interface Toy {
  name: string;
  color: string;
  price: number;
}
const toyCar: Tcar & Toy = {
  name: 'Toy Car',
  color: 'red', 
  price: 1000,  
  start() {
    console.log(`${this.name} is starting...`);
  }
};