const express=require('express');
//导入路由器
const userRouter=require('./routes/user.js');
const homeRouter=require('./routes/song_home.js');
//导入body-parser
const bodyParser=require('body-parser');
const cors=require("cors")
var mapp=express();
mapp.listen(6000);

mapp.use(cors({
  origin:"http://127.0.0.1:5500"
}));//从此所有响应，自动带Access-Control-Allow-Origin:http://127.0.0.1:5500
//万一客户端浏览器地址发生变化，只改这里origin一处即可！
//托管静态资源
mapp.use(express.static('public'));
mapp.use(express.static('home_boot'));
//使用body-parser
mapp.use(bodyParser.urlencoded({
  extended:false
}));
//使用路由器
mapp.use('/user',userRouter);
mapp.use('/home',homeRouter);


