# js [Array & Object & JSON]
  > `*` 필수값 

  - [Array & Object](#array-&-object)
  - [Set (ES6)](#set-(es6))
  - [JSON](#json)

  ## Array & Object
  - 더미 데이터생성
  ``` js
    const dataToInsert = [...Array(40).keys()].map(i => ({
      title: `타이틑 넘버링 #${i}`,  
      body: '바디 데이터',
      tags: ['가짜', '데이터'],
    }));
  ```

  ### deep copy 
    - array : `[..._arr]`
    - object : `{..._obj}`
    - json : `JSON.parse(JSON.stringify(_arrObj)); `

  ### slice
  > array.slice(start, end)
    조건에 맞는 새로운 배열.
  - start : 앞에서 인덱스 시작위치
  - end   : 뒤에서 부터

  ### splice  
  > array.splice(index, howmany, item1, ....., itemX)
  - index               : 제거 추가 할 시작위치 
  - howmany             : 제거할 항목수
  - item1, ....., itemX : 추가 요소

  ### find => string
  > array.find(function(currentValue, index, arr), thisValue)
  각 배열 요소에 대한 함수 조건 결과의 첫번재값.
  - currentValue* : 배열 각각 현재 요소
  - index         : 배열 각각 현재 인덱스
  - arr           : 현재 배열
  - thisValue     : this 로전 함수에 전달될 값.

  ### forEach => undefined
  > array.forEach(function(currentValue, index, arr), thisValue)
  - currentValue* : 배열 각각 현재 요소
  - index         : 배열 각각 현재 인덱스
  - arr           : 현재 배열
  - thisValue     : this 로전 함수에 전달될 값. 

  ### map => Array
  > array.map(function(currentValue, index, arr), thisValue)
  각 배열 요소에 대한 함수 결과를 Boolean 으로 새로운 배열 요소를 생성.
  - currentValue* : 배열 각각 현재 요소
  - index         : 배열 각각 현재 인덱스
  - arr           : 현재 배열
  - thisValue     : this 로전 함수에 전달될 값.

  ### indexOf() => index
  > array.index(Value)
  배열 요소를 찾아 인댁스를 반환 한다. 없으면 `-1`

  ### find => Value
  > array.find(function(currentValue){ currentValue = 10})
  조건에 맞는 첫번재 값을 반환한다. 없다면 `undefined`
  - currentValue* : 배열 각각 현재 요소

  ### findIndex => index
  > array.findIndex(function(currentValue){ currentValue = 10})
  조건에 맞는 첫번재 Index를 반환한다. 없다면 `-1`
  - currentValue* : 배열 각각 현재 요소

  ### filter (ES5) => Array
  > array.filter(function(currentValue, index, arr), thisValue)
  각 배열 요소에 대한 함수 조건 결과를 새로운 배열 요소를 생성. 없으면 빈배열
  - currentValue* : 배열 각각 현재 요소
  - index         : 배열 각각 현재 인덱스
  - arr           : 현재 배열
  - thisValue     : this 로전 함수에 전달될 값.

  ### reduce (ES5) => Array
  > array.reduce(function(total, currentValue, currentIndex, arr), initialValue) 
  각 배열 요소에 대한 함수 마지막 호출에서 누적된 결과를 새로운 배열 요소를 생성.
  - total*        : 반환값 누적
  - currentValue* : 배열 각각 현재 요소
  - currentIndex  : 배열 각각 현재 인덱스
  - arr           : 현재 배열
  - initialValue  : 함수에 초기값전달

  ### 두항목 순서 변경 swap
  - 임시 변수에 담고 교환하기(ES5)
  ``` js  
    var myArray = ["a", "b", "c", "d", "e"];  // 1번,과 2번변경
    var temp = myArray[1];
    myArray[1] = myArray[2]
    myArray[2] = temp;
    console.log(myArray)                      // ["a", "c", "b", "d", "e"]
  ```
  - destructuring 문법(ES6)
  ``` js
    var myArray = ["a", "b", "c", "d", "e"];  // 1번,과 2번변경
    [  myArray[1],  myArray[2] ] = [  myArray[2],  myArray[1] ]
    console.log(myArray)                      // ["a", "c", "b", "d", "e"]
  ```

  ### concat => Array
  > array1.concat(array2, array3, ..., arrayX)
  각 배열을 합쳐 새로운 배열은 리턴
  ``` js
    const array1 = ['a', 'b', 'c'];
    const array2 = ['d', 'e', 'f'];
    const array3 = ['g', 'h', 'i'];
    const array4 = array1.concat(array2,array3);
    console.log(array4);
    // Expected output: Array ["a", "b", "c", "d", "e", "f", "g", "h", "y"]
  ```
  
  ### Object.assign (ES6) => Array | Object 
  > Object.assign(target, ...sources)
  타겟 객체에 이후 객체를 덮어 써 새로운 `Object` 리턴
  ``` js
    const obj1 = {a:1, b:2};
    const obj2 = {b:4, c:5, d:6};
    const objall = Object.assign( {}, obj1, obj2 );
    console.log(objall);
    // Expected output: Object {a:1, b:4, c:5, d:6 }
  ```

  ### [...], {...} (ES6) array, object 복재 => array | object
  > [... arr], {... obj}
  - arr 새로운 배열 생성
    ``` js
      const arr  = [1, 2];
      const arr1 = [4, 5];
      const result1 = [... arr]
      const result2 = [... arr, ... arr1]

      console.log(result1)  // [1, 2]
      console.log(result2)  // [1, 2, 4, 5]
    ```
  - obj 새로운 오브젝트 생성
    ``` js
      const obj  = {a:1, b:2};
      const obj1 = {c:4, d:5};
      const result1 = {... obj}
      const result2 = {... obj, ... obj1}

      console.log(JSON.stringify(result1) )  // {a:1, b:2}
      console.log(JSON.stringify(result2) )  // {a:1, b:2, c:4, d:5}
    ```


  ### join  => string
  > array.join(separator)
  - separator   : 배열 요소 구분기호, 없으면 `,`기본값
  
  ### sort(), .reverse();
  > Array.sort( fn(a, b){ } )
  - 문자 비교 array 
    오름차순 : `Array.sort()`
    내림차순 : `Array.sort().reverse()`
  - 숫자 비교 [array, Object]
    오름차수 : `Array.sort((a,b)=> a.num - b.num )`
    내림차수 : `Array.sort((a,b)=> b.num - a.num )`
  - 문자 비교 [array, Object] 
    오름차수 : `Array.sort((a,b)=> a.name.localeCompare(b.name) )`
    내림차수 : `Array.sort((a,b)=> b.name.localeCompare(a.name) )`
  

  ### indexOf => number
  > array.indexOf(item, start)
  - item  : 검색 대상
  - start : 시작위치 


  ### keys (ES6) => Array
  > array.keys()
  키가 있는 배열로 반환


  
  ## Set (ES6)
  - 중복되지 않는 배열 형태
    ``` js
      var mySet = new Set();
      mySet.add(1);    // Set { 1 }
      mySet.add(5);    // Set { 1, 5 }
      mySet.add(5);    // Set { 1, 5 }
      mySet.has(5);    // true
      mySet.delete(5); // set에서 5를 제거함
    ```

  ## JSON
  - parse : JSON => Obj
  ``` js
    const json = '{"result":true, "count":42}';
    console.log(JSON.parse(json))
    // Expected output: Object { result: true, count: 42 }
  ```

  - stringify : Obj => JONS
  ``` js
    const obj = { x: 5, y: 6 }
    console.log(JSON.stringify(obj));
    // Expected output: '{"x":5,"y":6}'
  ```
