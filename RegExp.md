# RegExp (정규표현식)


## 괄호 기호
- `[]` : 문자 하나 
  + [abc] a 또는 b 또는 c
 
- `()` : 문자열 
  + (abc) abc가포함된 문자열


## 기본 기호
- `^` : (^who) "who" 로시작하는 소스"
- `$` : ($who) "who" 로끝나는 소스
- `.` : (.) "." 모든 문자 "."겟수만큼
- `|` : (aa|BB) aa또는 BB 가포함된 문자열
- `-` : [a-z] a 부터 z 까지 문자


## 괄호안 기호
- `[^0-9]` : 대괄호 안에"^"는 제외 문자. 숫자제외


## 수량자
- `{}` 수량표기
 + {3} 3개
 + {3,} 3개이상
 + {3,7} 3개이상 7개이하
- `*` 앞에 있는 문자가 0개 이상
- `+` 앞에 있는 문자가 1개 이상
- `?` 앞에 있는 문자가 0또는 1개


## 옵션
- `/g` : 전체 모든 문자열 변경 (global)
- `/i` : 영문 대소문자를 무시, 모두 일치하는 패턴 검색 (ignore)
  