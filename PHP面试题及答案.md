# PHP面试题及答案
   * [1 基础题](#1-基础题)
      * [1 表单中 get与post提交方法的区别?](#1-表单中-get与post提交方法的区别)
      * [2 session与cookie的区别?](#2-session与cookie的区别)
      * [3 数据库中的事务是什么?](#3-数据库中的事务是什么)

   * [2 简述题](#2-简述题)
      * [1 用PHP打印出前一天的时间格式是2006-5-10 22:21:21(2分) ](#1-用php打印出前一天的时间格式是2006-5-10-2221212分 )
      * [2 echo(),print(),print_r()的区别(3分)](#2-echoprintprintr的区别3分)
      * [3 能够使HTML和PHP分离开使用的模板(1分)](#3-能够使html和php分离开使用的模板1分)
      * [4 使用哪些工具进行版本控制?(1分)](#4-使用哪些工具进行版本控制1分)
      * [5 如何实现字符串翻转?(3分) ](#5-如何实现字符串翻转3分)
      * [6 优化MYSQL数据库的方法。(4分，多写多得)](#6-优化mysql数据库的方法4分多写多得)
      * [8 PHP的意思(送1分) ](#8-php的意思送1分)
      * [9 MYSQL取得当前时间的函数是?，格式化日期的函数是(2分)](#9-mysql取得当前时间的函数是格式化日期的函数是2分)
      * [10 实现中文字串截取无乱码的方法。(3分)](#10-实现中文字串截取无乱码的方法3分)
      * [11 您是否用过版本控制软件? 如果有您用的版本控制软件的名字是?(1分)](#11-您是否用过版本控制软件-如果有您用的版本控制软件的名字是1分)
      * [12 您是否用过模板引擎? 如果有您用的模板引擎的名字是?(1分)](#12-您是否用过模板引擎-如果有您用的模板引擎的名字是1分)
      * [13 请简单阐述您最得意的开发之作(4分) ](#13-请简单阐述您最得意的开发之作4分)
      * [14 对于大流量的网站,您采用什么样的方法来解决访问量问题?(4分) ](#14-对于大流量的网站您采用什么样的方法来解决访问量问题4分)
      * [15 用PHP写出显示客户端IP与服务器IP的代码(1分)](#15-用php写出显示客户端ip与服务器ip的代码1分)
      * [16 语句include和require的区别是什么?为避免多次包含同一文件，可用(?)语句代替它们? (2分)](#16-语句include和require的区别是什么为避免多次包含同一文件可用语句代替它们-2分)
      * [17 如何修改SESSION的生存时间(1分).](#17-如何修改session的生存时间1分)
      * [18 有一个网页地址, 比如PHP开发资源网主页: http://www.phpres.com/index.html,如何得到它的内容?(1分)](#18-有一个网页地址-比如php发资源网主页-httpwwwphprescomindexhtml如何得到它的内容1分)
      * [19 在HTTP 1.0中，状态码401的含义是(?);如果返回“找不到文件”的提示，则可用 header 函数，其语句为(?);(2分)](#19-在http-10中状态码401的含义是如果返回找不到文件的提示则可用-header-函数其语句为2分)
      * [20 在PHP中，heredoc是一种特殊的字符串，它的结束标志必须?(1分)](#20-在php中heredoc是一种特殊的字符串它的结束标志必须1分)
      * [21 谈谈asp,php,jsp的优缺点(1分)](#21-谈谈aspphpjsp的优缺点1分)
      * [22 谈谈对mvc的认识(1分)22 谈谈对mvc的认识(1分)](#22-谈谈对mvc的认识1分)
      * [23 写出发贴数最多的十个人名字的SQL，利用下表：members(id,username,posts,pass,email)(2分)](#23-写出发贴数最多的十个人名字的sql利用下表membersidusernamepostspassemail2分)
      * [24 请说明php中传值与传引用的区别。什么时候传值什么时候传引用?(2分)](#24-请说明php中传值与传引用的区别什么时候传值什么时候传引用2分)
      * [25 在PHP中error_reporting这个函数有什么作用?(1分)](#25-在php中errorreporting这个函数有什么作用1分)
      * [26 请写一个函数验证电子邮件的格式是否正确 (2分)](#26-请写一个函数验证电子邮件的格式是否正确-2分)
      * [27 简述如何得到当前执行脚本路径，包括所得到参数。(2分)](#27-简述如何得到当前执行脚本路径包括所得到参数2分)
      * [28 JS表单弹出对话框函数是?获得输入焦点函数是? (2分)](#28-js表单弹出对话框函数是获得输入焦点函数是-2分)
      * [29 JS的转向函数是?怎么引入一个外部JS文件?(2分)](#29-js的转向函数是怎么引入一个外部js文件2分)
      * [30 foo()和@foo()之间有什么区别?(1分)](#30-foo和foo之间有什么区别1分)
      * [31 如何声明一个名为”myclass”的没有方法和属性的类? (1分)](#31-如何声明一个名为myclass的没有方法和属性的类-1分)
      * [32 如何实例化一个名为”myclass”的对象?(1分)](#32-如何实例化一个名为myclass的对象1分)
      * [33 你如何访问和设置一个类的属性? (2分)](#33-你如何访问和设置一个类的属性-2分)
      * [34 mysql_fetch_row() 和mysql_fetch_array之间有什么区别? (1分)](#34-mysqlfetchrow-和mysqlfetcharray之间有什么区别1分)
      * [35 GD库是做什么用的? (1分)](#35-gd库是做什么用的-1分)
      * [36 指出一些在PHP输入一段HTML代码的办法。(1分)](#36-指出一些在php输入一段html代码的办法1分)
      * [37 下面哪个函数可以打开一个文件，以对文件进行读和写操作?(1分)](#37-下面哪个函数可以打开一个文件以对文件进行读和写操作1分)
      * [38 下面哪个选项没有将 john 添加到users 数组中? (1分)](#38-下面哪个选项没有将-john-添加到users-数组中-1分)
      * [39 下面的程序会输入是否?(1分)](#39-下面的程序会输入是否1分)
      * [40 使用php写一段简单查询，查出所有姓名为“张三”的内容并打印出来 (2分)](#40-使用php写一段简单查询查出所有姓名为张三的内容并打印出来-2分)
      * [41 如何使用下面的类,并解释下面什么意思?(3分)](#41-如何使用下面的类并解释下面什么意思3分)
      * [42 写出 SQL语句的格式 : 插入 ，更新 ，删除(4分)](#42-写出-sql语句的格式-插入-更新-删除4分)
      * [43 请写出数据类型(int char varchar datetime text)的意思; 请问varchar和char有什么区别(2分)](#43-请写出数据类型int-char-varchar-datetime-text的意思-请问varchar和char有什么区别2分)
      * [44 写出以下程序的输出结果 (1分)](#44-写出以下程序的输出结果-1分)
      * [45 检测一个变量是否有设置的函数是否?是否为空的函数是?(2分)](#45-检测一个变量是否有设置的函数是否是否为空的函数是2分)
      * [46 取得查询结果集总数的函数是?(1分)](#46-取得查询结果集总数的函数是1分)
      * [47 $arr = array('james', 'tom', 'symfony'); 请打印出第一个元素的值 (1分)](#47-arr-arrayjamestomsymfony-请打印出第一个元素的值-1分)
      * [48 请将41题的数组的值用','号分隔并合并成字串输出(1分)](#48-请将41题的数组的值用号分隔并合并成字串输出1分)
      * [49 $a = 'abcdef'; 请取出$a的值并打印出第一个字母(1分)](#49-aabcdef-请取出a的值并打印出第一个字母1分)
      * [50 PHP可以和sql server/oracle等数据库连接吗?(1分)](#50-php可以和sql-serveroracle等数据库连接吗1分)
      * [51 请写出PHP5权限控制修饰符(3分)](#51-请写出php5权限控制修饰符3分)
      * [52 请写出php5的构造函数和析构函数(2分)](#52-请写出php5的构造函数和析构函数2分)
      * [53 完成以下:](#53-完成以下)
          * [1 创建新闻发布系统，表名为message有如下字段 (3分)](#1-创建新闻发布系统表名为message有如下字段-3分)
          * [2 同样上述新闻发布系统：表comment记录用户回复内容，字段如下 (4分)](#2-同样上述新闻发布系统表comment记录用户回复内容字段如下-4分)
          * [3 上述内容管理系统，表category保存分类信息，字段如下 (3分)](#3-上述内容管理系统表category保存分类信息字段如下-3分)
   * [3 编程题](#3-编程题)
        * [1 写一个函数，尽可能高效的，从一个标准 url 里取出文件的扩展名](#1-写一个函数尽可能高效的从一个标准-url-里取出文件的扩展名)
        * [2 在 HTML 语言中，页面头部的 meta 标记可以用来输出文件的编码格式，以下是一个标准的 meta 语句](#2-在-html-语言中页面头部的-meta-标记可以用来输出文件的编码格式以下是一个标准的-meta-语句)
        * [3 写一个函数，算出两个文件的相对路径](#3-写一个函数算出两个文件的相对路径)

   * [4 填空题](#4-填空题)
        * [1 在PHP中，当前脚本的名称(不包括路径和查询字符串)记录在预定义变量__$SERVER['PHP_SELF']中;而链接到当前页面的URL记录在预定义变量$SERVER['HTTP_REFERER'](#1-在php中当前脚本的名称不包括路径和查询字符串记录在预定义变量serverphpself中而链接到当前页面的url记录在预定义变量serverhttpreferer)
        * [2 执行程序段将输出__0__。](#2-执行程序段将输出0)
        * [3 在HTTP 1.0中，状态码 401 的含义是____;如果返回“找不到文件”的提示，则可用 header 函数，其语句为____。](#3-在http-10中状态码-401-的含义是如果返回找不到文件的提示则可用-header-函数其语句为)
        * [4 数组函数 arsort 的作用是__对数组进行逆向排序并保持索引关系__;语句 error_reporting(2047)的作用是__报告所有错误和警告__。](#4-数组函数-arsort-的作用是_对数组进行逆向排序并保持索引关系语句errorreporting2047的作用是报告所有错误和警告)
        * [5 PEAR中的数据库连接字符串格式是____。](#5-pear中的数据库连接字符串格式是)
        * [6 写出一个正则表达式，过滤网页上的所有JS/VBS脚本(即把scrīpt标记及其内容都去掉):preg_replace("/<script[^>].?>.?</script>/si", "newinfo", $script);](#6-写出一个正则表达式过滤网页上的所有jsvbs脚本即把scrīpt标记及其内容都去掉pregreplacescriptscriptsinewinfoscript)
        * [7 以Apache模块的方式安装PHP，在文件http.conf中首先要用语句____动态装载PHP模块，然后再用语句____使得Apache把所有扩展名为php的文件都作为PHP脚本处理。](#7-以apache模块的方式安装php在文件httpconf中首先要用语句动态装载php模块然后再用语句使得apache把所有扩展名为php的文件都作为php脚本处理)
        * [8 语句 include 和 require 都能把另外一个文件包含到当前文件中，它们的区别是____;为了避免多次包含同一文件，可以用语句__require_once||include_once__来代替它们。](#8-语句-include-和-require-都能把另外一个文件包含到当前文件中它们的区别是为了避免多次包含同一文件可以用语句requireonceincludeonce来代替它们)
        * [9 类的属性可以序列化后保存到 session 中，从而以后可以恢复整个类，这要用到的函数 是____。](#9-类的属性可以序列化后保存到-session-中从而以后可以恢复整个类这要用到的函数是)
        * [10 一个函数的参数不能是对变量的引用，除非在php.ini中把__allow_call_time_pass_reference boolean__设为on.](#10-一个函数的参数不能是对变量的引用除非在phpini中把allowcalltimepassreference-boolean设为on)
        * [11 SQL中LEFT JOIN的含义是__自然左外链接__。如果 tbl_user记录了学生的姓名(name)和学号(ID)，tbl_score记录了学生(有的学生考试以后被开除了，没有其记录)的学号(ID)](#11-sql中left-join的含义是自然左外链接如果tbluser记录了学生的姓名name和学号idtblscore记录了学生有的学生考试以后被开除了没有其记录的学号id)
        * [12 在PHP中，heredoc是一种特殊的字符串，它的结束标志必须____。](#12-在php中heredoc是一种特殊的字符串它的结束标志必须)
        * [13 写一个函数，能够遍历一个文件夹下的所有文件和子文件夹。](#13-写一个函数能够遍历一个文件夹下的所有文件和子文件夹)
        * [14 简述论坛中无限分类的实现原理。](#14-简述论坛中无限分类的实现原理)


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
        #### 1 用PHP打印出前一天的时间格式是2006-5-10 22:21:21(2分)
        答:echo date('Y-m-d H:i:s', strtotime('-1 days'));  
        #### 2 echo(),print(),print_r()的区别(3分)
        答:echo是PHP语句, print和print_r是函数,语句没有返回值,函数可以有返回值(即便没有用)   
           print（）    只能打印出简单类型变量的值(如int,string)   
           print_r（） 可以打印出复杂类型变量的值(如数组,对象)   
           echo     输出一个或者多个字符串
        #### 3 能够使HTML和PHP分离开使用的模板(1分)
        答:Smarty,Dwoo,TinyButStrong,Template Lite,Savant,phemplate,XTemplate
        #### 4 使用哪些工具进行版本控制?(1分)
        答:cvs,svn,vss;
        #### 5 如何实现字符串翻转?(3分)
        答:echo strrev($a);
        #### 6 优化MYSQL数据库的方法。(4分，多写多得)
        答:
        ##### 1 选取最适用的字段属性,尽可能减少定义字段长度,尽量把字段设置NOT NULL,例如'省份,性别',最好设置为ENUM
        ##### 2 使用连接（JOIN）来代替子查询:
           a.删除没有任何订单客户:DELETE FROM customerinfo WHERE customerid NOT in(SELECT customerid FROM orderinfo)
           b.提取所有没有订单客户:SELECT FROM customerinfo WHERE customerid NOT in(SELECT customerid FROM orderinfo)
           c.提高b的速度优化:SELECT FROM customerinfo LEFT JOIN orderid customerinfo.customerid=orderinfo.customerid
           WHERE orderinfo.customerid IS NULL
        ##### 3 使用联合(UNION)来代替手动创建的临时表
           a.创建临时表:SELECT name FROM `nametest` UNION SELECT username FROM `nametest2`
        ##### 4 事务处理:
           a.保证数据完整性,例如添加和修改同时,两者成立则都执行,一者失败都失败
           mysql_query("BEGIN");
           mysql_query("INSERT INTO customerinfo (name) VALUES ('$name1')";
           mysql_query("SELECT * FROM `orderinfo` where customerid=".$id");
           mysql_query("COMMIT");
        ##### 5 锁定表,优化事务处理:
           a.我们用一个 SELECT 语句取出初始数据，通过一些计算，用 UPDATE 语句将新值更新到表中。
             包含有 WRITE 关键字的 LOCK TABLE 语句可以保证在 UNLOCK TABLES 命令被执行之前，
             不会有其它的访问来对 inventory 进行插入、更新或者删除的操作
           mysql_query("LOCK TABLE customerinfo READ, orderinfo WRITE");
           mysql_query("SELECT customerid FROM `customerinfo` where id=".$id);
           mysql_query("UPDATE `orderinfo` SET ordertitle='$title' where customerid=".$id);
           mysql_query("UNLOCK TABLES");
        ##### 6 使用外键,优化锁定表
           a.把customerinfo里的customerid映射到orderinfo里的customerid,
             任何一条没有合法的customerid的记录不会写到orderinfo里
        ```
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
        ```
           注意:'ON DELETE CASCADE',该参数保证当customerinfo表中的一条记录删除的话同时也会删除order
                 表中的该用户的所有记录,注意使用外键要定义事务安全类型为INNODB;
        ##### 7 建立索引:
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
        ##### 8 优化查询语句
           a.最好在相同字段进行比较操作,在建立好的索引字段上尽量减少函数操作
           例子1:
        ```
           SELECT * FROM order WHERE YEAR(orderDate)<2008;(慢)
           SELECT * FROM order WHERE orderDate<"2008-01-01";(快)
           例子2:
           SELECT * FROM order WHERE addtime/7<24;(慢)
           SELECT * FROM order WHERE addtime<24*7;(快)
           例子3:
           SELECT * FROM order WHERE title like "%good%";
           SELECT * FROM order WHERE title>="good" and name<"good";
        ```
        #### 8 PHP的意思(送1分)
        答:PHP是一个基于服务端来创建动态网站的脚本语言，您可以用PHP和HTML生成网站主页
        #### 9 MYSQL取得当前时间的函数是?，格式化日期的函数是(2分)
        答:now(),date()
        #### 10 实现中文字串截取无乱码的方法。(3分)
        答:
        ```
         function GBsubstr($string, $start, $length) {
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
        #### 11 您是否用过版本控制软件? 如果有您用的版本控制软件的名字是?(1分)
        答：用过，phpstorm
        #### 12 您是否用过模板引擎? 如果有您用的模板引擎的名字是?(1分)
        答:用过,smarty
        #### 13 请简单阐述您最得意的开发之作(4分)
        答:信息分类
        #### 14 对于大流量的网站,您采用什么样的方法来解决访问量问题?(4分)
        答:确认服务器硬件是否足够支持当前的流量,数据库读写分离,优化数据表,
           程序功能规则,禁止外部的盗链,控制大文件的下载,使用不同主机分流主要流量

        #### 15 用PHP写出显示客户端IP与服务器IP的代码(1分)
        答:打印客户端IP: echo $_SERVER[‘REMOTE_ADDR’]; 或者: getenv('REMOTE_ADDR');
           打印服务器IP:echo gethostbyname("www.bolaiwu.com")

        #### 16 语句include和require的区别是什么?为避免多次包含同一文件，可用(?)语句代替它们? (2分)
        答:require->require是无条件包含也就是如果一个流程里加入require,无论条件成立与否都会先执行require  
          include->include有返回值，而require没有(可能因为如此require的速度比include快)  
          注意:包含文件不存在或者语法错误的时候require是致命的,include不是
        #### 17 如何修改SESSION的生存时间(1分).
        答:方法1:将php.ini中的session.gc_maxlifetime设置为9999重启apache
           方法2:$savePath = "./session_save_dir/";
                 $lifeTime = 小时 * 秒;
                 session_save_path($savePath);
                 session_set_cookie_params($lifeTime);
                 session_start();
           方法3:setcookie() and session_set_cookie_params($lifeTime);
        #### 18 有一个网页地址, 比如PHP开发资源网主页: http://www.phpres.com/index.html,如何得到它的内容?($1分)
        答:方法1(对于PHP5及更高版本):
           $readcontents = fopen("http://www.phpres.com/index.html", "rb");
           $contents = stream_get_contents($readcontents);
           fclose($readcontents);
           echo $contents;
           方法2:
           echo file_get_contents("http://www.phpres.com/index.html");  

        #### 19 在HTTP 1.0中，状态码401的含义是(?);如果返回“找不到文件”的提示，则可用 header 函数，其语句为(?);(2分)
        答:状态401代表未被授权,header("Location:www.xxx.php");
        #### 20 在PHP中，heredoc是一种特殊的字符串，它的结束标志必须?(1分)
        答:heredoc的语法是用"<<<"加上自己定义成对的标签，在标签范围內的文字视为一个字符串
           例子:
           $str = <<<SHOW
           my name is Jiang Qihui!
           SHOW;
        #### 21 谈谈asp,php,jsp的优缺点(1分)
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
        #### 22 谈谈对mvc的认识(1分)
        答:由模型(model),视图(view),控制器(controller)完成的应用程序
           由模型发出要实现的功能到控制器,控制器接收组织功能传递给视图;
        #### 23 写出发贴数最多的十个人名字的SQL，利用下表：members(id,username,posts,pass,email)(2分)
        答:SELECT * FROM `members` ORDER BY posts DESC limit 0,10;
        #### 24 请说明php中传值与传引用的区别。什么时候传值什么时候传引用?(2分)
        答:按值传递：函数范围内对值的任何改变在函数外部都会被忽略
           按引用传递：函数范围内对值的任何改变在函数外部也能反映出这些修改
           优缺点：按值传递时，php必须复制值。特别是对于大型的字符串和对象来说，这将会是一个代价很大的操作。
           按引用传递则不需要复制值，对于性能提高很有好处。

        #### 25 在PHP中error_reporting这个函数有什么作用?(1分)
        答:设置错误级别与错误信息回报

        #### 26 请写一个函数验证电子邮件的格式是否正确 (2分)
        答:
        ```
        function checkEmail($email)
          {
            $pregEmail = "/([a-z0-9]*[-_\.]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?/i";
            return preg_match($pregEmail,$email);   
          }
        ```
        #### 27 简述如何得到当前执行脚本路径，包括所得到参数。(2分)
        答:$script_name = basename(__file__); print_r($script_name);
        #### 28 JS表单弹出对话框函数是?获得输入焦点函数是? (2分)
        答:弹出对话框: alert(),prompt(),confirm()
           获得输入焦点 focus()
        #### 29 JS的转向函数是?怎么引入一个外部JS文件?(2分)
        答:window.location.href,<script type="text/javascript" src="js/js_function.js"></script>
        #### 30 foo()和@foo()之间有什么区别?(1分)
        答:@foo()控制错误输出
        #### 31 如何声明一个名为”myclass”的没有方法和属性的类? (1分)
        答:class myclass{ }
        #### 32 如何实例化一个名为”myclass”的对象?(1分)
        答:new myclass()
        #### 33 你如何访问和设置一个类的属性? (2分)
        答:$object = new myclass();
           $newstr = $object->test;
           $object->test = "info";
        #### 34 mysql_fetch_row() 和mysql_fetch_array之间有什么区别? (1分)
        答:mysql_fetch_row是从结果集取出1行数组,作为枚举
           mysql_fetch_array是从结果集取出一行数组作为关联数组,或数字数组,两者兼得
        #### 35 GD库是做什么用的? (1分)
        答:gd库提供了一系列用来处理图片的API，使用GD库可以处理图片，或者生成图片。  
           在网站上GD库通常用来生成缩略图或者用来对图片加水印或者对网站数据生成报表。
        #### 36 指出一些在PHP输入一段HTML代码的办法。(1分)
        答:echo "<a href='index.php'>aaa</a>";
        #### 37 下面哪个函数可以打开一个文件，以对文件进行读和写操作?(1分)
            (a) fget() (b) file_open() (c) fopen() (d) open_file()  [  c  ]
        #### 38 下面哪个选项没有将 john 添加到users 数组中? (1分)
        　　(a) $users[] = ‘john’;
        　　(b) array_add($users,’john’);
        　　(c) array_push($users,‘john’);
        　　(d) $users ||= ‘john’;  [  a , c  ]
        #### 39 下面的程序会输入是否?(1分)
        　　$num = 10;
        　　function multiply(){
        　　$num = $num * 10;
        　　}
        　　multiply();
        　　echo $num;
        　　?>
            输出:10
        #### 40 使用php写一段简单查询，查出所有姓名为“张三”的内容并打印出来 (2分)
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
        #### 41 如何使用下面的类,并解释下面什么意思?(3分)
        ```
        　　class test{
             function Get_test($num){
        　　    $num=md5(md5($num)."En");
        　　    return $num;
        　　 }
        　　}
        ```
        答:
        ```
        $testnum = "123";
           $object = new test();
           $encrypt = $object->Get_test($testnum);
           echo $encrypt;
        ```
        类test里面包含Get_test方法,实例化类调用方法多字符串加密
        #### 42 写出 SQL语句的格式 : 插入 ，更新 ，删除 (4分)
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

        #### 43 请写出数据类型(int char varchar datetime text)的意思; 请问varchar和char有什么区别(2分)
        答:int是数字类型,char固定长度字符串,varchar实际长度字符串,datetime日期时间型,text文本字符串
           char的场地固定为创建表设置的长度,varchar为可变长度的字符
        #### 44 写出以下程序的输出结果 (1分)
        　　$b=201;
        　　$c=40;
            $a=$b>$c?4:5;
        　　echo $a;
        　　?>
        答:4
        #### 45 检测一个变量是否有设置的函数是否?是否为空的函数是?(2分)
        答:isset($str),empty($str);
        #### 46 取得查询结果集总数的函数是?(1分)
        答:mysql_num_rows($result);
        #### 47 $arr = array('james', 'tom', 'symfony'); 请打印出第一个元素的值 (1分)
        答:echo $array[0];
        #### 48 请将41题的数组的值用','号分隔并合并成字串输出(1分)
        答:for($i=0;$i<count($array);$i++){ echo $array[$i].",";}
        #### 49 $a = 'abcdef'; 请取出$a的值并打印出第一个字母(1分)
        答:echo $a{0} 或 echo substr($a,0,1)
        #### 50 PHP可以和sql server/oracle等数据库连接吗?(1分)
        答:当然可以
        #### 51 请写出PHP5权限控制修饰符(3分)
        答:public(公共),private(私用),protected(继承)
        #### 52 请写出php5的构造函数和析构函数(2分)
        ```
        答: __construct , __destruct
        ````
        #### 53 完成以下:
        ##### 1 创建新闻发布系统，表名为message有如下字段 (3分)
        　　id 文章id
        　　title 文章标题
        　　content 文章内容
        　　category_id 文章分类id
            hits 点击量
        答:
        ```
           CREATE TABLE 'message'(
           'id' int(10) NOT NULL auto_increment,
           'title' varchar(200) default NULL,
           'content' text,
           'category_id' int(10) NOT NULL,
           'hits' int(20),
           PRIMARY KEY('id');
           )ENGINE=InnoDB DEFAULT CHARSET=utf8;
        ```   
        ##### 2 同样上述新闻发布系统：表comment记录用户回复内容，字段如下 (4分)
        　　comment_id 回复id
        　　id 文章id，关联message表中的id
        　　comment_content 回复内容
        　　现通过查询数据库需要得到以下格式的文章标题列表,并按照回复数量排序，回复最高的排在最前面
        　　文章id 文章标题 点击量 回复数量
        　　用一个SQL语句完成上述查询，如果文章没有回复则回复数量显示为0

        答:
        ```
           SELECT message.id id,message.title title,IF(message.`hits` IS NULL,0,message.`hits`) hits,
           IF(comment.`id` is NULL,0,count(*)) number FROM message LEFT JOIN  
           comment ON message.id=comment.id GROUP BY message.`id`;
        ```   
        ##### 3 上述内容管理系统，表category保存分类信息，字段如下 (3分)
        　　category_id int(4) not null auto_increment;
        　　categroy_name varchar(40) not null;
        　　用户输入文章时，通过选择下拉菜单选定文章分类
        　　写出如何实现这个下拉菜单

        答:
        ```
           function categoryList()
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

        ### 3 编程题
        #### 1 写一个函数，尽可能高效的，从一个标准 url 里取出文件的扩展名
           例如: http://www.sina.com.cn/abc/de/fg.php?id=1 需要取出 php 或 .php
        答案1:
        ```
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
        #### 2 在 HTML 语言中，页面头部的 meta 标记可以用来输出文件的编码格式，以下是一个标准的 meta 语句
        　　请使用 PHP 语言写一个函数，把一个标准 HTML 页面中的类似 meta 标记中的 charset 部分值改为 big5
        　　请注意:
        　　1. 需要处理完整的 html 页面，即不光此 meta 语句
        　　2. 忽略大小写
            3. ' 和 " 在此处是可以互换的
            4. 'Content-Type' 两侧的引号是可以忽略的，但 'text/html; charset=gbk' 两侧的不行
        　　5. 注意处理多余空格
        #### 3 写一个函数，算出两个文件的相对路径
        　　如 $a = '/a/b/c/d/e.php';
        　　$b = '/a/b/12/34/c.php';
        　　计算出 $b 相对于 $a 的相对路径应该是 ../../c/d将()添上
        答:
        ```
            function getRelativePath($a, $b) {    
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
        ```
        ### 4 填空题
        #### 1 在PHP中，当前脚本的名称(不包括路径和查询字符串)记录在预定义变量__$_SERVER['PHP_SELF']__中;而链接到当前页面的URL记录在预定义变量__$_SERVER['HTTP_REFERER']__
        中
        #### 2 执行程序段<?php echo 8%(-2) ?>将输出__0__。
        #### 3 在HTTP 1.0中，状态码 401 的含义是____;如果返回“找不到文件”的提示，则可用 header 函数，其语句为____。
        #### 4 数组函数 arsort 的作用是__对数组进行逆向排序并保持索引关系__;语句 error_reporting(2047)的作用是__报告所有错误和警告__。
        #### 5 PEAR中的数据库连接字符串格式是____。
        #### 6 写出一个正则表达式，过虑网页上的所有JS/VBS脚本(即把scrīpt标记及其内容都去掉):preg_replace("/<script[^>].*?>.*?</script>/si", "newinfo", $script);
        #### 7 以Apache模块的方式安装PHP，在文件http.conf中首先要用语句____动态装载PHP模块，然后再用语句____使得Apache把所有扩展名为php的文件都作为PHP脚本处理。
          LoadModule php5_module "c:/php/php5apache2.dll" , AddType application/x-httpd-php .php,
        #### 8 语句 include 和 require 都能把另外一个文件包含到当前文件中，它们的区别是____;为了避免多次包含同一文件，可以用语句__require_once||include_once__来代替它们。
        #### 9 类的属性可以序列化后保存到 session 中，从而以后可以恢复整个类，这要用到的函数是____。
        #### 10 一个函数的参数不能是对变量的引用，除非在php.ini中把__allow_call_time_pass_reference boolean__设为on.
        #### 11 SQL中LEFT JOIN的含义是__自然左外链接__。如果 tbl_user记录了学生的姓名(name)和学号(ID)，tbl_score记录了学生(有的学生考试以后被开除了，没有其记录)的学号(ID)
        和考试成绩(score)以及考试科目(subject)，要想打印出各个学生姓名及对应的的各科总成绩，则可以用SQL语句____。
        #### 12 在PHP中，heredoc是一种特殊的字符串，它的结束标志必须____。
        编程题:
        #### 13 写一个函数，能够遍历一个文件夹下的所有文件和子文件夹。
        答:
        ```php
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
        ```
        #### 14.简述论坛中无限分类的实现原理。
        答:
        ```php
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
