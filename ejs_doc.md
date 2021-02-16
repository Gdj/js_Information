# ejs
Embedded javaScript templates : [http://ejs.co](http://ejs.co)

- [1. ejs 문법 태그](#1-ejs-문법-태그)
- [2. include](#2-include)
  + [2.1. 기본](#21-기본)
  + [2.2. 변수담기](#22-변수담기)
  + [2.3. item.ejs](#23-itemejs) 
- [3. for](#3-for)
  + [3.1. for 기본사용](#31-for-기본사용)
  + [3.2. forEach 사용](#32-foreach-사용)
  + [3.3. for of 사용](#33-for-of-사용)
- [4. if](#4-if)
  + [4.1. if 기본사용](#41-if-기본사용)
  + [4.2. else if 사용](#42-else-if-사용)
- [5. for 안에 if ](#5-for-안에-if)


## 1. ejs 문법 태그
- `<%`  'Scriptlet'태그, 제어 흐름 용, 출력 없음
- `<%_` 'Scriptlet'태그, 앞의 모든 공백을 제거합니다.
- `<%=` 템플릿에 값을 출력합니다 (HTML 이스케이프 됨).
- `<%-` 이스케이프되지 않은 값을 템플릿에 출력합니다.
- `<%#` 주석 태그, 실행 없음, 출력 없음.
- `<%%` 리터럴 '<%'출력
- `%>`  일반 종료 태그.
- `-%>` 줄 바꿈 공백 삭제.
- `_%>` 'Scriptlet'태그, 뒤의 모든 공백을 제거합니다.


## 2. include
  ejs템플릿 파일을 불러 오는 방법.

### 2.1. 기본
  파일경로 와 파일명, 확장자 가지 적어준다.
```
  <%- include('파일경로/파일이름.ejs') -%>
```

### 2.2. 변수 넘기기
  같은 폴더 경로의 '_item.ejs' 파일에 오브젝트 형식으로 값을 전달할 수 있다.
```
  <%- include('./item.ejs' , { options : ["AA", "BB", "CC"] }) -%>
```

### 2.3. item.ejs
  값을 넘겨 받은 _item.ejs 처리 방법은 아래와 같이 테그중간에 삽입 가능하다.
```
<h1><%= options[0] %></h1>
```


## 3. for
  문법은 javaScript 와 거의 같다.
  부모에게 받아온 `options`값 사용시.
  `options : ["AA", "BB", "CC"]`


### 3.1. for 기본사용
  `<% %>` 태그 안에서 자바스크립트와 동일하게 사용 가능
```
<ul>
  <% for(var i = 0; i < options.length; i++){ -%>
    <li> item : <%= options[i] %>  </li>
  <% } -%>
</ul>
```

### 3.2. forEach 사용
```
<ul>
  <% options.forEach(function(item){ -%>
    <li> item : <%= item %>  </li>
  <% }); -%>
</ul>
```

### 3.3 for of 사용
```
<ul>
  <% for(var item of options){ %>
    <li> item : <%= item %>  </li>  
  <% }; -%>
</ul>
```


## 4. if
  문법은 javaScript 와 거의 같다.
  부모에게 받아온 `options`값 사용시.
  `options : ["AA", "BB", "CC"] `

### 4.1. if 기본사용
```
  <ul>
    <% if (options[0] == "AA") { -%>
      <li>상 : <%= options[0] %>  </li>
    <% }; -%>
  </ul>
```

### 4.2. else if 사용
```
  <ul>
    <% if (options[0] == "AA") { -%>
      <li>상 : <%= options[0] %>  </li>
    <% } else if (options[1] == "BB") { -%>
      <li> 중 : <%= options[1] %>  </li>
    <% } else { -%>
      <li> 하 : <%= options[2] %>  </li>
    <% }; -%>
  </ul>
```


## 5. for 안에 if
  javaScript 거의 같은 문법을 사용 한다.
  for문 안에 if문으로 반복되는 값에 특정 값을 분기 처리 할수 있다. 
```
  <% options.forEach(function(item){ -%>
    <% if (item == "AA") { -%>
      <li> 상 : <%= item %> </li>
    <% } else if (item == "BB") { -%>
      <li> 중 : <%= item %> </li>
    <% } else { -%>
      <li> 하 : <%= item %> </li>
    <% }; -%>
  <% }); -%>
```