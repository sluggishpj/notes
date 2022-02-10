---
title: Linux
---

## 基础知识

### 调节字体大小

- 调大: `ctrl`+`shift`+`+`
- 调小: `ctrl`+`-`

### 文件

#### 目录结构

- bin: 程序相关
- boot: 启动相关
- cdrom: 光盘相关
- dev: 设备相关
- etc: 程序，服务器配置存放
- lib: 库
- home:

> 除了 home 文件夹，其他最好不要动

#### 命令格式

| 命令    | 选项       | 参数              |
| ------- | ---------- | ----------------- |
| command | [-options] | [parameter1, ...] |

#### 常用操作

- `ls`: 可结合以下参数

  - 某一路径
  - `-a`: 显示所有文件（包括隐藏文件）
  - `-l`: 以列表形式展示，包括权限日期等信息
  - `-h`: 以合适的单位显示大小，不加的话大小单位为 B
  - 可结合使用: `ls -a -l -h`【简写: `ls -alh`】，可以不按顺序
  - `>` : 重定向，新建或覆盖内容，eg、`ls > log.txt`
  - `>>`: 重定向，新建或追加内容，eg、`ls>>log.txt`

- `pwd`: 显示当前路径
- `touch`: 创建文件，如果文件名以`.`开头，则是隐藏文件
- `rm`: 删除文件

  - `-r`: 可以删除包含内容的文件夹
    - eg、`rm B -r`
  - `-i`: 提示确认是否删除

- `mkdir`: 创建目录

  - eg、`mkdir A/B/C/D -p`，A 目录下的 B 目录下的 C 目录下的 D 目录，不用管文件夹是否已经存在

- `rmdir`: 删除非空文件夹

- `clear`: 清屏

- `cat`: 查看文件内容

  - 可同时查看多个文件内容，`cat 1.txt 2.txt`
    - 合并多个文件，`cat 1.txt 2.txt > 3.txt`

- `history`: 查看敲过的历史记录

  - ！+序号，执行命令

- `|`: 管道，左边一命令，右边一命令

- `more`: 将要查看的文档分为多屏，可以查看更多，使用于大文件

  - f: 翻屏
  - b: 往回翻屏
  - 按 q 退出
  - eg、`ls -alh /bin | more`

- `;` : 可同时执行多个命令，少用

  - eg、`ls;ls -alh`

- cd
  - `cd ../..`，上一层的上一层
  - `cd -`，上一次操作所在路径
  - `cd ~`，进入家目录 ​
- `ctrl+c`，取消当前行的执行
- `ln -s 源文件名 软链接文件名`，软链接（快捷方式）

  - eg、`ln -s 1.txt 1-softlink.txt`

- `ln 源文件名 硬链接文件名`，硬链接（备份）

  - eg、`ln 1.txt 1-hardlink.txt`
    > 原本的文件名为一个硬链接，当硬链接数为 0 时，文件才会被删除

- `mv 源文件名 目标文件名`，移动

  - 文件重命名，eg、`mv 1.text 1.txt`
  - 移动，eg、`mv 1.txt books/`，移动到 books 目录下
  - 文件夹改名，eg、`mv build/ gebibuild`

- `grep "查找内容" 被查找文件`

  - `grep -n "ntfs" xxx.txt`，加上`-n`显示行号
  - `grep -v "ntfs" xxx.txt`，加上`-v`表示查找不包括 ntfs 的内容
  - `grep "^ntfs" xxx.txt`，开头加上`^`表示以 nfts 开头的行
  - `grep "ntfs$" xxx.txt`，结尾加上`^`表示以 nfts 结尾的行

- cp，复制

  - eg、`cp 2.txt build`，复制 2.txt 到 build 目录下
  - `cp A build -r`，将 A 文件夹复制到 build 文件夹下

- `!!`，执行上一条命令

#### 查看帮助文档

- `--help`: eg、`ls --help`

- `man`: eg、`man ls`，

  - 上下键滚屏
  - f 键，翻屏
  - b 键，往回翻屏

- `man 2 函数名`: eg、man 2 open 显示 C 函数详细用法

#### 自动补全

tab 键

#### 查找文件: find

用来在特定的目录下搜索符合条件的文件，也可以用来搜索特定用户属主的文件

