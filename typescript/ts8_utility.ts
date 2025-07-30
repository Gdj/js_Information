/**
 * ts8_utility.ts
 * TypeScript Utility Types Example
 */

/* ------------------ keyof 타입 정의 ------------------------ */
/**
 * keyof 타입은 객체의 키를 유니온 타입으로 만듭니다.
 * 예를 들어, User8에서 id, name, age, gender 키를 유니온 타입으로 만듭니다.
 */
interface User8 {
  id: number;
  name: string;
  age: number;
  gender: "male" | "female";
}
type UserKey = keyof User8; // "id" | "name" | "age" | "gender"
const uk:UserKey = "age"    // "age"는 User8의 키 중 하나입니다.
console.log("UserKey : " + uk);


/* ------------------ Partial 타입 정의 ------------------------ */
/**
 * Partial 타입은 모든 프로퍼티를 선택적으로 만듭니다.
 */
interface User9_1 {
  id: number; 
  name: string;
  age: number;
  gender: "male" | "female";
}
//let admin: User9_1={                  // 모든 프로퍼티를 선택적으로 만듭니다.
let admin9_1: Partial<User9_1>={        // 모든 프로퍼티를 선택적으로 만듭니다.
  id: 1,
  name: "Admin",
}


/* ------------------ Required 타입 정의 ------------------------ */
/**
 * Required 타입은 모든 프로퍼티를 필수로 만듭니다.
 * 예를 들어, User9_2에서 age는 선택적 프로퍼티였지만 필수 타입을 만듭는다.
 */
interface User9_2 {
  id: number; 
  name: string;
  age?: number;
}
let admin9_2: Required<User9_2> = {
  id:1,
  name: "Admin",
  age: 30,            // age는 이제 필수 프로퍼티가 되었습니다.
}


/* ------------------ Readonly 타입 정의 ------------------------ */
/**
 * Readonly 타입은 객체의 프로퍼티를 읽기 전용으로 만듭니다.
 * 예를 들어, User9_3에서 id와 name은 읽기 전용으로 정의됩니다.
 */
interface User9_3 {
  id: number; 
  name: string;
  age?: number;
}
let admin9_3: Readonly<User9_3> = {
  id: 1,
  name: "철수"
}
//admin9_3.id = 0;      // 오류: Readonly 타입은 프로퍼티를 수정할 수 없습니다.


/* ------------------ Record 타입 정의 ------------------------ */
/**
 * Record 타입은 키와 값을 지정하여 객체를 정의할 수 있습니다.
 * 예를 들어, Score9_1에서 "1", "2", "3"을 키로 하고 "A", "B", "C"를 값으로 가지는 객체를 정의합니다.
 */
// before
interface Score9_1 {
  "1": "A" | "B" | "C";
  "2": "A" | "B" | "C";
  "3": "A" | "B" | "C";
}
const score_9_1: Score9_1 = {
  1: "A",
  2: "B",
  3: "C"
}
// after
type Grade9_2 = "1" | "2" | "3";
type Score9_2 = "A" | "B" | "C";
const score9_2: Record<Grade9_2, Score9_2> = {
  1: "A",
  2: "B",
  3: "C"
}

// Record 타입 응용
/**
 * Record 타입은 키와 값을 지정하여 객체를 정의할 수 있습니다.
 * 예를 들어, User9_4에서 id, name, age 프로퍼티를 가지는 객체를 정의합니다.
 */
interface User9_4 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User9_4){
  const result = {
    id: user.id > 0,
    name: user.name !== "",
    age: user.age > 0,
  };
  return result;
}
console.log("User9_4 : " + isValid({id: 1, name: "철수", age: 20})  ); // { id: true, name: true, age: true }


/* ------------------ Pick 타입 정의 ------------------------ */
/**
 * Pick 타입은 특정 프로퍼티만 선택하여 새로운 타입을 만듭니다.
 * 예를 들어, User9_5에서 id와 name만 선택합니다.
 */
interface User9_5 {
  id: number;
  name: string;
  age: number;
  gender : "male" | "female";
}
const admin9_5: Pick<User9_5, "id" | "name"> = {
  id: 1,
  name: "철수"
}


/* ------------------ omit 타입 정의 ------------------------ */
/**
 * Omit 타입은 특정 프로퍼티를 제외한 새로운 타입을 만듭니다.
 * 예를 들어, User9_6에서 age와 gender만 제외하고 id와 name만 선택하고 새로운 타입을 만듭니다.
 */
interface User9_6 {
  id: number;    
  name: string;
  age: number;
  gender : "male" | "female";
}
const admin9_6: Omit<User9_6, "age" | "gender"> = {
  id: 1,
  name: "철수"
}


/* ------------------ Exclude 타입 정의 ------------------------ */
/**
 * Exclude 타입은 유니온 타입에서 특정 타입을 제외한 새로운 타입을 만듭니다.
 */
type T1 = string | number | boolean;
type T2 = Exclude<T1, number | boolean>; // T1에서 number와 boolean을 제외한 타입입니다.
// T2는 string 타입이 됩니다.



/* ------------------ NonNullable 타입 정의 ------------------------ */
/**
 * NonNullable 타입은 null과 undefined를 제외한 타입을 만듭니다.
 */
type T3 = string | number | null | undefined;
type T4 = NonNullable<T3>; // T3에서 null과 undefined를 제외한 타입입니다.
// T4는 string | number 타입이 됩니다.