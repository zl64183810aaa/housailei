const express=require('express')
//接入连接池
const poll=require('../pool')
//创建路由器
var router=express.Router();

//创建路由
router.post("/reg",(req,res)=>{
    var obj=req.body;
    var sql="INSERT INTO gol_user SET ?";
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

//功能一：完成用户登录操作
server.get ( "/login", ( req,res ) => {
    //1： 参数：获取网页传递两个数据 uname upwd
    //参数方式一：?uname=tom&upwd=123 查询字符串
    //参数方式二：/tom/123            参数
    var uname = req.query.uname;
    var upwd = req.query.upwd;
    //2：sql：查询sql语句
    //数据库 库命 表名 列名 小写字母
    var sql = "SELECT id FROM gol_user WHERE uname = ? AND upwd = md5(?)";
    //3：json:{code:1,msg:"登录成功"}
    pool.query( sql,[uname,upwd],( err,result ) => {
      //执行sql语句回调函数
      if(err) throw err;
      if(result.length == 0){
        res.send( {code:-1,msg:"用户名或密码有误"} );
      }else{
        //登录成功
        //1：将登录成功凭据保存session   查找后返回：result=[{id:1}]
        req.session.uid=result[0].id;
        //console.log(req.session);
        //2：将成功消息发送脚手架
        res.send( {code:1,msg:"登录成功"} );
      }
    })
  } );