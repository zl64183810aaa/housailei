const mysql=require('mysql');
var pool=mysql.createPool({
   host:'127.0.0.1',
   port:'3306',
   user:'root',
   possword:'', 
   database:'mw',
   connectionLimit:50
});
//导出pool
module.exports=pool;