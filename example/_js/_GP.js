(function() {
	
	var _GP = function(){};
	
	_GP.fn = _GP.prototype;

	//GetElement
	_GP.fn.getID = function(elem) {

		if(this[0] != undefined) return;
		
		if(document.getElementById(elem)) {

			typeof elem === 'string' ? this[0] = document.getElementById(elem) : this[0] = undefined;

			//讓其餘判 ID or Class 斷數量用
			this.length = 1;

		} else {

			this.errorLog.IDLog();

		}
		
		return this;

	}

	_GP.fn.getClass = function(node) {

		if(this[0] != undefined) return;

		if(document.getElementsByClassName(node)[0]) {

			typeof node === 'string' ? this[0] = document.getElementsByClassName(node) : this[0] = undefined;

		} else {

			this.errorLog.ClassLog();

		}

		return this;

	}

	_GP.fn.on = function(action, fn, pop /* bool */) {

		//If undefined
		if(this[0] === undefined) return;

		//ArrayClassElement
		if(typeof this[0] === 'object') {
		
		} else {

			//Change Element
			elem = this[0];

			//BindListener
			if(elem) {

				elem.addEventListener(action, fn, pop);

			}

		}

	}

	_GP.fn.css = function(style /* object */) {

		/*********************************************************
		**
			當 elem.length === undefined 和 this.length === 0 時就是 [ID]
			當 elem.length 判斷出數量時代表是 ClassName 有 length 就是 [Class]
		**
		1. 判斷是否為 Style 是否為 Object ,回報 Log 告知。
		2. 將元素轉為 this[0] -> elem 方便使用。
		3. 判斷傳入元素是否為物件, 如果是物件則是 ClassName取得，
		將 Style 改利用 For 迴圈帶入。
		4. 判斷 this[0] -> elem 是否為 undefined。
		*********************************************************/

		if(typeof style != 'object') this.errorLog.cssLog();

		var elem = this[0];

		if(elem.length === undefined && this.length === 1 && elem != undefined) {


			for(obj in style) {
				
				this[0].style[obj] = style[obj];
			
			}

		} else if(elem.length >= 1 && elem != undefined) {

			var i = 0;
			
			for(len = this[0].length; i < len; i++) {
				
				(function(next) {
					
					for(obj in style) {
						
						elem[next].style[obj] = style[obj];
					
					}
				
				})(i);

			}

		}

		return this;

	}

	//ErrorLog
	_GP.fn.errorLog = {
		
		'IDLog': function() {

			console.warn('[ID error] - is Not finding');
			
			return;

		},
		'ClassLog': function() {

			console.warn('[Class error] - is Not finding');
			
			return;

		},
		'cssLog': function() { 

			console.warn('[CSS error] - is Not an object');
			
			return;

		}

	}

	window._GP = _GP;
})();