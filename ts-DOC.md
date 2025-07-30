# typescript DOC

## 컴파일 테스트  
  - 실시간 테스트
  `yarn add -D --save-dev ts-node nodemon`
  - 타입스크립트 컴파일
  `yarn add -D typescript`
  - 타입스크립트 설정 초기화
  `npx tsc --init`
  - package.json 실행 추가

  ``` json
  "scripts": {
    "dev": "nodemon --watch ./ --ext ts --exec \"npx ts-node ./typescript.ts\"",
    "build": "tsc",
    "build2": "tsc --target es6 --outDir dist --rootDir src",
    "start": "node ./typescript.js"
  },
  ```


## 1.타입
  ### 기본타입 
   - 불리언(boolean), 숫자(number), 문자열(string), 배열(array), 
    튜블(tuple), 열거(enum), 아무거나(any),  Null and Undefined, 
    반환값 없음(void), 발생할수 없는 타입(never), 객체(object)
  - 타입 미리보기
  ``` js
    let is:boolean = false;                       // 불리언
    let Num: number = 6;                          // 숫자
    let hex: number = 0xf00d;                     // 숫자
    let name: string = "Gim";                     // 문자
    let str_var: string = `My name is ${name}`;   // 문자
    let list1: number[] = [1, 2, 3];              // 배열
    let list2: Array<number> = [1, 2, 3];         // 배열
    let xx: [string, number];                     // Tuple 개수가 고정된 배열
      xx = ["hello" , 10]      
    enum Color {Red=1, Green, Blue}               // Enum 열거형
      let c: Color = Color.Green;
    let notSure: any = 4;                         // any
    let list: any[] = [1, true, "free"];          // any
    let n: null = null;                           // null
    let u: undefined = undefined;                 // undefined
    function warnUser(): void {                   // void 반환값없음
      console.log("This is my warning message");
    }
    function error(message: string): never {      // never를 반환하는 함수는 함수의 마지막에 도달할 수 없다.
      throw new Error(message);
    }
    declare function create(o: object | null): void;  // Object
    create({ prop: 0 });                              // 성공
    create(null);                                     // 성공
  ```

  ### array
  ``` ts
    let num1:number[]        = [1,2,3,5];
    let num2:Array<number>   = [1,2,3,5];

    let str1:string[]        = ["mon", "tur", "wed"];
    let str2:Array<string>   = ["mon", "tur", "wed"];
  ```
  ### 튜블 (Tuple)
  - 배열값이 문자, 숫자등 석여있들때.
  ``` ts
    let tup:[string, number];
  ```
  ### void, never
  - void : 함수에서 반환값이 없을때
  - never : 에러, 무한루프
  ``` ts
    function callError():never{
      throw new Error();
    }
  ```
  ### enum 
  - 비슷한 값끼리 묵은 오브젝트
  ``` ts
    enum Os {
      Window = 2, 
      Ios = 8,
      Android
    }
    console.log( OS[8] )        // Ios
    console.log( OS["Ios"] )    // 8
  ```
  to
  ``` ts
    var Os;
    (function (Os) {
      Os[Os["Window"] = 0] = "Window";
      Os[Os["Ios"] = 1] = "Ios";
      Os[Os["Android"] = 2] = "Android";
    })(Os || (Os = {}));
  ```
  ### null, undefined
  ``` ts
    let aa:null = null;
    let bb:undefined = undefined;
  ```


## 2.인터페이스(interface)
- 기본 사용법 
  ``` ts
    interface LabelValue {
      label: string;
    }

    function printLabel(labelObj: LabelValue) {
      console.log(labelObj.label);
    }

    let myObj = {size: 33, label: "Size 33 Object"};
    printLabel(myObj);
  ```

- 타입 속성의 정의 잘못된예
  ``` ts
    let user:object;
    user = {
      name : "xx",
      age :30
    }
    console.log(user.name)      // name 속성을 찾을수 없음
  ```
- 타입 속성 정의
  + "gender? : string;" : 있어도 되고 없어도 되는 속성.
  + "readonly birthYear : number;" : 읽기만 가능한 속성.
  + "[grade : number ] : string;" : 키값은 숫자, 값은 문자인 속성을 여러개 받음.
  + "type Score" : 문자열 리털럴 타입, 값을 선택적으로 사용함.
  ``` ts
    type Score = "A" | "B" | "C" | "E" | "F";
    interface User{
      name : string;
      age  : number;
      gender? : string;
      readonly birthYear : number;
      [grade : number ] : Score;
    }
    let user:User = {
      name : "xx",
      age  : 30,
      1 : "A",
      2 : "B"    
    }
    console.log(user.name)
  ```
