# 脚本命令行

## 进入方式

1.Windows Powershell 左下角菜单栏中搜索
2.Windows Powershell 按下shift右击菜单选项
3.Windows Powershell vscode编辑器打开

## cd 路径
1.磁盘绝对路径 D:(盘符), D:\phpstudy_pro\WWW\210_code(开始/表示根路径)
2.盘符可以省略不写
3.cls 清空屏幕
4.ls显示目录内容
5.pwd显示当前目录路径

cd 相对路径

1. './' 指向当前目录
2. '../' 指向当前目录上一级目录

ls
1. 默认写法 ls ./  简写 ls
2. 可以通过 ls 命令查看任意路径下的文件信息(ls /  查看根目录下的文件信息)

## mkdir
1. 支持递归创建目录
2. 可以在任意目录中创建任意盘符下的文件夹

## new-item创建空文件
1. new-item ./a.txt

## cp 复制文件(第一个是目标，第二个位置和命名)
1. cp ./index.html ./demo/index.html

## mv 移动文件(第一个是目标，第二个位置和命名)
1. mv ./index.html ./demo/index.html

## more 逐页查看文件
1. more ./demo/index.html

## cat 文件内容显示
1. cat ./demo/index.html

## rm 删除文件
1. rm ./a.txt
 