# js Function
  > `*` 필수값 


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
