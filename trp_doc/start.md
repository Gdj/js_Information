# jsdoc

1. 설치 
  `npm i -D jsdoc`
  - 테마 : `clean-jsdoc-theme`

2. jsdoc.json 파일생성
  - source : api 적요될소스
  - plugins : api 적용될 스킨 플러그인
  - templeate : 문서 템플릿
  - opts : 옵션 
    + destination : api 문서 output
  ``` json
    {
      "source":{
        "include": ["src"],
        "inludePattern": ".js$",
        "excludePattern": "(node_modules/|docs)"
      },
      "plugins": ["plugins/markdown"],
      "templeate": {
        "cleverLinks": true,
        "monospaceLinks": true
      },
      "opts":{
        "template" : "node_modules/clean-jsdoc-theme",
        "encoding" : "utf8",
        "recurse":true,
        "destination": "./docs"
      }
    }
  ```
  3. package.json 실행 명령 정의
    ``` json  
      "script":{
        "doc": "jsdoc -c jsdoc.json"
      },
    ```