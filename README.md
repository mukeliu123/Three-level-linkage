## 全国省市三级联动
  
  由于最近在做一个高仿美团官网首页的前端项目，里面有城市选择这一块，也就是一个三级联动，我先是去网上看了一下，这种联动插件有很多，
  但是我没有使用插件，而是自己用纯js写了一个，不借助任何第三方库。这个联动只精确到省和市，还有区（县）没写，但是原理一样，需要的
  朋友可以自己加。
  
## 文件补录

addCity.js    //主要操作文件，所有要用到的函数都封装在里面
city.js       //收集的全国所有省市文件，以数组的方式写在里面。参考地址：https://github.com/chenjinxinlove/js-code/blob/master/plugins/City-three.js
index.html    //html页面


## 主要用到的知识点：

注：这都是写给和我一样的小白看的，大神略过。

1，利用共享onload事件进行函数调用,这个知识点其实和这个三级联动没有多大任何关系，只是它是加载js文件过程中调用函数的一种最优方法（个人认为），
如果想深入了解这个方法可以去我的博客查看 https://d-answer.github.io/2017/03/08/共享onload事件

2，利用js操作DOM
   (1)document.getElementById(id):根据id值取到相应对象元素。
   (2)ele.getElementsByTagName(tagName):根据标签名取得标签元素(返回数组)。
   (3)document.createElement(ele):创建DOM元素。
   (4)document.createTextNode(txt):创建文本节点。
   (5)ele.appendChild(option):向DOM树中添加节点。
   (6)child.paretNode.removeChild(child):删除DOM节点。

3，事件绑定：首先取到省之后要根据省取得相应的市，所以我的思路是在省级select上绑定一个onclick事件，当点击相应option的时候取到省，
然后根据省的名字开始取相应的市。

## 容易使人入坑的地方

1，使用removeChild(child)方法移除节点的时候，因为select中的option是动态创建的，所以一般都有多个，删除的时候应该用for循环，但是循环的时候
一定要注意，先将取到的option个数赋值给一个变量，再用这个变量做控制，而且删除的时候每次都应该删除第0项，因为option个数和位置始终都是动态变化
的。如下：
```
            var number = option.length;
            for (var i = 0; i < number; i++){
               city.removeChild(option[0]);
            }
```            
2,每次选择更换省的时候要先将前一次option中的市全删掉，这个很好理解，我就不多说了。

### 这个小项目我会用到我现在正在做的一个高仿美团首页的前端项目中，这个项目还是持续中(https://github.com/D-answer/meituan)
### 我会尽快更新。
            
            

