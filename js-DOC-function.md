# js Function
  > `*` 필수값 

  ## arguments vs parameter
  - 인   수 (arguments) : 전달하는 값. (3, 4)
  - 매개변수(parameter) : 전달 받는 값 (a, b)
  ``` js
    functon sum(a, b){
      return a + b;
    }
    sum(3, 4);
  ```

  ## bind() vs call() vs apply()
  ### .bind()
  - 복사된 함수에 `this`를 변경한다
  ``` js
    var obj = { name : "dj" } ;
    function greetingFn($first, $last){
      name = "ym"
      return  $first +" "+ this.name +" "+$last
    }
    var greetingFn2 = greetingFn.bind(obj)
    console.log( greetingFn( "안녕!", "머하면서 지내?" ) );
  ```
  ### .call()
  - 기존 함수에 `this`를 변경하여 값을 전달할 수 있다.
  ``` js
    var obj = { name : "dj" } ;
    function greetingFn($first, $last){
      name = "ym"
      return  $first +" "+ this.name +" "+$last
    }
    console.log( greetingFn.call(null, "안녕!", "머하면서 지내?" ) );
    console.log( greetingFn.call(obj,  "안녕!", "머하면서 지내?" ) ); 
  ```
  ### .apply()
  - 기존 함수에 `this`를 변경하여 값을 배열로 전달할 수 있다.
  ``` js
    var obj = { name : "dj" } ;
    function greetingFn($first, $last){
      name = "ym"
      return  $first +" "+ this.name +" "+$last
    }
    console.log( greetingFn.apply(null, ["안녕!", "머하면서 지내?"] ) );
    console.log( greetingFn.apply(obj,  ["안녕!", "머하면서 지내?"] ) ); 
  ```



  ## 함수 비동기

  ### promise (ES6) 
  - resolve : 성공
  - reject  : 실패
  ``` js 
    /* Promise 생성될때 호출됨 */
    let myPromise = new Promise(function(resolve, reject) {
      console.log("== promise : 생성될때 바로실행  ==")
      //resolve(); // 성공 할때 호출 함수.
      //reject();  // 실패 할때 호출 함수.

      /* 둘중 한개만 실행됨. */
      setTimeout(() => {
        resolve("=OK="); 
      }, 2000);
      setTimeout(() => {
        reject(new Error('>>> : Error MSG')); 
      }, 500);
    });

    /* ==== 결과 받기 ==== */
    myPromise.then(
      function(value) { /* 성공 코드 */ console.log(">>> : ", value) },
      function(error) { /* 실패 코드 */ console.log(">>> : ", error) }
    )
      
    /* -- or --   */

    myPromise
      .then(value => {
        console.log(">>> : ", value);
      })
      .catch(error => {
        console.log(">>> : ", error);
      })
      .finally(() => {
        console.log(">>> : ", "무조건 호출");
      })
  ```

  ### async & await (ES8)
  - resolve : 성공
  - reject  : 실패
  ``` js
    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }

    /* async 함수 기다림 */
    async function asyncCall() {
      console.log('calling');
      /* await 결과 기다림 resolveAfter2Seconds() 값이 나올때 까지 기다림 */
      const result = await resolveAfter2Seconds();
      console.log(result);  
      // Expected output: "resolved"
    }

    asyncCall();

  ```