| 命令                          | 含义                                   |
| ----------------------------- | -------------------------------------- |
| `find ./ -name test.sh`       | 查找当前目录下所有名为 test.sh 的文件  |
| `find ./ -name '\*.sh'`       | 查找当前目录下所有后缀为.sh 的文件     |
| `find ./ -name "[A-Z]\*"`     | 查找当前目录下所有以大写字母开头的文件 |
| `find /tmp -size 2M`          | 查找在/tmp 目录下等于 2M 的文件        |
| `find /tmp -size +2M`         | 查找在/tmp 目录下大于 2M 的文件        |
| `find /tmp -size -2M`         | 查找在/tmp 目录下小于 2M 的文件        |
| `find ./ -size +4k -size -5M` | 查找当前目录下大于 4k，小于 5M 的文件  |
| `find ./ -perm 777`           | 查找当前目录下权限为 777 的文件或目录  |

#### 归档管理: tar

此命令可以把一系列文件归档到一个大文件，也可以把档案文件解开以恢复数据

格式: `tar [参数] 打包后的文件名 要打包的文件`

> tar 命令其参数前面可以使用"-"，也可以不使用

常用参数:

| 参数 | 含义                                                        |
| ---- | ----------------------------------------------------------- |
| -c   | 生成档案文件，创建打包文件                                  |
| -v   | 列出归档解档的详细过程，显示进度                            |
| -f   | 指定档案文件名称，f 后面一定是.tar 文件，所以必须放选项后面 |
| -t   | 列出档案中包含的文件                                        |
| -x   | 解开档案文件                                                |

> 打包: `tar -cvf md.tar \*.md`
>
> 解包: `tar -xvf md.tar`
>
> 压缩方式 1: `tar -zcvf md.tar.gz \*.md`
>
> 解压缩方式 1: `tar -zxvf md.tar.gz`
>
> 压缩方式 2: `tar -jcvf md.tar.bz2 \*.md`
>
> 解压缩方式 2: `tar -jxvf md.tar.bz2`
>
> 压缩方式 3: `zip md.zip \*.md`
>
> 解压缩方式 3: `unzip md.zip`

> 解压到指定路径【tar.gz，后面加-C 路径】: `tar -zxvf md.tar.gz -C result/`
>
> 解压到指定路径【zip，中间加-d 路径】: `unzip -d ./result md.zip`

#### which

查看所用的命令在哪个位置

#### alias

- 设置指令的别名。
  - 语法: `alias[别名]=[指令名称]`
  - eg: `alias rm='rm -i'`
- 可以用 `unalias` 解除别名

### 系统管理、磁盘管理

#### 日历

- cal: 今天日历

  - `cal -y 2008`: 查看 2008 年日历

#### 时间

- `date`: 现在时间

- 设置时间

  格式: `date [MMDDhhmm][[CC]YY][.ss]+format`

#### 查看进程信息

- `ps -aux`: 静态显示所有运行的进程

- `top`: 动态显示运行的进程
- `kill -9 pid`: 强制杀掉进程 pid

#### w 查看当前系统的负载

```bash
[pj@localhost ~]$ w
 07:23:20 up 8 min,  2 users,  load average: 0.10, 0.82, 0.59
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
pj       tty1                      07:15    6:24  10.07s  0.00s xinit /etc/X11/xinit/x
pj       pts/0    :0               07:19    0.00s  0.14s  0.05s w
```

第一行从左面开始显示的信息依次为: 时间，系统运行时间，登录用户数，平均负载。第二行开始以及下面所有的行，告诉我们的信息是，当前登录的都有哪些用户，以及他们是从哪里登录的等

`load average:`后面的三个数值。

第一个数值表示 1 分钟内系统的平均负载值；第二个数值表示 5 分钟内系统的平均负载值；第三个数值表示 15 分钟系统的平均负载值。这个值的意义是，单位时间段内 CPU 活动进程数。

inet 192.168.122.1 netmask 255.255.255.0 broadcast 192.168.122.255

#### 关机重启

- `reboot`: 重启
- `shutdown -r now`: 重启，shutdown 会给别的用户提示
- `shutdown -h now`: 立刻关机，now 相当于时间为 0 的状态
- `shutdown -h 20:25`: 系统在今天 20:25 会关机
- `shutdown -h +10`: 再过 10 分钟关机
- `init 0`: 关机
- `init 6`: 重启
- `halt`: 关闭系统，等同于 shutdown -h now 和 poweroff

#### 检测磁盘空间

- `df -h`: 查看**磁盘**使用情况
- `du -h`: 查看当前**目录**占用空间

#### 查看或配置网卡信息

- 查看网卡信息: `ifconfig`
- 修改网卡 ip: `sudo ifconfig 网卡名 要设置的ip`

### 用户权限管理

#### 用户管理

- 添加用户: `useradd 用户名`
- 添加用户并创建家目录: `useradd 用户名 -m`
- 设置；修改用户密码: `passwd 用户名`
- 查看全部用户: `cat /etc/passwd`
- 查看当前用户: `whoami`
- 切换用户: `su 用户名`
  - `su - 用户名`: 切换用户的同时也切换其家目录
