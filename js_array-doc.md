js_es6.md
# js A
  > `*` 필수값 

  ## array

  ### slice
    > array.slice(start, end)
    조건에 맞는 새로운 배열.
    - start : 앞에서 인덱스 시작위치
    - end   : 뒤에서 부터

  ### splice
    > array.splice(index, howmany, item1, ....., itemX)
    - index               : 제거 추가 할 시작위치 
    - howmany             : 제거할 항목수
    - item1, ....., itemX : 추가 요소

  ### find => string
  > array.find(function(currentValue, index, arr), thisValue)
  각 배열 요소에 대한 함수 조건 결과의 첫번재값.
  - currentValue* : 배열 각각 현재 요소
  - index         : 배열 각각 현재 인덱스
  - arr           : 현재 배열
  - thisValue     : this 로전 함수에 전달될 값.

  ### map => Array
    > array.map(function(currentValue, index, arr), thisValue)
    각 배열 요소에 대한 함수 결과를 Boolean 으로 새로운 배열 요소를 생성.
    - currentValue* : 배열 각각 현재 요소
    - index         : 배열 각각 현재 인덱스
    - arr           : 현재 배열
    - thisValue     : this 로전 함수에 전달될 값.

  ### filter (ES5) => Array
    > array.filter(function(currentValue, index, arr), thisValue)
    각 배열 요소에 대한 함수 조건 결과를 새로운 배열 요소를 생성. 없으면 빈배열
    - currentValue* : 배열 각각 현재 요소
    - index         : 배열 각각 현재 인덱스
    - arr           : 현재 배열
    - thisValue     : this 로전 함수에 전달될 값.

  ### reduce (ES5) => Array
    > array.reduce(function(total, currentValue, currentIndex, arr), initialValue) 
    각 배열 요소에 대한 함수 마지막 호출에서 누적된 결과를 새로운 배열 요소를 생성.
    - total*        : 반환값 누적
    - currentValue* : 배열 각각 현재 요소
    - currentIndex  : 배열 각각 현재 인덱스
    - arr           : 현재 배열
    - initialValue  : 함수에 초기값전달

  ### concat => Array
    > array1.concat(array2, array3, ..., arrayX)
    각 배열을 합침.

  ### join  => string
    > array.join(separator)
    - separator   : 배열 요소 구분기호, 없으면 `,`기본값
  
  ### indexOf => number
    > array.indexOf(item, start)
    - item  : 검색 대상
    - start : 시작위치 


  ### keys (ES6) => Array
    > array.keys()
    키가 있는 배열로 반환