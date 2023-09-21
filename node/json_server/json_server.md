
# json-server 使用

## 安装json-server
1. npm i -g json-server

## 启动json-server
1. json-server --watch db.json
2. -p 修改端口号 -H 修改host,可修改为0.0.0.0 代表所有ip都可访问
   -s 静态目录路径  -r 路由配置文件路径  -m 中间件文件路径
3. json-server默认开启的ip是ipv6 需要手动修改为ipv4

## 使用json-server
1. 使用http发送请求

### 获取全部数据
GET http://127.0.0.1:3000/posts HTTP/1.1

### 获取单条id的数据
GET http://127.0.0.1:3000/posts/1 HTTP/1.1

### 添加文章数据
POST http://127.0.0.1:3000/posts HTTP/1.1
Content-Type: application/json

{"title":"test15","author":"hahaha15"}

### 修改文章数据
PUT http://127.0.0.1:3000/posts/4 HTTP/1.1
Content-Type: application/json

{"title":"update","author":"xg"}

### 删除一条数据
DELETE  http://127.0.0.1:3000/posts/4 HTTP/1.1


### get根据条件查询对应的数据
#### 条件不同时时 &&
GET http://127.0.0.1:3000/posts?title=test1&author=hahaha1 HTTP/1.1

### get根据条件查询对应的数据
#### 条件相同时是 ||
GET http://127.0.0.1:3000/posts?id=1&id=2&id=3 HTTP/1.1


### 分页查询
GET http://127.0.0.1:3000/posts?_page=2&_limit=3 HTTP/1.1


### 排序
#### 单个字段排序
GET http://127.0.0.1:3000/posts?_sort=id&_order=desc HTTP/1.1

### 排序
#### 多个字段排序
GET http://127.0.0.1:3000/posts?_sort=id,title&_order=asc,dese HTTP/1.1


### 切片(array.slice相同)
GET http://127.0.0.1:3000/posts?_start=5&_end=10 HTTP/1.1


### 范围取值 _gte >  _lte  <
GET http://127.0.0.1:3000/posts?views_gte=10&views_lte=20 HTTP/1.1


### 排除某个值 _ne
GET http://127.0.0.1:3000/posts?id_ne=1 HTTP/1.1


### 模糊查询 _lik
GET http://127.0.0.1:3000/posts?title_like=1 HTTP/1.1



### 添加评论
POST http://127.0.0.1:3000/comments HTTP/1.1
Content-Type: application/json

{"body":"测试评论","postId":6}


### 关联查询
#### 根据文章查询评论(父关联子,一对多)
GET http://127.0.0.1:3000/posts?_embed=comments HTTP/1.1


### 关联查询并使用路径参数匹配主表数据
GET http://127.0.0.1:3000/posts/1?_embed=comments HTTP/1.1


### 关联查询
#### 根据评论查询文章(子关联父,一对一)
GET http://127.0.0.1:3000/comments?_expand=post HTTP/1.1


### 关联查询并使用路径参数匹配主表数据
GET http://127.0.0.1:3000/comments/1?_expand=post HTTP/1.1



### 获取谋篇文章的所有评论
#### 路径参数匹配文章数据,在根据文章查询下面的所有评论
GET http://127.0.0.1:3000/posts/1/comments HTTP/1.1


### 路径参数匹配文章数据,给当前路径匹配的文章添加一条评论
POST  http://127.0.0.1:3000/posts/1/comments HTTP/1.1
Content-Type: application/json

{"body":"测试测试"}