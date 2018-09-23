### 1、一张表，里面有ID自增主键，当insert了17条记录之后，删除了第15,16,17条记录，再把Mysql重启，再insert一条记录，这条记录的ID是18还是15 ？

1.如果表的类型是MyISAM，那么是18.因为MyISAM会把自己增主键的最大ID记录到数据文件里，重启MySQL自增主键的最大ID也不会丢失。  
2.如果表的类型是InnoDB，那么是15.InnoDB表只是把自增主键的最大ID记录到内存中，所以重启数据库或者是对表进行OPTIMIZE操作，都会导致最大ID丢失。

### 2、Mysql的技术特点是什么？

Mysql数据库软件是一个客户端或服务器系统，其中包括：支持各种客户端程序和库的多线程SQL服务器、不同的后端、广泛的应用程序编程接口和管理工具。

### 3、Heap表是什么？

HEAP表存在于内存中，用于临时高速存储。

BLOB或TEXT字段是不允许的

只能使用比较运算符=，<，>，=>，= <

HEAP表不支持AUTO_INCREMENT

索引不可为NULL

### 4、Mysql服务器默认端口是什么？

Mysql服务器的默认端口是3306。

### 5、与Oracle相比，Mysql有什么优势？

Mysql是开源软件，随时可用，无需付费。

Mysql是便携式的

带有命令提示符的GUI。

使用Mysql查询浏览器支持管理

### 6、如何区分FLOAT和DOUBLE？

以下是FLOAT和DOUBLE的区别：

浮点数以8位精度存储在FLOAT中，并且有四个字节。

浮点数存储在DOUBLE中，精度为18位，有八个字节。

### 7、区分CHAR_LENGTH和LENGTH？

CHAR_LENGTH是字符数，而LENGTH是字节数。Latin字符的这两个数据是相同的，但是对于Unicode和其他编码，它们是不同的。

### 8、请简洁描述Mysql中InnoDB支持的四种事务隔离级别名称，以及逐级之间的区别？

SQL标准定义的四个隔离级别为：

read uncommited ：读到未提交数据

read committed：脏读，不可重复读

repeatable read：可重读

