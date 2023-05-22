如何想让别的程序员打你：



+是转换成数字，-是转换并翻转符号位，在表达式里可以大量使用（前后需要空格）或者代替Date.now()与new Date().getTime()； 

举例：1 + - + + + - + 1=2



~是-（x+1） 所以~~是parseInt(去小数点) ，！~indexOf等同 indexOf==-1；

ES5之前parseInt不加第二个参数会导致前面补了0的字符串变成八进制；

parseInt奇妙用处：

parseInt（0.08）0

parseInt（0.0000……08）8

parseInt（false,16）250

parseInt（parseInt,16）15

parseInt（1/0，19）18

var a={

num:21

toString:function(){return this.num*2}

}

parseInt(a)42



b=a?true:false在JavaScript里是隐式转换

&&与||不返回布尔值（与其他语言不一样），而是返回两个数的一个，所以：if（a）{foo();}可以写成a&&foo（）,甚至：a==2&&a\==3不会报错，而是false。

顺便，如果你想让a==2&&a\==3为true，写以下代码：

Number.prototype.valueOf=function(){

return this++；
}

a=new Number(1)

a==2&&a\==3为true

甚至：Number.prototype.valueOf=function(){

return 3；
}

a=new Number(2)

a==3为 true



恒假值不用0，用“字符串比如42”==true或“字符串”\==false，恒为真就是！（“字符串”\==true）

假阳：不该为true的为true，比如：“0”==false,false=\=0,false=\="",false=\=[]，[]=\=![]等

重点：用 “”=\=[],””=\=0,[]=\=0 代替data.length == 0，0==‘\n'或‘ 空格’代替判断

JavaScript里，a>=b等价与!(a\<b)，<=的情况类似。所以：a={b:42}b={b:43},a >=b:true（对象不能直接比较所以a<b是false）

a=eval(if(true){return b=4+38})//42

b=++a等价b=(a++,a)

var date_sum=month==4?30:month==6?30:month==9?30:month==11?30:month===2?isLeapYear(years)===true?29:28:31

一行判断月份日期

使用回调地狱

