"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* {
  const obj1 = {ke:'key1'}
  const obj2 = {ke:'key2'}
  const obj3 = {ke:'key4'}
  
  const arr1 = ['key1', 'key12']
  const arr2 = ['key2', 'key13']
  const arr3 = ['key4', 'key14']
  

  const objCopy = {...obj1, ...obj2, ...obj3}
  const arrayCopy = [...arr1, ...arr2, ...arr3]
  const jsonCopy  = JSON.parse(JSON.stringify(_arrObj))
  //console.log( ">>>" , arrayCopy);

} */

function funSum($a, $b) {
  var _a = $a;
  var _b = $b;
  return {
    setA: function setA($v) {
      _a = $v;
    },
    setB: function setB($v) {
      _b = $v;
    },
    getSum: function getSum() {
      return _a + _b;
    }
  };
}
var fSum = new funSum();
fSum.setA(2);
fSum.setB(3);
console.log("funSum : ", fSum.getSum()); // funSum :  5
var claSum = /*#__PURE__*/function () {
  function claSum() {
    var $a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var $b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    _classCallCheck(this, claSum);
    _defineProperty(this, "a", null);
    _defineProperty(this, "b", null);
    this.a = $a;
    this.b = $b;
  }
  _createClass(claSum, [{
    key: "A",
    set: function set($v) {
      this.a = $v;
    }
  }, {
    key: "B",
    set: function set($v) {
      this.b = $v;
    }
  }, {
    key: "Sum",
    get: function get() {
      return this.a + this.b;
    }
  }]);
  return claSum;
}();
var cSum = new claSum();
cSum.A = 2;
cSum.B = 5;
console.log("claSum : ", cSum.Sum); // claSum :  7