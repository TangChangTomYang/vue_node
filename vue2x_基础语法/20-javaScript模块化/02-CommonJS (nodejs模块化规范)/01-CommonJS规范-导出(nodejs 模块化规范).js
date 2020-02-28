/**
 * Created by yang on 2020/2/28.
 */



/**

 其实, javaScript中的模块化有2个核心的概念:
  导出 和 导入
 */

// 在 模块化的概念里, 一个JS文件就可以看做一个模块.
// 而且这个模块有自己的作用域, 不会和别的模块出现命名冲突的问题.


// 注意:
// CommonJS 是node.js 使用的模块化规范, 只有在node环境里才能使用
// 因为在node.js 的环境里有对CommonJS模块化的底层支撑, 在浏览器环境
// 里是不能使用CommonJS模块化规范, 因为浏览器环境没有node.js的环境支撑


// CommonJS  的导出
// module.exports = {
//   flag : true,
//   test(a, b){
//     return a + b;
//   },
//   demo(a,b){
//     return a * b;
//   }
// }

// CommonJS 也可以这样导出
lag = true;

test(a, b){
  return a + b;
}
demo(a,b){
  return a * b;
}

module.exports = {
  flag : flag,
  test:test,
  demo:demo

}