- 退出当前用户: `exit`
- 查看当前谁登录: `who`
- 删除用户: `userdel 用户名`
- 删除用户和主目录: `userdel -r 用户名`

#### 远程连接

- `ssh 用户名@ip`

#### 管理组

- 创建组: `groupadd 组名`
- 删除组: `groupdel 组名`
- 查看所有组方式
  - 方式 1: groupmod + 两次 tab 键
  - 方式 2: `cat /etc/group`

#### 权限管理

- 为普通用户添加 sudo 权限【ubuntu】
  - `sudo usermod -a -G adm 用户名`
  - `sudo usermod -a -G sudo 用户名`
- 修改文件所有者: `chown`
  - `chown 用户名 文件名`
- 修改文件所属组: `chgrp`
  - `chgrp 组名 文件名`
- `-rw-rw-r--`
  - 第 1 位，是`-`则表示是文件，是`d`则是文件夹
  - 接下来 9 个每 3 位一组
    - 第 1 组: 文件拥有者权限
    - 第 2 组: 同组者的权限
    - 第 3 组: 其他人的权限
    - 三位分别表示，r: 可读，w: 可写，x: 可执行，-: 表示没有对应的权限
- 修改文件权限方式 1
  - 人员，u: 文件所有者，g: 同组，o: 其他人
  - `chmod 人员=权限 文件名`
    - chmod u=rwx 2.py，其他同理
    - chmod u=r,g=r,o=r。对应位没写则默认-
- 修改文件权限方式 2
  - r ---> 4
  - w ---> 2
  - x ---> 1
  - chmod 777 2.py: 所有人可读可写可执行，每一位数代表该组所有文件之和

### 安装 rpm 包

#### 安装一个 rpm 包

`rpm -ivh filename`

- `-i`: 安装
- `-v`: 可视化
- `-h`: 显示安装进度

#### 升级一个 rmp 包

`rpm -Uvh filename -U`

#### 卸载一个 rmp 包

`rpm -e filename`

- filename 是通过 rpm 的查询功能所查询到的
  - `rmp -qa | grep 包名`

#### 查询一个包是否安装

`rpm -q 包名`

> 这里的包名，是不带有平台信息以及后缀名的

#### yum 工具

前提是你使用的 linux 系统是支持 yum 的。yum 最大的优势在于可以联网去下载所需要的 rpm 包，然后自动安装，在这个工程中如果要安装的 rpm 包有依赖关系，yum 会帮你解决掉这些依赖关系依次安装所有 rpm 包。

- 列出所有可用的 rpm 包 `yum list `
- 搜索一个 rpm 包 `yum search [相关关键词]`
- 安装一个 rpm 包 `yum install [-y][包名]`
  - 如果不加-y 选项，则会以与用户交互的方式安装，首先是列出需要安装的 rpm 包信息，然后会问用户是否需要安装，输入 y 则安装，输入 n 则不安装。
- 卸载一个 rpm 包 `yum remove [-y][rpm包名]`
- 升级一个 rpm 包 `yum update [-y][rpm包]`

### shell

#### 设置系统变量

- 系统内**所有用户**登录后都能使用该变量

  在`/etc/profile`文件最末行加入 `export 键=值 `然后运行`source /etc/profile`就可以生效了

  > **/etc/profile** : 这个文件预设了几个重要的变量，例如 PATH, USER, LOGNAME, MAIL, INPUTRC, HOSTNAME, HISTSIZE, umas 等

- 只想让**当前用户**使用该变量

  需要在用户**主目录**下的`.bashrc`文件最后一行加入`export 键=值 `然后运行`source .bashrc`就可以生效了

  > 该文件包含专用于你的 shell 的 bash 信息,当登录时以及每次打开新的 shell 时,该该文件被读取。例如你可以将用户自定义的 alias 或者自定义变量写到这个文件中

- 设置自定义变量规则

  - 设定变量的格式为”a=b”，其中 a 为变量名，b 为变量的内容，等号两边不能有空格；
  - 变量名只能由英、数字以及下划线组成，而且不能以数字开头；
  - 当变量内容带有特殊字符（如空格）时，需要加上单引号（或双引号）
  - 如果变量内容中需要**用到其他命令**运行结果则可以使用反引号；

    ```bash
    [root@localhost ~]# myname=`pwd`
    [root@localhost ~]# echo $myname
    /root
    ```

  - 变量内容可以**累加其他变量的内容**，需要加**双引号**；
    ```bash
    [root@localhost ~]# myname="$LOGNAME"LOVE
    [root@localhost ~]# echo $myname
    rootLOVE
    ```

