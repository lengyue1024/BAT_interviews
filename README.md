<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-generate-toc again -->
**Table of Contents**
**2018-BAT_interviews**
分享2018年最新BAT面试题

* [PHP面试题及答案](#PHP面试题及答案)
   * [1 基础题](#1-基础题)

   * [2 简述题](#2-简述题)

   * [3 编程题](#3-编程题)

   * [4 填空题](#4-填空题)

* [大数据面试题及答案](#大数据面试题及答案)

* [python面试题及答案](#python面试题及答案)
   * [python语言特性](#python语言特性)
      * [1 Python的函数参数传递](#1-Python的函数参数传递)
      * [2 Python中的元类(metaclass)](#2-Python中的元类(metaclass))
      * [3 @staticmethod和@classmethod](#3-@staticmethod和@classmethod)
      * [4 类变量和实例变量](#4-类变量和实例变量)
      * [5 Python自省](#5-Python自省)
      * [6 字典推导式](#6-典推导式)
      * [7 Python中单下划线和双下划线](#7-Python中单下划线和双下划线)
      * [8 字符串格式化:%和.format](#8-字符串格式化:%和.format)
      * [9 迭代器和生成器](#9-迭代器和生成器)
      * [10 *args and **kwargs](#10-*args and **kwargs)
      * [11 面向切面编程AOP和装饰器](#11-面向切面编程AOP和装饰器)
      * [12 鸭子类型](#12-鸭子类型)
      * [13 Python中重载](#13-Python中重载)
      * [14 新式类和旧式类](#14-新式类和旧式类)
      * [15 _new__和__init__的区别](#15-_ new__和__init__的区别)
      * [16 单例模式](#16-单例模式)
      * [17 Python中的作用域](#17-Python中的作用域)
      * [18 GIL线程全局锁](#18-GIL线程全局锁)
      * [19 协程](#19-协程)
      * [20 闭包](#20-闭包)
      * [21 lambda函数](#21-lambda函数)
      * [22 Python函数式编程](#22-Python函数式编程)
      * [23 Python里的拷贝](#23-Python里的拷贝)
      * [24 Python垃圾回收机制](#24-Python垃圾回收机制)
        * [1 引用计数](#1-引用计数)
        * [2 标记-清除机制](#2-标记-清除机制)
        * [3 分代技术](#3-分代技术)
      * [25 Python里面如何实现tuple和list的转换？](#25-Python里面如何实现tuple和list的转换？)
      * [26 Python的is](#26-Python的is)
      * [27 read,readline和readlines](#27-read,readline和readlines)
      * [28 Python2和3的区别](#28-Python2和3的区别)
      * [29 到底什么是Python？你可以在回答中与其他技术进行对比](#29-到底什么是Python？你可以在回答中与其他技术进行对比)
      * [30 补充缺失的代码](#30-补充缺失的代码)
      * [31 阅读下面的代码，写出A0，A1至An的最终值。](#31-阅读下面的代码，写出A0，A1至An的最终值。)
      * [32 下面代码会输出什么：](#32-下面代码会输出什么：)
      * [33 你如何管理不同版本的代码？](#33-你如何管理不同版本的代码？)
      * [34 “猴子补丁”（monkey patching）指的是什么？这种做法好吗？](#34-“猴子补丁”（monkey patching）指的是什么？这种做法好吗？)
      * [35 阅读下面的代码，它的输出结果是什么？](#35-阅读下面的代码，它的输出结果是什么？)
      * [36 阅读下面的代码，它的输出结果是什么？](#36-阅读下面的代码，它的输出结果是什么？)
      * [37 介绍一下except的用法和作用？](#37-介绍一下except的用法和作用？)
      * [38 Python中pass语句的作用是什么？](#38-Python中pass语句的作用是什么？)
      * [39 介绍一下Python下range()函数的用法？](#39-介绍一下Python下range()函数的用法？)
      * [40 Python里面match()和search()的区别？](#40-Python里面match()和search()的区别？)
      * [41 用Python匹配HTML tag的时候，<.*>和<.*?>有什么区别？](#41-用Python匹配HTML tag的时候，<.*>和<.*?>有什么区别？)
      * [42 Python里面如何生成随机数？](#42-Python里面如何生成随机数？)
      * [43 有没有一个工具可以帮助查找python的bug和进行静态的代码分析？](#43-有没有一个工具可以帮助查找python的bug和进行静态的代码分析？)
      * [](#)
      * [](#)
      * [](#)
      * [](#)
      * [](#)
      * [](#)
      * [](#)
      * [](#)
      * [](#)
      * [](#)

* [java面试题及答案](#java面试题及答案)
* [前端面试题及答案](#前端面试题及答案)

## PHP面试题及答案
做为程序员，到IT企业面试的时候肯定会有笔试这关，那就要考考你的PHP知识了，所以本站收集一些实用的php面试题及答案给大家。
### 1 基础题
#### 1 表单中get与post提交方法的区别?
答:get是发送请求HTTP协议通过url参数传递进行接收,而post是实体数据,可以通过表单提交大量信息.  
#### 2 session与cookie的区别?
答:session:储存用户访问的全局唯一变量,存储在服务器上的php指定的目录中的（session_dir）的位置进行的存放
   cookie:用来存储连续訪問一个頁面时所使用，是存储在客户端，对于Cookie来说是存储在用户WIN的Temp目录中的。 两者都可通过时间来设置时间长短
#### 3 数据库中的事务是什么?
答:事务（transaction）是作为一个单元的一组有序的数据库操作。如果组中的所有操作都成功，则认为事务成功，即使只有一个操作失败，事务也不成功。如果所有操作完成，
事务则提交，其修改将作用于所有其他数据库进程。如果一个操作失败，则事务将回滚，该事务所有操作的影响都将取消。
### 2 简述题
#### 1、用PHP打印出前一天的时间格式是2006-5-10 22:21:21(2分)
答:echo date('Y-m-d H:i:s', strtotime('-1 days'));  
#### 2、echo(),print(),print_r()的区别(3分)
答:echo是PHP语句, print和print_r是函数,语句没有返回值,函数可以有返回值(即便没有用)   
   print（）    只能打印出简单类型变量的值(如int,string)   
   print_r（） 可以打印出复杂类型变量的值(如数组,对象)   
   echo     输出一个或者多个字符串
#### 3、能够使HTML和PHP分离开使用的模板(1分)
答:Smarty,Dwoo,TinyButStrong,Template Lite,Savant,phemplate,XTemplate
#### 4、使用哪些工具进行版本控制?(1分)
答:cvs,svn,vss;
#### 5、如何实现字符串翻转?(3分)
答:echo strrev($a);
#### 6、优化MYSQL数据库的方法。(4分，多写多得)
```
答:
1、选取最适用的字段属性,尽可能减少定义字段长度,尽量把字段设置NOT NULL,例如'省份,性别',最好设置为ENUM
2、使用连接（JOIN）来代替子查询:
   a.删除没有任何订单客户:DELETE FROM customerinfo WHERE customerid NOT in(SELECT customerid FROM orderinfo)
   b.提取所有没有订单客户:SELECT FROM customerinfo WHERE customerid NOT in(SELECT customerid FROM orderinfo)
   c.提高b的速度优化:SELECT FROM customerinfo LEFT JOIN orderid customerinfo.customerid=orderinfo.customerid
   WHERE orderinfo.customerid IS NULL
3、使用联合(UNION)来代替手动创建的临时表
   a.创建临时表:SELECT name FROM `nametest` UNION SELECT username FROM `nametest2`
4、事务处理:
   a.保证数据完整性,例如添加和修改同时,两者成立则都执行,一者失败都失败
   mysql_query("BEGIN");
   mysql_query("INSERT INTO customerinfo (name) VALUES ('$name1')";
   mysql_query("SELECT * FROM `orderinfo` where customerid=".$id");
   mysql_query("COMMIT");
5、锁定表,优化事务处理:
   a.我们用一个 SELECT 语句取出初始数据，通过一些计算，用 UPDATE 语句将新值更新到表中。
     包含有 WRITE 关键字的 LOCK TABLE 语句可以保证在 UNLOCK TABLES 命令被执行之前，
     不会有其它的访问来对 inventory 进行插入、更新或者删除的操作
   mysql_query("LOCK TABLE customerinfo READ, orderinfo WRITE");
   mysql_query("SELECT customerid FROM `customerinfo` where id=".$id);
   mysql_query("UPDATE `orderinfo` SET ordertitle='$title' where customerid=".$id);
   mysql_query("UNLOCK TABLES");
6、使用外键,优化锁定表
   a.把customerinfo里的customerid映射到orderinfo里的customerid,
     任何一条没有合法的customerid的记录不会写到orderinfo里
   CREATE TABLE customerinfo
   (
     customerid INT NOT NULL,
     PRIMARY KEY(customerid)   
   )TYPE = INNODB;
   CREATE TABLE orderinfo
   (
     orderid INT NOT NULL,
     customerid INT NOT NULL,
     PRIMARY KEY(customerid,orderid),
     FOREIGN KEY (customerid) REFERENCES customerinfo
     (customerid) ON DELETE CASCADE    
   )TYPE = INNODB;
   注意:'ON DELETE CASCADE',该参数保证当customerinfo表中的一条记录删除的话同时也会删除order
         表中的该用户的所有记录,注意使用外键要定义事务安全类型为INNODB;
7、建立索引:
   a.格式:
   (普通索引)->
   创建:CREATE INDEX <索引名> ON tablename (索引字段)
   修改:ALTER TABLE tablename ADD INDEX [索引名] (索引字段)
   创表指定索引:CREATE TABLE tablename([...],INDEX[索引名](索引字段))  
   (唯一索引)->
   创建:CREATE UNIQUE <索引名> ON tablename (索引字段)
   修改:ALTER TABLE tablename ADD UNIQUE [索引名] (索引字段)
   创表指定索引:CREATE TABLE tablename([...],UNIQUE[索引名](索引字段))  
   (主键)->
   它是唯一索引,一般在创建表是建立,格式为:
   CREATA TABLE tablename ([...],PRIMARY KEY[索引字段])
8、优化查询语句
   a.最好在相同字段进行比较操作,在建立好的索引字段上尽量减少函数操作
   例子1:
   SELECT * FROM order WHERE YEAR(orderDate)<2008;(慢)
   SELECT * FROM order WHERE orderDate<"2008-01-01";(快)
   例子2:
   SELECT * FROM order WHERE addtime/7<24;(慢)
   SELECT * FROM order WHERE addtime<24*7;(快)
   例子3:
   SELECT * FROM order WHERE title like "%good%";
   SELECT * FROM order WHERE title>="good" and name<"good";
   ```
#### 8、PHP的意思(送1分)
答:PHP是一个基于服务端来创建动态网站的脚本语言，您可以用PHP和HTML生成网站主页
#### 9、MYSQL取得当前时间的函数是?，格式化日期的函数是(2分)
答:now(),date()
#### 10、实现中文字串截取无乱码的方法。(3分)
```
答:function GBsubstr($string, $start, $length) {
    if(strlen($string)>$length){
     $str=null;
     $len=$start+$length;
     for($i=$start;$i<$len;$i++){
    if(ord(substr($string,$i,1))>0xa0){
     $str.=substr($string,$i,2);
     $i++;
    }else{
     $str.=substr($string,$i,1);
     }
    }
   return $str.'...';
    }else{
   return $string;
   }
}
```
#### 11、您是否用过版本控制软件? 如果有您用的版本控制软件的名字是?(1分)
#### 12、您是否用过模板引擎? 如果有您用的模板引擎的名字是?(1分)
答:用过,smarty
#### 13、请简单阐述您最得意的开发之作(4分)
答:信息分类
#### 14、对于大流量的网站,您采用什么样的方法来解决访问量问题?(4分)
答:确认服务器硬件是否足够支持当前的流量,数据库读写分离,优化数据表,
   程序功能规则,禁止外部的盗链,控制大文件的下载,使用不同主机分流主要流量
#### 15、用PHP写出显示客户端IP与服务器IP的代码1分)
```
答:打印客户端IP: echo $_SERVER[‘REMOTE_ADDR’]; 或者: getenv('REMOTE_ADDR');
   打印服务器IP:echo gethostbyname("www.bolaiwu.com")
```
#### 16、语句include和require的区别是什么?为避免多次包含同一文件，可用(?)语句代替它们? (2分)
答:require->require是无条件包含也就是如果一个流程里加入require,无论条件成立与否都会先执行require  
  include->include有返回值，而require没有(可能因为如此require的速度比include快)  
  注意:包含文件不存在或者语法错误的时候require是致命的,include不是
#### 17、如何修改SESSION的生存时间(1分).
答:方法1:将php.ini中的session.gc_maxlifetime设置为9999重启apache
   方法2:$savePath = "./session_save_dir/";
         $lifeTime = 小时 * 秒;
         session_save_path($savePath);
         session_set_cookie_params($lifeTime);
         session_start();
   方法3:setcookie() and session_set_cookie_params($lifeTime);
#### 18、有一个网页地址, 比如PHP开发资源网主页: http://www.phpres.com/index.html,如何得到它的内容?($1分)
答:方法1(对于PHP5及更高版本):
   $readcontents = fopen("http://www.phpres.com/index.html", "rb");
   $contents = stream_get_contents($readcontents);
   fclose($readcontents);
   echo $contents;
   方法2:
   echo file_get_contents("http://www.phpres.com/index.html");  

#### 19、在HTTP 1.0中，状态码401的含义是(?);如果返回“找不到文件”的提示，则可用 header 函数，其语句为(?);(2分)
答:状态401代表未被授权,header("Location:www.xxx.php");
#### 20、在PHP中，heredoc是一种特殊的字符串，它的结束标志必须?(1分)
答:heredoc的语法是用"<<<"加上自己定义成对的标签，在标签范围內的文字视为一个字符串
   例子:
   $str = <<<SHOW
   my name is Jiang Qihui!
   SHOW;
#### 21、谈谈asp,php,jsp的优缺点(1分)
答:ASP全名Active Server Pages，是一个WEB服务器端的开发环境， 利用它可以产生和运
行动态的、交互的、高性能的WEB服务应用程序。ASP采用脚本语言VB Script（Java script
）作为自己的开发语言。  
　　PHP是一种跨平台的服务器端的嵌入式脚本语言. 它大量地借用C,Java和Perl语言的语法
, 并耦合PHP自己的特性,使WEB开发者能够快速地写出动态生成页面.它支持目前绝大多数数
据库。还有一点，PHP是完全免费的，不用花钱，你可以从PHP官方站点(http://www.php.ne
t)自由下载。而且你可以不受限制地获得源码，甚至可以从中加进你自己需要的特色。  
　　JSP 是Sun公司推出的新一代站点开发语言，他完全解决了目前ASP,PHP的一个通病－－
脚本级执行（据说PHP4 也已经在Zend 的支持下，实现编译运行）.Sun 公司借助自己在Jav
a 上的不凡造诣，将Java 从Java 应用程序 和 Java Applet 之外，又有新的硕果，就是Js
p－－Java Server Page。Jsp 可以在Serverlet和JavaBean的支持下，完成功能强大的站点
程序。  
　　三者都提供在 HTML 代码中混合某种程序代码、由语言引擎解释执行程序代码的能力。
但JSP代码被编译成 Servlet 并由 Java 虚拟机解释执行，这种编译操作仅在对 JSP 页面的
第一次请求时发生。在 ASP 、PHP、JSP 环境下， HTML 代码主要负责描述信息的显示样式
，而程序代码则用来描述处理逻辑。普通的 HTML 页面只依赖于 Web 服务器，而 ASP 、PH
P、JSP 页面需要附加的语言引擎分析和执行程序代码。程序代码的执行结果被重新嵌入到  
HTML 代码中，然后一起发送给浏览器。 ASP 、PHP、 JSP三者都是面向 Web 服务器的技术
，客户端浏览器不需要任何附加的软件支持。
#### 22、谈谈对mvc的认识(1分)
答:由模型(model),视图(view),控制器(controller)完成的应用程序
   由模型发出要实现的功能到控制器,控制器接收组织功能传递给视图;
#### 23、写出发贴数最多的十个人名字的SQL，利用下表：members(id,username,posts,pass,email)(2分)
答:SELECT * FROM `members` ORDER BY posts DESC limit 0,10;
#### 24. 请说明php中传值与传引用的区别。什么时候传值什么时候传引用?(2分)
答:按值传递：函数范围内对值的任何改变在函数外部都会被忽略
   按引用传递：函数范围内对值的任何改变在函数外部也能反映出这些修改
   优缺点：按值传递时，php必须复制值。特别是对于大型的字符串和对象来说，这将会是一个代价很大的操作。
   按引用传递则不需要复制值，对于性能提高很有好处。
#### 25. 在PHP中error_reporting这个函数有什么作用? (1分)
答:设置错误级别与错误信息回报
#### 26. 请写一个函数验证电子邮件的格式是否正确 (2分)
```
答:function checkEmail($email)
  {
    $pregEmail = "/([a-z0-9]*[-_\.]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?/i";
    return preg_match($pregEmail,$email);   
  }
```
#### 27. 简述如何得到当前执行脚本路径，包括所得到参数。(2分)
答:$script_name = basename(__file__); print_r($script_name);
#### 28、JS表单弹出对话框函数是?获得输入焦点函数是? (2分)
答:弹出对话框: alert(),prompt(),confirm()
   获得输入焦点 focus()
#### 29、JS的转向函数是?怎么引入一个外部JS文件?(2分)
答:window.location.href,<script type="text/javascript" src="js/js_function.js"></script>
#### 30、foo()和@foo()之间有什么区别?(1分)
答:@foo()控制错误输出
#### 31、如何声明一个名为”myclass”的没有方法和属性的类? (1分)
答:class myclass{ }
#### 32、如何实例化一个名为”myclass”的对象?(1分)
答:new myclass()
#### 33、你如何访问和设置一个类的属性? (2分)
答:$object = new myclass();
   $newstr = $object->test;
   $object->test = "info";
#### 34、mysql_fetch_row() 和mysql_fetch_array之间有什么区别? (1分)
答:mysql_fetch_row是从结果集取出1行数组,作为枚举
   mysql_fetch_array是从结果集取出一行数组作为关联数组,或数字数组,两者兼得
#### 35、GD库是做什么用的? (1分)
答:gd库提供了一系列用来处理图片的API，使用GD库可以处理图片，或者生成图片。  
   在网站上GD库通常用来生成缩略图或者用来对图片加水印或者对网站数据生成报表。
#### 36、指出一些在PHP输入一段HTML代码的办法。(1分)
答:echo "<a href='index.php'>aaa</a>";
#### 37、下面哪个函数可以打开一个文件，以对文件进行读和写操作?(1分)
    (a) fget() (b) file_open() (c) fopen() (d) open_file()  [  c  ]
#### 38、下面哪个选项没有将 john 添加到users 数组中? (1分)
　　(a) $users[] = ‘john’;
　　(b) array_add($users,’john’);
　　(c) array_push($users,‘john’);
　　(d) $users ||= ‘john’;  [  a , c  ]
#### 39、下面的程序会输入是否?(1分)
　　$num = 10;
　　function multiply(){
　　$num = $num * 10;
　　}
　　multiply();
　　echo $num;
　　?>
    输出:10
#### 40、使用php写一段简单查询，查出所有姓名为“张三”的内容并打印出来 (2分)
　　表名User
　　Name Tel Content Date
　　张三 13333663366 大专毕业 2006-10-11
　　张三 13612312331 本科毕业 2006-10-15
　　张四 021-55665566 中专毕业 2006-10-15
　　请根据上面的题目完成代码：
　　$mysql_db=mysql_connect("local","root","pass");
　　@mysql_select_db("DB",$mysql_db);
    $result = mysql_query("SELECT * FROM `user` WHERE name='张三'");
    while($rs = mysql_fetch_array($result)){
      echo $rs["tel"].$rs["content"].$rs["date"];
    }     
34、如何使用下面的类,并解释下面什么意思?(3)
　　class test{
     function Get_test($num){
　　    $num=md5(md5($num)."En");
　　    return $num;
　　 }
　　}
答:$testnum = "123";
   $object = new test();
   $encrypt = $object->Get_test($testnum);
   echo $encrypt;
   类test里面包含Get_test方法,实例化类调用方法多字符串加密
35、写出 SQL语句的格式 : 插入 ，更新 ，删除 (4分)
　　表名User
　　Name Tel Content Date
　　张三 13333663366 大专毕业 2006-10-11
　　张三 13612312331 本科毕业 2006-10-15
　　张四 021-55665566 中专毕业 2006-10-15
　　(a) 有一新记录(小王 13254748547 高中毕业 2007-05-06)请用SQL语句新增至表中
    mysql_query("INSERT INTO `user` (name,tel,content,date) VALUES  
    ('小王','13254748547','高中毕业','2007-05-06')")
　　(b) 请用sql语句把张三的时间更新成为当前系统时间
    $nowDate = date("Ymd");
    mysql_query("UPDATE `user` SET date='".$nowDate."' WHERE name='张山'");
　　(c) 请写出删除名为张四的全部记录
    mysql_query("DELETE FROM `user` WHERE name='张四'");
36、请写出数据类型(int char varchar datetime text)的意思; 请问varchar和char有什么区别(2分)
答:int是数字类型,char固定长度字符串,varchar实际长度字符串,datetime日期时间型,text文本字符串
   char的场地固定为创建表设置的长度,varchar为可变长度的字符
38、写出以下程序的输出结果 (1分)
　　$b=201;
　　$c=40;
    $a=$b>$c?4:5;
　　echo $a;
　　?>
答:4
39、检测一个变量是否有设置的函数是否?是否为空的函数是?(2分)
答:isset($str),empty($str);
40、取得查询结果集总数的函数是?(1分)
答:mysql_num_rows($result);
41、$arr = array('james', 'tom', 'symfony'); 请打印出第一个元素的值 (1分)
答:echo $array[0];
42、请将41题的数组的值用','号分隔并合并成字串输出(1分)
答:for($i=0;$i<count($array);$i++){ echo $array[$i].",";}
43、$a = 'abcdef'; 请取出$a的值并打印出第一个字母(1分)
答:echo $a{0} 或 echo substr($a,0,1)
44、PHP可以和sql server/oracle等数据库连接吗?(1分)
答:当然可以
45、请写出PHP5权限控制修饰符(3分)
答:public(公共),private(私用),protected(继承)
46、请写出php5的构造函数和析构函数(2分)
```
答: __construct , __destruct
````
47、完成以下:

   (一)创建新闻发布系统，表名为message有如下字段 (3分)
　　id 文章id
　　title 文章标题
　　content 文章内容
　　category_id 文章分类id
    hits 点击量

```    
答:CREATE TABLE 'message'(
   'id' int(10) NOT NULL auto_increment,
   'title' varchar(200) default NULL,
   'content' text,
   'category_id' int(10) NOT NULL,
   'hits' int(20),
   PRIMARY KEY('id');
   )ENGINE=InnoDB DEFAULT CHARSET=utf8;
```   

    (二)同样上述新闻发布系统：表comment记录用户回复内容，字段如下 (4分)
　　comment_id 回复id
　　id 文章id，关联message表中的id
　　comment_content 回复内容
　　现通过查询数据库需要得到以下格式的文章标题列表,并按照回复数量排序，回复最高的排在最前面
　　文章id 文章标题 点击量 回复数量
　　用一个SQL语句完成上述查询，如果文章没有回复则回复数量显示为0

```
答:SELECT message.id id,message.title title,IF(message.`hits` IS NULL,0,message.`hits`) hits,
   IF(comment.`id` is NULL,0,count(*)) number FROM message LEFT JOIN  
   comment ON message.id=comment.id GROUP BY message.`id`;
```   

　　(三)上述内容管理系统，表category保存分类信息，字段如下 (3分)
　　category_id int(4) not null auto_increment;
　　categroy_name varchar(40) not null;
　　用户输入文章时，通过选择下拉菜单选定文章分类
　　写出如何实现这个下拉菜单

```
答:function categoryList()
{
    $result=mysql_query("select category_id,categroy_name from category")
            or die("Invalid query: " . mysql_error());
    print("<select name='category' value=''>\n");
    while($rowArray=mysql_fetch_array($result))
    {
       print("<option value='".$rowArray['category_id']."'>".$rowArray['categroy_name']."</option>\n");
    }
    print("</select>");
}
```

### 编程题
#### 1. 写一个函数，尽可能高效的，从一个标准 url 里取出文件的扩展名
   例如: http://www.sina.com.cn/abc/de/fg.php?id=1 需要取出 php 或 .php
```   
答案1:
   function getExt($url){
   $arr = parse_url($url);

   $file = basename($arr['path']);
   $ext = explode(".",$file);
   return $ext[1];
}
答案2:
    function getExt($url) {
    $url = basename($url);
    $pos1 = strpos($url,".");
    $pos2 = strpos($url,"?");
    if(strstr($url,"?")){
         return substr($url,$pos1 + 1,$pos2 - $pos1 - 1);
    } else {
      return substr($url,$pos1);
    }
}
```
#### 2. 在 HTML 语言中，页面头部的 meta 标记可以用来输出文件的编码格式，以下是一个标准的 meta 语句
　　请使用 PHP 语言写一个函数，把一个标准 HTML 页面中的类似 meta 标记中的 charset 部分值改为 big5
　　请注意:
　　1. 需要处理完整的 html 页面，即不光此 meta 语句
　　2. 忽略大小写
    3. ' 和 " 在此处是可以互换的
    4. 'Content-Type' 两侧的引号是可以忽略的，但 'text/html; charset=gbk' 两侧的不行
　　5. 注意处理多余空格
#### 3. 写一个函数，算出两个文件的相对路径
　　如 $a = '/a/b/c/d/e.php';
　　$b = '/a/b/12/34/c.php';
　　计算出 $b 相对于 $a 的相对路径应该是 ../../c/d将()添上
答:function getRelativePath($a, $b) {    
    $returnPath = array(dirname($b));    
    $arrA = explode('/', $a);    
    $arrB = explode('/', $returnPath[0]);    
    for ($n = 1, $len = count($arrB); $n < $len; $n++) {    
        if ($arrA[$n] != $arrB[$n]) {    
            break;    
        }     
    }    
    if ($len - $n > 0) {    
        $returnPath = array_merge($returnPath, array_fill(1, $len - $n, '..'));    
    }    

    $returnPath = array_merge($returnPath, array_slice($arrA, $n));    
    return implode('/', $returnPath);    
   }    
   echo getRelativePath($a, $b);   

### 4 填空题
1.在PHP中，当前脚本的名称(不包括路径和查询字符串)记录在预定义变量__$_SERVER['PHP_SELF']__中;而链接到当前页面的URL记录在预定义变量__$_SERVER['HTTP_REFERER']__
中
2.执行程序段<?php echo 8%(-2) ?>将输出__0__。
3.在HTTP 1.0中，状态码 401 的含义是____;如果返回“找不到文件”的提示，则可用 header 函数，其语句为____。
4.数组函数 arsort 的作用是__对数组进行逆向排序并保持索引关系__;语句 error_reporting(2047)的作用是__报告所有错误和警告__。
5.PEAR中的数据库连接字符串格式是____。
6.写出一个正则表达式，过虑网页上的所有JS/VBS脚本(即把scrīpt标记及其内容都去掉):preg_replace("/<script[^>].*?>.*?</script>/si", "newinfo", $script);
7.以Apache模块的方式安装PHP，在文件http.conf中首先要用语句____动态装载PHP模块，然后再用语句____使得Apache把所有扩展名为php的文件都作为PHP脚本处理。
  LoadModule php5_module "c:/php/php5apache2.dll" , AddType application/x-httpd-php .php,
8.语句 include 和 require 都能把另外一个文件包含到当前文件中，它们的区别是____;为了避免多次包含同一文件，可以用语句__require_once||include_once__来代替它们。
9.类的属性可以序列化后保存到 session 中，从而以后可以恢复整个类，这要用到的函数是____。
10.一个函数的参数不能是对变量的引用，除非在php.ini中把__allow_call_time_pass_reference boolean__设为on.
11.SQL中LEFT JOIN的含义是__自然左外链接__。如果 tbl_user记录了学生的姓名(name)和学号(ID)，tbl_score记录了学生(有的学生考试以后被开除了，没有其记录)的学号(ID)
和考试成绩(score)以及考试科目(subject)，要想打印出各个学生姓名及对应的的各科总成绩，则可以用SQL语句____。
12.在PHP中，heredoc是一种特殊的字符串，它的结束标志必须____。
编程题:
13.写一个函数，能够遍历一个文件夹下的所有文件和子文件夹。
答:
function my_scandir($dir)
{
     $files = array();
     if ( $handle = opendir($dir) ) {
         while ( ($file = readdir($handle)) !== false ) {
             if ( $file != ".." && $file != "." ) {
                 if ( is_dir($dir . "/" . $file) ) {
                     $files[$file] = scandir($dir . "/" . $file);
                 }else {
                     $files[] = $file;
                 }
             }
         }
         closedir($handle);
         return $files;
     }
}
14.简述论坛中无限分类的实现原理。
```
答:
<?php
/*
数据表结构如下:
CREATE TABLE `category` (
 `categoryID` smallint(5) unsigned NOT NULL auto_increment,
 `categoryParentID` smallint(5) unsigned NOT NULL default '0',
 `categoryName` varchar(50) NOT NULL default '',
 PRIMARY KEY (`categoryID`)
) ENGINE=MyISAM DEFAULT CHARSET=gbk;
INSERT INTO `category` ( `categoryParentID`, `categoryName`) VALUES  
(0, '一级类别'),
(1, '二级类别'),
(1, '二级类别'),
(1, '二级类别'),
(2, '三级类别'),
(2, '333332'),
(2, '234234'),
(3, 'aqqqqqd'),
(4, '哈哈'),
(5, '66333666');
*/
//指定分类id变量$category_id,然后返回该分类的所有子类
//$default_category为默认的选中的分类
function Get_Category($category_id = 0,$level = 0, $default_category = 0)
{
 global $DB;
 $sql = "SELECT * FROM category ORDER BY categoryID DESC";
 $result = $DB->query( $sql );
 while ($rows = $DB->fetch_array($result))  
 {
 $category_array[$rows[categoryParentID]][$rows[categoryID]] = array('id' => $rows[categoryID], 'parent' => $rows[categoryParentID], 'name' => $rows
[categoryName]);
 }
 if (!isset($category_array[$category_id]))
 {
 return "";
 }
 foreach($category_array[$category_id] AS $key => $category)
 {  
 if ($category['id'] == $default_category)
 {
 echo "<option selected value=".$category['id']."";
 }else
 {
 echo "<option value=".$category['id']."";
 }
 if ($level > 0)
 {
 echo ">" . str_repeat( " ", $level ) . " " . $category['name'] . "</option>\n";
 }
 else
 {
 echo ">" . $category['name'] . "</option>\n";
 }
 Get_Category($key, $level + 1, $default_category);
 }
 unset($category_array[$category_id]);
}
/*
函数返回的数组格式如下所示:
Array  
(
 [1] => Array ( [id] => 1 [name] => 一级类别 [level] => 0 [ParentID] => 0 )
 [4] => Array ( [id] => 4 [name] => 二级类别 [level] => 1 [ParentID] => 1 )
 [9] => Array ( [id] => 9 [name] => 哈哈 [level] => 2 [ParentID] => 4 )
 [3] => Array ( [id] => 3 [name] => 二级类别 [level] => 1 [ParentID] => 1 )  
 [8] => Array ( [id] => 8 [name] => aqqqqqd [level] => 2 [ParentID] => 3 )
 [2] => Array ( [id] => 2 [name] => 二级类别 [level] => 1 [ParentID] => 1 )
 [7] => Array ( [id] => 7 [name] => 234234 [level] => 2 [ParentID] => 2 )
 [6] => Array ( [id] => 6 [name] => 333332 [level] => 2 [ParentID] => 2 )  
 [5] => Array ( [id] => 5 [name] => 三级类别 [level] => 2 [ParentID] => 2 )  
 [10] => Array ( [id] => 10 [name] => 66333666 [level] => 3 [ParentID] => 5 )  
)
*/
//指定分类id,然后返回数组
function Category_array($category_id = 0,$level=0)
{
 global $DB;
 $sql = "SELECT * FROM category ORDER BY categoryID DESC";
 $result = $DB->query($sql);
 while ($rows = $DB->fetch_array($result))
 {
 $category_array[$rows['categoryParentID']][$rows['categoryID']] = $rows;
 }
 foreach ($category_array AS $key=>$val)
 {
 if ($key == $category_id)
 {
 foreach ($val AS $k=> $v)
 {
 $options[$k] =
 array(
 'id' => $v['categoryID'], 'name' => $v['categoryName'], 'level' => $level, 'ParentID'=>$v['categoryParentID']
 );
 $children = Category_array($k, $level+1);
 if (count($children) > 0)
 {
 $options = $options + $children;
 }
 }
 }
 }
 unset($category_array[$category_id]);
 return $options;
}
?>
<?php
class cate
{
        function Get_Category($category_id = 0,$level = 0, $default_category = 0)
        {
             echo $category_id;
             $arr = array(
              '0' => array(
                             '1' => array('id' => 1, 'parent' => 0, 'name' => '1111'),
                             '2' => array('id' => 2, 'parent' => 0, 'name' => '2222'),
                            '4' => array('id' => 4, 'parent' => 0, 'name' => '4444')     
                          ),
              '1' => array(
                              '3' => array('id' => 3, 'parent' => 1, 'name' => '333333'),
                            '5' => array('id' => 5, 'parent' => 1, 'name' => '555555')      
                            ),

              '3' => array(
                            '6' => array('id' => 6, 'parent' => 3, 'name' => '66666'),
                            '7' => array('id' => 7, 'parent' => 3, 'name' => '77777')
                            ),
              '4' => array(
                            '8' => array('id' => 8, 'parent' => 4, 'name' => '8888'),
                            '9' => array('id' => 9, 'parent' => 4, 'name' => '9999')
                            )     
             );
             if (!isset($arr[$category_id]))
             {
                return "";
             }

             foreach($arr[$category_id] AS $key => $cate)
             {
                 if ($cate['id'] == $default_category)
                 {
                     $txt = "<option selected value=".$cate['id']."";
                 }else{
                     $txt = "<option value=".$cate['id']."";
                 }

                 if ($level > 0)
                 {
                    $txt1 = ">" . str_repeat( "-", $level ) . " " . $cate['name'] . "</option>\n";
                 }else{
                     $txt1 = ">" . $cate['name'] . "</option>\n";
                 }
                 $val = $txt.$txt1;
                 echo $val;
                 self::Get_Category($key, $level + 1, $default_category);
             }

        }


        function getFlush($category_id = 0,$level = 0, $default_category = 0)
        {

            ob_start();
            self::Get_Category($category_id ,$level, $default_category);
            $out = ob_get_contents();
            ob_end_clean();
            return $out;
        }     
}
$id =$_GET['id'];
echo "<select>";
$c = new cate();
//$c->Get_Category();
$ttt=  $c->getFlush($id,'0','3');
echo $ttt;
echo "</select>";
?>
```

## 大数据面试题及答案
1、kafka的message包括哪些信息
一个Kafka的Message由一个固定长度的header和一个变长的消息体body组成
header部分由一个字节的magic(文件格式)和四个字节的CRC32(用于判断body消息体是否正常)构成。当magic的值为1的时候，会在magic和crc32之间多一个字节的数据：attributes(保存一些相关属性，比如是否压缩、压缩格式等等)；如果magic的值为0，那么不存在attributes属性
body是由N个字节构成的一个消息体，包含了具体的key/value消息
2、怎么查看kafka的offset
0.9版本以上，可以用最新的Consumer client 客户端，有consumer.seekToEnd() / consumer.position() 可以用于得到当前最新的offset：
3、hadoop的shuffle过程
一、Map端的shuffle
　　Map端会处理输入数据并产生中间结果，这个中间结果会写到本地磁盘，而不是HDFS。每个Map的输出会先写到内存缓冲区中，当写入的数据达到设定的阈值时，系统将会启动一个线程将缓冲区的数据写到磁盘，这个过程叫做spill。
　　在spill写入之前，会先进行二次排序，首先根据数据所属的partition进行排序，然后每个partition中的数据再按key来排序。partition的目是将记录划分到不同的Reducer上去，以期望能够达到负载均衡，以后的Reducer就会根据partition来读取自己对应的数据。接着运行combiner(如果设置了的话)，combiner的本质也是一个Reducer，其目的是对将要写入到磁盘上的文件先进行一次处理，这样，写入到磁盘的数据量就会减少。最后将数据写到本地磁盘产生spill文件(spill文件保存在{mapred.local.dir}指定的目录中，Map任务结束后就会被删除)。

　　最后，每个Map任务可能产生多个spill文件，在每个Map任务完成前，会通过多路归并算法将这些spill文件归并成一个文件。至此，Map的shuffle过程就结束了。
二、Reduce端的shuffle
　　Reduce端的shuffle主要包括三个阶段，copy、sort(merge)和reduce。
　　首先要将Map端产生的输出文件拷贝到Reduce端，但每个Reducer如何知道自己应该处理哪些数据呢？因为Map端进行partition的时候，实际上就相当于指定了每个Reducer要处理的数据(partition就对应了Reducer)，所以Reducer在拷贝数据的时候只需拷贝与自己对应的partition中的数据即可。每个Reducer会处理一个或者多个partition，但需要先将自己对应的partition中的数据从每个Map的输出结果中拷贝过来。
　　接下来就是sort阶段，也成为merge阶段，因为这个阶段的主要工作是执行了归并排序。从Map端拷贝到Reduce端的数据都是有序的，所以很适合归并排序。最终在Reduce端生成一个较大的文件作为Reduce的输入。

　　最后就是Reduce过程了，在这个过程中产生了最终的输出结果，并将其写到HDFS上。
4、spark集群运算的模式
Spark 有很多种模式，最简单就是单机本地模式，还有单机伪分布式模式，复杂的则运行在集群中，目前能很好的运行在 Yarn和 Mesos 中，当然 Spark 还有自带的 Standalone 模式，对于大多数情况 Standalone 模式就足够了，如果企业已经有 Yarn 或者 Mesos 环境，也是很方便部署的。
standalone(集群模式)：典型的Mater/slave模式，不过也能看出Master是有单点故障的；Spark支持ZooKeeper来实现 HA
on yarn(集群模式)： 运行在 yarn 资源管理器框架之上，由 yarn 负责资源管理，Spark 负责任务调度和计算
on mesos(集群模式)： 运行在 mesos 资源管理器框架之上，由 mesos 负责资源管理，Spark 负责任务调度和计算
on cloud(集群模式)：比如 AWS 的 EC2，使用这个模式能很方便的访问 Amazon的 S3;Spark 支持多种分布式存储系统：HDFS 和 S3
5、HDFS读写数据的过程
 读：
1、跟namenode通信查询元数据，找到文件块所在的datanode服务器
2、挑选一台datanode（就近原则，然后随机）服务器，请求建立socket流
3、datanode开始发送数据（从磁盘里面读取数据放入流，以packet为单位来做校验）
4、客户端以packet为单位接收，现在本地缓存，然后写入目标文件
  写：
1、根namenode通信请求上传文件，namenode检查目标文件是否已存在，父目录是否存在
2、namenode返回是否可以上传
3、client请求第一个 block该传输到哪些datanode服务器上
4、namenode返回3个datanode服务器ABC
5、client请求3台dn中的一台A上传数据（本质上是一个RPC调用，建立pipeline），A收到请求会继续调用B，然后B调用C，将真个pipeline建立完成，逐级返回客户端
6、client开始往A上传第一个block（先从磁盘读取数据放到一个本地内存缓存），以packet为单位，A收到一个packet就会传给B，B传给C；A每传一个packet会放入一个应答队列等待应答
7、当一个block传输完成之后，client再次请求namenode上传第二个block的服务器。
6、RDD中reduceBykey与groupByKey哪个性能好，为什么
    reduceByKey：reduceByKey会在结果发送至reducer之前会对每个mapper在本地进行merge，有点类似于在MapReduce中的combiner。这样做的好处在于，在map端进行一次reduce之后，数据量会大幅度减小，从而减小传输，保证reduce端能够更快的进行结果计算。
    groupByKey：groupByKey会对每一个RDD中的value值进行聚合形成一个序列(Iterator)，此操作发生在reduce端，所以势必会将所有的数据通过网络进行传输，造成不必要的浪费。同时如果数据量十分大，可能还会造成OutOfMemoryError。

 通过以上对比可以发现在进行大量数据的reduce操作时候建议使用reduceByKey。不仅可以提高速度，还是可以防止使用groupByKey造成的内存溢出问题。

7、spark2.0的了解
    更简单：ANSI SQL与更合理的API
    速度更快：用Spark作为编译器
    更智能：Structured Streaming

8、 rdd 怎么分区宽依赖和窄依赖
宽依赖：父RDD的分区被子RDD的多个分区使用   例如 groupByKey、reduceByKey、sortByKey等操作会产生宽依赖，会产生shuffle
窄依赖：父RDD的每个分区都只被子RDD的一个分区使用  例如map、filter、union等操作会产生窄依赖
9、spark streaming 读取kafka数据的两种方式
这两种方式分别是：
Receiver-base
使用Kafka的高层次Consumer API来实现。receiver从Kafka中获取的数据都存储在Spark Executor的内存中，然后Spark Streaming启动的job会去处理那些数据。然而，在默认的配置下，这种方式可能会因为底层的失败而丢失数据。如果要启用高可靠机制，让数据零丢失，就必须启用Spark Streaming的预写日志机制（Write Ahead Log，WAL）。该机制会同步地将接收到的Kafka数据写入分布式文件系统（比如HDFS）上的预写日志中。所以，即使底层节点出现了失败，也可以使用预写日志中的数据进行恢复。
Direct
Spark1.3中引入Direct方式，用来替代掉使用Receiver接收数据，这种方式会周期性地查询Kafka，获得每个topic+partition的最新的offset，从而定义每个batch的offset的范围。当处理数据的job启动时，就会使用Kafka的简单consumer api来获取Kafka指定offset范围的数据。
10、kafka的数据存在内存还是磁盘
Kafka最核心的思想是使用磁盘，而不是使用内存，可能所有人都会认为，内存的速度一定比磁盘快，我也不例外。在看了Kafka的设计思想，查阅了相应资料再加上自己的测试后，发现磁盘的顺序读写速度和内存持平。
而且Linux对于磁盘的读写优化也比较多，包括read-ahead和write-behind，磁盘缓存等。如果在内存做这些操作的时候，一个是JAVA对象的内存开销很大，另一个是随着堆内存数据的增多，JAVA的GC时间会变得很长，使用磁盘操作有以下几个好处：
磁盘缓存由Linux系统维护，减少了程序员的不少工作。
磁盘顺序读写速度超过内存随机读写。
JVM的GC效率低，内存占用大。使用磁盘可以避免这一问题。
系统冷启动后，磁盘缓存依然可用。
11、怎么解决kafka的数据丢失
producer端：
宏观上看保证数据的可靠安全性，肯定是依据分区数做好数据备份，设立副本数。
broker端：
topic设置多分区，分区自适应所在机器，为了让各分区均匀分布在所在的broker中，分区数要大于broker数。
分区是kafka进行并行读写的单位，是提升kafka速度的关键。
Consumer端
consumer端丢失消息的情形比较简单：如果在消息处理完成前就提交了offset，那么就有可能造成数据的丢失。由于Kafka consumer默认是自动提交位移的，所以在后台提交位移前一定要保证消息被正常处理了，因此不建议采用很重的处理逻辑，如果处理耗时很长，则建议把逻辑放到另一个线程中去做。为了避免数据丢失，现给出两点建议：
enable.auto.commit=false  关闭自动提交位移
在消息被完整处理之后再手动提交位移

12、fsimage和edit的区别？
  大家都知道namenode与secondary namenode 的关系，当他们要进行数据同步时叫做checkpoint时就用到了fsimage与edit，fsimage是保存最新的元数据的信息，当fsimage数据到一定的大小事会去生成一个新的文件来保存元数据的信息，这个新的文件就是edit，edit会回滚最新的数据。

13、列举几个配置文件优化？
  1）Core-site.xml 文件的优化
    a、fs.trash.interval，默认值： 0；说明： 这个是开启hdfs文件删除自动转移到垃圾箱的选项，值为垃圾箱文件清除时间。一般开启这个会比较好，以防错误删除重要文件。单位是分钟。
    b、dfs.namenode.handler.count，默认值：10；说明：hadoop系统里启动的任务线程数，这里改为40，同样可以尝试该值大小对效率的影响变化进行最合适的值的设定。
    c、mapreduce.tasktracker.http.threads，默认值：40；说明：map和reduce是通过http进行数据传输的，这个是设置传输的并行线程数。


14、datanode 首次加入 cluster 的时候，如果 log 报告不兼容文件版本，那需要namenode 执行格式化操作，这样处理的原因是？
  1）这样处理是不合理的，因为那么 namenode 格式化操作，是对文件系统进行格式化，namenode 格式化时清空 dfs/name 下空两个目录下的所有文件，之后，会在目录 dfs.name.dir 下创建文件。
  2）文本不兼容，有可能时 namenode 与 datanode 的 数据里的 namespaceID、clusterID 不一致，找到两个 ID 位置，修改为一样即可解决。
15、MapReduce 中排序发生在哪几个阶段？这些排序是否可以避免？为什么？
  1）一个 MapReduce 作业由 Map 阶段和 Reduce 阶段两部分组成，这两阶段会对数据排序，从这个意义上说，MapReduce 框架本质就是一个 Distributed Sort。
  2）在 Map 阶段，Map Task 会在本地磁盘输出一个按照 key 排序（采用的是快速排序）的文件（中间可能产生多个文件，但最终会合并成一个），在 Reduce 阶段，每个 Reduce Task 会对收到的数据排序，这样，数据便按照 Key 分成了若干组，之后以组为单位交给 reduce（）处理。
  3）很多人的误解在 Map 阶段，如果不使用 Combiner便不会排序，这是错误的，不管你用不用 Combiner，Map Task 均会对产生的数据排序（如果没有 Reduce Task，则不会排序，实际上 Map 阶段的排序就是为了减轻 Reduce端排序负载）。
  4）由于这些排序是 MapReduce 自动完成的，用户无法控制，因此，在hadoop 1.x 中无法避免，也不可以关闭，但 hadoop2.x 是可以关闭的。


16、hadoop的优化？
  1）优化的思路可以从配置文件和系统以及代码的设计思路来优化
  2）配置文件的优化：调节适当的参数，在调参数时要进行测试
  3）代码的优化：combiner的个数尽量与reduce的个数相同，数据的类型保持一致，可以减少拆包与封包的进度
  4）系统的优化：可以设置linux系统打开最大的文件数预计网络的带宽MTU的配置
  5）为 job 添加一个 Combiner，可以大大的减少shuffer阶段的maoTask拷贝过来给远程的   reduce task的数据量，一般而言combiner与reduce相同。
  6）在开发中尽量使用stringBuffer而不是string，string的模式是read-only的，如果对它进行修改，会产生临时的对象，二stringBuffer是可修改的，不会产生临时对象。
  7）修改一下配置：以下是修改 mapred-site.xml 文件
    a、修改最大槽位数：槽位数是在各个 tasktracker 上的 mapred-site.xml 上设置的，默认都是 2
<property>
<name>mapred.tasktracker.map.tasks.maximum</name>
<value>2</value>
</property>
<property>
<name>mapred.tasktracker.reduce.tasks.maximum</name>
<value>2</value>
</property>
    b、调整心跳间隔：集群规模小于 300 时，心跳间隔为 300 毫秒
mapreduce.jobtracker.heartbeat.interval.min 心跳时间
mapred.heartbeats.in.second 集群每增加多少节点，时间增加下面的值
mapreduce.jobtracker.heartbeat.scaling.factor 集群每增加上面的个数，心跳增多少
    c、启动带外心跳
mapreduce.tasktracker.outofband.heartbeat 默认是 false
    d、配置多块磁盘
mapreduce.local.dir
    e、配置 RPC hander 数目
mapred.job.tracker.handler.count 默认是 10，可以改成 50，根据机器的能力
    f、配置 HTTP 线程数目
tasktracker.http.threads 默认是 40，可以改成 100 根据机器的能力
    g、选择合适的压缩方式，以 snappy 为例：
<property>
<name>mapred.compress.map.output</name>
<value>true</value>
</property>
<property>
<name>mapred.map.output.compression.codec</name>
<value>org.apache.hadoop.io.compress.SnappyCodec</value>
</property>


17、设计题
  1）采集nginx产生的日志，日志的格式为user  ip   time  url   htmlId  每天产生的文件的数据量上亿条，请设计方案把数据保存到HDFS上，并提供一下实时查询的功能（响应时间小于3s）
A、某个用户某天访问某个URL的次数
B、某个URL某天被访问的总次数
实时思路是：使用Logstash + Kafka + Spark-streaming + Redis + 报表展示平台
离线的思路是：Logstash + Kafka + Elasticsearch +  Spark-streaming + 关系型数据库
A、B、数据在进入到Spark-streaming 中进行过滤，把符合要求的数据保存到Redis中

18、有 10 个文件，每个文件 1G，每个文件的每一行存放的都是用户的 query，每个文件的query 都可能重复。要求你按照 query 的频度排序。 还是典型的 TOP K 算法，
  解决方案如下：
    1）方案 1：
    顺序读取 10 个文件，按照 hash(query)%10 的结果将 query 写入到另外 10 个文件（记为）中。这样新生成的文件每个的大小大约也 1G（假设 hash 函数是随机的）。 找一台内存在 2G 左右的机器，依次对用 hash_map(query, query_count)来统计每个query 出现的次数。利用快速/堆/归并排序按照出现次数进行排序。将排序好的 query 和对应的 query_cout 输出到文件中。这样得到了 10 个排好序的文件（记为）。 对这 10 个文件进行归并排序（内排序与外排序相结合）。
    2）方案 2：
    一般 query 的总量是有限的，只是重复的次数比较多而已，可能对于所有的 query，一次性就可以加入到内存了。这样，我们就可以采用 trie 树/hash_map等直接来统计每个 query出现的次数，然后按出现次数做快速/堆/归并排序就可以了。
    3）方案 3：
    与方案 1 类似，但在做完 hash，分成多个文件后，可以交给多个文件来处理，采用分布式的架构来处理（比如 MapReduce），最后再进行合并。

19、在 2.5 亿个整数中找出不重复的整数，注，内存不足以容纳这 2.5 亿个整数。
  1）方案 1：采用 2-Bitmap（每个数分配 2bit，00 表示不存在，01 表示出现一次，10 表示多次，11 无意义）进行，共需内存 2^32 * 2 bit=1 GB 内存，还可以接受。然后扫描这 2.5亿个整数，查看 Bitmap 中相对应位，如果是 00 变 01，01 变 10，10 保持不变。所描完事后，查看 bitmap，把对应位是 01 的整数输出即可。
  2）方案 2：也可采用与第 1 题类似的方法，进行划分小文件的方法。然后在小文件中找出不重复的整数，并排序。然后再进行归并，注意去除重复的元素。


20、腾讯面试题：给 40 亿个不重复的 unsigned int 的整数，没排过序的，然后再给一个数，如何快速判断这个数是否在那 40 亿个数当中？
  1）方案 1：oo，申请 512M 的内存，一个 bit 位代表一个 unsigned int 值。读入 40 亿个数，设置相应的 bit 位，读入要查询的数，查看相应 bit 位是否为 1，为 1 表示存在，为 0 表示不存在。
  2）方案 2：这个问题在《编程珠玑》里有很好的描述，大家可以参考下面的思路，探讨一下： 又因为 2^32 为 40 亿多，所以给定一个数可能在，也可能不在其中； 这里我们把 40 亿个数中的每一个用 32 位的二进制来表示 ，假设这 40 亿个数开始放在一个文件中。 然后将这 40 亿个数分成两类:
1.最高位为 0
2.最高位为 1
    并将这两类分别写入到两个文件中，其中一个文件中数的个数<=20 亿，而另一个>=20 亿（这相当于折半了）； 与要查找的数的最高位比较并接着进入相应的文件再查找 再然后把这个文件为又分成两类:
1.次最高位为 0
2.次最高位为 1
    并将这两类分别写入到两个文件中，其中一个文件中数的个数<=10 亿，而另一个>=10 亿（这相当于折半了）； 与要查找的数的次最高位比较并接着进入相应的文件再查找。
.....
    以此类推，就可以找到了,而且时间复杂度为 O(logn)，方案 2 完。
  3)附：这里，再简单介绍下，位图方法： 使用位图法判断整形数组是否存在重复 ,判断集合中存在重复是常见编程任务之一，当集合中数据量比较大时我们通常希望少进行几次扫描，这时双重循环法就不可取了。
    位图法比较适合于这种情况，它的做法是按照集合中最大元素 max 创建一个长度为 max+1的新数组，然后再次扫描原数组，遇到几就给新数组的第几位置上 1，如遇到 5 就给新数组的第六个元素置 1，这样下次再遇到 5 想置位时发现新数组的第六个元素已经是 1 了，这说明这次的数据肯定和以前的数据存在着重复。这 种给新数组初始化时置零其后置一的做法类似于位图的处理方法故称位图法。它的运算次数最坏的情况为 2N。如果已知数组的最大值即能事先给新数组定长的话效 率还能提高一倍。


21、怎么在海量数据中找出重复次数最多的一个？
  1）方案 1：先做 hash，然后求模映射为小文件，求出每个小文件中重复次数最多的一个，并记录重复次数。然后找出上一步求出的数据中重复次数最多的一个就是所求（具体参考前面的题）。

22、上千万或上亿数据（有重复），统计其中出现次数最多的钱 N 个数据。
  1）方案 1：上千万或上亿的数据，现在的机器的内存应该能存下。所以考虑采用 hash_map/搜索二叉树/红黑树等来进行统计次数。然后就是取出前 N 个出现次数最多的数据了，可以用第 2 题提到的堆机制完成。

23、一个文本文件，大约有一万行，每行一个词，要求统计出其中最频繁出现的前 10 个词，给出思想，给出时间复杂度分析。
  1）方案 1：这题是考虑时间效率。用 trie 树统计每个词出现的次数，时间复杂度是 O(n*le)（le表示单词的平准长度）。然后是找出出现最频繁的前 10 个词，可以用堆来实现，前面的题中已经讲到了，时间复杂度是 O(n*lg10)。所以总的时间复杂度，是 O(n*le)与 O(n*lg10)中较大的哪一 个。
24、100w 个数中找出最大的 100 个数。
  1）方案 1：在前面的题中，我们已经提到了，用一个含 100 个元素的最小堆完成。复杂度为O(100w*lg100)。
  2）方案 2：采用快速排序的思想，每次分割之后只考虑比轴大的一部分，知道比轴大的一部分在比 100 多的时候，采用传统排序算法排序，取前 100 个。复杂度为 O(100w*100)。
  3）方案 3：采用局部淘汰法。选取前 100 个元素，并排序，记为序列 L。然后一次扫描剩余的元素 x，与排好序的 100 个元素中最小的元素比，如果比这个最小的 要大，那么把这个最小的元素删除，并把 x 利用插入排序的思想，插入到序列 L 中。依次循环，直到扫描了所有的元素。复杂度为 O(100w*100)。

25、有一千万条短信，有重复，以文本文件的形式保存，一行一条，有重复。 请用 5 分钟时间，找出重复出现最多的前 10 条。
  1）分析： 常规方法是先排序，在遍历一次，找出重复最多的前 10 条。但是排序的算法复杂度最低为nlgn。
  2）可以设计一个 hash_table, hash_map<string, int>，依次读取一千万条短信，加载到hash_table 表中，并且统计重复的次数，与此同时维护一张最多 10 条的短信表。 这样遍历一次就能找出最多的前 10 条，算法复杂度为 O(n)。


## python面试题及答案

### Python语言特性
#### 1 Python的函数参数传递
看两个如下例子，分析运行结果:
代码一：

a = 1
def fun(a):
    a = 2
fun(a)
print(a)  # 1

代码二：

a = []
def fun(a):
a.append(1)
fun(a)
print(a)  # [1]

所有的变量都可以理解是内存中一个对象的“引用”，或者，也可以看似c中void*的感觉。
这里记住的是类型是属于对象的，而不是变量。而对象有两种,“可更改”（mutable）与“不可更改”（immutable）对象。在python中，strings, tuples, 和numbers是不可更改的对象，而list,dict等则是可以修改的对象。(这就是这个问题的重点)
当一个引用传递给函数的时候,函数自动复制一份引用,这个函数里的引用和外边的引用没有半毛关系了.所以第一个例子里函数把引用指向了一个不可变对象,当函数返回的时候,外面的引用没半毛感觉.而第二个例子就不一样了,函数内的引用指向的是可变对象,对它的操作就和定位了指针地址一样,在内存里进行修改.
#### 2 Python中的元类(metaclass)
元类就是用来创建类的“东西”。你创建类就是为了创建类的实例对象，但是我们已经学习到了Python中的类也是对象。好吧，元类就是用来创建这些类（对象）的，元类就是类的类
这个非常的不常用,详情请看：《深刻理解Python中的元类(metaclass)》
#### 3 @staticmethod和@classmethod
Python其实有3个方法,即静态方法(staticmethod),类方法(classmethod)和实例方法,如下:

class A(object):
    def foo(self,x):
        print "executing foo(%s,%s)"%(self,x)

    @classmethod
    def class_foo(cls,x):
        print( "executing class_foo(%s,%s)"%(cls,x))

    @staticmethod
    def static_foo(x):
        print ("executing static_foo(%s)"%x)

a=A()
这里先理解下函数参数里面的self和cls.这个self和cls是对类或者实例的绑定.对于实例方法,我们知道在类里每次定义方法的时候都需要绑定这个实例,就是foo(self, x),为什么要这么做呢?因为实例方法的调用离不开实例,我们需要把实例自己传给函数,调用的时候是这样的a.foo(x)(其实是foo(a, x)).类方法一样,只不过它传递的是类而不是实例,A.class_foo(x).注意这里的self和cls可以替换别的参数,但是python的约定是这俩,还是不要改的好.
对于静态方法其实和普通的方法一样,不需要对谁进行绑定,唯一的区别是调用的时候需要使用a.static_foo(x)或者A.static_foo(x)来调用.
\	实例方法	类方法	静态方法
a = A()	a.foo(x)	a.class_foo(x)	a.static_foo(x)
A	不可用	A.class_foo(x)	A.static_foo(x)
#### 4 类变量和实例变量

	class Person:
    name="aaa"

p1=Person()
p2=Person()
p1.name="bbb"
print(p1.name)  # bbb
print(p2.name)  # aaa
print(Person.name)  # aaa
类变量就是供类使用的变量,实例变量就是供实例使用的.
这里p1.name="bbb"是实例调用了类变量,这其实和上面第一个问题一样,就是函数传参的问题,p1.name一开始是指向的类变量name="aaa",但是在实例的作用域里把类变量的引用改变了,就变成了一个实例变量,self.name不再引用Person的类变量name了.
可以看看下面的例子:

	class Person:
    name=[]

p1=Person()
p2=Person()
p1.name.append(1)
print(p1.name)  # [1]
print(p2.name)  # [1]
print(Person.name)  # [1]
#### 5 Python自省
这个也是python彪悍的特性.
自省就是面向对象的语言所写的程序在运行时,所能知道对象的类型.简单一句就是运行时能够获得对象的类型.比如type(),dir(),getattr(),hasattr(),isinstance().
#### 6 字典推导式
可能你见过列表推导时,却没有见过字典推导式,在2.7中才加入的:
	d = {key: value for (key, value) in iterable}

#### 7 Python中单下划线和双下划线
```
1	>>> class MyClass():
2 ...     def __init__(self):
3 ...             self.__superprivate = "Hello"
4 ...             self._semiprivate = ", world!"
5 ...
6 >>> mc = MyClass()
7 >>> print(mc.__superprivate)
8 Traceback (most recent call last):
9  File "<stdin>", line 1, in <module>
10 AttributeError: myClass instance has no attribute '__superprivate'
11 >>> print(mc._semiprivate)
12 , world!
13 >>> print mc.__dict__
14 {'_MyClass__superprivate': 'Hello', '_semiprivate': ', world!'}
```
__foo__:一种约定,Python内部的名字,用来区别其他用户自定义的命名,以防冲突.
-foo:一种约定,用来指定变量私有.程序员用来指定私有变量的一种方式.
-foo:这个有真正的意义:解析器用_classname__foo来代替这个名字,以区别和其他类相同的命名.
详情见:
http://www.zhihu.com/question/19754941

#### 8 字符串格式化:%和.format
.format在许多方面看起来更便利.对于%最烦人的是它无法同时传递一个变量和元组.你可能会想下面的代码不会有什么问题:
Python:
	"hi there %s" % name
但是,如果name恰好是(1,2,3),它将会抛出一个TypeError异常.为了保证它总是正确的,你必须这样做:
	"hi there %s" % (name,)   # 提供一个单元素的数组而不是一个参数
#### 9 迭代器和生成器
在Python中，这种一边循环一边计算的机制，称为生成器：generator。
可以被next()函数调用并不断返回下一个值的对象称为迭代器：Iterator。

这个是stackoverflow里python排名第一的问题,值得一看: http://stackoverflow.com/questions/231767/what-does-the-yield-keyword-do-in-python
#### 10 * args and ** kwargs
用*args和**kwargs只是为了方便并没有强制使用它们.
当你不确定你的函数里将要传递多少参数时你可以用*args.例如,它可以传递任意数量的参数:
```
1	>>> def print_everything(*args):
2     for count, thing in enumerate(args):
3 ...       print '{0}. {1}'.format(count, thing)
4 ..
5 >>> print_everything('apple', 'banana', 'cabbage')
6 0. apple
7 1. banana
8 2. cabbage
```
相似的 ** kwargs允许你使用没有事先定义的参数名:
```
1	>>> def table_things(**kwargs):
2 ...     for name, value in kwargs.items():
3 ...         print '{0} = {1}'.format(name, value)
4 ...
5 >>> table_things(apple = 'fruit', cabbage = 'vegetable')
6 cabbage = vegetable
7 apple = fruit
```
你也可以混着用.命名参数首先获得参数值然后所有的其他参数都传递给*args和**kwargs.命名参数在列表的最前端.例如:
```
1	def table_things(titlestring, ** kwargs)
```
* args和** kwargs可以同时在函数的定义中,但是*args必须在**kwargs前面.
当调用函数时你也可以用*和**语法.例如:
```
1	>>> def print_three_things(a, b, c):
2 ...     print 'a = {0}, b = {1}, c = {2}'.format(a,b,c)
3 ...
4 >>> mylist = ['aardvark', 'baboon', 'cat']
5 >>> print_three_things(*mylist)
6
7 a = aardvark, b = baboon, c = cat
```
就像你看到的一样,它可以传递列表(或者元组)的每一项并把它们解包.注意必须与它们在函数里的参数相吻合.当然,你也可以在函数定义或者函数调用时用*.
http://stackoverflow.com/questions/3394835/args-and-kwargs
#### 11 面向切面编程AOP和装饰器
这个AOP一听起来有点懵,同学面试的时候就被问懵了…
装饰器是一个很著名的设计模式，经常被用于有切面需求的场景，较为经典的有插入日志、性能测试、事务处理等。装饰器是解决这类问题的绝佳设计，有了装饰器，我们就可以抽离出大量函数中与函数功能本身无关的雷同代码并继续重用。概括的讲，装饰器的作用就是为已经存在的对象添加额外的功能。
这个问题比较大,推荐: http://stackoverflow.com/questions/739654/how-can-i-make-a-chain-of-function-decorators-in-python
中文: http://taizilongxu.gitbooks.io/stackoverflow-about-python/content/3/README.html
#### 12 鸭子类型
“当看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟就可以被称为鸭子。”
我们并不关心对象是什么类型，到底是不是鸭子，只关心行为。
比如在python中，有很多file-like的东西，比如StringIO,GzipFile,socket。它们有很多相同的方法，我们把它们当作文件使用。
又比如list.extend()方法中,我们并不关心它的参数是不是list,只要它是可迭代的,所以它的参数可以是list/tuple/dict/字符串/生成器等.
鸭子类型在动态语言中经常使用，非常灵活，使得python不想java那样专门去弄一大堆的设计模式。
#### 13 Python中重载
引自知乎:http://www.zhihu.com/question/20053359
函数重载主要是为了解决两个问题。
1.	可变参数类型。
2.	可变参数个数。
另外，一个基本的设计原则是，仅仅当两个函数除了参数类型和参数个数不同以外，其功能是完全相同的，此时才使用函数重载，如果两个函数的功能其实不同，那么不应当使用重载，而应当使用一个名字不同的函数。
好吧，那么对于情况 1 ，函数功能相同，但是参数类型不同，python 如何处理？答案是根本不需要处理，因为 python 可以接受任何类型的参数，如果函数的功能相同，那么不同的参数类型在 python 中很可能是相同的代码，没有必要做成两个不同函数。
那么对于情况 2 ，函数功能相同，但参数个数不同，python 如何处理？大家知道，答案就是缺省参数。对那些缺少的参数设定为缺省参数即可解决问题。因为你假设函数功能相同，那么那些缺少的参数终归是需要用的。
好了，鉴于情况 1 跟 情况 2 都有了解决方案，python 自然就不需要函数重载了。
#### 14 新式类和旧式类
这个面试官问了,我说了老半天,不知道他问的真正意图是什么.
这篇文章很好的介绍了新式类的特性: http://www.cnblogs.com/btchenguang/archive/2012/09/17/2689146.html
新式类很早在2.2就出现了,所以旧式类完全是兼容的问题,Python3里的类全部都是新式类.这里有一个MRO问题可以了解下(新式类是广度优先,旧式类是深度优先),<Python核心编程>里讲的也很多.
#### 15 ```__new__和__init__的区别```
```
这个__new__确实很少见到,先做了解吧.
1.	__new__是一个静态方法,而__init__是一个实例方法.
2.	__new__方法会返回一个创建的实例,而__init__什么都不返回.
3.	只有在__new__返回一个cls的实例时后面的__init__才能被调用.
4.	当创建一个新实例时调用__new__,初始化一个实例时用__init__.
ps: __metaclass__是创建类时起作用.所以我们可以分别使用__metaclass__,__new__和__init__来分别在类创建,实例创建和实例初始化的时候做一些小手脚.
```
#### 16 单例模式
这个绝对常考啊.绝对要记住1~2个方法,当时面试官是让手写的.
1 使用__new__方法
```
	class Singleton(object):
    def __new__(cls, *args, **kw):
        if not hasattr(cls, '_instance'):
            orig = super(Singleton, cls)
            cls._instance = orig.__new__(cls, *args, **kw)
        return cls._instance

class MyClass(Singleton):
    a = 1
```
2 共享属性
创建实例时把所有实例的__dict__指向同一个字典,这样它们具有相同的属性和方法.
```
1	class Borg(object):
2    _state = {}
3    def __new__(cls, *args, **kw):
4        ob = super(Borg, cls).__new__(cls, *args, **kw)
5        ob.__dict__ = cls._state
6      return ob
7
8 class MyClass2(Borg):
9    a = 1
```
3 装饰器版本
```
1	def singleton(cls, *args, **kw):
2    instances = {}
3  def getinstance():
4        if cls not in instances:
5            instances[cls] = cls(*args, **kw)
6        return instances[cls]
7    return getinstance
8
9 @singleton
10 class MyClass:
```
4 import方法
作为python的模块是天然的单例模式
```
	# mysingleton.py
class My_Singleton(object):
    def foo(self):
        pass

my_singleton = My_Singleton()

# to use
from mysingleton import my_singleton

my_singleton.foo()
```
#### 17 Python中的作用域
Python 中，一个变量的作用域总是由在代码中被赋值的地方所决定的。
当 Python 遇到一个变量的话他会按照这样的顺序进行搜索：
本地作用域（Local）→当前作用域被嵌入的本地作用域（Enclosing locals）→全局/模块作用域（Global）→内置作用域（Built-in）
#### 18 GIL线程全局锁
线程全局锁(Global Interpreter Lock),即Python为了保证线程安全而采取的独立线程运行的限制,说白了就是一个核只能在同一时间运行一个线程.
解决办法就是多进程和下面的协程(协程也只是单CPU,但是能减小切换代价提升性能).
#### 19 协程
简单点说协程是进程和线程的升级版,进程和线程都面临着内核态和用户态的切换问题而耗费许多切换时间,而协程就是用户自己控制切换的时机,不再需要陷入系统的内核态.
Python里最常见的yield就是协程的思想!可以查看第九个问题.
#### 20 闭包
闭包(closure)是函数式编程的重要的语法结构。闭包也是一种组织代码的结构，它同样提高了代码的可重复使用性。
当一个内嵌函数引用其外部作作用域的变量,我们就会得到一个闭包. 总结一下,创建一个闭包必须满足以下几点:
1.	必须有一个内嵌函数
2.	内嵌函数必须引用外部函数中的变量
3.	外部函数的返回值必须是内嵌函数
感觉闭包还是有难度的,几句话是说不明白的,还是查查相关资料.
重点是函数运行后并不会被撤销,就像16题的instance字典一样,当函数运行完后,instance并不被销毁,而是继续留在内存空间里.这个功能类似类里的类变量,只不过迁移到了函数上.
闭包就像个空心球一样,你知道外面和里面,但你不知道中间是什么样.
#### 21 lambda函数
其实就是一个匿名函数,为什么叫lambda?因为和后面的函数式编程有关.
#### 22 Python函数式编程
这个需要适当的了解一下吧,毕竟函数式编程在Python中也做了引用.
python中函数式编程支持:
filter 函数的功能相当于过滤器。调用一个布尔函数bool_func来迭代遍历每个seq中的元素；返回一个使bool_seq返回值为true的元素的序列。
```
	>>>a = [1,2,3,4,5,6,7]
>>>b = filter(lambda x: x > 5, a)
>>>print b
>>>[6,7]
map函数是对一个序列的每个项依次执行函数，下面是对一个序列每个项都乘以2：

	>>> a = map(lambda x:x*2,[1,2,3])
>>> list(a)
[2, 4, 6]
reduce函数是对一个序列的每个项迭代调用函数，下面是求3的阶乘：

	>>> reduce(lambda x,y:x*y,range(1,4))
6
```
#### 23 Python里的拷贝
引用和copy(),deepcopy()的区别
``` python
	import copy
a = [1, 2, 3, 4, ['a', 'b']]  #原始对象

b = a  #赋值，传对象的引用
c = copy.copy(a)  #对象拷贝，浅拷贝
d = copy.deepcopy(a)  #对象拷贝，深拷贝

a.append(5)  #修改对象a
a[4].append('c')  #修改对象a中的['a', 'b']数组对象

print 'a = ', a
print 'b = ', b
print 'c = ', c
print 'd = ', d

输出结果：
a =  [1, 2, 3, 4, ['a', 'b', 'c'], 5]
b =  [1, 2, 3, 4, ['a', 'b', 'c'], 5]
c =  [1, 2, 3, 4, ['a', 'b', 'c']]
d =  [1, 2, 3, 4, ['a', 'b']]
```
#### 24 Python垃圾回收机制
Python GC主要使用引用计数（reference counting）来跟踪和回收垃圾。在引用计数的基础上，通过“标记-清除”（mark and sweep）解决容器对象可能产生的循环引用问题，通过“分代回收”（generation collection）以空间换时间的方法提高垃圾回收效率。
##### 1 引用计数
PyObject是每个对象必有的内容，其中ob_refcnt就是做为引用计数。当一个对象有新的引用时，它的ob_refcnt就会增加，当引用它的对象被删除，它的ob_refcnt就会减少.引用计数为0时，该对象生命就结束了。
优点:
1.	简单
2.	实时性
缺点:
1.	维护引用计数消耗资源
2.	循环引用
##### 2 标记-清除机制
基本思路是先按需分配，等到没有空闲内存的时候从寄存器和程序栈上的引用出发，遍历以对象为节点、以引用为边构成的图，把所有可以访问到的对象打上标记，然后清扫一遍内存空间，把所有没标记的对象释放。
##### 3 分代技术
分代回收的整体思想是：将系统中的所有内存块根据其存活时间划分为不同的集合，每个集合就成为一个“代”，垃圾收集频率随着“代”的存活时间的增大而减小，存活时间通常利用经过几次垃圾回收来度量。
Python默认定义了三代对象集合，索引数越大，对象存活时间越长。
举例：
当某些内存块M经过了3次垃圾收集的清洗之后还存活时，我们就将内存块M划到一个集合A中去，而新分配的内存都划分到集合B中去。当垃圾收集开始工作时，大多数情况都只对集合B进行垃圾回收，而对集合A进行垃圾回收要隔相当长一段时间后才进行，这就使得垃圾收集机制需要处理的内存少了，效率自然就提高了。在这个过程中，集合B中的某些内存块由于存活时间长而会被转移到集合A中，当然，集合A中实际上也存在一些垃圾，这些垃圾的回收会因为这种分代的机制而被延迟。
#### 25 Python里面如何实现tuple和list的转换？
答：tuple，可以说是不可变的list，访问方式还是通过索引下标的方式。
当你明确定义个tuple是，如果仅有一个元素，必须带有,例如：(1,)。
当然，在2.7以后的版，python里还增加了命名式的tuple！

至于有什么用，首先第一点，楼主玩过python都知道，python的函数可以有多返回值的，而python里，多返回值，就是用tuple来表示，这是用的最广的了，

比如说，你需要定义一个常量的列表，但你又不想使用list，那也可以是要你管tuple，例如：
if a in ('A','B','C'):pass


#### 26 Python的is
is是对比地址,==是对比值
#### 27 read,readline和readlines
•	read 读取整个文件
•	readline 读取下一行,使用生成器方法
•	readlines 读取整个文件到一个迭代器以供我们遍历
#### 28 Python2和3的区别
大部分Python库都同时支持Python 2.7.x和3.x版本的，所以不论选择哪个版本都是可以的。但为了在使用Python时避开某些版本中一些常见的陷阱，或需要移植某个Python项目
使用__future__模块
print函数
整数除法
Unicode
xrange
触发异常
处理异常
next()函数和.next()方法
For循环变量与全局命名空间泄漏
比较无序类型
使用input()解析输入内容
返回可迭代对象，而不是列表

推荐：《Python 2.7.x 和 3.x 版本的重要区别》

#### 29 到底什么是Python？你可以在回答中与其他技术进行对比
答案
下面是一些关键点：
•	Python是一种解释型语言。这就是说，与C语言和C的衍生语言不同，Python代码在运行之前不需要编译。其他解释型语言还包括PHP和Ruby。
•	Python是动态类型语言，指的是你在声明变量时，不需要说明变量的类型。你可以直接编写类似x=111和x="I'm a string"这样的代码，程序不会报错。
•	Python非常适合面向对象的编程（OOP），因为它支持通过组合（composition）与继承（inheritance）的方式定义类（class）。Python中没有访问说明符（access specifier，类似C++中的public和private），这么设计的依据是“大家都是成年人了”。
•	在Python语言中，函数是第一类对象（first-class objects）。这指的是它们可以被指定给变量，函数既能返回函数类型，也可以接受函数作为输入。类（class）也是第一类对象。
•	Python代码编写快，但是运行速度比编译语言通常要慢。好在Python允许加入基于C语言编写的扩展，因此我们能够优化代码，消除瓶颈，这点通常是可以实现的。numpy就是一个很好地例子，它的运行速度真的非常快，因为很多算术运算其实并不是通过Python实现的。
•	Python用途非常广泛——网络应用，自动化，科学建模，大数据应用，等等。它也常被用作“胶水语言”，帮助其他语言和组件改善运行状况。
•	Python让困难的事情变得容易，因此程序员可以专注于算法和数据结构的设计，而不用处理底层的细节。
为什么提这个问题：
如果你应聘的是一个Python开发岗位，你就应该知道这是门什么样的语言，以及它为什么这么酷。以及它哪里不好。

#### 30 补充缺失的代码
def print_directory_contents(sPath):
    """
    这个函数接受文件夹的名称作为输入参数，
    返回该文件夹中文件的路径，
    以及其包含文件夹中文件的路径。
    """
    # 补充代码
答案
def print_directory_contents(sPath):
    import os                                       
    for sChild in os.listdir(sPath):                
        sChildPath = os.path.join(sPath,sChild)
        if os.path.isdir(sChildPath):
            print_directory_contents(sChildPath)
        else:
            print sChildPath
特别要注意以下几点：
•	命名规范要统一。如果样本代码中能够看出命名规范，遵循其已有的规范。
•	递归函数需要递归并终止。确保你明白其中的原理，否则你将面临无休无止的调用栈（callstack）。
•	我们使用os模块与操作系统进行交互，同时做到交互方式是可以跨平台的。你可以把代码写成sChildPath = sPath + '/' + sChild，但是这个在Windows系统上会出错。
•	熟悉基础模块是非常有价值的，但是别想破脑袋都背下来，记住Google是你工作中的良师益友。
•	如果你不明白代码的预期功能，就大胆提问。
•	坚持KISS原则！保持简单，不过脑子就能懂！
为什么提这个问题：
•	说明面试者对与操作系统交互的基础知识
•	递归真是太好用啦
#### 31 阅读下面的代码，写出A0，A1至An的最终值。
A0 = dict(zip(('a','b','c','d','e'),(1,2,3,4,5)))
A1 = range(10)
A2 = [i for i in A1 if i in A0]
A3 = [A0[s] for s in A0]
A4 = [i for i in A1 if i in A3]
A5 = {i:i*i for i in A1}
A6 = [[i,i*i] for i in A1]
答案
A0 = {'a': 1, 'c': 3, 'b': 2, 'e': 5, 'd': 4}
A1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
A2 = []
A3 = [1, 3, 2, 5, 4]
A4 = [1, 2, 3, 4, 5]
A5 = {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}
A6 = [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16], [5, 25], [6, 36], [7, 49], [8, 64], [9, 81]]
为什么提这个问题：
•	列表解析（list comprehension）十分节约时间，对很多人来说也是一个大的学习障碍。
•	如果你读懂了这些代码，就很可能可以写下正确地值。
•	其中部分代码故意写的怪怪的。因为你共事的人之中也会有怪人。
#### 32 下面代码会输出什么：
def f(x,l=[]):
    for i in range(x):
        l.append(i*i)
    print(l)

f(2)
f(3,[3,2,1])
f(3)
答案：
[0, 1]
[3, 2, 1, 0, 1, 4]
[0, 1, 0, 1, 4]
呃？
第一个函数调用十分明显，for循环先后将0和1添加至了空列表l中。l是变量的名字，指向内存中存储的一个列表。第二个函数调用在一块新的内存中创建了新的列表。l这时指向了新生成的列表。之后再往新列表中添加0、1和4。很棒吧。第三个函数调用的结果就有些奇怪了。它使用了之前内存地址中存储的旧列表。这就是为什么它的前两个元素是0和1了。

#### 33 你如何管理不同版本的代码？
答案：
版本管理！被问到这个问题的时候，你应该要表现得很兴奋，甚至告诉他们你是如何使用Git（或是其他你最喜欢的工具）追踪自己和奶奶的书信往来。我偏向于使用Git作为版本控制系统（VCS），但还有其他的选择，比如subversion（SVN）。
为什么提这个问题：
因为没有版本控制的代码，就像没有杯子的咖啡。有时候我们需要写一些一次性的、可以随手扔掉的脚本，这种情况下不作版本控制没关系。但是如果你面对的是大量的代码，使用版本控制系统是有利的。版本控制能够帮你追踪谁对代码库做了什么操作；发现新引入了什么bug；管理你的软件的不同版本和发行版；在团队成员中分享源代码；部署及其他自动化处理。它能让你回滚到出现问题之前的版本，单凭这点就特别棒了。还有其他的好功能。怎么一个棒字了得！
#### 34 “猴子补丁”（monkey patching）指的是什么？这种做法好吗？
答案：
“猴子补丁”就是指，在函数或对象已经定义之后，再去改变它们的行为。
举个例子：
import datetime
datetime.datetime.now = lambda: datetime.datetime(2012, 12, 12)
大部分情况下，这是种很不好的做法 - 因为函数在代码库中的行为最好是都保持一致。打“猴子补丁”的原因可能是为了测试。mock包对实现这个目的很有帮助。
为什么提这个问题？
答对这个问题说明你对单元测试的方法有一定了解。你如果提到要避免“猴子补丁”，可以说明你不是那种喜欢花里胡哨代码的程序员（公司里就有这种人，跟他们共事真是糟糕透了），而是更注重可维护性。还记得KISS原则码？答对这个问题还说明你明白一些Python底层运作的方式，函数实际是如何存储、调用等等。
另外：如果你没读过mock模块的话，真的值得花时间读一读。这个模块非常有用。

#### 35 阅读下面的代码，它的输出结果是什么？
class A(object):
    def go(self):
        print "go A go!"
    def stop(self):
        print "stop A stop!"
    def pause(self):
        raise Exception("Not Implemented")

class B(A):
    def go(self):
        super(B, self).go()
        print "go B go!"

class C(A):
    def go(self):
        super(C, self).go()
        print "go C go!"
    def stop(self):
        super(C, self).stop()
        print "stop C stop!"

class D(B,C):
    def go(self):
        super(D, self).go()
        print "go D go!"
    def stop(self):
        super(D, self).stop()
        print "stop D stop!"
    def pause(self):
        print "wait D wait!"

class E(B,C): pass

a = A()
b = B()
c = C()
d = D()
e = E()

# 说明下列代码的输出结果

a.go()
b.go()
c.go()
d.go()
e.go()

a.stop()
b.stop()
c.stop()
d.stop()
e.stop()

a.pause()
b.pause()
c.pause()
d.pause()
e.pause()
答案
输出结果以注释的形式表示：
a.go()
# go A go!

b.go()
# go A go!
# go B go!

c.go()
# go A go!
# go C go!

d.go()
# go A go!
# go C go!
# go B go!
# go D go!

e.go()
# go A go!
# go C go!
# go B go!

a.stop()
# stop A stop!

b.stop()
# stop A stop!

c.stop()
# stop A stop!
# stop C stop!

d.stop()
# stop A stop!
# stop C stop!
# stop D stop!

e.stop()
# stop A stop!

a.pause()
# ... Exception: Not Implemented

b.pause()
# ... Exception: Not Implemented

c.pause()
# ... Exception: Not Implemented

d.pause()
# wait D wait!

e.pause()
# ...Exception: Not Implemented
为什么提这个问题？
因为面向对象的编程真的真的很重要。不骗你。答对这道问题说明你理解了继承和Python中super函数的用法。

#### 36 阅读下面的代码，它的输出结果是什么？
```
class Node(object):
    def __init__(self,sName):
        self._lChildren = []
        self.sName = sName
    def __repr__(self):
        return "<Node '{}'>".format(self.sName)
    def append(self,*args,**kwargs):
        self._lChildren.append(*args,**kwargs)
    def print_all_1(self):
        print self
        for oChild in self._lChildren:
            oChild.print_all_1()
    def print_all_2(self):
        def gen(o):
            lAll = [o,]
            while lAll:
                oNext = lAll.pop(0)
                lAll.extend(oNext._lChildren)
                yield oNext
        for oNode in gen(self):
            print oNode

oRoot = Node("root")
oChild1 = Node("child1")
oChild2 = Node("child2")
oChild3 = Node("child3")
oChild4 = Node("child4")
oChild5 = Node("child5")
oChild6 = Node("child6")
oChild7 = Node("child7")
oChild8 = Node("child8")
oChild9 = Node("child9")
oChild10 = Node("child10")

oRoot.append(oChild1)
oRoot.append(oChild2)
oRoot.append(oChild3)
oChild1.append(oChild4)
oChild1.append(oChild5)
oChild2.append(oChild6)
oChild4.append(oChild7)
oChild3.append(oChild8)
oChild3.append(oChild9)
oChild6.append(oChild10)

# 说明下面代码的输出结果

oRoot.print_all_1()
oRoot.print_all_2()
```
```
答案
oRoot.print_all_1()会打印下面的结果：
<Node 'root'>
<Node 'child1'>
<Node 'child4'>
<Node 'child7'>
<Node 'child5'>
<Node 'child2'>
<Node 'child6'>
<Node 'child10'>
<Node 'child3'>
<Node 'child8'>
<Node 'child9'>
oRoot.print_all_1()会打印下面的结果：
<Node 'root'>
<Node 'child1'>
<Node 'child2'>
<Node 'child3'>
<Node 'child4'>
<Node 'child5'>
<Node 'child6'>
<Node 'child8'>
<Node 'child9'>
<Node 'child7'>
<Node 'child10'>
```
为什么提这个问题？
因为对象的精髓就在于组合（composition）与对象构造（object construction）。对象需要有组合成分构成，而且得以某种方式初始化。这里也涉及到递归和生成器（generator）的使用。
生成器是很棒的数据类型。你可以只通过构造一个很长的列表，然后打印列表的内容，就可以取得与print_all_2类似的功能。生成器还有一个好处，就是不用占据很多内存。
有一点还值得指出，就是print_all_1会以深度优先（depth-first）的方式遍历树(tree),而print_all_2则是宽度优先（width-first）。有时候，一种遍历方式比另一种更合适。但这要看你的应用的具体情况。

#### 37 介绍一下except的用法和作用？
答：try…except…except…[else…][finally…]
执行try下的语句，如果引发异常，则执行过程会跳到except语句。对每个except分支顺序尝试执行，如果引发的异常与except中的异常组匹配，执行相应的语句。如果所有的except都不匹配，则异常会传递到下一个调用本代码的最高层try代码中。
try下的语句正常执行，则执行else块代码。如果发生异常，就不会执行
如果存在finally语句，最后总是会执行。

#### 38 Python中pass语句的作用是什么？
答：pass语句不会执行任何操作，一般作为占位符或者创建占位程序，whileFalse:pass
#### 39 介绍一下Python下range()函数的用法？
答：列出一组数据，经常用在for  in range()循环中
#### 40 Python里面match()和search()的区别？
答：re模块中match(pattern,string[,flags]),检查string的开头是否与pattern匹配。
re模块中research(pattern,string[,flags]),在string搜索pattern的第一个匹配值。
>>>print(re.match(‘super’, ‘superstition’).span())
(0, 5)
>>>print(re.match(‘super’, ‘insuperable’))
None
>>>print(re.search(‘super’, ‘superstition’).span())
(0, 5)
>>>print(re.search(‘super’, ‘insuperable’).span())
(2, 7)

#### 41 用Python匹配HTML tag的时候，<.*>和<.*?>有什么区别？
答：术语叫贪婪匹配( <.*> )和非贪婪匹配(<.*?> )
例如:
test
<.*> :
test
<.*?> :

#### 42 Python里面如何生成随机数？
答：random模块
随机整数：random.randint(a,b)：返回随机整数x,a<=x<=b
random.randrange(start,stop,[,step])：返回一个范围在(start,stop,step)之间的随机整数，不包括结束值。
随机实数：random.random( ):返回0到1之间的浮点数
random.uniform(a,b):返回指定范围内的浮点数。

#### 43 有没有一个工具可以帮助查找python的bug和进行静态的代码分析？
答：PyChecker是一个python代码的静态分析工具，它可以帮助查找python代码的bug, 会对代码的复杂度和格式提出警告
Pylint是另外一个工具可以进行codingstandard检查

#### 44 如何在一个function里面设置一个全局的变量？
答：解决方法是在function的开始插入一个global声明：
def f()
global x

#### 45 单引号，双引号，三引号的区别
答：单引号和双引号是等效的，如果要换行，需要符号(\),三引号则可以直接换行，并且可以包含注释
如果要表示Let’s go 这个字符串
单引号：s4 = ‘Let\’s go’
双引号：s5 = “Let’s go”
s6 = ‘I realy like“python”!’
这就是单引号和双引号都可以表示字符串的原因了

#### 46 Python和多线程（multi-threading）。这是个好主意码？列举一些让Python代码以并行方式运行的方法。
答案:Python并不支持真正意义上的多线程。Python中提供了多线程包，但是如果你想通过多线程提高代码的速度，使用多线程包并不是个好主意。Python中有一个被称为Global Interpreter Lock（GIL）的东西，它会确保任何时候你的多个线程中，只有一个被执行。线程的执行速度非常之快，会让你误以为线程是并行执行的，但是实际上都是轮流执行。经过GIL这一道关卡处理，会增加执行的开销。这意味着，如果你想提高代码的运行速度，使用threading包并不是一个很好的方法。
不过还是有很多理由促使我们使用threading包的。如果你想同时执行一些任务，而且不考虑效率问题，那么使用这个包是完全没问题的，而且也很方便。但是大部分情况下，并不是这么一回事，你会希望把多线程的部分外包给操作系统完成（通过开启多个进程），或者是某些调用你的Python代码的外部程序（例如Spark或Hadoop），又或者是你的Python代码调用的其他代码（例如，你可以在Python中调用C函数，用于处理开销较大的多线程工作）。
为什么提这个问题
因为GIL就是个混账东西（A-hole）。很多人花费大量的时间，试图寻找自己多线程代码中的瓶颈，直到他们明白GIL的存在。

#### 47 将下面的函数按照执行效率高低排序。
它们都接受由0至1之间的数字构成的列表作为输入。这个列表可以很长。一个输入列表的示例如下：[random.random() for i in range(100000)]。你如何证明自己的答案是正确的。
def f1(lIn):
    l1 = sorted(lIn)
    l2 = [i for i in l1 if i<0.5]
    return [i*i for i in l2]

def f2(lIn):
    l1 = [i for i in lIn if i<0.5]
    l2 = sorted(l1)
    return [i*i for i in l2]

def f3(lIn):
    l1 = [i*i for i in lIn]
    l2 = sorted(l1)
    return [i for i in l1 if i<(0.5*0.5)]

答案:按执行效率从高到低排列：f2、f1和f3。要证明这个答案是对的，你应该知道如何分析自己代码的性能。Python中有一个很好的程序分析包，可以满足这个需求。
import cProfile
lIn = [random.random() for i in range(100000)]
cProfile.run('f1(lIn)')
cProfile.run('f2(lIn)')
cProfile.run('f3(lIn)')

为了向大家进行完整地说明，下面我们给出上述分析代码的输出结果：
```
>>> cProfile.run('f1(lIn)')
         4 function calls in 0.045 seconds

   Ordered by: standard name

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.009    0.009    0.044    0.044 <stdin>:1(f1)
        1    0.001    0.001    0.045    0.045 <string>:1(<module>)
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
        1    0.035    0.035    0.035    0.035 {sorted}


>>> cProfile.run('f2(lIn)')
         4 function calls in 0.024 seconds

   Ordered by: standard name

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.008    0.008    0.023    0.023 <stdin>:1(f2)
        1    0.001    0.001    0.024    0.024 <string>:1(<module>)
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
        1    0.016    0.016    0.016    0.016 {sorted}


>>> cProfile.run('f3(lIn)')
         4 function calls in 0.055 seconds

   Ordered by: standard name

   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
        1    0.016    0.016    0.054    0.054 <stdin>:1(f3)
        1    0.001    0.001    0.055    0.055 <string>:1(<module>)
        1    0.000    0.000    0.000    0.000 {method 'disable' of '_lsprof.Profiler' objects}
        1    0.038    0.038    0.038    0.038 {sorted}
```
为什么提这个问题？
定位并避免代码瓶颈是非常有价值的技能。想要编写许多高效的代码，最终都要回答常识上来——在上面的例子中，如果列表较小的话，很明显是先进行排序更快，因此如果你可以在排序前先进行筛选，那通常都是比较好的做法。其他不显而易见的问题仍然可以通过恰当的工具来定位。因此了解这些工具是有好处的。

#### 48 如何用Python来进行查询和替换一个文本字符串？
可以使用sub()方法来进行查询和替换，sub方法的格式为：sub(replacement, string[, count=0])
replacement是被替换成的文本
string是需要被替换的文本
count是一个可选参数，指最大被替换的数量

49.Python里面search()和match()的区别？
match()函数只检测RE是不是在string的开始位置匹配，search()会扫描整个string查找匹配, 也就是说match()只有在0位置匹配成功的话才有返回，如果不是开始位置匹配成功的话，match()就返回none

#### 50 用Python匹配HTML tag的时候，<.*>和<.*?>有什么区别？
前者是贪婪匹配，会从头到尾匹配 <a>xyz</a>，而后者是非贪婪匹配，只匹配到第一个 >。

#### 51 Python里面如何生成随机数？
import random
random.random()
它会返回一个随机的0和1之间的浮点数


### 操作系统
#### 1 select,poll和epoll
其实所有的I/O都是轮询的方法,只不过实现的层面不同罢了.
这个问题可能有点深入了,但相信能回答出这个问题是对I/O多路复用有很好的了解了.其中tornado使用的就是epoll的.
基本上select有3个缺点:
1.	连接数受限
2.	查找配对速度慢
3.	数据由内核拷贝到用户态
poll改善了第一个缺点
epoll改了三个缺点.
##### 2 调度算法
1.	先来先服务(FCFS, First Come First Serve)
2.	短作业优先(SJF, Shortest Job First)
3.	最高优先权调度(Priority Scheduling)
4.	时间片轮转(RR, Round Robin)
5.	多级反馈队列调度(multilevel feedback queue scheduling)
实时调度算法:
1.	最早截至时间优先 EDF
2.	最低松弛度优先 LLF
#### 3 死锁
原因:
1.	竞争资源
2.	程序推进顺序不当
必要条件:
1.	互斥条件
2.	请求和保持条件
3.	不剥夺条件
4.	环路等待条件
处理死锁基本方法:
1.	预防死锁(摒弃除1以外的条件)
2.	避免死锁(银行家算法)
3.	检测死锁(资源分配图)
4.	解除死锁
1.	剥夺资源
2.	撤销进程
#### 4 程序编译与链接
Bulid过程可以分解为4个步骤:预处理(Prepressing), 编译(Compilation)、汇编(Assembly)、链接(Linking)
以c语言为例:
##### 1 预处理
预编译过程主要处理那些源文件中的以“#”开始的预编译指令，主要处理规则有：
1.	将所有的“#define”删除，并展开所用的宏定义
2.	处理所有条件预编译指令，比如“#if”、“#ifdef”、 “#elif”、“#endif”
3.	处理“#include”预编译指令，将被包含的文件插入到该编译指令的位置，注：此过程是递归进行的
4.	删除所有注释
5.	添加行号和文件名标识，以便于编译时编译器产生调试用的行号信息以及用于编译时产生编译错误或警告时可显示行号
6.	保留所有的#pragma编译器指令。
##### 2 编译
编译过程就是把预处理完的文件进行一系列的词法分析、语法分析、语义分析及优化后生成相应的汇编代码文件。这个过程是整个程序构建的核心部分。
##### 3 汇编
汇编器是将汇编代码转化成机器可以执行的指令，每一条汇编语句几乎都是一条机器指令。经过编译、链接、汇编输出的文件成为目标文件(Object File)
##### 4 链接
链接的主要内容就是把各个模块之间相互引用的部分处理好，使各个模块可以正确的拼接。
链接的主要过程包块 地址和空间的分配（Address and Storage Allocation）、符号决议(Symbol Resolution)和重定位(Relocation)等步骤。
##### 5 静态链接和动态链接
静态链接方法：静态链接的时候，载入代码就会把程序会用到的动态代码或动态代码的地址确定下来
静态库的链接可以使用静态链接，动态链接库也可以使用这种方法链接导入库
动态链接方法：使用这种方式的程序并不在一开始就完成动态链接，而是直到真正调用动态库代码时，载入程序才计算(被调用的那部分)动态代码的逻辑地址，然后等到某个时候，程序又需要调用另外某块动态代码时，载入程序又去计算这部分代码的逻辑地址，所以，这种方式使程序初始化时间较短，但运行期间的性能比不上静态链接的程序
##### 6 虚拟内存技术
虚拟存储器是值具有请求调入功能和置换功能,能从逻辑上对内存容量加以扩充的一种存储系统.
##### 7 分页和分段
分页: 用户程序的地址空间被划分成若干固定大小的区域，称为“页”，相应地，内存空间分成若干个物理块，页和块的大小相等。可将用户程序的任一页放在内存的任一块中，实现了离散分配。
分段: 将用户程序地址空间分成若干个大小不等的段，每段可以定义一组相对完整的逻辑信息。存储分配时，以段为单位，段与段在内存中可以不相邻接，也实现了离散分配。
分页与分段的主要区别
1.	页是信息的物理单位,分页是为了实现非连续分配,以便解决内存碎片问题,或者说分页是由于系统管理的需要.段是信息的逻辑单位,它含有一组意义相对完整的信息,分段的目的是为了更好地实现共享,满足用户的需要.
2.	页的大小固定,由系统确定,将逻辑地址划分为页号和页内地址是由机器硬件实现的.而段的长度却不固定,决定于用户所编写的程序,通常由编译程序在对源程序进行编译时根据信息的性质来划分.
3.	分页的作业地址空间是一维的.分段的地址空间是二维的.
##### 8 页面置换算法
1.	最佳置换算法OPT:不可能实现
2.	先进先出FIFO
3.	最近最久未使用算法LRU:最近一段时间里最久没有使用过的页面予以置换.
4.	clock算法
##### 9 边沿触发和水平触发
边缘触发是指每当状态变化时发生一个 io 事件，条件触发是只要满足条件就发生一个 io 事件

### 数据库
#### 1 事务
数据库事务(Database Transaction) ，是指作为单个逻辑工作单元执行的一系列操作，要么完全地执行，要么完全地不执行。
#### 2 数据库索引
索引是对数据库表中一列或多列的值进行排序的一种结构，使用索引可快速访问数据库表中的特定信息。
索引分为聚簇索引和非聚簇索引两种，聚簇索引 是按照数据存放的物理位置为顺序的，而非聚簇索引就不一样了；聚簇索引能提高多行检索的速度，而非聚簇索引对于单行的检索很快。
推荐: http://tech.meituan.com/mysql-index.html
#### 3 Redis原理

#### 4 乐观锁和悲观锁
悲观锁：假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作
乐观锁：假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。
#### 5 MVCC
大多数的MySQL事务型存储引擎，如InnoDB，Falcon以及PBXT都不使用一种简单的行锁机制。事实上，他们都和另外一种用来增加并发性的被称为“多版本并发控制（MVCC）”的机制来一起使用。MVCC不只使用在MySQL中，Oracle、PostgreSQL，以及其他一些数据库系统也同样使用它。
#### 6 MyISAM和InnoDB
MyISAM 适合于一些需要大量查询的应用，但其对于有大量写操作并不是很好。甚至你只是需要update一个字段，整个表都会被锁起来，而别的进程，就算是读进程都无法操作直到读操作完成。另外，```MyISAM 对于 SELECT COUNT(*)这类的计算是超快无比的。
InnoDB 的趋势会是一个非常复杂的存储引擎，对于一些小的应用，它会比 MyISAM 还慢。他是它支持“行锁” ，于是在写操作比较多的时候，会更优秀。并且，他还支持更多的高级应用，比如：事务。
```

### 网络
#### 1 三次握手
1.	客户端通过向服务器端发送一个SYN来创建一个主动打开，作为三路握手的一部分。客户端把这段连接的序号设定为随机数 A。
2.	服务器端应当为一个合法的SYN回送一个SYN/ACK。ACK 的确认码应为 A+1，SYN/ACK 包本身又有一个随机序号 B。
3.	最后，客户端再发送一个ACK。当服务端受到这个ACK的时候，就完成了三路握手，并进入了连接创建状态。此时包序号被设定为收到的确认号 A+1，而响应则为 B+1。
#### 2 四次挥手
CP的连接的拆除需要发送四个包，因此称为四次挥手(four-way handshake)。客户端或服务器均可主动发起挥手动作，在socket编程中，任何一方执行close()操作即可产生挥手操作。
（1）客户端A发送一个FIN，用来关闭客户A到服务器B的数据传送。
（2）服务器B收到这个FIN，它发回一个ACK，确认序号为收到的序号加1。和SYN一样，一个FIN将占用一个序号。
（3）服务器B关闭与客户端A的连接，发送一个FIN给客户端A。
（4）客户端A发回ACK报文确认，并将确认序号设置为收到序号加1。
##### 3 ARP协议
地址解析协议(Address Resolution Protocol): 根据IP地址获取物理地址的一个TCP/IP协议
##### 4 urllib和urllib2的区别
这个面试官确实问过,当时答的urllib2可以Post而urllib不可以.
1.	urllib提供urlencode方法用来GET查询字符串的产生，而urllib2没有。这是为何urllib常和urllib2一起使用的原因。
2.	urllib2可以接受一个Request类的实例来设置URL请求的headers，urllib仅可以接受URL。这意味着，你不可以伪装你的User Agent字符串等。
##### 5 Post和Get区别
GET后退按钮/刷新无害，POST数据会被重新提交（浏览器应该告知用户数据会被重新提交）。
GET书签可收藏，POST为书签不可收藏。
GET能被缓存，POST不能缓存 。
GET编码类型application/x-www-form-url，POST编码类型encodedapplication/x-www-form-urlencoded 或 multipart/form-data。为二进制数据使用多重编码。
GET历史参数保留在浏览器历史中。POST参数不会保存在浏览器历史中。
GET对数据长度有限制，当发送数据时，GET 方法向 URL 添加数据；URL 的长度是受限制的（URL 的最大长度是 2048 个字符）。POST无限制。
GET只允许 ASCII 字符。POST没有限制。也允许二进制数据。
与 POST 相比，GET 的安全性较差，因为所发送的数据是 URL 的一部分。在发送密码或其他敏感信息时绝不要使用 GET ！POST 比 GET 更安全，因为参数不会被保存在浏览器历史或 web 服务器日志中。
GET的数据在 URL 中对所有人都是可见的。POST的数据不会显示在 URL 中。
#### 6 Cookie和Session
	Cookie	Session
储存位置	客户端	服务器端
目的	跟踪会话，也可以保存用户偏好设置或者保存用户名密码等	跟踪会话
安全性	不安全	安全
session技术是要使用到cookie的，之所以出现session技术，主要是为了安全。
#### 7 apache和nginx的区别
nginx 相对 apache 的优点：
•	轻量级，同样起web 服务，比apache 占用更少的内存及资源
•	抗并发，nginx 处理请求是异步非阻塞的，支持更多的并发连接，而apache 则是阻塞型的，在高并发下nginx 能保持低资源低消耗高性能
•	配置简洁
•	高度模块化的设计，编写模块相对简单
•	社区活跃
apache 相对nginx 的优点：
•	rewrite ，比nginx 的rewrite 强大
•	模块超多，基本想到的都可以找到
•	少bug ，nginx 的bug 相对较多
•	超稳定
#### 8 网站用户密码保存
1.	明文保存
2.	明文hash后保存,如md5
3.	MD5+Salt方式,这个salt可以随机
4.	知乎使用了Bcrypy(好像)加密
#### 9 HTTP和HTTPS
HTTPS（全称：Hypertext Transfer Protocol over Secure Socket Layer），是以安全为目标的HTTP通道，简单讲是HTTP的安全版。即HTTP下加入SSL层，HTTPS的安全基础是SSL，因此加密的详细内容就需要SSL。 它是一个URI scheme（抽象标识符体系），句法类同http:体系。用于安全的HTTP数据传输。https:URL表明它使用了HTTP，但HTTPS存在不同于HTTP的默认端口及一个加密/身份验证层（在HTTP与TCP之间）。这个系统的最初研发由网景公司进行，提供了身份验证与加密通讯方法，现在它被广泛用于万维网上安全敏感的通讯，例如交易支付方面。
超文本传输协议 (HTTP-Hypertext transfer protocol) 是一种详细规定了浏览器和万维网服务器之间互相通信的规则，通过因特网传送万维网文档的数据传送协议。
#### 10 XSRF和XSS
•	CSRF(Cross-site request forgery)跨站请求伪造
•	XSS(Cross Site Scripting)跨站脚本攻击
CSRF重点在请求,XSS重点在脚本
#### 11 RESTful架构(SOAP,RPC)
推荐: http://www.ruanyifeng.com/blog/2011/09/restful.html
#### 12 SOAP
SOAP（原为Simple Object Access Protocol的首字母缩写，即简单对象访问协议）是交换数据的一种协议规范，使用在计算机网络Web服务（web service）中，交换带结构信息。SOAP为了简化网页服务器（Web Server）从XML数据库中提取数据时，节省去格式化页面时间，以及不同应用程序之间按照HTTP通信协议，遵从XML格式执行资料互换，使其抽象于语言实现、平台和硬件。
#### 13 RPC
RPC（Remote Procedure Call Protocol）——远程过程调用协议，它是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。RPC协议假定某些传输协议的存在，如TCP或UDP，为通信程序之间携带信息数据。在OSI网络通信模型中，RPC跨越了传输层和应用层。RPC使得开发包括网络分布式多程序在内的应用程序更加容易。
总结:服务提供的两大流派.传统意义以方法调用为导向通称RPC。为了企业SOA,若干厂商联合推出webservice,制定了wsdl接口定义,传输soap.当互联网时代,臃肿SOA被简化为http+xml/json.但是简化出现各种混乱。以资源为导向,任何操作无非是对资源的增删改查，于是统一的REST出现了.
进化的顺序: RPC -> SOAP -> RESTful
#### 14 CGI和WSGI
CGI是通用网关接口，是连接web服务器和应用程序的接口，用户通过CGI来获取动态数据或文件等。
CGI程序是一个独立的程序，它可以用几乎所有语言来写，包括perl，c，lua，python等等。
WSGI, Web Server Gateway Interface，是Python应用程序或框架和Web服务器之间的一种接口，WSGI的其中一个目的就是让用户可以用统一的语言(Python)编写前后端。
#### 16 中间人攻击
在GFW里屡见不鲜的,呵呵.
中间人攻击（Man-in-the-middle attack，通常缩写为MITM）是指攻击者与通讯的两端分别创建独立的联系，并交换其所收到的数据，使通讯的两端认为他们正在通过一个私密的连接与对方直接对话，但事实上整个会话都被攻击者完全控制。
#### 17 c10k问题
所谓c10k问题，指的是服务器同时支持成千上万个客户端的问题，也就是concurrent 10 000 connection（这也是c10k这个名字的由来）。

#### 18 socket
Socket=Ip address+ TCP/UDP + port
#### 19 浏览器缓存
推荐: http://web.jobbole.com/84367/
浏览器缓存机制，其实主要就是HTTP协议定义的缓存机制（如： Expires； Cache-control等）
Expires策略
Expires是Web服务器响应消息头字段，在响应http请求时告诉浏览器在过期时间前浏览器可以直接从浏览器缓存取数据，而无需再次请求。
Cache-control策略（重点关注）
Cache-Control与Expires的作用一致，都是指明当前资源的有效期，控制浏览器是否直接从浏览器缓存取数据还是重新发请求到服务器取数据。只不过Cache-Control的选择更多，设置更细致，如果同时设置的话，其优先级高于Expires
#### 20 HTTP1.0和HTTP1.1
推荐: http://blog.csdn.net/elifefly/article/details/3964766
1.	请求头Host字段,一个服务器多个网站
2.	长链接
3.	文件断点续传
4.	身份认证,状态管理,Cache缓存
#### 21 Ajax
AJAX,Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）, 是与在不重新加载整个页面的情况下，与服务器交换数据并更新部分网页的技术。

### 数据结构
#### 1 红黑树
红黑树与AVL的比较：
AVL是严格平衡树，因此在增加或者删除节点的时候，根据不同情况，旋转的次数比红黑树要多；
红黑是用非严格的平衡来换取增删节点时候旋转次数的降低；
所以简单说，如果你的应用中，搜索的次数远远大于插入和删除，那么选择AVL，如果搜索，插入删除次数几乎差不多，应该选择RB。
#### 1 台阶问题/斐波纳挈
一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
1	fib = lambda n: n if n <= 2 else fib(n - 1) + fib(n - 2)
第二种记忆方法
```
	def memo(func):
    cache = {}
    def wrap(*args):
        if args not in cache:
            cache[args] = func(*args)
        return cache[args]
    return wrap


@ memo
def fib(i):
    if i < 2:
        return 1
    return fib(i-1) + fib(i-2)
第三种方法
1
2
3
4
5	def fib(n):
    a, b = 0, 1
    for _ in xrange(n):
        a, b = b, a + b
    return b
```
#### 2 变态台阶问题
一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
1	fib = lambda n: n if n < 2 else 2 * fib(n - 1)

#### 3 矩形覆盖
我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
第2*n个矩形的覆盖方法等于第2*(n-1)加上第2*(n-2)的方法。

1	f = lambda n: 1 if n < 2 else f(n - 1) + f(n - 2)

#### 4 杨氏矩阵查找
在一个m行n列二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

#### 5 去除列表中的重复元素
用集合
1	list(set(l))
用字典
1
2
3	l1 = ['b','c','d','b','c','a','a']
l2 = {}.fromkeys(l1).keys()
print l2
用字典并保持顺序

1
2
3
4	l1 = ['b','c','d','b','c','a','a']
l2 = list(set(l1))
l2.sort(key=l1.index)
print l2

1
2
3	l1 = ['b','c','d','b','c','a','a']
l2 = []
[l2.append(i) for i in l1 if not i in l2]
面试官提到的,先排序然后删除.
#### 6 链表成对调换
1->2->3->4转换成2->1->4->3.

	class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

class Solution:
    # @param a ListNode
    # @return a ListNode
    def swapPairs(self, head):
        if head != None and head.next != None:
            next = head.next
            head.next = self.swapPairs(next.next)
            next.next = head
            return next
        return head
#### 7 创建字典的方法
1 直接创建
1	dict = {'name':'earth', 'port':'80'}
2 工厂方法
1
2
3	items=[('name','earth'),('port','80')]
dict2=dict(items)
dict1=dict((['name','earth'],['port','80']))
3 fromkeys()方法
1
2
3
4	dict1={}.fromkeys(('x','y'),-1)
dict={'x':-1,'y':-1}
dict2={}.fromkeys(('x','y'))
dict2={'x':None, 'y':None}
#### 8 合并两个有序列表
知乎远程面试要求编程
尾递归
```
	def _recursion_merge_sort2(l1, l2, tmp):
    if len(l1) == 0 or len(l2) == 0:
        tmp.extend(l1)
        tmp.extend(l2)
        return tmp
    else:
        if l1[0] < l2[0]:
            tmp.append(l1[0])
            del l1[0]
        else:
            tmp.append(l2[0])
            del l2[0]
        return _recursion_merge_sort2(l1, l2, tmp)

def recursion_merge_sort2(l1, l2):
    return _recursion_merge_sort2(l1, l2, [])
循环算法
	def loop_merge_sort(l1, l2):
    tmp = []
    while len(l1) > 0 and len(l2) > 0:
        if l1[0] < l2[0]:
            tmp.append(l1[0])
            del l1[0]
        else:
            tmp.append(l2[0])
            del l2[0]
    tmp.extend(l1)
    tmp.extend(l2)
    return tmp
```    
#### 9 交叉链表求交点
去哪儿的面试,没做出来.
	class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None
def node(l1, l2):
    length1, lenth2 = 0, 0
    # 求两个链表长度
    while l1.next:
        l1 = l1.next
        length1 += 1
    while l2.next:
        l2 = l2.next
        length2 += 1
    # 长的链表先走
    if length1 > lenth2:
        for _ in range(length1 - length2):
            l1 = l1.next
    else:
        for _ in range(length2 - length1):
            l2 = l2.next
    while l1 and l2:
        if l1.next == l2.next:
            return l1.next
        else:
            l1 = l1.next
            l2 = l2.next
#### 10 二分查找

	def binarySearch(l, t):
    low, high = 0, len(l) - 1
    while low < high:
        print low, high
        mid = (low + high) / 2
        if l[mid] > t:
            high = mid
        elif l[mid] < t:
            low = mid + 1
        else:
            return mid
    return low if l[low] == t else False

if __name__ == '__main__':
    l = [1, 4, 12, 45, 66, 99, 120, 444]
    print binarySearch(l, 12)
    print binarySearch(l, 1)
    print binarySearch(l, 13)
    print binarySearch(l, 444)
#### 11 快排
1
2
3
4
5
6
7
8
9
10
11
12	def qsort(seq):
    if seq==[]:
        return []
    else:
        pivot=seq[0]
        lesser=qsort([x for x in seq[1:] if x<pivot])
        greater=qsort([x for x in seq[1:] if x>=pivot])
        return lesser+[pivot]+greater

if __name__=='__main__':
    seq=[5,6,78,9,0,-1,2,3,-65,12]
    print(qsort(seq))
#### 12 找零问题
	def  coinChange(values, money, coinsUsed):
    #values    T[1:n]数组
    #valuesCounts   钱币对应的种类数
    #money  找出来的总钱数
    #coinsUsed   对应于目前钱币总数i所使用的硬币数目
    for cents in range(1, money+1):
        minCoins = cents     #从第一个开始到money的所有情况初始
        for value in values:
            if value <= cents:
                temp = coinsUsed[cents - value] + 1
                if temp < minCoins:
                    minCoins = temp
        coinsUsed[cents] = minCoins
        print('面值为：{0} 的最小硬币数目为：{1} '.format(cents, coinsUsed[cents]) )

if __name__ == '__main__':
    values = [ 25, 21, 10, 5, 1]
    money = 63
    coinsUsed = {i:0 for i in range(money+1)}
    coinChange(values, money, coinsUsed)
#### 13 广度遍历和深度遍历二叉树
给定一个数组，构建二叉树，并且按层次打印这个二叉树
#### 14 二叉树节点
class Node(object):
    def __init__(self, data, left=None, right=None):
        self.data = data
        self.left = left
        self.right = right

tree = Node(1, Node(3, Node(7, Node(0)), Node(6)), Node(2, Node(5), Node(4)))

#### 15 层次遍历
def lookup(root):
    stack = [root]
    while stack:
        current = stack.pop(0)
        print current.data
        if current.left:
            stack.append(current.left)
        if current.right:
            stack.append(current.right)
#### 16 深度遍历
def deep(root):
    if not root:
        return
    print root.data
    deep(root.left)
    deep(root.right)

if __name__ == '__main__':
    lookup(tree)
    deep(tree)
#### 17 前中后序遍历
深度遍历改变顺序就OK了
#### 18 求最大树深
1
2
3
4	def maxDepth(root):
        if not root:
            return 0
        return max(maxDepth(root.left), maxDepth(root.right)) + 1
#### 19 求两棵树是否相同

1
2
3
4
5
6
7	def isSameTree(p, q):
    if p == None and q == None:
        return True
    elif p and q :
        return p.val == q.val and isSameTree(p.left,q.left) and isSameTree(p.right,q.right)
    else :
        return False
#### 20 前序中序求后序
	def rebuild(pre, center):
    if not pre:
        return
    cur = Node(pre[0])
    index = center.index(pre[0])
    cur.left = rebuild(pre[1:index + 1], center[:index])
    cur.right = rebuild(pre[index + 1:], center[index + 1:])
    return cur

def deep(root):
    if not root:
        return
    deep(root.left)
    deep(root.right)
    print root.data
#### 21 单链表逆置
	class Node(object):
    def __init__(self, data=None, next=None):
        self.data = data
        self.next = next

link = Node(1, Node(2, Node(3, Node(4, Node(5, Node(6, Node(7, Node(8, Node(9)))))))))

def rev(link):
    pre = link
    cur = link.next
    pre.next = None
    while cur:
        tmp = cur.next
        cur.next = pre
        pre = cur
        cur = tmp
    return pre

root = rev(link)
while root:
    print root.data
    root = root.next

### Python Web相关

#### 解释一下 WSGI 和 FastCGI 的关系？
CGI全称是“公共网关接口”(CommonGateway Interface)，HTTP服务器与你的或其它机器上的程序进行“交谈”的一种工具，其程序须运行在网络服务器上。　CGI可以用任何一种语言编写，只要这种语言具有标准输入、输出和环境变量。如php,perl,tcl等。

FastCGI像是一个常驻(long-live)型的CGI，它可以一直执行着，只要激活后，不会每次都要花费时间去fork一次(这是CGI最为人诟病的fork-and-execute模式)。它还支持分布式的运算, 即 FastCGI 程序可以在网站服务器以外的主机上执行并且接受来自其它网站服务器来的请求。
FastCGI是语言无关的、可伸缩架构的CGI开放扩展，其主要行为是将CGI解释器进程保持在内存中并因此获得较高的性能。众所周知，CGI解释器的反复加载是CGI性能低下的主要原因，如果CGI解释器保持在内存中并接受FastCGI进程管理器调度，则可以提供良好的性能、伸缩性、Fail- Over特性等等。
WSGI的全称为： PythonWeb Server Gateway Interface v1.0 （Python Web 服务器网关接口），
它是 Python 应用程序和 WEB 服务器之间的一种接口。
它的作用，类似于FCGI 或 FASTCGI 之类的协议的作用。
WSGI 的目标，是要建立一个简单的普遍适用的服务器与 WEB 框架之间的接口。
Flup就是使用 Python 语言对 WSGI 的一种实现，是可以用于 Python 的应用开发中的一种工具或者说是一种库。
Spawn-fcgi是一个小程序，这个程序的作用是管理fast-cgi进程，那么管理wsgi进程也是没有问题的，功能和php-fpm类似。
故，简单地说，WSGI和FastCGI都是一种CGI，用于连接WEB服务器与应用程序，而WSGI专指Python应用程序。而flup是WSGI的一种实现，Spawn-fcgi是用于管理flup进程的一个工具，可以启动多个wsgi进程，并管理它们。

#### 解释一下 Django 和 Tornado 的关系、差别
Django源自一个在线新闻 Web站点，于 2005 年以开源的形式被释放出来。
Django 框架的核心组件有：
用于创建模型的对象关系映射为最终用户设计的完美管理界面一流的 URL 设计设计者友好的模板语言缓存系统等等
它鼓励快速开发,并遵循MVC设计。Django遵守 BSD版权，最新发行版本是Django
1.4，于2012年03月23日发布.Django的主要目的是简便、快速的开发数据库驱动的网站。它强调代码复用,多个组件可以很方便的以“插件”形式服务于整个框架，Django有许多功能强大的第三方插件，你甚至可以很方便的开发出自己的工具包。这使得Django具有很强的可扩展性。它还强调快速开发和DRY(Do Not RepeatYourself)原则。
Tornado是 FriendFeed使用的可扩展的非阻塞式 web 服务器及其相关工具的开源版本。这个 Web 框架看起来有些像 web.py 或者 Google 的 webapp，不过为了能有效利用非阻塞式服务器环境，这个 Web 框架还包含了一些相关的有用工具和优化。
Tornado 和现在的主流 Web 服务器框架（包括大多数Python 的框架）有着明显的区别：它是非阻塞式服务器，而且速度相当快。得利于其 非阻塞的方式和对epoll的运用，Tornado 每秒可以处理数以千计的连接，这意味着对于实时 Web服务来说，Tornado 是一个理想的 Web 框架。我们开发这个 Web 服务器的主要目的就是为了处理 FriendFeed 的实时功能 ——在 FriendFeed 的应用里每一个活动用户都会保持着一个服务器连接。（关于如何扩容 服务器，以处理数以千计的客户端的连接的问题。
#### 解释下django-debug-toolbar的使用
使用django开发站点时，可以使用django-debug-toolbar来进行调试。在settings.py中添加’debug_toolbar.middleware.DebugToolbarMiddleware’到项目的MIDDLEWARE_CLASSES 内。
#### 解释下Django使用redis缓存服务器
为了能在Django中使用redis，还需要安装redis for Django的插件。然后在Django的settings中配置了。现在连接和配置都已经完成了，接下来是一个简单的例子：
	from django.conf import settings
from django.core.cache import cache
#read cache user id
def read_from_cache(self, user_name):
    key = 'user_id_of_'+user_name
    value = cache.get(key)
    if value == None:
        data = None
    else:
        data = json.loads(value)
    return data
#write cache user id
def write_to_cache(self, user_name):
    key = 'user_id_of_'+user_name
    cache.set(key, json.dumps(user_name), settings.NEVER_REDIS_TIMEOUT)

#### 如何进行Django单元测试
#### Django的单元测试使用python的unittest模块，这个模块使用基于类的方法来定义测试。类名为django.test.TestCase,继承于python的unittest.TestCase。

	from django.test import TestCase
from myapp.models import Animal

class AnimalTestCase(TestCase):
    def setUp(self):
        Animal.objects.create(name="lion", sound="roar")
        Animal.objects.create(name="cat", sound="meow")

    def test_animals_can_speak(self):
        """Animals that can speak are correctly identified"""
        lion = Animal.objects.get(name="lion")
        cat = Animal.objects.get(name="cat")
        self.assertEqual(lion.speak(), 'The lion says "roar"')
        self.assertEqual(cat.speak(), 'The cat says "meow"')
执行目录下所有的测试(所有的test*.py文件)：运行测试的时候，测试程序会在所有以test开头的文件中查找所有的test cases(inittest.TestCase的子类),自动建立测试集然后运行测试。
1	$ python manage.py test

执行animals项目下tests包里的测试：
	$ python manage.py testanimals.tests

执行animals项目里的test测试：
1	$ python manage.py testanimals

单独执行某个test case：
1	$ python manage.py testanimals.tests.AnimalTestCase

单独执行某个测试方法：
1	$ python manage.py testanimals.tests.AnimalTestCase.test_animals_can_speak

为测试文件提供路径：
1	$ python manage.py testanimals/

通配测试文件名：
1	$ python manage.py test--pattern="tests_*.py"

启用warnings提醒：
1	$ python -Wall manage.py test

#### 解释下Http协议
HTTP是一个属于应用层的面向对象的协议，由于其简捷、快速的方式，适用于分布式超媒体信息系统。
HTTP协议的主要特点可概括如下：
1.支持客户/服务器模式。
2.简单快速：客户向服务器请求服务时，只需传送请求方法和路径。请求方法常用的有GET、HEAD、POST。每种方法规定了客户与服务器联系的类型不同。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快。
3.灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记。
4.无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间。
5.无状态：HTTP协议是无状态协议。无状态是指协议对于事务处理没有记忆能力。缺少状态意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。另一方面，在服务器不需要先前信息时它的应答就较快。
#### 解释下Http请求头和常见响应状态码
Accept:指浏览器或其他客户可以接爱的MIME文件格式。可以根据它判断并返回适当的文件格式。
Accept-Charset：指出浏览器可以接受的字符编码。英文浏览器的默认值是ISO-8859-1.
Accept-Language：指出浏览器可以接受的语言种类，如en或en-us，指英语。
Accept-Encoding：指出浏览器可以接受的编码方式。编码方式不同于文件格式，它是为了压缩文件并加速文件传递速度。浏览器在接收到Web响应之后先解码，然后再检查文件格式。
Cache-Control：设置关于请求被代理服务器存储的相关选项。一般用不到。
Connection：用来告诉服务器是否可以维持固定的HTTP连接。HTTP/1.1使用Keep-Alive为默认值，这样，当浏览器需要多个文件时(比如一个HTML文件和相关的图形文件)，不需要每次都建立连接。
Content-Type：用来表名request的内容类型。可以用HttpServletRequest的getContentType()方法取得。
Cookie：浏览器用这个属性向服务器发送Cookie。Cookie是在浏览器中寄存的小型数据体，它可以记载和服务器相关的用户信息，也可以用来实现会话功能。

状态代码有三位数字组成，第一个数字定义了响应的类别，且有五种可能取值：
1xx：指示信息–表示请求已接收，继续处理
2xx：成功–表示请求已被成功接收、理解、接受
3xx：重定向–要完成请求必须进行更进一步的操作
4xx：客户端错误–请求有语法错误或请求无法实现
5xx：服务器端错误–服务器未能实现合法的请求
常见状态代码、状态描述、说明：
200 OK     //客户端请求成功
400 Bad Request  //客户端请求有语法错误，不能被服务器所理解
401 Unauthorized //请求未经授权，这个状态代码必须和WWW-Authenticate报头域一起使用
403 Forbidden  //服务器收到请求，但是拒绝提供服务
404 Not Found  //请求资源不存在，eg：输入了错误的URL
500 Internal Server Error //服务器发生不可预期的错误
503 Server Unavailable  //服务器当前不能处理客户端的请求，一段时间后可能恢复正常
eg：HTTP/1.1 200 OK （CRLF）

### 爬虫
一、试列出至少三种目前流行的大型数据库的名称:________、_________、__________,其中您最熟悉的是__________,从__________年开始使用。
Oracle，Mysql，SQLServer Oracle根据自己情况

二、有表List，并有字段A、B、C，类型都是整数。表中有如下几条记录：
A	B	C
2	7	9
5	6	4
3	11	9
现在对该表一次完成以下操作：
查询出B和C列的值，要求按B列升序排列
写出一条新的记录，值为{7,9,8}
查询C列，要求消除重复的值，按降序排列
写出完成完成以上操作的标准的SQL语句，并且写出操作3的结果。
 create table List(A int,B int,C int)
Select B,C from List order by B
Insert into List values(7,9,8)
Select distinct(C) from List order by desc;
984

三、请简要说明视图的作用
 1.数据库视图隐藏了数据的复杂性。
2.数据库视图有利于控制用户对表中某些列的访问。
3.数据库视图使用户查询变得简单。

四、列举您使用过的python网络爬虫所用到的网络数据包（最熟悉的在前）：
requests、urllib、urllib2、httplib2

五、列举您使用过的python网络爬虫所用到的解析数据包（最熟悉的在前）：
BeautifulSoup、pyquery、Xpath、lxml

六、列举您使用过的python中的编码方式（最熟悉的在前）：
UTF-8，ASCII，gbk

七、python3.5语言中enumerate的意思是_______________________
 对于一个可迭代的（iterable）/可遍历的对象（如列表、字符串），enumerate将其组成一个索引序列，利用它可以同时获得索引和值
enumerate多用于在for循环中得到计数

八、99的八进制表示是_______________________
 143
九、请举出三种常用的排序算法
 冒泡、选择、快速
十、列出比较熟悉的爬虫框架
 Scrapy
十一、用4、9、2、7四个数字，可以使用+、-、* 和 /，每个数字使用一次，使表达式的结果为24，表达式是_____________________________
 （9+7-4）* 2
十二、对你最有影响的或是您认为最有价值的软件方面的几本书是？
十三、您最熟悉的Unix环境是_____________.Unix下查询环境变量的命令是________,查询脚本定时任务的命令是____________________
 1AIX，envcrontab
十四、写出在网络爬虫爬取数据的过程中，遇到的防爬虫问题的解决方案
 通过headers反爬虫：解决策略，伪造headers
基于用户行为反爬虫：动态变化去爬取数据，模拟普通用户的行为
基于动态页面的反爬虫：跟踪服务器发送的ajax请求，模拟ajax请求
十五、阅读以下Python程序
foriinrange(5,0,-1):
print(i)
请在下面写出打印结果
 54321
十六、在某系统中一个整数占用两个八位字节，使用Python按下面的要求编写完整程序。
接收从标准输入中依次输入的五个数字，将其组合成为一个整数，放入全局变量n中，随后在标准输出输出这个整数。（ord(char)获取字符ASCII值的函数）

人，从刚出生来到这个世界，便开始探索这个世界。累了就歇会，精神了就继续探索，直至死亡。


## java面试题及答案
2018最新《BAT Java必考面试题集》
1、面向对象的特征有哪些方面?
答：面向对象的特征主要有以下几个方面：
1)抽象：抽象是将一类对象的共同特征总结出来构造类的过程，包括数据抽象和行为抽象两方面。抽象只关注对象有哪些属性和行为，并不关注这些行为的细节是什么。
2)继承：继承是从已有类得到继承信息创建新类的过程。提供继承信息的类被称为父类（超类、基类）；得到继承信息的类被称为子类（派生类）。继承让变化中的软件系统有了一定的延续性，同时继承也是封装程序中可变因素的重要手段（如果不能理解请阅读阎宏博士的《Java与模式》或《设计模式精解》中关于桥梁模式的部分）。
3)封装：通常认为封装是把数据和操作数据的方法绑定起来，对数据的访问只能通过已定义的接口。面向对象的本质就是将现实世界描绘成一系列完全自治、封闭的对象。我们在类中编写的方法就是对实现细节的一种封装；我们编写一个类就是对数据和数据操作的封装。可以说，封装就是隐藏一切可隐藏的东西，只向外界提供最简单的编程接口（可以想想普通洗衣机和全自动洗衣机的差别，明显全自动洗衣机封装更好因此操作起来更简单；我们现在使用的智能手机也是封装得足够好的，因为几个按键就搞定了所有的事情）。
4)多态性：多态性是指允许不同子类型的对象对同一消息作出不同的响应。简单的说就是用同样的对象引用调用同样的方法但是做了不同的事情。多态性分为编译时的多态性和运行时的多态性。如果将对象的方法视为对象向外界提供的服务，那么运行时的多态性可以解释为：当A系统访问B系统提供的服务时，B系统有多种提供服务的方式，但一切对A系统来说都是透明的（就像电动剃须刀是A系统，它的供电系统是B系统，B系统可以使用电池供电或者用交流电，甚至还有可能是太阳能，A系统只会通过B类对象调用供电的方法，但并不知道供电系统的底层实现是什么，究竟通过何种方式获得了动力）。方法重载（overload）实现的是编译时的多态性（也称为前绑定），而方法重写（override）实现的是运行时的多态性（也称为后绑定）。运行时的多态是面向对象最精髓的东西，要实现多态需要做两件事：1. 方法重写（子类继承父类并重写父类中已有的或抽象的方法）；2. 对象造型（用父类型引用引用子类型对象，这样同样的引用调用同样的方法就会根据子类对象的不同而表现出不同的行为）。
 2、访问修饰符public,private,protected,以及不写（默认）时的区别？
答：区别如下：
作用域    当前类  同包 子类 其他
public        √        √       √      √
protected  √        √       √      ×
default       √       √       ×      ×
private       √        ×      ×      ×
类的成员不写访问修饰时默认为default。默认对于同一个包中的其他类相当于公开（public），对于不是同一个包中的其他类相当于私有（private）。受保护（protected）对子类相当于公开，对不是同一包中的没有父子关系的类相当于私有。
3、String 是最基本的数据类型吗?
答：不是。Java中的基本数据类型只有8个：byte、short、int、long、float、double、char、boolean；除了基本类型（primitive type）和枚举类型（enumeration type），剩下的都是引用类型（reference type）。
4、float f=3.4;是否正确?
答:不正确。3.4是双精度数，将双精度型（double）赋值给浮点型（float）属于下转型（down-casting，也称为窄化）会造成精度损失，因此需要强制类型转换float f =(float)3.4; 或者写成float f =3.4F;。
5、short s1 = 1; s1 = s1 + 1;有错吗?short s1 = 1; s1 += 1;有错吗?
答：对于short s1 = 1; s1 = s1 + 1;由于1是int类型，因此s1+1运算结果也是int 型，需要强制转换类型才能赋值给short型。而short s1 = 1; s1 += 1;可以正确编译，因为s1+= 1;相当于s1 = (short)(s1 + 1);其中有隐含的强制类型转换。

6、Java 有没有goto?
答：goto 是Java中的保留字，在目前版本的Java中没有使用。（根据James Gosling（Java之父）编写的《The Java Programming Language》一书的附录中给出了一个Java关键字列表，其中有goto和const，但是这两个是目前无法使用的关键字，因此有些地方将其称之为保留字，其实保留字这个词应该有更广泛的意义，因为熟悉C语言的程序员都知道，在系统类库中使用过的有特殊意义的单词或单词的组合都被视为保留字）
7、int 和Integer 有什么区别?
答：Java是一个近乎纯洁的面向对象编程语言，但是为了编程的方便还是引入不是对象的基本数据类型，但是为了能够将这些基本数据类型当成对象操作，Java为每一个基本数据类型都引入了对应的包装类型（wrapper class），int的包装类就是Integer，从JDK 1.5开始引入了自动装箱/拆箱机制，使得二者可以相互转换。
Java 为每个原始类型提供了包装类型：
原始类型: boolean，char，byte，short，int，long，float，double
包装类型：Boolean，Character，Byte，Short，Integer，Long，Float，Double

补充：最近还遇到一个面试题，也是和自动装箱和拆箱相关的，代码如下所示：

如果不明就里很容易认为两个输出要么都是true要么都是false。首先需要注意的是f1、f2、f3、f4四个变量都是Integer对象，所以下面的==运算比较的不是值而是引用。装箱的本质是什么呢？当我们给一个Integer对象赋一个int值的时候，会调用Integer类的静态方法valueOf，如果看看valueOf的源代码就知道发生了什么。

IntegerCache是Integer的内部类，其代码如下所示：
简单的说，如果字面量的值在-128到127之间，那么不会new新的Integer对象，而是直接引用常量池中的Integer对象，所以上面的面试题中f1==f2的结果是true，而f3==f4的结果是false。越是貌似简单的面试题其中的玄机就越多，需要面试者有相当深厚的功力。
8、&和&&的区别？
答：&运算符有两种用法：(1)按位与；(2)逻辑与。&&运算符是短路与运算。逻辑与跟短路与的差别是非常巨大的，虽然二者都要求运算符左右两端的布尔值都是true整个表达式的值才是true。&&之所以称为短路运算是因为，如果&&左边的表达式的值是false，右边的表达式会被直接短路掉，不会进行运算。很多时候我们可能都需要用&&而不是&，例如在验证用户登录时判定用户名不是null而且不是空字符串，应当写为：username != null &&!username.equals(“”)，二者的顺序不能交换，更不能用&运算符，因为第一个条件如果不成立，根本不能进行字符串的equals比较，否则会产生NullPointerException异常。注意：逻辑或运算符（|）和短路或运算符（||）的差别也是如此。
补充：如果你熟悉JavaScript，那你可能更能感受到短路运算的强大，想成为JavaScript的高手就先从玩转短路运算开始吧。
9、解释内存中的栈（stack）、堆(heap)和静态存储区的用法。
答：通常我们定义一个基本数据类型的变量，一个对象的引用，还有就是函数调用的现场保存都使用内存中的栈空间；而通过new关键字和构造器创建的对象放在堆空间；程序中的字面量（literal）如直接书写的100、“hello”和常量都是放在静态存储区中。栈空间操作最快但是也很小，通常大量的对象都是放在堆空间，整个内存包括硬盘上的虚拟内存都可以被当成堆空间来使用。
String str = new String(“hello”);
上面的语句中str放在栈上，用new创建出来的字符串对象放在堆上，而“hello”这个字面量放在静态存储区。
补充：较新版本的Java中使用了一项叫“逃逸分析“的技术，可以将一些局部对象放在栈上以提升对象的操作性能。

10、Math.round(11.5) 等于多少? Math.round(-11.5)等于多少?
答：Math.round(11.5)的返回值是12，Math.round(-11.5)的返回值是-11。四舍五入的原理是在参数上加0.5然后进行下取整。
11、swtich 是否能作用在byte 上，是否能作用在long 上，是否能作用在String上?
答：早期的JDK中，switch（expr）中，expr可以是byte、short、char、int。从1.5版开始，Java中引入了枚举类型（enum），expr也可以是枚举，从JDK 1.7版开始，还可以是字符串（String）。长整型（long）是不可以的。
12、用最有效率的方法计算2乘以8?
答： 2 << 3（左移3位相当于乘以2的3次方，右移3位相当于除以2的3次方）。
补充：我们为编写的类重写hashCode方法时，可能会看到如下所示的代码，其实我们不太理解为什么要使用这样的乘法运算来产生哈希码（散列码），而且为什么这个数是个素数，为什么通常选择31这个数？前两个问题的答案你可以自己百度一下，选择31是因为可以用移位和减法运算来代替乘法，从而得到更好的性能。说到这里你可能已经想到了：31 * num <==> (num << 5) - num，左移5位相当于乘以2的5次方（32）再减去自身就相当于乘以31。现在的VM都能自动完成这个优化。


13、数组有没有length()方法?String 有没有length()方法？
答：数组没有length()方法，有length 的属性。String 有length()方法。JavaScript中，获得字符串的长度是通过length属性得到的，这一点容易和Java混淆。

14、在Java 中，如何跳出当前的多重嵌套循环？
答：在最外层循环前加一个标记如A，然后用break A;可以跳出多重循环。（Java中支持带标签的break和continue语句，作用有点类似于C和C++中的goto语句，但是就像要避免使用goto一样，应该避免使用带标签的break和continue，因为它不会让你的程序变得更优雅，很多时候甚至有相反的作用，所以这种语法其实不知道更好）
15、构造器（constructor）是否可被重写（override）?
答：构造器不能被继承，因此不能被重写，但可以被重载。
16、两个对象值相同(x.equals(y) == true)，但却可有不同的hash code，这句话对不对？
答：不对，如果两个对象x和y满足x.equals(y) == true，它们的哈希码（hash code）应当相同。Java对于eqauls方法和hashCode方法是这样规定的：(1)如果两个对象相同（equals方法返回true），那么它们的hashCode值一定要相同；(2)如果两个对象的hashCode相同，它们并不一定相同。当然，你未必要按照要求去做，但是如果你违背了上述原则就会发现在使用容器时，相同的对象可以出现在Set集合中，同时增加新元素的效率会大大下降（对于使用哈希存储的系统，如果哈希码频繁的冲突将会造成存取性能急剧下降）。
补充：关于equals和hashCode方法，很多Java程序都知道，但很多人也就是仅仅知道而已，在Joshua Bloch的大作《Effective Java》（很多软件公司，《Effective Java》、《Java编程思想》以及《重构：改善既有代码质量》是Java程序员必看书籍）中是这样介绍equals方法的：首先equals方法必须满足自反性（x.equals(x)必须返回true）、对称性（x.equals(y)返回true时，y.equals(x)也必须返回true）、传递性（x.equals(y)和y.equals(z)都返回true时，x.equals(z)也必须返回true）和一致性（当x和y引用的对象信息没有被修改时，多次调用x.equals(y)应该得到同样的返回值），而且对于任何非null值的引用x，x.equals(null)必须返回false。实现高质量的equals方法的诀窍包括：1. 使用==操作符检查“参数是否为这个对象的引用”；2. 使用instanceof操作符检查“参数是否为正确的类型”；3. 对于类中的关键属性，检查参数传入对象的属性是否与之相匹配；4. 编写完equals方法后，问自己它是否满足对称性、传递性、一致性；5. 重写equals时总是要重写hashCode；6. 不要将equals方法参数中的Object对象替换为其他的类型，在重写时不要忘掉@Override注解。
17、是否可以继承String 类?
答：String 类是final类，不可以被继承。
补充：继承String本身就是一个错误的行为，对String类型最好的重用方式是关联（HAS-A）而不是继承（IS-A）。

18、当一个对象被当作参数传递到一个方法后，此方法可改变这个对象的属性，并可返回变化后的结果，那么这里到底是值传递还是引用传递?
答：是值传递。Java 编程语言只有值传递参数。当一个对象实例作为一个参数被传递到方法中时，参数的值就是对该对象的引用。对象的属性可以在被调用过程中被改变，但对象的引用是永远不会改变的。C++和C#中可以通过传引用或传输出参数来改变传入的参数的值。
补充：Java中没有传引用实在是非常的不方便，这一点在Java 8中仍然没有得到改进，正是如此在Java编写的代码中才会出现大量的Wrapper类（将需要通过方法调用修改的引用置于一个Wrapper类中，再将Wrapper对象传入方法），这样的做法只会让代码变得臃肿，尤其是让从C和C++转型为Java程序员的开发者无法容忍。
19、String 和StringBuilder、StringBuffer 的区别?
答：Java 平台提供了两种类型的字符串：String和StringBuffer / StringBuilder，它们可以储存和操作字符串。其中String是只读字符串，也就意味着String引用的字符串内容是不能被改变的。而StringBuffer和StringBuilder类表示的字符串对象可以直接进行修改。StringBuilder是JDK 1.5中引入的，它和StringBuffer的方法完全相同，区别在于它是在单线程环境下使用的，因为它的所有方面都没有被synchronized修饰，因此它的效率也比StringBuffer略高。
补充1：有一个面试题问：有没有哪种情况用+做字符串连接比调用StringBuffer / StringBuilder对象的append方法性能更好？如果连接后得到的字符串在静态存储区中是早已存在的，那么用+做字符串连接是优于StringBuffer / StringBuilder的append方法的。
补充2：下面也是一个面试题，问程序的输出，看看自己能不能说出正确答案。
 20、重载（Overload）和重写（Override）的区别。重载的方法能否根据返回类型进行区分?
答：方法的重载和重写都是实现多态的方式，区别在于前者实现的是编译时的多态性，而后者实现的是运行时的多态性。重载发生在一个类中，同名的方法如果有不同的参数列表（参数类型不同、参数个数不同或者二者都不同）则视为重载；重写发生在子类与父类之间，重写要求子类被重写方法与父类被重写方法有相同的返回类型，比父类被重写方法更好访问，不能比父类被重写方法声明更多的异常（里氏代换原则）。重载对返回类型没有特殊的要求。
补充：华为的面试题中曾经问过这样一个问题：为什么不能根据返回类型来区分重载，说出你的答案吧！

21、描述一下JVM 加载class文件的原理机制?
答：JVM 中类的装载是由类加载器（ClassLoader） 和它的子类来实现的，Java中的类加载器是一个重要的Java 运行时系统组件，它负责在运行时查找和装入类文件中的类。
补充：
1.由于Java的跨平台性，经过编译的Java源程序并不是一个可执行程序，而是一个或多个类文件。当Java程序需要使用某个类时，JVM会确保这个类已经被加载、连接(验证、准备和解析)和初始化。类的加载是指把类的.class文件中的数据读入到内存中，通常是创建一个字节数组读入.class文件，然后产生与所加载类对应的Class对象。加载完成后，Class对象还不完整，所以此时的类还不可用。当类被加载后就进入连接阶段，这一阶段包括验证、准备(为静态变量分配内存并设置默认的初始值)和解析(将符号引用替换为直接引用)三个步骤。最后JVM对类进行初始化，包括：1如果类存在直接的父类并且这个类还没有被初始化，那么就先初始化父类；2如果类中存在初始化语句，就依次执行这些初始化语句。
2.类的加载是由类加载器完成的，类加载器包括：根加载器（BootStrap）、扩展加载器（Extension）、系统加载器（System）和用户自定义类加载器（java.lang.ClassLoader的子类）。从JDK 1.2开始，类加载过程采取了父亲委托机制(PDM)。PDM更好的保证了Java平台的安全性，在该机制中，JVM自带的Bootstrap是根加载器，其他的加载器都有且仅有一个父类加载器。类的加载首先请求父类加载器加载，父类加载器无能为力时才由其子类加载器自行加载。JVM不会向Java程序提供对Bootstrap的引用。下面是关于几个类加载器的说明：
a)Bootstrap：一般用本地代码实现，负责加载JVM基础核心类库（rt.jar）；
b)Extension：从java.ext.dirs系统属性所指定的目录中加载类库，它的父加载器是Bootstrap；
c)System：又叫应用类加载器，其父类是Extension。它是应用最广泛的类加载器。它从环境变量classpath或者系统属性java.class.path所指定的目录中记载类，是用户自定义加载器的默认父加载器。
22、char 型变量中能不能存贮一个中文汉字?为什么?
答：char类型可以存储一个中文汉字，因为Java中使用的编码是Unicode（不选择任何特定的编码，直接使用字符在字符集中的编号，这是统一的唯一方法），一个char类型占2个字节（16bit），所以放一个中文是没问题的。
补充：使用Unicode意味着字符在JVM内部和外部有不同的表现形式，在JVM内部都是Unicode，当这个字符被从JVM内部转移到外部时（例如存入文件系统中），需要进行编码转换。所以Java中有字节流和字符流，以及在字符流和字节流之间进行转换的转换流，如InputStreamReader和OutputStreamReader，这两个类是字节流和字符流之间的适配器类，承担了编码转换的任务；对于C程序员来说，要完成这样的编码转换恐怕要依赖于union（联合体/共用体）共享内存的特征来实现了。

23、抽象类（abstract class）和接口（interface）有什么异同?
答：抽象类和接口都不能够实例化，但可以定义抽象类和接口类型的引用。一个类如果继承了某个抽象类或者实现了某个接口都需要对其中的抽象方法全部进行实现，否则该类仍然需要被声明为抽象类。接口比抽象类更加抽象，因为抽象类中可以定义构造器，可以有抽象方法和具体方法，而接口中不能定义构造器而且其中的方法全部都是抽象方法。抽象类中的成员可以是private、默认、protected、public的，而接口中的成员全都是public的。抽象类中可以定义成员变量，而接口中定义的成员变量实际上都是常量。有抽象方法的类必须被声明为抽象类，而抽象类未必要有抽象方法。
24、静态嵌套类(Static Nested Class)和内部类（Inner Class）的不同？
答：Static Nested Class是被声明为静态（static）的内部类，它可以不依赖于外部类实例被实例化。而通常的内部类需要在外部类实例化后才能实例化，其语法看起来挺诡异的，如下所示。

25、Java 中会存在内存泄漏吗，请简单描述。
答：理论上Java因为有垃圾回收机制（GC）不会存在内存泄露问题（这也是Java被广泛使用于服务器端编程的一个重要原因）；然而在实际开发中，可能会存在无用但可达的对象，这些对象不能被GC回收也会发生内存泄露。一个例子就是Hibernate的Session（一级缓存）中的对象属于持久态，垃圾回收器是不会回收这些对象的，然而这些对象中可能存在无用的垃圾对象。下面的例子也展示了Java中发生内存泄露的情况：

上面的代码实现了一个栈（先进后出（FILO））结构，乍看之下似乎没有什么明显的问题，它甚至可以通过你编写的各种单元测试。然而其中的pop方法却存在内存泄露的问题，当我们用pop方法弹出栈中的对象时，该对象不会被当作垃圾回收，即使使用栈的程序不再引用这些对象，因为栈内部维护着对这些对象的过期引用（obsolete reference）。在支持垃圾回收的语言中，内存泄露是很隐蔽的，这种内存泄露其实就是无意识的对象保持。如果一个对象引用被无意识的保留起来了，那么垃圾回收器不会处理这个对象，也不会处理该对象引用的其他对象，即使这样的对象只有少数几个，也可能会导致很多的对象被排除在垃圾回收之外，从而对性能造成重大影响，极端情况下会引发Disk Paging（物理内存与硬盘的虚拟内存交换数据），甚至造成OutOfMemoryError。

26、抽象的（abstract）方法是否可同时是静态的（static）,是否可同时是本地方法（native），是否可同时被synchronized修饰?
答：都不能。抽象方法需要子类重写，而静态的方法是无法被重写的，因此二者是矛盾的。本地方法是由本地代码（如C代码）实现的方法，而抽象方法是没有实现的，也是矛盾的。synchronized和方法的实现细节有关，抽象方法不涉及实现细节，因此也是相互矛盾的。
27、静态变量和实例变量的区别？
答：静态变量是被static修饰符修饰的变量，也称为类变量，它属于类，不属于类的任何一个对象，一个类不管创建多少个对象，静态变量在内存中有且仅有一个拷贝；实例变量必须依存于某一实例，需要先创建对象然后通过对象才能访问到它。静态变量可以实现让多个对象共享内存。在Java开发中，上下文类和工具类中通常会有大量的静态成员。
28、是否可以从一个静态（static）方法内部发出对非静态（non-static）方法的调用？
答：不可以，静态方法只能访问静态成员，因为非静态方法的调用要先创建对象，因此在调用静态方法时可能对象并没有被初始化。
29、如何实现对象克隆？
答：有两种方式：
1.实现Cloneable接口并重写Object类中的clone()方法；
2.实现Serializable接口，通过对象的序列化和反序列化实现克隆，可以实现真正的深度克隆，代码如下。

注意：基于序列化和反序列化实现的克隆不仅仅是深度克隆，更重要的是通过泛型限定，可以检查出要克隆的对象是否支持序列化，这项检查是编译器完成的，不是在运行时抛出异常，这种是方案明显优于使用Object类的clone方法克隆对象。
30、GC 是什么？为什么要有GC？
答：GC是垃圾收集的意思，内存处理是编程人员容易出现问题的地方，忘记或者错误的内存回收会导致程序或系统的不稳定甚至崩溃，Java提供的GC功能可以自动监测对象是否超过作用域从而达到自动回收内存的目的，Java语言没有提供释放已分配内存的显示操作方法。Java程序员不用担心内存管理，因为垃圾收集器会自动进行管理。要请求垃圾收集，可以调用下面的方法之一：System.gc() 或Runtime.getRuntime().gc() ，但JVM可以屏蔽掉显示的垃圾回收调用。
垃圾回收可以有效的防止内存泄露，有效的使用可以使用的内存。垃圾回收器通常是作为一个单独的低优先级的线程运行，不可预知的情况下对内存堆中已经死亡的或者长时间没有使用的对象进行清除和回收，程序员不能实时的调用垃圾回收器对某个对象或所有对象进行垃圾回收。在Java诞生初期，垃圾回收是Java最大的亮点之一，因为服务器端的编程需要有效的防止内存泄露问题，然而时过境迁，如今Java的垃圾回收机制已经成为被诟病的东西。移动智能终端用户通常觉得iOS的系统比Android系统有更好的用户体验，其中一个深层次的原因就在于Android系统中垃圾回收的不可预知性。
补充：垃圾回收机制有很多种，包括：分代复制垃圾回收、标记垃圾回收、增量垃圾回收等方式。标准的Java进程既有栈又有堆。栈保存了原始型局部变量，堆保存了要创建的对象。Java平台对堆内存回收和再利用的基本算法被称为标记和清除，但是Java对其进行了改进，采用“分代式垃圾收集”。这种方法会跟Java对象的生命周期将堆内存划分为不同的区域，在垃圾收集过程中，可能会将对象移动到不同区域：
•	伊甸园（Eden）：这是对象最初诞生的区域，并且对大多数对象来说，这里是它们唯一存在过的区域。
•	幸存者乐园（Survivor）：从伊甸园幸存下来的对象会被挪到这里。
•	终身颐养园（Tenured）：这是足够老的幸存对象的归宿。年轻代收集（Minor-GC）过程是不会触及这个地方的。当年轻代收集不能把对象放进终身颐养园时，就会触发一次完全收集（Major-GC），这里可能还会牵扯到压缩，以便为大对象腾出足够的空间。
与垃圾回收相关的JVM参数：
•	-Xms / -Xmx --- 堆的初始大小 / 堆的最大大小
•	-Xmn --- 堆中年轻代的大小
•	-XX:-DisableExplicitGC --- 让System.gc()不产生任何作用
•	-XX:+PrintGCDetail --- 打印GC的细节
•	-XX:+PrintGCDateStamps --- 打印GC操作的时间戳

31、String s=new String(“xyz”);创建了几个字符串对象？
答：两个对象，一个是静态存储区的"xyz",一个是用new创建在堆上的对象。
32、接口是否可继承（extends）接口? 抽象类是否可实现（implements）接口? 抽象类是否可继承具体类（concrete class）?
答：接口可以继承接口。抽象类可以实现(implements)接口，抽象类可继承具体类，但前提是具体类必须有明确的构造函数。
33、一个“.java”源文件中是否可以包含多个类（不是内部类）？有什么限制？
答：可以，但一个源文件中最多只能有一个公开类（public class）而且文件名必须和公开类的类名完全保持一致。
34、Anonymous Inner Class(匿名内部类)是否可以继承其它类？是否可以实现接口？
答：可以继承其他类或实现其他接口，在Swing编程中常用此方式来实现事件监听和回调。
35、内部类可以引用它的包含类（外部类）的成员吗？有没有什么限制？
答：一个内部类对象可以访问创建它的外部类对象的成员，包括私有成员。
36、Java 中的final关键字有哪些用法？
答：(1)修饰类：表示该类不能被继承；(2)修饰方法：表示方法不能被重写；(3)修饰变量：表示变量只能一次赋值以后值不能被修改（常量）。
37、指出下面程序的运行结果:

答：执行结果：1a2b2b。创建对象时构造器的调用顺序是：先初始化静态成员，然后调用父类构造器，再初始化非静态成员，最后调用自身构造器。
38、数据类型之间的转换:
1)如何将字符串转换为基本数据类型？
2)如何将基本数据类型转换为字符串？
答：
1)调用基本数据类型对应的包装类中的方法parseXXX(String)或valueOf(String)即可返回相应基本类型；
2)一种方法是将基本数据类型与空字符串（””）连接（+）即可获得其所对应的字符串；另一种方法是调用String 类中的valueOf(…)方法返回相应字符串

39、如何实现字符串的反转及替换？
答：方法很多，可以自己写实现也可以使用String或StringBuffer / StringBuilder中的方法。有一道很常见的面试题是用递归实现字符串反转，代码如下所示：

40、怎样将GB2312编码的字符串转换为ISO-8859-1编码的字符串？
答：代码如下所示:
String s1 = "你好";
String s2 = newString(s1.getBytes("GB2312"), "ISO-8859-1");
41、日期和时间：
1)如何取得年月日、小时分钟秒？
2)如何取得从1970年1月1日0时0分0秒到现在的毫秒数？
3)如何取得某月的最后一天？
4)如何格式化日期？
答：操作方法如下所示：
1)创建java.util.Calendar 实例，调用其get()方法传入不同的参数即可获得参数所对应的值
2)以下方法均可获得该毫秒数:

3)示例代码如下:

4)利用java.text.DataFormat 的子类（如SimpleDateFormat类）中的format(Date)方法可将日期格式化。
42、打印昨天的当前时刻。
答：

43、比较一下Java 和JavaSciprt。
答：JavaScript 与Java是两个公司开发的不同的两个产品。Java 是原Sun 公司推出的面向对象的程序设计语言，特别适合于互联网应用程序开发；而JavaScript是Netscape公司的产品，为了扩展Netscape浏览器的功能而开发的一种可以嵌入Web页面中运行的基于对象和事件驱动的解释性语言，它的前身是LiveScript；而Java 的前身是Oak语言。
下面对两种语言间的异同作如下比较：
1）基于对象和面向对象：Java是一种真正的面向对象的语言，即使是开发简单的程序，必须设计对象；JavaScript是种脚本语言，它可以用来制作与网络无关的，与用户交互作用的复杂软件。它是一种基于对象（Object-Based）和事件驱动（Event-Driven）的编程语言。因而它本身提供了非常丰富的内部对象供设计人员使用；
2）解释和编译：Java 的源代码在执行之前，必须经过编译；JavaScript 是一种解释性编程语言，其源代码不需经过编译，由浏览器解释执行；
3）强类型变量和类型弱变量：Java采用强类型变量检查，即所有变量在编译之前必须作声明；JavaScript中变量声明，采用其弱类型。即变量在使用前不需作声明，而是解释器在运行时检查其数据类型；
4）代码格式不一样。
补充：上面列出的四点是原来所谓的标准答案中给出的。其实Java和JavaScript最重要的区别是一个是静态语言，一个是动态语言。目前的编程语言的发展趋势是函数式语言和动态语言。在Java中类（class）是一等公民，而JavaScript中函数（function）是一等公民。对于这种问题，在面试时还是用自己的语言回答会更加靠谱。

44、什么时候用assert？
答：assertion(断言)在软件开发中是一种常用的调试方式，很多开发语言中都支持这种机制。一般来说，assertion用于保证程序最基本、关键的正确性。assertion检查通常在开发和测试时开启。为了提高性能，在软件发布后， assertion检查通常是关闭的。在实现中，断言是一个包含布尔表达式的语句，在执行这个语句时假定该表达式为true；如果表达式计算为false，那么系统会报告一个AssertionError。
断言用于调试目的：
assert(a > 0); // throws an AssertionError if a <= 0
断言可以有两种形式：
assert Expression1;
assert Expression1 : Expression2 ;
Expression1 应该总是产生一个布尔值。
Expression2 可以是得出一个值的任意表达式；这个值用于生成显示更多调试信息的字符串消息。
断言在默认情况下是禁用的，要在编译时启用断言，需使用source 1.4 标记：
javac -source 1.4 Test.java
要在运行时启用断言，可使用-enableassertions 或者-ea 标记。
要在运行时选择禁用断言，可使用-da 或者-disableassertions 标记。
要在系统类中启用断言，可使用-esa 或者-dsa 标记。还可以在包的基础上启用或者禁用断言。可以在预计正常情况下不会到达的任何位置上放置断言。断言可以用于验证传递给私有方法的参数。不过，断言不应该用于验证传递给公有方法的参数，因为不管是否启用了断言，公有方法都必须检查其参数。不过，既可以在公有方法中，也可以在非公有方法中利用断言测试后置条件。另外，断言不应该以任何方式改变程序的状态。
45、Error 和Exception 有什么区别?
答：Error 表示系统级的错误和程序不必处理的异常，是恢复不是不可能但很困难的情况下的一种严重问题；比如内存溢出，不可能指望程序能处理这样的情况；Exception 表示需要捕捉或者需要程序进行处理的异常，是一种设计或实现问题；也就是说，它表示如果程序运行正常，从不会发生的情况。
补充：2005年摩托罗拉的面试中曾经问过这么一个问题“If a process reports a stack overflow run-time error, what’s the most possible cause?”，给了四个选项a. lack of memory; b. write on an invalid memory space; c. recursive function calling; d. array index out of boundary. Java程序在运行时也可能会遭遇StackOverflowError，这是一个错误无法恢复，只能重新修改代码了，这个面试题的答案是c。如果写了不能迅速收敛的递归，则很有可能引发栈溢出的错误，如下所示：

因此，用递归编写程序时一定要牢记两点：1. 递归公式；2. 收敛条件（什么时候就不再递归而是回溯了）。
46、try{}里有一个return语句，那么紧跟在这个try后的finally{}里的code会不会被执行，什么时候被执行，在return前还是后?
答：会执行，在方法返回调用者前执行。Java允许在finally中改变返回值的做法是不好的，因为如果存在finally代码块，try中的return语句不会立马返回调用者，而是记录下返回值待finally代码块执行完毕之后再向调用者返回其值，然后如果在finally中修改了返回值，这会对程序造成很大的困扰，C#中就从语法上规定不能做这样的事。
47、Java 语言如何进行异常处理，关键字：throws、throw、try、catch、finally分别如何使用？
答：Java 通过面向对象的方法进行异常处理，把各种不同的异常进行分类，并提供了良好的接口。在Java 中，每个异常都是一个对象，它是Throwable 类或其子类的实例。当一个方法出现异常后便抛出一个异常对象，该对象中包含有异常信息，调用这个对象的方法可以捕获到这个异常并进行处理。Java 的异常处理是通过5 个关键词来实现的：try、catch、throw、throws和finally。一般情况下是用try来执行一段程序，如果出现异常，系统会抛出（throw）一个异常，这时候你可以通过它的类型来捕捉（catch）它，或最后（finally）由缺省处理器来处理；try用来指定一块预防所有“异常”的程序；catch 子句紧跟在try块后面，用来指定你想要捕捉的“异常”的类型；throw 语句用来明确地抛出一个“异常”；throws用来标明一个成员函数可能抛出的各种“异常”；finally 为确保一段代码不管发生什么“异常”都被执行一段代码；可以在一个成员函数调用的外面写一个try语句，在这个成员函数内部写另一个try语句保护其他代码。每当遇到一个try 语句，“异常”的框架就放到栈上面，直到所有的try语句都完成。如果下一级的try语句没有对某种“异常”进行处理，栈就会展开，直到遇到有处理这种“异常”的try 语句。
48、运行时异常与受检异常有何异同？
答：异常表示程序运行过程中可能出现的非正常状态，运行时异常表示虚拟机的通常操作中可能遇到的异常，是一种常见运行错误，只要程序设计得没有问题通常就不会发生。受检异常跟程序运行的上下文环境有关，即使程序设计无误，仍然可能因使用的问题而引发。Java编译器要求方法必须声明抛出可能发生的受检异常，但是并不要求必须声明抛出未被捕获的运行时异常。异常和继承一样，是面向对象程序设计中经常被滥用的东西，神作《Effective Java》中对异常的使用给出了以下指导原则：
•	不要将异常处理用于正常的控制流（设计良好的API不应该强迫它的调用者为了正常的控制流而使用异常）
•	对可以恢复的情况使用受检异常，对编程错误使用运行时异常
•	避免不必要的使用受检异常（可以通过一些状态检测手段来避免异常的发生）
•	优先使用标准的异常
•	每个方法抛出的异常都要有文档
•	保持异常的原子性
•	不要在catch中忽略掉捕获到的异常
49、列出一些你常见的运行时异常？
答：
ArithmeticException（算术异常）
ClassCastException （类转换异常）
IllegalArgumentException （非法参数异常）
IndexOutOfBoundsException （下表越界异常）
NullPointerException （空指针异常）
SecurityException （安全异常）
50、final, finally, finalize 的区别?
答：final：修饰符（关键字）有三种用法：如果一个类被声明为final，意味着它不能再派生出新的子类，即不能被继承，因此它和abstract是反义词。将变量声明为final，可以保证它们在使用中不被改变，被声明为final 的变量必须在声明时给定初值，而在以后的引用中只能读取不可修改。被声明为final 的方法也同样只能使用，不能在子类中被重写。finally：通常放在try…catch的后面构造总是执行代码块，这就意味着程序无论正常执行还是发生异常，这里的代码只要JVM不关闭都能执行，可以将释放外部资源的代码写在finally块中。finalize：Object类中定义的方法，Java中允许使用finalize() 方法在垃圾收集器将对象从内存中清除出去之前做必要的清理工作。这个方法是由垃圾收集器在销毁对象时调用的，通过重写finalize() 方法可以整理系统资源或者执行其他清理工作。


## 前端面试题及答案
2018 BAT最新《前端必考面试题》

1、Doctype作用? 严格模式与混杂模式如何区分？它们有何意义?
（1）、 声明位于文档中的最前面，处于 标签之前。告知浏览器的解析器，用什么文档类型 规范来解析这个文档。
（2）、严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。
（3）、在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
（4）、DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。

2、行内元素有哪些？块级元素有哪些？
（1）CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，  比如div默认display属性值为“block”，成为“块级”元素；  span默认display属性值为“inline”，是“行内”元素。  
（2）行内元素有：a b span img input select strong（强调的语气）  块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p  

3、link 和@import 的区别是？
（1）link属于XHTML标签，而@import是CSS提供的;
（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
（3）import只在IE5以上才能识别，而link是XHTML标签，无兼容问题;
（4）link方式的样式的权重 高于@import的权重.

4、浏览器的内核分别是什么?
IE浏览器的内核Trident、Mozilla的Gecko、Chrome的Blink（WebKit的分支）、Opera内核原为Presto，现为Blink；


5、HTML5有哪些新特性？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？
HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
绘画 canvas    用于媒介回放的 video 和 audio 元素   本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失；  sessionStorage 的数据在浏览器关闭后自动删除  语意化更好的内容元素，比如 article、footer、header、nav、section   表单控件，calendar、date、time、email、url、search    新的技术webworker, websockt, Geolocation

6、对语义化如何理解？
用正确的标签做正确的事情！
HTML语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。搜索引擎的爬虫依赖于标记来确定上下文和各个关键字的权重，利于 SEO。使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

7、HTML5的离线储存有几种方式？

localStorage长期存储数据，浏览器关闭后数据不丢失；sessionStorage  数据在浏览器关闭后自动删除。

8、iframe有那些缺点？

iframe会阻塞主页面的Onload事件；
iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript动态给iframe添加src属性值，这样可以可以绕开以上两个问题。


9、请描述一下 cookies，sessionStorage 和 localStorage 的区别？

cookie在浏览器和服务器间来回传递。 sessionStorage和localStorage不会sessionStorage和localStorage的存储空间更大；sessionStorage和localStorage有更多丰富易用的接口；sessionStorage和localStorage各自独立的存储空间；

10、CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？

1.id选择器（ # myid）    　　　　2.类选择器（.myclassname）    

3.标签选择器（div, h1, p）  　 　4.相邻选择器（h1 + p）    

5.子选择器（ul < li）    　　　  　6.后代选择器（li a）    

7.通配符选择器（ * ）    　　　　8.属性选择器（a[rel = "external"]）    

可继承的样式： font-size font-family color, UL LI DL DD DT;
不可继承的样式：border padding margin width height ;
优先级就近原则，同权重情况下样式定义最近者为准;
载入样式以最后载入的定位为准;
优先级为:
!important >  id > class > tag     important 比 内联优先级高


11、CSS3新增伪类举例：
p:first-of-type 选择属于其父元素的首个元素的每个元素。
p:last-of-type  选择属于其父元素的最后元素的每个元素。
p:only-of-type  选择属于其父元素唯一的元素的每个元素。
p:only-child    选择属于其父元素的唯一子元素的每个元素。
p:nth-child(2)  选择属于其父元素的第二个子元素的每个元素。
:enabled  :disabled 控制表单控件的禁用态。
:checked单选框或复选框被选中。

12、如何居中div？如何居中一个浮动元素？
给div设置一个宽度，然后添加margin:0 auto属性
div{    width:200px;    margin:0 auto; }  
居中一个浮动元素
确定容器的宽高 宽500 高 300 的层  设置层的外边距 .div {   Width:500px ; height:300px;//高度可以不设  Margin: -150px 0 0 -250px;  position:relative;相对定位  background-color:pink;//方便看效果  left:50%;  top:50%;}

列出display的值，说明他们的作用。position的值， relative和absolute定位原点是？
　　1.block 象块类型元素一样显示。  none 缺省值。象行内元素类型一样显示。  inline-block 象行内元素一样显示，但其内容象块类型元素一样显示。  list-item 象块类型元素一样显示，并添加样式列表标记。  
　　2. absolute　生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
　　fixed （老IE不支持）        生成绝对定位的元素，相对于浏览器窗口进行定位。   
　　relative 　生成相对定位的元素，相对于其正常位置进行定位。   
　　static  默认值。没有定位，元素出现在正常的流中  * （忽略 top, bottom, left, right z-index 声明）。
　　inherit 规定从父元素继承 position 属性的值。


13、为什么要初始化CSS样式？
　　因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。最简单的初始化方法就是： * {padding: 0; margin: 0;} （不建议）淘宝的样式初始化： body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }body, button, input, select, textarea { font:12px/1.5tahoma, arial, /5b8b/4f53; }h1, h2, h3, h4, h5, h6{ font-size:100%; }address, cite, dfn, em, var { font-style:normal; }code, kbd, pre, samp { font-family:couriernew, courier, monospace; }small{ font-size:12px; }ul, ol { list-style:none; }a { text-decoration:none; }a:hover { text-decoration:underline; }sup { vertical-align:text-top; }sub{ vertical-align:text-bottom; }legend { color:#000; }fieldset, img { border:0; }button, input, select, textarea { font-size:100%; }table { border-collapse:collapse; border-spacing:0; }


14、css定义的权重
以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：/* 权重为1* /div{}/* 权重为10*/.class1{}/* 权重为100*/#id1{}/* 权重为100+1=101*/#id1 div{}/* 权重为10+1=11* /.class1 div{}/* 权重为10+10+1=21*/.class1 .class2 div{} 如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现

15、CSS3有哪些新特性？

CSS3实现圆角（border-radius:8px），阴影（box-shadow:10px），  对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）  transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜  增加了更多的CSS选择器  多背景 rgba

16、介绍一下CSS的盒子模型？
　　（1）有两种， IE 盒子模型、标准 W3C 盒子模型；IE的content部分包含了 border 和 pading;

　　（2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border).

17.对WEB标准以及W3C的理解与认识？
标签闭合、标签小写、不乱嵌套、提高搜索机器人搜索几率、使用外链css和js脚本、结构行为表现的分离、文件下载与页面速度更快、内容能被更多的用户所访问、内容能被更广泛的设备所访问、更少的代码和组件，容易维护、改版方便，不需要变动页面内容、提供打印版本而不需要复制内容、提高网站易用性;

18.XHTML和HTML有什么区别？
HTML是一种基本的WEB网页设计语言，XHTML是一个基于XML的置标语言最主要的不同：
XHTML 元素必须被正确地嵌套。
XHTML 元素必须被关闭。标签名必须用小写字母。
XHTML 文档必须拥有根元素。

19.Doctype? 严格模式与混杂模式-如何触发这两种模式，区分它们有何意义?
用于声明文档使用那种规范(HTML/XHTML)一般为 严格 过度 基于框架的html文档
加入XMl声明可触发，解析方式更改为IE5.5 拥有IE5.5的bug

20.行内元素有哪些?块级元素有哪些?CSS的盒模型?
块级元素：div p h1 h2 h3 h4 form ul
行内元素: a b br i span input select
Css盒模型:内容，border ,margin，padding

21.CSS引入的方式有哪些? link和@import的区别是?
内联 内嵌 外链 导入
区别 ：同时加载前者无兼容性，后者CSS2.1以下浏览器不支持
Link 支持使用javascript改变样式，后者不可


22.CSS选择符有哪些?哪些属性可以继承?优先级算法如何计算?内联和important哪个优先级高?
标签选择符 类选择符 id选择符
继承不如指定 Id>class>标签选择
后者优先级高

23.前端页面有哪三层构成，分别是什么?作用是什么?
结构层 HTML 表示层 CSS 行为层 js

24.CSS的基本语句构成是?
选择器{属性1:值1;属性2:值2;……}

25.你做的页面在哪些流览器测试过?这些浏览器的内核分别是什么?
Ie(Ie内核) 火狐(Gecko) 谷歌(webkit) opear(Presto)


26.写出几种IE6 BUG的解决方法
1.双边距BUG float引起的 使用display
2.3像素问题 使用float引起的 使用dislpay:inline -3px
3.超链接hover 点击后失效 使用正确的书写顺序 link visited hover active
4.Ie z-index问题 给父级添加position:relative
5.Png 透明 使用js代码 改
6.Min-height 最小高度 !Important 解决’
7.select 在ie6下遮盖 使用iframe嵌套
8.为什么没有办法定义1px左右的宽度容器(IE6默认的行高造成的，使用over:hidden,zoom:0.08 line-height:1px)
9.ie 6 不支持!important


27.img标签上title与alt属性的区别是什么?


Alt 当图片不显示是 用文字代表。
Title 为该属性提供信息

28.描述css reset的作用和用途。
Reset重置浏览器的css默认属性 浏览器的品种不同，样式不同，然后重置，让他们统一

29.解释css sprites，如何使用。
Css 精灵 把一堆小的图片整合到一张大的图片上，减轻服务器对图片的请求数量

30.浏览器标准模式和怪异模式之间的区别是什么?
盒子模型 渲染模式的不同
使用 window.top.document.compatMode 可显示为什么模式

31.你如何对网站的文件和资源进行优化?期待的解决方案包括：
文件合并
文件最小化/文件压缩
使用CDN托管
缓存的使用

32.什么是语义化的HTML?
直观的认识标签 对于搜索引擎的抓取有好处

33.清除浮动的几种方式，各自的优缺点
1.使用空标签清除浮动 clear:both(理论上能清楚任何标签，增加无意义的标签)
2.使用overflow:auto(空标签元素清除浮动而不得不增加无意代码的弊端,,使用zoom:1用于兼容IE)
3.是用afert伪元素清除浮动(用于非IE浏览器)


　
34.javascript的typeof返回哪些数据类型
Object number function boolean underfind

35.例举3种强制类型转换和2种隐式类型转换?
强制（parseInt,parseFloat,number）
隐式（== – ===）

36.split() join() 的区别
前者是切割成数组的形式，后者是将数组转换成字符串

37.数组方法pop() push() unshift() shift()
Push()尾部添加 pop()尾部删除
Unshift()头部添加 shift()头部删除

38.事件绑定和普通事件有什么区别

39.IE和DOM事件流的区别
1.执行顺序不一样、
2.参数不一样
3.事件加不加on
4.this指向问题

40.IE和标准下有哪些兼容性的写法

Var ev = ev || window.event
document.documentElement.clientWidth || document.body.clientWidth
Var target = ev.srcElement||ev.target

41.ajax请求的时候get 和post方式的区别

一个在url后面 一个放在虚拟载体里面
有大小限制
安全问题
应用不同 一个是论坛等只需要请求的，一个是类似修改密码的

42.call和apply的区别
Object.call(this,obj1,obj2,obj3)
Object.apply(this,arguments)

43.ajax请求时，如何解释json数据
使用eval parse 鉴于安全性考虑 使用parse更靠谱

44.闭包是什么，有什么特性，对页面有什么影响
闭包就是能够读取其他函数内部变量的函数。

45.如何阻止事件冒泡和默认事件
canceBubble return false

46.添加 删除 替换 插入到某个接点的方法
obj.appendChidl()
obj.innersetBefore
obj.replaceChild
obj.removeChild

47.解释jsonp的原理，以及为什么不是真正的ajax
动态创建script标签，回调函数
Ajax是页面无刷新请求数据操作

48.javascript的本地对象，内置对象和宿主对象


本地对象为array obj regexp等可以new实例化
内置对象为gload Math 等不可以实例化的
宿主为浏览器自带的document,window 等

49.document load 和document ready的区别
Document.onload 是在结构和样式加载完才执行js
Document.ready原生种没有这个方法，jquery中有 $().ready(function)

50.”==”和“===”的不同

前者会自动转换类型
后者不会

51.javascript的同源策略

一段脚本只能读取来自于同一来源的窗口和文档的属性，这里的同一来源指的是主机名、协议和端口号的组合

52.编写一个数组去重的方法
　　function oSort(arr)
　　{
　　var result ={};
　　var newArr=[];
　　for(var i=0;i<arr.length;i++)
　　{
　　if(!result[arr])
　　{
　　newArr.push(arr)
　　result[arr]=1
　　}
　　}
　　return newArr
　　}
</arr.length;i++)

53.你认为最常遇到的兼容Bug有哪些?有哪些问题是你认为解决起来最麻烦的?
IE6 PNG
IE6 Fixed

54.CSS定位方式有哪些?position属性的值有哪些?他们之间的区别是什么?
在CSS中关于定位的内容是：position:relative | absolute | static | fixed
static 没有特别的设定，遵循基本的定位规定，不能通过z-index进行层次分级。
relative 不脱离文档流，参考自身静态位置通过 top,bottom,left,right 定位，并且可以通过z-index进行层次分级。
absolute 脱离文档流，通过 top,bottom,left,right 定位。选53D6其最近的父级定位元素，当父级 position 为 static 时，absolute元素将以body坐标原点进行定位，可以通过z-index进行层次分级。
fixed 固定定位，这里他所固定的对像是可视窗口而并非是body或是父级元素。可通过z-index进行层次分级。

55.函数的几种定义方法？
function a(){},
var a = function(){}

56.对象的定义方法？
a = new Object(), a = {}

57.类的定义方法（prototype）（继承）
Var a = function(){}
a.prototype = {}
new a();

58.this 关键字的指向
obj.foo() == obj        //方法调用模式,this指向obj
foo() == window;         //函数调用模式,this指向window
new obj.foo() == obj    //构造器调用模式, this指向新建立对象
foo.call(obj) == obj;//APPLY调用模式,this指向obj

59.异步ajax的优缺点都有什么？
优点：
相对于同步ajax：不会造成UI卡死，用户体验好。
相对于刷新页面，省流量
缺点：
 后退按钮无效；
多个请求同时触发时，由于回调时间不确定，会造成混乱，避免这种混乱需要复杂的判断机制。
搜索引擎不友好
数据安全

60、介绍js的基本数据类型。
number,string,boolean,object,undefined
　　
61、Javascript如何实现继承？
通过原型和构造器

62、如何创建一个对象? （画出此对象的内存图）

function Person(name, age) {    this.name = name;    this.age = age;    this.sing = function() { alert(this.name) }   }
　
63、谈谈This对象的理解。
this是js的一个关键字，随着函数使用场合不同，this的值会发生变化。但是有一个总原则，那就是this指的是调用函数的那个对象。this一般情况下：是全局对象Global。 作为方法调用，那么this就是指这个对象

64、事件是什么？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？
（1） 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。   
（2） 事件处理机制：IE是事件冒泡、火狐是 事件捕获；
（3） ev.stopPropagation();

65、如何判断一个对象是否属于某个类？
使用instanceof （待完善）   if(a instanceof Person){       alert('yes');   }

66、Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？
hasOwnProperty

67、对JSON 的了解？
　　JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小{'age':'12', 'name':'back'}

68、简述一下src与href的区别
href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。
src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

69、简述同步和异步的区别

同步是阻塞模式，异步是非阻塞模式。
同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；
异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

70、px和em的区别
px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。
浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em

71、什么叫优雅降级和渐进增强？
渐进增强 progressive enhancement：
针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
优雅降级 graceful degradation：
一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。
区别：
a. 优雅降级是从复杂的现状开始，并试图减少用户体验的供给
b. 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要
c. 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

72、浏览器的内核分别是什么?
IE: trident内核
Firefox：gecko内核
Safari：webkit内核
Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核
Chrome：Blink(基于webkit，Google与Opera Software共同开发)


73、如何消除一个数组里面重复的元素？

// 方法一：
var arr1 =[1,2,2,2,3,3,3,4,5,6],
    arr2 = [];
for(var i = 0,len = arr1.length; i< len; i++){
    if(arr2.indexOf(arr1[i]) < 0){
        arr2.push(arr1[i]);
    }
}
document.write(arr2); // 1,2,3,4,5,6

74、在Javascript中什么是伪数组？如何将伪数组转化为标准数组？
伪数组（类数组）：无法直接调用数组方法或期望length属性有什么特殊的行为，但仍可以对真正数组遍历方法来遍历它们。典型的是函数的argument参数，还有像调用getElementsByTagName,document.childNodes之类的,它们都返回NodeList对象都属于伪数组。可以使用Array.prototype.slice.call(fakeArray)将数组转化为真正的Array对象。
function log(){
      var args = Array.prototype.slice.call(arguments);  
//为了使用unshift数组方法，将argument转化为真正的数组
      args.unshift('(app)');

      console.log.apply(console, args);
};

75、Javascript中callee和caller的作用？
caller是返回一个对函数的引用，该函数调用了当前函数；
callee是返回正在被执行的function函数，也就是所指定的function对象的正文。

76、请描述一下cookies，sessionStorage和localStorage的区别
sessionStorage用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此sessionStorage不是一种持久化的本地存储，仅仅是会话级别的存储。而localStorage用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
web storage和cookie的区别
Web Storage的概念和cookie相似，区别是它是为了更大容量存储设计的。Cookie的大小是受限的，并且每次你请求一个新的页面的时候Cookie都会被发送过去，这样无形中浪费了带宽，另外cookie还需要指定作用域，不可以跨域调用。
除此之外，Web Storage拥有setItem,getItem,removeItem,clear等方法，不像cookie需要前端开发者自己封装setCookie，getCookie。但是Cookie也是不可以或缺的：Cookie的作用是与服务器进行交互，作为HTTP规范的一部分而存在 ，而Web Storage仅仅是为了在本地“存储”数据而生。

77、手写数组快速排序

关于快排算法的详细说明，可以参考阮一峰老师的文章快速排序
“快速排序”的思想很简单，整个排序过程只需要三步：
（1）在数据集之中，选择一个元素作为”基准”（pivot）。
（2）所有小于”基准”的元素，都移到”基准”的左边；所有大于”基准”的元素，都移到”基准”的右边。
（3）对”基准”左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止。

78、统计字符串”aaaabbbccccddfgh”中字母个数或统计最多字母数。
var str = "aaaabbbccccddfgh";
var obj  = {};
for(var i=0;istr.length;i++){
    var v = str.charAt(i);
    if(obj[v] & obj[v].value == v){
        obj[v].count = ++ obj[v].count;
    }else{
        obj[v] = {};
        obj[v].count = 1;
        obj[v].value = v;
    }
}
for(key in obj){
    document.write(obj[key].value +'='+obj[key].count+' '); // a=4  b=3  c=4  d=2  f=1  g=1  h=1
}

79、一次完整的HTTP事务是怎样的一个过程？

基本流程：

a. 域名解析

b. 发起TCP的3次握手

c. 建立TCP连接后发起http请求

d. 服务器端响应http请求，浏览器得到html代码

e. 浏览器解析html代码，并请求html代码中的资源

f. 浏览器对页面进行渲染呈现给用户

80、对前端工程师这个职位你是怎么样理解的？

a. 前端是最贴近用户的程序员，前端的能力就是能让产品从 90分进化到 100 分，甚至更好

b. 参与项目，快速高质量完成实现效果图，精确到1px；

c. 与团队成员，UI设计，产品经理的沟通；

d. 做好的页面结构，页面重构和用户体验；

e. 处理hack，兼容、写出优美的代码格式；

f. 针对服务器的优化、拥抱最新前端技术。
