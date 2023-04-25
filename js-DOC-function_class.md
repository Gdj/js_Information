# Function & Class 

## 1. expansion
  ### Function  
  ``` js
    function funSum($a, $b){
      let _a = $a;
      let _b = $b;
      return {
        setA:function($v){ _a = $v},
        setB:function($v){ _b = $v},
        getSum: function(){ return (_a + _b)}
      }
    }
    let fSum = new funSum()
    fSum.setA(2);
    fSum.setB(3);
    console.log("funSum : ",fSum.getSum()) // funSum :  5
  ```

  ### Class
  ``` js
    class claSum{
      a = null;
      b = null;
      constructor($a=0, $b=0) {
      this.a = $a
      this.b = $b
      }
      set A($v){ this.a = $v }
      set B($v){ this.b = $v }
      get Sum(){ return (this.a + this.b) }
    }
    let cSum = new claSum()
    cSum.A = 2;
    cSum.B = 5;
    console.log("claSum : ", cSum.Sum ) // claSum :  7
  ```