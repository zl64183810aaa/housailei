const express=require('express')
//接入连接池
const poll=require('../pool')
//创建路由器
var router=express.Router();

//创建路由
router.post("/reg",(req,res)=>{
    var obj=req.body;
    var sql="INSERT INTO mw_user SET ?";
    pool.query(sql,[obj],(err,result)=>{
        if(err) throw err;
        console.log(result);
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"})
        }else{
            res.send({code:-1,msg:"注册失败"})
        }
    });

});