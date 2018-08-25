# 函数式编程入门

## 函数式编程基本理论
### 什么是函数式编程？
函数式编程具有以下特征：

* 与面向对象编程（Object-oriented programming）和过程式编程（Procedural programming）相比，它也是一种编程范式。

* 它的特征之一就是**函数是第一等公民**。（所谓”第一等公民”（first class），指的是函数与其他数据类型一样，处于平等地位，可以赋值给其他变量，也可以作为参数，传入另一个函数，或者作为别的函数的返回值。）

* 强调将计算过程分解成可复用的函数

* 只有纯的、没有副作用的函数，才是合格的函数。	[函数式编程Git Book](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch1.html)

总之，在函数式编程中，函数就是一个管道（pipe）。这头进去一个值，那头就会出来一个新的值，没有其他作用。

函数式编程的起源，是一门叫做范畴论（Category Theory）的数学分支。
范畴论的数学模型：

* 所有成员是一个集合
* 变形关系是函数

然后我们可以把"范畴"想象成是一个容器，里面包含两样东西。

* 值（value）
* 值的变形关系，也就是函数。

相关术语：
1、**纯函数**：对于相同的输入永远会得到相同的输出，而且没有任何可观察的副作用，也不依赖外部环境的状态。或者当一个函数的输出不受外部环境影响，同时也不影响外部环境时，该函数就是纯函数，也就是它只关注逻辑运算和数学运算，同一个输入总得到同一个输出。
比如Array.slice就是纯函数。
（纯函数相对于非纯函数来说，在可缓存性、可移植性、可测试性以及并行计算方面都有着巨大的优势。）

2、函数的**柯里化**：所谓"柯里化"，就是把一个多参数的函数，转化为单参数函数。（将一个低阶函数转换为高阶函数的过程就叫柯里化。）

3、**函数组合**：如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫做"函数的合成"（compose）
例子（取数组的最后一个值）：
const compose = (f, g) => (x => f(g(x))); // 组合函数

var reverse = arr => arr.reverse(); // 第一步先反转数组 Point Free
var first = arr => arr[0];  // 第二步再取数组的第一个值 Point Free
var last = compose(first, reverse); // 调用组合函数
last([1,2,3,4,5]);

4、**Point Free**：就是抽离业务的处理步骤为纯函数。结合函数组合来实现相关功能。
例子：
// 传统写法 const myArr = str => str.toUpperCase().split(',')
// point free就是拆出toUpperCase和split方法为纯函数：
var toUpper = str => str.toUpperCase()
var chai = str => str.split(',')
var  myArr  = compose(chai, toUpper)
myArr("nice work!")

5、**声明式**代码与**命令式**代码。函数式编程讲求声明式代码。
还是来例子：
传统命令式代码：
var CEOs = []
for (var i = 0; i < companies.length; i ++) {
CEOs.push(companies[i].ceo)
}
**声明式代码**：
var CEOs = companies.map(item=> item.ceo)

惰性求值、惰性函数、惰性链。
惰性函数：用ajax举例。
```javvascript
function ajax() {
			if (XMLHttpRequest) {
				ajax = function () {
					return new XMLHttpRequest()
				}
			} else {
				ajax = function() {
					return new ActiveXObject("Microsoft.XMLHTTP")
				}
			}
		}
```
惰性链：最后一步才去真正执行。如Lazychain(1,2,3).add().xxx().end()

更多相关术语：
**高阶函数**：函数当参数，把传入的函数做一个封装，然后返回这个封装函数,达到更高程度的抽象。

**尾调用优化（尾递归）**：
(1)常规递归方案：
```javascript
function fablaqi(num) {
if(num === 1) return 1 
	return num * fablaqi(num - 1)
}
fabilaqi(5)
```
执行步骤：
(1) 5 * fablaqi(4)
(2) 5 * 4 * fablaqi(3)
(3) 5 * 4 * 3 * fabilaqi(2)
(4) 5 * 4 * 3 *  2 * fabilaqi(1)
(5) 5 * 4 * 3 *  2 * 1

尾递归方案：
```javascript
function fabilaqi2(num, total) {
if(num === 1) return num * total
return fabilaqi2(num - 1, num * total)
}
fabilaqi2(5, 1)
```
执行步骤：
(1)fablaqi2(4, 5*1)
(2) fablaqi2(3, 4*5*1)
(3) fablaqi2(2, 3*4*5*1)
(4) fablaqi2(1, 2*3*4*5*1)

**函子**的概念：也是一种容器 包含了值和变形关系，比较特殊的是，它的变形关系可以依次作用于每一个值，将当前容器变形成另一个容器。

一般约定，**函子的标志就是容器具有map方法**。该方法将容器里面的每一个值，映射到另一个容器。

## underscore.js源码解析
### 敬请期待
## Rx.js和lodash.js 相关API
### 敬请期待

## 发现问题？
发邮件(547221469@qq.com)给我或直接提issue :joy:
