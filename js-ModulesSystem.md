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

- cjs 모듈 확장자(.cjs)
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

  exports.sum   = sum; 
  exports.sub   = sub; 
  exports.sayHi = sayHi;
  ```

- es5.cjs
  ``` js
  const es5 = require("./moduleES5CommonJS.js");

  console.log(es5.sum(4,5))
  console.log(es5.sub(4,5))
  console.log(es5.sayHi("DJ"))

  /* 
  실행 : node es5.js
  */
  ```

### ECMAScript Modules

- moduleES6.mjs
  ``` js
  const sum = ($a, $b) => {
    return ($a+$b);
  }
  const sub = ($a, $b) => {
    return ($a*$b);
  }

  export function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }

  export {sum, sub};
  ```

- es6.mjs
  ``` js
  import {sum, sub, sayHi} from "./moduleES6.js";

  console.log(sum(4,5));
  console.log(sub(4,5));
  console.log(sayHi("dj"));

  /* 
  설치  npm i -D @babel/core
  설치  npm i -D @babel/cli 
  설치  npm i -D @babel/preset-env 
  win   npm i -D @babel/node
  실행  npx babel-node es6.js  
  */
  ```





