const fs = require('fs');

// 默认只能创建一个目录，想要多个必须使用递归创建，增加配置项{recursive:true}
// fs.mkdir('./html/css/js/vue',{recursive:true},(e)=>console.log(e));

// 默认只能删除没有内容的目录，想要删除目录下有内容的，需要使用递归删除，增加配置项{recursive:true}
fs.rmdir('./html',{recursive:true},(e)=>console.log(e))