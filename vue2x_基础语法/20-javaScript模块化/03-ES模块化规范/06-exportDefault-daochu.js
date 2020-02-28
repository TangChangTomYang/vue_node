
// 导出方式4 : export default
// 某些情况下, 一个模块包含某个功能, 我们并不希望给这个功能命名, 而是让导入者自己给
// 这个功能取名字.
// 这个时候我们就可以使用 export default



// 注意: 如果文件使用export default 的方式导出, 那么只能有一个export 不能有多个
// 换句话说在一个文件中, 只能有一个 export default
export default  name = 'export default name'


// 我们在ES 中使用 export 或者 export 导出, 使用 import 导入
// 在浏览器中要让script标签模块化的导入, 就这样来
// <script src='./sss.js' type='module'>


// 当一次性导入的变量太多, 而且可能出现重名, 我们可以使用 import  *  , 具体使用如下:

// import {name, age, height, sex} from './info.js'
// import * as msg  from './info.js' 相当于一次性导入全部,并放入msg
// msg.name
// msg.age
// msg.height
// msg.sex