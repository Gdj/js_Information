"use strict";
/**
 * ts8_utility.ts
 * TypeScript Utility Types Example
 */
const uk = "age"; // "age"는 User8의 키 중 하나입니다.
console.log("UserKey : " + uk);
//let admin: User9_1={                  // 모든 프로퍼티를 선택적으로 만듭니다.
let admin9_1 = {
    id: 1,
    name: "Admin",
};
let admin9_2 = {
    id: 1,
    name: "Admin",
    age: 30, // age는 이제 필수 프로퍼티가 되었습니다.
};
let admin9_3 = {
    id: 1,
    name: "철수"
};
const score_9_1 = {
    1: "A",
    2: "B",
    3: "C"
};
const score9_2 = {
    1: "A",
    2: "B",
    3: "C"
};
function isValid(user) {
    const result = {
        id: user.id > 0,
        name: user.name !== "",
        age: user.age > 0,
    };
    return result;
}
console.log("User9_4 : " + isValid({ id: 1, name: "철수", age: 20 })); // { id: true, name: true, age: true }
const admin9_5 = {
    id: 1,
    name: "철수"
};
const admin9_6 = {
    id: 1,
    name: "철수"
};
// T2는 string 타입이 됩니다.
