# URL API

  - [URLSearchParams](#urlsearchparams)

  ## URLSearchParams
  > [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)
  > URL의 쿼리 문자열을 가져올수 있음 .

  `http://localhost:8080/index.html?page=1`
  ``` js
    var searchParams = new URLSearchParams(location.search);
    var getPage = -1;
    for (const param of searchParams) {
      if(param[0] === "page"){
        getPage = param[1];
        break;
      } 
    }
    console.log(">>> : ", getPage);   // 1
  ```
