# script
  ## head 선언
  - async : 받아지는 순서대로 실행
  - defer : 다받고 나서 선언 순서대로 실행
  ``` html
    <head>
      <meta charset="UTF-8" />
      <script async src="a.js"></script>
      <script defer src="b.js"></script>
    <head>
  ```

  ## js 선언
  - 문법 오류 표기(ES5) : 'use strice'