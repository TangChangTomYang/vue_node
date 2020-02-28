/**
 * Created by yang on 2020/2/25.
 */

/**
 1. 计算属性的本质
 fullname:{
    set(){

    },
    get(){

    }
  }

 2. 算属性的简写 (只读属性)
 fullname(){
 }

3. 计算属性有缓存, 性能比方法高


4. 事件监听
  v-on:  @

5. 事件兼容, 参数问题:
 btnClick  ,如果定义的方法有参数, 那么会将系统默认的event传过去
 btnClick(params) , 如果定义的方法 有参数, 那么接收到的参数就是 params
 btnClick($event, params) , 如果在回调时, 要传递多个参数可以使用 $event 来获取系统事件参数


 6.  事件监听 修饰符
 .stop    阻止冒泡
 .prevent 阻止默认事件
 .enter   指定按键事件
 .keyCode 指定按键数字事件
 .once    只点击一次事件
 .native


 7. 条件判断

 v-if
 v-else
 v-else-if


 8. v-show / v-if 区别

 9. 遍历
 v-for="item in items"
 v-for="(itme, index) in items"
 v-for="value in obj"
 v-for="(value,key) in items"
 v-for="(value,key,index) in items"


 10. 数组哪些方法是响应 式的
 push() pop() splice()


 11. v-model 本质
 :value = value,  @input


 12. v-model 与 checkbox / radio/ select/

 13. v-model修饰符
  v-model.lazy
  v-model.number
  v-model.number



 14. 组件化开发

 14.1 认识组件

 14.2 组件的基本使用

 14.3 全局组件 / 局部组件

 14.4 组件的语法糖

 14.5 父组件/ 子组件

 14.6 组件模板的分离写法
  script
  template

 14.7 组件的数据存储
  . 子组件不能直接访问父组件的数据(data)
  . 子组件中有自己的data, 必须是函数类型, 返回值是对象类型
  . 子组件的data 为甚么必须是一个函数类型

 14.8 父子组价通行
  父传子--props, 使用时要用中划线- 代替驼峰

 14.8.1  props的写法 数组 ['name', 'title']
 14.8.2 props:{
  name:{
    type:String
    ,default:''
    required:true
   }
 }
 自定义规则检查


  子传符-- this.$emit(事件名, 事件参数)


 1











 */




































