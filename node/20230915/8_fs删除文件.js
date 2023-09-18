const fs = require('fs');


fs.unlink('./a.html',(error)=>{
    console.log(error);
})