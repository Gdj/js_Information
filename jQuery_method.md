# jQuery Method


## 스타일 메서드
  <table class="trp table-data-type1">
    <colgroup>
      <col style="width:auto">
      <col style="width:auto">
    </colgroup>
    <tbody>
      <tr>
        <td>메소드</td>
        <td>설명</td>
      </tr>
      <tr >
        <td>$(선택자).css("스타일 속성 이름")<br>$(선택자).css(["스타일 속성 이름", ...])</td>
        <td>해당 선택자에 원하는 스타일 부여</td>
      </tr>
      <tr >
        <td>$(선택자).css("스타일 속성 이름",값) <br>$(선택자).css({스타일 속성 이름:값, ...})</td>
        <td>해당 선택자에 원하는 스타일 속성 값 설정</td>
      </tr>
      <tr >
        <td>$(선택자).addClass("클래스 이름")</td>
        <td>해당 선택자에 클래스 추가</td>
      </tr>
      <tr >
        <td>$(선택자).removeClass("클래스 이름")</td>
        <td>해당 선택자 클래스 삭제</td>
      </tr>
    </tbody>
  </table>

  ## 속성 메서드
   <table class="trp table-data-type1">
     <colgroup>
        <col style="width:auto">
        <col style="width:auto">
      </colgroup>
      <tbody>
        <tr style="">
          <td style="text-align: center;">메소드</td>
          <td style="text-align: center;">설명</td>
        </tr>
        <tr style="">
          <td>$(선택자).attr("속성이름") <br>$(선택자).data("data-속성이름")</td>
          <td>해당 선택자에 속성값 구하기</td>
        </tr>
        <tr style="">
          <td>$(선택자).attr("속성이름","값") <br>$(선택자).data("data-속성이름","값")</td>
          <td>해당 선택자에 속성값 설정하기</td>
        </tr>
      </tbody>
    </table>