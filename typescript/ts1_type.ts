/* array */
let num1:number[]        = [1,2,3,5];
let num2:Array<number>   = [1,2,3,5];

let str1:string[]        = ["mon", "tur", "wed"];
let str2:Array<string>   = ["mon", "tur", "wed"];


/* tuple : 배열값의 타입을 정의 */
let tup:[string, number];
tup = ["mon", 1];
console.log( "o의 위치 : " + tup[0].indexOf("o") );


/* function */
const hello = (name:string) => {
  console.log(`Hello, ${name}`);
};
hello("TypeScript");