#### 语法

- 文件名以`.sh`结尾
- 文件内容的第一行是`#! /bin/bash`
- 注释: `#`
- 执行: `sh filename 参数1 参数2...`

  - 用 vim 编辑的文档是不带有执行权限的，所以需要加一个执行权限，那样就可以直接使用`./filename` 执行这个脚本了

    ```bash
    [pj@localhost ~]$ chmod +x test.sh
    ```

  - 可以加-x 选项来查看这个脚本执行过程

- 文件内容通过`$1`引用参数 1，其他同理

  - `$0`表示文件名

- 从命令行读取值 read

  ```bash
  echo "Please enter a number:"
  read x
  echo "Please enter another number:"
  read y
  echo "The sum of two number is $[$x+$y]"
  ```

  ```bash
  # another way read varibale from terminal
  read -p "Please enter a number:" x
  read -p "Please enter other number:" y
  ```

  > 两者效果一样

- 逻辑判断 if 语句

  - 不带 else

    ```bash
    if 判断语句; then
    	command
    fi
    ```

  - 带 else

    ```bash
    if 判断语句; then
    	command
    else
    	command
    fi
    ```

  - 带有 elif
    ```bash
    if 判断语句一; then
    	command
    elif 判断语句二;then
    	command
    else
    	command
    fi
    ```

  > 在判断数值大小除了可以用”(( ))”的形式

- 判断文件属性

  `-e` : 判断文件或目录是否存在
  `-d` : 判断是不是目录，并是否存在
  `-f` : 判断是否是普通文件，并存在
  `-r` : 判断文档是否有读权限
  `-w` : 判断是否有写权限
  `-x` : 判断是否可执行
  使用 if 判断时，具体格式为: `if [ -e filename ] ; then`

- case 语句

  ```bash
  case 变量 in
  value1)
  	command
  ;;
  value1)
  	command
  ;;
  # ...
  esac
  ```

- 循环

  - for 循环

    ```bash
    for 变量名 in 循环的条件; do
    	command
    done
    ```

  - while 循环

    ```bash
    while 条件; do
    	command
    done
    ```

- 函数
  ```bash
  function 函数名() {
      command
  }
  ```

## vim

- 创建: vi 文件名
- 以下命令都是按了`esc`后
- 插入:

  - `a`，光标文字后插入
    - `A`，行尾插入
  - `i`，光标文字前插入
    - `I`，行首插入
  - `o`，新起下一行
    - `O`，新起上一行
  - `s`，删除光标文字，再插入

- 末行模式，按了`:`后
  - 保存: `w`
  - 退出: `q`
  - 保存并退出: `wq`、`x`
- `shift + zz`: 保存并退出
- 复制本行: `yy`

  - 复制包括当前行的 n 行: `n yy`

- 剪切本行: `dd`

  - 剪切包括当前行的 n 行: `n dd`

- 剪切光标到行末的文本: `D`
- 剪切光标到行首的文本: `d0`
- 剪切该单词: `dw`
- 剪切当前的光标文字: `x`，往后走
- 剪切当前的光标文字: `X`，往前走
- 粘贴: `p`
- 撤销: `u`
- 反撤销: `ctrl + r`
- 上: `k`
- 下: `j`
- 左: `h`
- 后: `l`
- 光标跳到屏幕中间: `M`
- 光标跳到屏幕上边: `H`
- 光标跳到屏幕下边: `L`
- 向上翻一页: `ctrl + b`
- 向下翻一页: `ctrl + f`
- 向上翻半屏: `ctrl + u`
- 向下翻半屏: `ctrl + d`
- 快速跳到第 n 行: `n G`
  - 跳到文件末尾: `G`
  - 跳到文件头: `gg`
- 下一个单词末尾: `e`
- 前一个单词开头: `b`
- 下一个单词开头: `w`
- 选中模式: `v`【每次选中一个】
  - `V`【每次选中一行】
- 往右缩进，相当于 window 下 tab: `>>`
- 往左缩进，相当于 window 下 shift+tab: `<<`
- 重复执行上一次命令: `.`
- 一片代码一片代码跳:
  - 往上`{`
  - 往下: `}`
- 替换当前光标字: `r 替换成的字` ，只能替换一个
  - `R 替换的多个字`，可以替换多个，往右替换
- 搜索: `/`
  - 通过`n`，`N`往上找和往下找
- 全局替换: `:%s/目标词/替换成的词/g`
  - 替换范围为第 n-m 行: `:n,ms/目标词/替换成的词/g`
- 显示行号: `:set nu`
  - 取消行号: `set nonu`
- 光标移动到行首: `^`
  - 移动到行尾: `$`
