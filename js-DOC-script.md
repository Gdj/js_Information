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

## eslint
- 문법 오류 안보기      : `/* eslint-disable */`
- 문법 엄격 모드" (ES5) : `"use strict";`


## URLSearchParams
> URL Params 을가져올수 있다.
``` js
  var searchParams = new URLSearchParams(location.search);
  for (const param of searchParams) {
    console.log(param);
  }
```