serializable ：串行事物
详细解释如下：
Read Uncommitted（读取未提交内容）
在该隔离级别，所有事务都可以看到其他未提交事务的执行结果。本隔离级别很少用于实际应用，因为它的性能也不比其他级别好多少。读取未提交的数据，也被称之为脏读（Dirty Read）。
Read Committed（读取提交内容）
这是大多数数据库系统的默认隔离级别（但不是MySQL默认的）。它满足了隔离的简单定义：一个事务只能看见已经提交事务所做的改变。这种隔离级别也支持所谓的不可重复读（Nonrepeatable Read），因为同一事务的其他实例在该实例处理其间可能会有新的commit，所以同一select可能返回不同结果。
Repeatable Read（可重读）
这是MySQL的默认事务隔离级别，它确保同一事务的多个实例在并发读取数据时，会看到同样的数据行。不过理论上，这会导致另一个棘手的问题：幻读（Phantom Read）。简单的说，幻读指当用户读取某一范围的数据行时，另一个事务又在该范围内插入了新行，当用户再读取该范围的数据行时，会发现有新的“幻影” 行。InnoDB和Falcon存储引擎通过多版本并发控制（MVCC，Multiversion Concurrency Control 间隙锁）机制解决了该问题。注：其实多版本只是解决不可重复读问题，而加上间隙锁（也就是它这里所谓的并发控制）才解决了幻读问题。
Serializable（可串行化）
这是最高的隔离级别，它通过强制事务排序，使之不可能相互冲突，从而解决幻读问题。简言之，它是在每个读的数据行上加上共享锁。在这个级别，可能导致大量的超时现象和锁竞争。
对于不同的事务，采用不同的隔离级别分别有不同的结果。不同的隔离级别有不同的现象。主要有下面3种现在：
1、脏读（dirty read）：一个事务可以读取另一个尚未提交事务的修改数据。
2、非重复读（nonrepeatable read）：在同一个事务中，同一个查询在T1时间读取某一行，在T2时间重新读取这一行时候，这一行的数据已经发生修改，可能被更新了（update），也可能被删除了（delete）。
3、幻像读（phantom read）：在同一事务中，同一查询多次进行时候，由于其他插入操作（insert）的事务提交，导致每次返回不同的结果集。
不同的隔离级别有不同的现象，并有不同的锁定/并发机制，隔离级别越高，数据库的并发性就越差，4种事务隔离级别分别表现的现象如下表：
![](https://ws1.sinaimg.cn/large/006DGX4tly1fvjufj9m9gj30h704it8n.jpg)

### 9、在Mysql中ENUM的用法是什么？

ENUM是一个字符串对象，用于指定一组预定义的值，并可在创建表时使用。

Create table size(name ENUM('Smail,'Medium','Large');

### 10、如何定义REGEXP？

REGEXP是模式匹配，其中匹配模式在搜索值的任何位置。

### 11、CHAR和VARCHAR的区别？

以下是CHAR和VARCHAR的区别：

CHAR和VARCHAR类型在存储和检索方面有所不同

CHAR列长度固定为创建表时声明的长度，长度值范围是1到255

当CHAR值被存储时，它们被用空格填充到特定长度，检索CHAR值时需删除尾随空格。

### 12、列的字符串类型可以是什么？

字符串类型是：

SET

BLOB

ENUM

CHAR

TEXT

VARCHAR

### 13、如何获取当前的Mysql版本？

SELECT VERSION();用于获取当前Mysql的版本。

### 14、Mysql中使用什么存储引擎？

存储引擎称为表类型，数据使用各种技术存储在文件中。

技术涉及：

Storage mechanism

Locking levels

Indexing

Capabilities and functions.

### 15、Mysql驱动程序是什么？

以下是Mysql中可用的驱动程序：

PHP驱动程序

JDBC驱动程序

ODBC驱动程序

CWRAPPER

PYTHON驱动程序

PERL驱动程序

RUBY驱动程序

CAP11PHP驱动程序

Ado.net5.mxj

### 16、TIMESTAMP在UPDATE CURRENT_TIMESTAMP数据类型上做什么？

创建表时TIMESTAMP列用Zero更新。只要表中的其他字段发生更改，UPDATE CURRENT_TIMESTAMP修饰符就将时间戳字段更新为当前时间。

### 17、主键和候选键有什么区别？

表格的每一行都由主键唯一标识,一个表只有一个主键。

主键也是候选键。按照惯例，候选键可以被指定为主键，并且可以用于任何外键引用。

### 18、如何使用Unix shell登录Mysql？

我们可以通过以下命令登录：

# [mysql dir]/bin/mysql -h hostname -u -p

### 19、 myisamchk是用来做什么的？

它用来压缩MyISAM表，这减少了磁盘或内存使用。

### 20、MYSQL数据库服务器性能分析的方法命令有哪些?

Show status
一些值得监控的变量值：
Bytes_received和Bytes_sent
和服务器之间来往的流量。
Com_*服务器正在执行的命令。
Created_*在查询执行期限间创建的临时表和文件。
Handler_*存储引擎操作。
Select_*不同类型的联接执行计划。
Sort_*几种排序信息。
Show session status like ‘Select’;
Show profiles
SET profiling=1;
Show profiles \G
Show profile;

### 21、如何控制HEAP表的最大尺寸？

Heal表的大小可通过称为max_heap_table_size的Mysql配置变量来控制。

### 22、MyISAM Static和MyISAM Dynamic有什么区别？

在MyISAM Static上的所有字段有固定宽度。动态MyISAM表将具有像TEXT，BLOB等字段，以适应不同长度的数据类型。点击这里有一套最全阿里面试题总结。

MyISAM Static在受损情况下更容易恢复。

### 23、federated表是什么？

federated表，允许访问位于其他服务器数据库上的表。

### 24、如果一个表有一列定义为TIMESTAMP，将发生什么？

每当行被更改时，时间戳字段将获取当前时间戳。

### 25、列设置为AUTO INCREMENT时，如果在表中达到最大值，会发生什么情况？

它会停止递增，任何进一步的插入都将产生错误，因为密钥已被使用。

### 26、怎样才能找出最后一次插入时分配了哪个自动增量？

LAST_INSERT_ID将返回由Auto_increment分配的最后一个值，并且不需要指定表名称。

### 27、你怎么看到为表格定义的所有索引？

索引是通过以下方式为表格定义的：

SHOW INDEX FROM ;

### 28.、LIKE声明中的％和_是什么意思？

％对应于0个或更多字符，_ 只是LIKE语句中的一个字符。

### 29、如何在Unix和Mysql时间戳之间进行转换？

UNIX_TIMESTAMP是从Mysql时间戳转换为Unix时间戳的命令

FROM_UNIXTIME是从Unix时间戳转换为Mysql时间戳的命令

### 30、列对比运算符是什么？

在SELECT语句的列比较中使用=，<>，<=，<，> =，>，<<，>>，<=>，AND，OR或LIKE运算符。

### 31、我们如何得到受查询影响的行数？

行数可以通过以下代码获得：

SELECT COUNT(user_id)FROM users;

### 32、Mysql查询是否区分大小写？

不区分
``` sql
SELECT VERSION(), CURRENT_DATE;

SeLect version(), current_date;

seleCt vErSiOn(), current_DATE;
```
所有这些例子都是一样的，Mysql不区分大小写。

### 33.、LIKE和REGEXP操作有什么区别？

LIKE和REGEXP运算符用于表示^和％。
``` sql
SELECT * FROM employee WHERE emp_name LIKE "%b";

SELECT * FROM employee WHERE emp_name REGEXP "^b";
```

### 34.、BLOB和TEXT有什么区别？

BLOB是一个二进制对象，可以容纳可变数量的数据。有四种类型的BLOB -

TINYBLOB

BLOB

MEDIUMBLOB和

LONGBLOB

它们只能在所能容纳价值的最大长度上有所不同。

TEXT是一个不区分大小写的BLOB。四种TEXT类型

TINYTEXT

TEXT

MEDIUMTEXT和

LONGTEXT

它们对应于四种BLOB类型，并具有相同的最大长度和存储要求。

BLOB和TEXT类型之间的唯一区别在于对BLOB值进行排序和比较时区分大小写，对TEXT值不区分大小写。

### 35、mysql_fetch_array和mysql_fetch_object的区别是什么？

以下是mysql_fetch_array和mysql_fetch_object的区别：

mysql_fetch_array（） - 将结果行作为关联数组或来自数据库的常规数组返回。

mysql_fetch_object - 从数据库返回结果行作为对象。

### 36、我们如何在mysql中运行批处理模式？

以下命令用于在批处理模式下运行：

mysql;

mysql mysql.out

### 37、MyISAM表格将在哪里存储，并且还提供其存储格式？

每个MyISAM表格以三种格式存储在磁盘上：

·“.frm”文件存储表定义

·数据文件具有“.MYD”（MYData）扩展名

索引文件具有“.MYI”（MYIndex）扩展名

### 38、Mysql中有哪些不同的表格？

共有5种类型的表格：

MyISAM

Heap

Merge

INNODB

ISAM

MyISAM是Mysql的默认存储引擎。

### 39、ISAM是什么？

ISAM简称为索引顺序访问方法。它是由IBM开发的，用于在磁带等辅助存储系统上存储和检索数据。

### 40、InnoDB是什么？

lnnoDB是一个由Oracle公司开发的Innobase Oy事务安全存储引擎。

### 41、Mysql如何优化DISTINCT？

DISTINCT在所有列上转换为GROUP BY，并与ORDER BY子句结合使用。
``` sql
SELECT DISTINCT t1.a FROM t1,t2 where t1.a=t2.a;
```

### 42、如何输入字符为十六进制数字？

如果想输入字符为十六进制数字，可以输入带有单引号的十六进制数字和前缀（X），或者只用（Ox）前缀输入十六进制数字。

如果表达式上下文是字符串，则十六进制数字串将自动转换为字符串。

### 43、如何显示前50行？

在Mysql中，使用以下代码查询显示前50行：

SELECT*FROM

LIMIT 0,50;

### 44、可以使用多少列创建索引？

任何标准表最多可以创建16个索引列。

### 45、NOW（）和CURRENT_DATE（）有什么区别？

NOW（）命令用于显示当前年份，月份，日期，小时，分钟和秒。

CURRENT_DATE（）仅显示当前年份，月份和日期。

### 46、什么样的对象可以使用CREATE语句创建？

以下对象是使用CREATE语句创建的：
```
DATABASE

EVENT

FUNCTION

INDEX

PROCEDURE

TABLE

TRIGGER

USER

VIEW
```

### 47、Mysql表中允许有多少个TRIGGERS？

在Mysql表中允许有六个触发器，如下：
```
BEFORE INSERT

AFTER INSERT

BEFORE UPDATE

AFTER UPDATE

BEFORE DELETE

AFTER DELETE
```

### 48、什么是非标准字符串类型？

以下是非标准字符串类型：

TINYTEXT

TEXT

MEDIUMTEXT

LONGTEXT

### 49、什么是通用SQL函数？

CONCAT(A, B) - 连接两个字符串值以创建单个字符串输出。通常用于将两个或多个字段合并为一个字段。

FORMAT(X, D)- 格式化数字X到D有效数字。

CURRDATE(), CURRTIME()- 返回当前日期或时间。

NOW（） - 将当前日期和时间作为一个值返回。

MONTH（），DAY（），YEAR（），WEEK（），WEEKDAY（） - 从日期值中提取给定数据。

HOUR（），MINUTE（），SECOND（） - 从时间值中提取给定数据。

DATEDIFF（A，B） - 确定两个日期之间的差异，通常用于计算年龄

SUBTIMES（A，B） - 确定两次之间的差异。

FROMDAYS（INT） - 将整数天数转换为日期值。

### 50、解释访问控制列表

ACL（访问控制列表）是与对象关联的权限列表。这个列表是Mysql服务器安全模型的基础，它有助于排除用户无法连接的问题。

Mysql将ACL（也称为授权表）缓存在内存中。当用户尝试认证或运行命令时，Mysql会按照预定的顺序检查ACL的认证信息和权限。

### 51、MYSQL支持事务吗？

在缺省模式下，MYSQL是autocommit模式的，所有的数据库更新操作都会即时提交，所以在缺省情况下，mysql是不支持事务的。

但是如果你的MYSQL表类型是使用InnoDB Tables 或 BDB tables的话，你的MYSQL就可以使用事务处理,使用SET AUTOCOMMIT=0就可以使MYSQL允许在非autocommit模式，在非autocommit模式下，你必须使用COMMIT来提交你的更改，或者用ROLLBACK来回滚你的更改。

示例如下：
```
一

START TRANSACTION;

SELECT @A:=SUM(salary) FROM table1 WHERE type=1;

UPDATE table2 SET summmary=@A WHERE type=1;

COMMIT;
```

### 52、 mysql里记录货币用什么字段类型好

NUMERIC和DECIMAL类型被Mysql实现为同样的类型，这在SQL92标准允许。他们被用于保存值，该值的准确精度是极其重要的值，例如与金钱有关的数据。当声明一个类是这些类型之一时，精度和规模的能被(并且通常是)指定；点击这里有一套最全阿里面试题总结。

例如：

salary DECIMAL(9,2)

在这个例子中，9(precision)代表将被用于存储值的总的小数位数，而2(scale)代表将被用于存储小数点后的位数。

因此，在这种情况下，能被存储在salary列中的值的范围是从-9999999.99到9999999.99。在ANSI/ISO SQL92中，句法DECIMAL(p)等价于DECIMAL(p,0)。

同样，句法DECIMAL等价于DECIMAL(p,0)，这里实现被允许决定值p。Mysql当前不支持DECIMAL/NUMERIC数据类型的这些变种形式的任一种。

这一般说来不是一个严重的问题，因为这些类型的主要益处得自于明显地控制精度和规模的能力。

DECIMAL和NUMERIC值作为字符串存储，而不是作为二进制浮点数，以便保存那些值的小数精度。

一个字符用于值的每一位、小数点(如果scale>0)和“-”符号(对于负值)。如果scale是0，DECIMAL和NUMERIC值不包含小数点或小数部分。

DECIMAL和NUMERIC值得最大的范围与DOUBLE一样，但是对于一个给定的DECIMAL或NUMERIC列，实际的范围可由制由给定列的precision或scale限制。

当这样的列赋给了小数点后面的位超过指定scale所允许的位的值，该值根据scale四舍五入。

当一个DECIMAL或NUMERIC列被赋给了其大小超过指定(或缺省的）precision和scale隐含的范围的值，Mysql存储表示那个范围的相应的端点值。

我希望本文可以帮助你提升技术水平。那些，感觉学的好难，甚至会令你沮丧的人，别担心，我认为，如果你愿意试一试本文介绍的几点，会向前迈进，克服这种感觉。这些要点也许对你不适用，但你会明确一个重要的道理：接受自己觉得受困这个事实是摆脱这个困境的第一步。

### 53、MYSQL数据表在什么情况下容易损坏？

服务器突然断电导致数据文件损坏。

强制关机，没有先关闭 mysql 服务等。

### 54、mysql有关权限的表都有哪几个？

Mysql服务器通过权限表来控制用户对数据库的访问，权限表存放在mysql数据库里，由mysql_install_db脚本初始化。这些权限表分别user，db，table_priv，columns_priv和host。

### 55、Mysql中有哪几种锁？

MyISAM支持表锁，InnoDB支持表锁和行锁，默认为行锁。

表级锁：开销小，加锁快，不会出现死锁。锁定粒度大，发生锁冲突的概率最高，并发量最低

行级锁：开销大，加锁慢，会出现死锁。锁力度小，发生锁冲突的概率小，并发度最高
