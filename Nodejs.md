# Node.js

## Node.js 버젼관리
  1. nvm 설치 (https://github.com/coreybutler/nvm-windows/releases) "nvm-setup.zip" 설치
  2. 명령어
  - 버젼확인 (현재 버젼에 "*" 표기된다)
  `nvm list`, `nvm ls`

  - 사용 가능한 버전 서버 조회하기
  `nvm list available`

  - 특정버젼 설치 (16.15.1)설치
  `nvm install 16.15.1`

  - 특정 버젼 이동
  `nvm use 16.15.1`

  - 특정 버젼 삭제
  `nvm uninstall 14.13.0`


## 다중 명령실행 concurrently
  1. 설치 : `npm install concurrently --save`
  2. 실행 : `concurrently 명령어 : 명령어`