### 선택적 프로퍼티
- `?` : 사용해도, 사용하지 않아도되는 프로퍼티
``` javascript
  interface SquareConfig {
    color?: string;
    width?: number;
  }
``` 
### 읽기전용 프로퍼티
- `readonly` : 프로퍼티 이름 앞에 readonly를 넣어서 이를 지정, x, y는 수정할 수 없음.
- 변수는 `const`를 사용하고 프로퍼티는 `readonly`를 사용.
``` javascript
  interface Point {
    readonly x: number;
    readonly y: number;
  }
```

### 함수형 인터페이스
한번 정의되면, 함수 타입 인터페이스는 다른 인터페이스처럼 사용할 수 있다.
- 두개의 숫자를 받고 리털값도 숫자
  ``` ts
  interface Add{
    (num1:number, num2:number):number;
  }
  const add:Add = function(x, y){
    return x*y;
  }
  ```
- 두 개의 string 매개변수를 받고 boolean을 반환하는 함수 타입을 정의
  ``` ts
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }
  let mySearch: SearchFunc;
  mySearch = function(src: string, sub: string): boolean {
    let result = src.search(sub);         // search: 찾은 위치의 인덱스를 반환 (0부터 시작) 못 찾으면 -1 반환
    return result > -1;
    // 축약   return src.includes(sub)    // includes: 포함 여부를 boolean으로 직접 반환 (true/false)
  }
  ```

- 나이 체크
  ``` ts
  interface IsAult {
    (age:number):boolean;
  }
  const adult:IsAult = (age) => {
    return age > 19;
  }
  console.log( adult(33) );
  ```

### 인덱서블 타입
- 인터페이스로 함수 타입을 설명하는 방법과 유사하게, a[10] 이나 ageMap["daniel"] 처럼 타입을 "인덱스로" 기술할 수 있습니다.
  ``` javascript  
    interface StringArray {
      [index: number]: string;
    }

    let myArray: StringArray;
    myArray = ["Bob", "Fred"];
    let myStr: string = myArray[0];

    console.log("myStr : ", myStr);     // syStr : Bob
  ```

### 클래스 인터페이스 (implements) &  인터페이스 확장 (extends) 
- `Car2` 인터페이스를 클래스로 상속, 인터페이스를 확장함.
  ``` ts
    /* 클래스 인터페이스 (car)  */
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
        console.log('go...');
      }
    }

    const myCar = new Kia('green');
    console.log( myCar.color );
    myCarstart();


    /* Car2 인터페이스 확장 */
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
  ```

## 3.함수(funciton)
  - 선택적 매개변수 : (name?) 있을수도 있고 없을수도 있는 변수.
  - 두함수는 동일함.
  ``` ts
    function hi(name?: string): string {
      return `Hello, ${name || "world"}`;
    }
    function hi2(name = "world"): string {
      return `Hello, ${name}`;
    }
  ```
  - 선택적 매개변수는 필수 매개변수 뒤에 와야함.
    우회 방법
  ``` ts
    function Hello3(age: number | undefined, name:string): string {
      if(age !== undefined) {
        return `Hello, ${name}. You are ${age} years old.`;
      } else {
        return `Hello, ${name}`;
      }
    }
    console.log(Hello3(30, "Alice"));
    console.log(Hello3(undefined, "Bob"));
  ```
  - "..." 배열형태의 겟수 제한 없이 받기.
  ``` ts
    function Add(...nums: number[]): number {
      return nums.reduce((result, num) => result + num, 0);
    }
    console.log("Add = " + Add(1, 2, 3, 4) ); // 10
    console.log("Add = " + Add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10) ); // 55
  ```
  - this 사용
  ``` ts
    interface User {
      name: string;
    }
    const Sam: User = {name:'Sam'}

    function showName3(this: User) {
      console.log(this.name);
    }
    const a_name = showName3.bind(Sam);
    a_name();   // Sam
  ```
  - 벨리데이션 오버로드 하기
  ``` ts
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

    console.log(" 벨리데이션 :: " + join("Alice", 30)); // { name: 'Alice', age: 30 }
    console.log(" 벨리데이션 :: " + join("Bob", "twenty")); // 나이는 숫자로 입력해주세요.  
  ```

