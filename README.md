[_GP](https://github.com/madeinfree/JS---_GP-Framework) - _GP JavaScript FrameWork
==================================================================================

用方法：「```js<script src="_GP.js"></script>```」

一定要先創建對象 var GP = new _GP();

1. 取得元素 ID 或 Class 改為
原本：var mDiv = document.getElementById('div');
_GP - ID(chaining)：var mDiv = GP.getID('div'); //此為 chaining 用法可以直接 bind 或 css
_GP - ID(none chaining)：var mDiv = GP.getID('div')[0]; //直接取出元素

_GP - Class(chaining)：var mDiv = GP.getClass('node'); //此為 chaining 用法可以直接 bind 或 css
_GP - Class(none chaining)：var mDiv = GP.getClass(your node)[0]; //直接取出元素

2. chaining on 綁定事件
on -> on(action, fn, pop /* bool */)
// action -> 事件動作
// fn -> 觸發 function
// pop -> false 居多
GP.getID('div').on('click', function(){}, false);
也可以綁定 ClassName 元素
GP.getClass('node').on('click', function(){}, false);

3. chaining css 設定元素 css
css(style args[]);
GP.getID('div').css({ 'width': 100+'px', 'height': 100+'px', 'border': 'solid 1px'});

4. 全部都可以 chaining 但一定要先 getID or Class
GP.getID('div').on(xxxxxxx).css(xxxx) 這樣就能綁定又設定 css 了。