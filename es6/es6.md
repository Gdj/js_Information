    # bable
  ## 바벨 기본설치
  - package.json init : `npm init -y` or `pnpm init`
  - 설치 : `npm install --save-dev @babel/core @babel/cli` or `pnpm install --save-dev @babel/core @babel/cli`
  - 실시간 감시 설치 : `npm install --save-dev babel-watch` or `pnpm install --save-dev babel-watch`
  - package.json 설정
    src > lib 폴더로 빌드 
    ``` js
      "scripts": {
        "start": "babel src -d lib -w"
        "build": "babel src -d lib"
      },
    ```
  ## 바벨 옵션설정 
  - 설치 : `npm install --save-dev @babel/preset-env`
    babel.config.json    
    ``` json
      {
        "presets": [
          [
            "@babel/preset-env",
            {
              "useBuiltIns": "entry",
              "corejs": "3.22"
            }
          ]
        ]
      }
      
    ```
  - 브라우져 리스트 
    .browserslistrc
    ``` bash
      > .5%, last 2 versions // .5% 초과 브라우져 지원, 마지만 2버젼가지 지원
      not dead               // 지원중단 브라워저 지원안함
    ```
    or
    package.json
    ``` json  
      { "browserslist": "> .5%, last 2 versions" }
    ```
  - 보수적인 설정
    ``` bash
      > 1%                    // 1% 초과 되는 브라우져지원
      last 2 versions         // 마지막 2버젼까지 지원
      not ie <= 10            // ie 10 이하 지원 하지 않음.
    ```
  - 설정 브라우져 확인 : `npx browserslist`
  

  ## 자동 설정 도구설정
  - nodemon : 스크립트 모니터링 도구, 변경된소스를 반영하여 서버를 재시작함.
  - concurrently : 병행실행 도구, 빌드와 실행 병행.
    `npm i -D nodemon concurrently` or `pnpm i -D nodemon concurrently`
    
  ## 실행 : `npm run build` or `pnpm build`