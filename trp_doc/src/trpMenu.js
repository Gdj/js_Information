/**
 * Vanilla JS
 * @author <TurfRain>
 * @variation 0.0.1
 * @copyright TR 2023.04
 * @License Copyright ⓒ 2023 TR 
 * @see https://turfrain.tistory.com/
 */
 
 /** 
 * TRP : 패키지 선택자
 * @constructor
 * @this $select
 * @param {string} $select - 선택자
 */
function Trp($select){
	/** _this : 선택자 */
	this._this    = document.querySelectorAll($select);
	this.text 		= this._this.innerText;        // = "" 
	this.html 		= this._this.innerHtml;        // = ""
	this.attr 		= this._this.getAttribute;     // 읽기(attr)
	this.setAttr  = this._this.setAttribute;     // 쓰기(attr, value)
}
Trp.prototype = {};

/**
 * @desc 이름 전달 리턴
 * @param {string} $name - 이름
 */
Trp.prototype.getName = function($name) {
	var _this = this._this;
	_this.forEach( function($item){
		var _return =  "hi "+  $name;
		$item.innerText = _return;
	})
}


/**
 * trpToggleBtn : 토글버튼함수 		
 * @param {function} $trueFn   - true 일때 함수
 * @param {function} $falseFn  - false 일때 함수
 * @requires toggleAllSet($b)   : 상태값
 * @requires setToggle($index)  : 대상 인덱스 토글
 * @requires setBtn($index)     : 대상 인덱스 활성
 * @requires reSetBtn($index)   : 대상 인덱스 비활성
 * @requires setOneBtn($index)  : 대상 인덱스만 활성
 * @example     
 * var btnControl = new Trp(".toggle0 a");
 * var toggleBtn = btnControl.trpToggleBtn(
 * 	function($this) {
 * 		var openH = $this.closest(".trp_item").querySelector(".text").clientHeight;
 * 		console.log("true", openH)
 * 		$this.closest(".trp_item").classList.add('on');
 * 		$this.closest(".trp_item").querySelector(".con").style.height= openH + "px";
 * 	},
 * 	function($this) {
 * 		console.log("false", $this)
 * 		$this.closest(".trp_item").classList.remove('on');
 * 		$this.closest(".trp_item").querySelector(".con").style.height= 0 + "px";
 * });
 */
Trp.prototype.trpToggleBtn = function($trueFn,$falseFn){
	var _this, _thisAll, _e;
	_thisAll = this._this;;							// 전체 버튼
	
	_thisAll.forEach( function($item){
		$item.setAttribute("data-active", "false" );	// 전체 버튼 닫친상태 로
		$item.addEventListener("click", eventSetAttribute );
	})

	function eventSetAttribute($e){
		_this = $e.target;	// 선택 버튼
		_e 	  = $e;					// 이벤트
		if( _this.getAttribute("data-active") == "true" ){ 
			_this.setAttribute("data-active", "false");
		}else{ 
			_this.setAttribute("data-active", "true" );
		}; // 클랙된것만 열린상태
		active(_this);
		return false;
	}
	
	// 상태에 따른 실행문
	function active($this){
		if( $this.getAttribute("data-active") == "true" )
			$trueFn($this);
		else
			$falseFn($this);
	}


	return { 
		toggleAllSet: function($b){
			_thisAll._tb = $b;
		if(_thisAll._tb)
			_thisAll.forEach( function($item){ $trueFn( $item); })
			else
			_thisAll.forEach( function($item){ $falseFn( $item); })
			_thisAll.forEach( function($item){ 
				$item.setAttribute("data-active", $b);
			})
		},
		setToggle: function($index){
			var _toggle_b = _thisAll[$index].getAttribute("data-active");
			if( _toggle_b == "true" ){
				_thisAll[$index].setAttribute("data-active", "false");
			}else{
				_thisAll[$index].setAttribute("data-active", "true");
			}
			active( _thisAll[$index] );
		},
		setBtn:function($index){
			_thisAll[$index].setAttribute("data-active", "true");
			active( _thisAll[$index] );
		},
		reSetBtn:function($index){
			_thisAll[$index].setAttribute("data-active", "false");
			active( _thisAll[$index] );
		},
		setOneBtn:function($index){
			_thisAll.forEach(function($item, $index){
				$item.setAttribute("data-active", "false");
			});
			_thisAll[$index].setAttribute("data-active", "true");
			active( _thisAll[$index] );
		}
	} // return 

	

}
