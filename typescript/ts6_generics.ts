// Generic
// 제네릭은 타입을 매개변수로 받는 함수나 클래스를 만들 수 있게 해줍니다.

//# function getSize(arr:number[] | string[] ): number {
function getSize<T>(arr:T[]): number {
  return arr.length;
}

// 숫자
const arr1 = [1, 2, 3, 4, 5];
//# console.log( "numberType1 : " + getSize(arr1) );          // 5
console.log( "numberType2 : " + getSize<number>(arr1) );      // 5


// 문자열
const arr2 = ['a', 'b', 'c'];
//# console.log( "stringType1 : " + getSize(arr2) );          // 3
console.log( "stringType2 : " + getSize<string>(arr2) );      // 3


/* ------------------ any & T ------------------------ */
  console.log("----- any & T -----");
  interface Mobile6_1 {
    name:string;
    price:number;
    option:any;
  }
  interface Mobile6_2<T> {
    name:string;
    price:number;
    option:T;
  }
  // 사용
  const m1: Mobile6_2<{ color:string; coupon:boolean}> = {
    name: "s21",
    price: 1000,
    option: {
      color: "red",
      coupon: false
    }
  };
  const m2: Mobile6_2<string> = {
    name : "s22",
    price: 1100,
    option: "good"
  };


  
/* ------------------ House6 사용시 name 추가 ------------------------ */
  console.log("----- House6 사용시 name 추가 -----");
  interface User6{
    name: string;
    age : number;
  }
  interface Car6{ 
    name: string;
    color: string;
  }
  interface House6{
    price: number;
  }

  /* 사용 */
  const user:User6   = {name: "a", age: 20};
  const car:Car6     = {name: "bmw", color: "green"};
  const house:House6 = {price: 2000};

  function showName<T extends {name:string}>(data:T):string {
    return data.name;
  }
  console.log( "User6 : " + showName(user) );
  console.log( "Car6 : " + showName(car) );
  console.log( "House6 : " + showName({ ...house, name: "아파트" }) ); 