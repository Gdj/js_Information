
/* -------------------------- ( 함수: ?선택적 매개변수 ) ------------------------------------- */
function hi(name?: string): string {
  return `Hello, ${name || "world"}`;
}
function hi2(name = "world"): string {
  return `Hello, ${name}`;
}
const result = hi("TypeScript1");
const result2 = hi2("TypeScript2");
console.log(result);
console.log(result2);

/* -------------------------- ( 선택적 매개변수는 우회하기 ) ------------------------------------- */

function Hello3(age: number | undefined, name:string): string {
  if(age !== undefined) {
    return `Hello, ${name}. You are ${age} years old.`;
  } else {
    return `Hello, ${name}`;
  }
}
console.log(Hello3(30, "Alice"));
console.log(Hello3(undefined, "Bob"));

/* -------------------------- ( ... 배열 )-------------------------------------- */

function Add(...nums: number[]): number {
  return nums.reduce((result, num) => result + num, 0);
}
console.log("Add = " + Add(1, 2, 3, 4) ); // 10
console.log("Add = " + Add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) ); // 55

/* -------------------------- ( this 사용 )-------------------------------------- */
interface User {
  name: string;
}
const Sam: User = {name:'Sam'}

function showName3(this: User) {
  console.log(this.name);
}
const a_name = showName3.bind(Sam);
a_name();   // Sam

/* -------------------------- ( 밸리데이션 : 오버로드 )-------------------------------------- */
interface Member {
  name: string;
  age: number;
}

function join(name:string, age:string): string;
function join(name:string, age:number): Member;  
function join(name: string, age: number | string): Member | string {
  if (typeof age === "number") {
    return { name, age };
  }else {
    return "나이는 숫자로 입력해주세요.";
  }
}
const sam: Member = join("Sam", 25);        // 리턴 타입이 2가지 종류일때
const jan: string = join("Jan", "35");      // 리턴 타입이 2가지 종류일때

console.log(" 밸리데이션 :: " + join("Alice", 30));     // { name: 'Alice', age: 30 }
console.log(" 밸리데이션 :: " + join("Bob", "twenty")); // 나이는 숫자로 입력해주세요.