## 4.리터럴(Literal) & 유니온(Union) & 교차(Intersection) 타입
  - 기본형
  ``` ts
    const userName1 = 'John';
    let userName2 = 'Tom';
    let userName3: string | number = 'Tom';
    userName3 = 123;      // userName3은 문자열 또는 숫자일 수 있습니다.
  ```
  - 문자형 & 숫자형
  ``` ts
    type Job = 'ployer' | 'developer' | 'manager';
    interface TheUser {
      name : string;
      job: Job;
      class : 1 | 2 | 3;       // 1, 2, 3 등급만 허용
    }
    let person: TheUser = {
      name: 'John',
      job: 'ployer',
      class: 3
    }
  ```
  - 유니온 타입 : (or) 특정 된것만 사용
  ``` ts
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
  ```
  - 교차 타입 : (and) 특정된것을 포함.
  ``` ts
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
  ```

## 5. class & 추상클래그(abstract)
  - public, readonly
    `color`를 선언하지 않고 `public` or `readonly` 으로 선언할 수 있다.
  ``` ts
    class Car5 {
      // color: string;
      constructor( public color: string) {
        this.color = color;
      }
      start(){
        console.log("Car5.start : " + "go...");
      }
    }
    const bmw = new Car5('blue');
  ```

  ### 접근 제한자 & 프로퍼티(property)
  - public : 기본값, 자식클래스 사용가능 (상속O, 사용O)
  - protected : 자식클래스 사용가능, 인스턴스 사용불가능 (상속O, 사용X)
  - private : 부모내에서 사용, 자식클래스 사용할 수 없음 (상속X, 사용X)
   변수 앞에 "#"넣어 축약으로 사용가능 (#color)
  - static : 정적 멤버변수 (어디서나 사용)
  - readonly : constructor 안에서만 변경가능
  ``` ts
    /* 클래스 */
    class Car5_1 {
      color: string;
      readonly name: string;
      static wheels = 4;

      constructor(color: string, name: string) {
        this.color = color;
        this.name = name;       // (readonly에 초기값을 넣지 않고 생성자에서 초기화함)
      }

      start() {
        console.log("start");
        console.log(this.name);
        console.log(Car5_1.wheels);
      }
    }

    /* 상속 */
    class Bmw extends Car5_1{
      constructor(color: string, name: string){
        super(color, name);
      }
      showName() {
        console.log(this.name)
      }
    }

    /* 사용 */
    const z4 = new Bmw("block", "z4");
    console.log("name: "+ z4.name +"  color: "+ z4.color +"  wheels: " + Car5_1.wheels );

  ```

  - 추상클래스 (abstract) : 이름만 정하고 자식에서 구체화 한다.
    추상 클래스는 상소으로만 객체를 만듬.
  ``` ts
    abstract class Car5_2 {
      // color: string;
      constructor( public color: string) {
        this.color = color;
      }
      start(){
        console.log("Car5_2.start : " + "go...");
      }
      abstract doSomething():void;       // 상속받은 자식에서 구현이 필요함
    }
    // const mycar = new Car5_2("red")   // XXX

    class Bmw extends Car5_2{
      constructor(color: string){
        super(color)
      }
      doSomething(){
        alert("hi")
      }
    }

    /* 사용 */
    const z4 = new Bmw("block");
  ```
 
## 6.제네릭(Generic)
  - 클래스, 함수, 인터페이스를 파라미터만 선언하고 사용시점에 타입을 선언하여 사용.
  - 제네릭타입 : `function getSize<T>(arr: T[])` , `getSize<number>(arr1)` or `getSize<number | string>(arr1)`
  - 유니온타입 : `function getSize( arr:number[] | string[] )` 
    타입이 늘어날때마다 추가해야함.
  ``` ts
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
  ```
  - `any` 타입검사를 하지 않음, `T`사용할때 타입을 정의함.
  ``` ts
    interface Mobile6 {
      name:string;
      price:number;
      option:any;
    }
    // or
    interface Mobile6<T> {
      name:string;
      price:number;
      option:T;
    }
    // 사용
    const m1: Mobile6<{color:string; coupon:boolean}> = {
      name: "s21",
      price: 1000,
      option: {
        color: "red",
        coupon: false
      }
    };
    const m2: Mobile6<string> = {
      name : "s22"
      price: 1100,
      option: "good"
    };
  ```
  - House6 사용시 name 추가
  ``` ts
    interface User6{
      name: string;
      age : number;
    }
    interface Car6{ 
      name: string;
      color: string;
    }
    interface House6{
      name: T
      price: number;
    }
  
    /* 사용 */
    const user:User6  = {name: "a", age: 20};
    const car:Car6    = {name: "bmw", color: "green"};
    const house:House6 = {name: "아파트", price: 2000};

    function showName<T extends {name:string}>(data:T):string {
      return data.name;
    }
    console.log( "User6 : " + showName(user) );
    console.log( "Car6 : " + showName(car) );
    console.log( "House6 : " + showName({ ...house, name: "아파트" }) ); 
  ```

## 7.유틸리티 타입 (Utility Types)

  ### 키오브 `keyof` : 키를 유니온 타이브올 변경
  ``` ts
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
  ```
  ### 파셔 `Partial<T>` : 프로퍼티를 옵션으로 변경. 
  (id, name, age, gender)을 모두 사용할 필요없음.
  `let admin: User9_1=` => `let admin: Partial<User9_1>=`
  - Partial 사용 안했을때.
    ``` ts
      interface User9_1 {
        id?: number; 
        name?: string;
        age?: number;
        gender?: "male" | "female";
      }
      let admin: User9_1={              // 모든 프로퍼티를 선택적으로 만듭니다.
        id: 1,
        name: "Admin",
      }
    ```
  - Partial 사용 했을때 (위와 같은내용)
    ``` ts
      /**
       * Partial 타입은 모든 프로퍼티를 선택적으로 만듭니다.
       */    
      interface User9_1 {
        id: number; 
        name: string;
        age: number;
        gender: "male" | "female";
      }
      let admin9_1: Partial<User9_1>={       // 모든 프로퍼티를 선택적으로 만듭니다.
        id: 1,
        name: "Admin",
      }
    ```
  ### 리콰이어드 `Required<T>` : 모든 프로퍼티를 필수로 변경.
  - before 
    ``` ts
      interface User9_2 {
        id: number; 
        name: string;
        age?: number;
      }
      let admin9_2: User9_2 = {
        id:1,
        name: "Admin",
      }
    ```
  - after: `age` 필수 프로퍼티로 변경됨.
    ``` ts
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
        age: 30,        // age는 이제 필수 프로퍼티가 되었습니다.
      }
    ```
  ### 리드온리 `Readonly<T>`
  - before
    ``` ts
      interface User9_3 {
        id: number; 
        name: string;
        age?: number;
      }
      let admin9_3: User9_3 = {
        id: 1,
        name: "철수"
      }
      admin9_3.id = 0;
    ```
  - after 
    ``` ts
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
      admin9_3.id = 0;      // 오류: Readonly 타입은 프로퍼티를 수정할 수 없습니다.
    ```
  ### 레코드 `Record<K,T>` : K(key), T(type)
  - before
    ``` ts
      interface Score {
        "1": "A" | "B" | "C";
        "2": "A" | "B" | "C";
        "3": "A" | "B" | "C";
      }
      const score: Score = {
        1: "A",
        2: "B",
        3: "C"
      }
    ```
  - after 
    ``` ts
      /**
      * Record 타입은 키와 값을 지정하여 객체를 정의할 수 있습니다.
      * 예를 들어, Score9_1에서 "1", "2", "3"을 키로 하고 "A", "B", "C"를 값으로 가지는 객체를 정의합니다.
      */    
      type Grade = "1" | "2" | "3";
      type Score = "A" | "B" | "C";
      const score: Record<Grade, Score> = {
        1: "A",
        2: "B",
        3: "C"
      }
    ```
  - Record 응용
    ``` ts
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
        const result: Record<keyof User, boolean> = {
          id: user.id > 0,
          name: user.name !== "",
          age: user.age > 0,
        };
        return result;
      }
      console.log("User9_4 : " + isValid({id: 1, name: "철수", age: 20})  ); // { id: true, name: true, age: true }
    ```
  ### 픽 `Pick<T,K>` : K(key), T(type)
    Pick 타입은 특정 프로퍼티만 선택하여 새로운 타입을 만듭니다.
    + 인터페이스에서 원하는 속성만 사용.
    ``` ts
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
    ```
  ### 오밋 `Omit<T,K>` : 선택한 속성을 제외 하고 사용
  Omit 타입은 특정 프로퍼티를 제외한 새로운 타입을 만듭니다.
  -  age, gender 제외한 타입 
    ``` ts
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
    ```
  ### 익스클루드 `Exclude<T1, T2>` : 중복된 타입 제외
  Exclude 타입은 유니온 타입에서 특정 타입을 제외한 새로운 타입을 만듭니다.
  - T1에서 T2와 중복되는 타입을 제외시킴
  ``` ts
    type T1 = string | number | boolean;
    type T2 = Exclude<T1, number | boolean>; // T1에서 number와 boolean을 제외한 타입입니다.
    // T2는 string 타입이 됩니다.
  ```
  ### 넌너러블 `NonNullable<Type>`
  - `null`과 `undefined`를 제외한 탑입생
  ``` ts
    type T3 = string | number | null | undefined;
    type T4 = NonNullable<T3>; // T3에서 null과 undefined를 제외한 타입입니다.
    // T4는 string | number 타입이 됩니다.
  ```