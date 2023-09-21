# HTTP

## 写一个http请求

1. 创建.http文件

2.  如何使用通REST Client发生请求
    ###
    请求方式 请求地址(可使用路径或者get传参对应的请求要改为get) HTTP/1.1
    头部信息(如Content-Type: application/json,根据下面的body发生信息来决定)

    body发送数据
    {"title":"update","author":"xg"}(json格式)
    a=1&b=2&c=3(urlencoded格式)