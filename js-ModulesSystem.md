## CommonJS(CJS) vs ECMAScript Modules(ESM)

> node js 의 모듈 시스템  
> - es5 의 모듈 시스템 (CJS) 확장자를 "\*.cjs"로 사용하면 (CJS)로인식  
> - es6 의 모듈 시스템(ESM) 확장자를 "\*.mjs"로 사용하면 (ESM)로 인식  
> or  
> - package.json 에서 {type:"commonjs"} 선언시 (CJS)로 인식  
> - package.json 에서 {type:"module"} 선언시 (ESM)로 인식  
> or  
> - 기본적으로 "*.js" 파일을 사용하지만 위처럼 강제할 수 있음. 

### CommonJS 

- cjs 모듈 확장자 명시(.cjs), 기본(.js)
- moduleES5CommonJS.cjs
  ``` js
  const sum = ($a, $b) => {
    return ($a+$b);
  }
  const sub = ($a, $b) => {
    return ($a*$b);
  }

  function sayHi(user) {
    console.log(`hi, ${user}!`);
  }

  /* 내보내는 방식 1 */
  exports.sum   = sum; 
  exports.sub   = sub; 
  exports.sayHi = sayHi;

  /* 내보내는 방식 2 */
  module.exports = {
    sum,
    sub,
    default: sayHi,
  }

  ```

- es5.cjs
  ``` js
  /* 사용 방법 1 */
  const es5 = require("./moduleES5CommonJS.js");

  console.log(es5.sum(4,5))
  console.log(es5.sub(4,5))
  console.log(es5.sayHi("DJ"))

  /* 사용 방법 2 */
  const es5 = require("./commonJs.js");
  const {sum, sub } = require("./commonJs.js");

  console.log(sum(4,5))
  console.log(sub(4,5))
  console.log(es5.default("DJ"))

  /* 
    실행 : node es5.js
  */
  ```

### ECMAScript Modules
- mjs 모듈 확장자 명시(.mjs), package.json `"type": "module"` 선언시 기본(.js)

- moduleES6.mjs
  ``` js
  const sum = ($a, $b) => {
    return ($a+$b);
  }
  const sub = ($a, $b) => {
    return ($a*$b);
  }

  /* 내보내는 방식 1 */
  export {sum, sub};
  export function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }


  /* 내보내는 방식 2 */
  export {sum, sub };
  export default function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
  ```

- es6.mjs
  ``` js

  /* 사용 방법 1 */
  import {sum, sub, sayHi} from "./moduleES6.js";

  console.log(sum(4,5));
  console.log(sub(4,5));
  console.log(sayHi("dj"));


  /* 사용 방법 2 */
  import sayHi, {sum, sub} from "./commonJs.mjs";

  console.log(sum(4,5));
  console.log(sub(4,5));
  console.log(sayHi("dj"));

  /* 사용 방법 3 default 이름 바꾸기 */
   import { default as es6 } from "./commonJs.mjs";
   console.log(es6("dj"));

  /* 
    실행 : node es6.js
  */


  /* es6 문법에 따른 하위 문법 변환이 필요시...
  설정  npm init -y
  설치  npm i -D @babel/core
  설치  npm i -D @babel/cli 
  설치  npm i -D @babel/preset-env 
  win   npm i -D @babel/node
  실행  npx babel-node es6.js  
  */
  ```





