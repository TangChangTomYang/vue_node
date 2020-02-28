


var name = '张三'

var flag = true;

function  test(a,b) {

  return a * b;

}

function sum(a, b) {
  return  a + b;

}


// 导出方式1
export  {
  name
}

// 导出方式2:  在定义时直接导出
export var height = 1.88;
export var age = 18;


// 导出方式3: 导出函数/ 类
export  function testDemo() {
  console.log('testDemo');
}

export class Person{
  run(){
    console.log('在奔跑');
  }
}




