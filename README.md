# boxsize
boxsize 获取隐藏元素的宽高，尺寸

##说明
jQuery中的width(),height(),innerWidth(),outerWidth(),outerWidth(true)等方法，都可以计算隐藏元素（display:none)的尺寸，
非常神奇。而zepto则不行，实际上源生的JS也不行的，jQuery用了特殊的方式。
    由于经常碰到计算隐藏元素的尺寸的问题，而项目又不打算引入jQuery，所以操作非常麻烦，于是，这个小型库诞生了。
    这个库参考jQuery写出来的。

##使用方法

`
boxsize('.test').width();
`
## 参数
boxsize(ele)

|       参数       |   说明   |  默认值 |      可填值     |
|------------------|----------|--------|----------------|
|    ele           | 要计算的元素 | 无 （必填）    | 实际就是querySelectAll 的可选值 |

## API

|       方法       |   说明   |        补充     |
|------------------|----------|--------|----------------|
|    width()            | 和jQuery类似 | 实际就是querySelectAll 的可选值 |
|    height()           | 和jQuery类似 | 返回值是数组或数值 |
|    innerWidth()       | 和jQuery类似 | 返回值是数组或数值 |
|    innerHeight()      | 和jQuery类似 | 返回值是数组或数值 |
|    outerWidth(true)   | 和jQuery类似 | 返回值是数组或数值；true参数可选类似jQuery |
|    outerHeight(true)  | 和jQuery类似 | 返回值是数组或数值；true参数可选类似jQuery|

注意：当 `boxsize(ele)`选中的元素是单个的话，调用方法返回的值是数值；当选中的元素是多个如：`boxsize('.test').width()`,当DOM中有多个`.test`时，
返回的是一个数组。不太明白可以自己测试。







