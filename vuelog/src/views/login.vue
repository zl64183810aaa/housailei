<template>
<div class="app_login">
    <div class="img">
         <img src="../assets/19-43-04-logo_v4_sso.png" alt="">
    </div>
    
     <h2>一个账号，畅想所有服务</h2>
     <h3>账号密码登录</h3>
     <div class="input">
          <mt-field :placeholder="holdname" v-modle="uname" class="in"></mt-field>
          <mt-field :placeholder="holdpwd" v-modle="upwd" class="inp"></mt-field>
     </div>
   
    <mt-button type="orange" @click="login" class="btn">登录</mt-button>
    <div class="link">
        <router-link to="/reg">手机短信登录</router-link>
        <router-link to="/Reg">立即注册</router-link>    
        
    </div>
      <div>
           <span>---------------------快捷登录---------------------</span>
      </div>
    
    <img src="assets/logo.p
  ng" alt="">
</div>
   
</template>
<script>
export default {
    data(){
        return{
            holdname:"手机号/邮箱/用户名",
            holdpwd:"请输入密码",
            uname:"",
            upwd:""
        }
    },
     methods:{
           login(){
               // 创建正则表达式验证 用户名和密码格式
               var reg1=/^[1][3][0-9]{9}$/
               var reg2=/^[a-z0-9]{3,10}[@][.][a-z]{3-9}$/
               var reg3=/^[a-z0-9]{3-9}$/i
               // 获取用户名和密码
               var uname=this.uname;
               var upwd=this.upwd;
               // 验证
               if(!reg1.test(uname)||!reg2.test(uname)||!reg3.test(uname)){
                   this.$toast("用户名格式错误")
               };
               if(!reg3.test(upwd)){
                   this.$toast("密码格式错误")
               };
               // 发送axios请求
               var url="Login";
               var obj={uname,upwd}
               this.axios.get(url,{params:obj}).then(res=>{
                   if(res.data.code==1){
                       this.$router.push("/Product")
                   }else{
                       this.$toast("登录失败a")
                   }
               })

           }

    }
}
</script>
<style>
*{padding:0}
    .app_login{
        background-color:#eee;
    }
    a{
        font-size:25px;
        color:#00f;

    }
    .input{
        width:96%;
        margin:0 auto;
    }
    input{
         width:90%;
         height:50px;
        border:1px solid #eee;
        padding:0 10px;
        font-size:15px;
       
    }
    .in{
     
      height:50px;
    }
    .btn{
        background-color: orange;
        width:94%;
        height:50px;
        margin:10px auto;
        border-radius: 5px;
        font-size: 25px;
        color:#eee;
    }
     
     img{
         width:50%;
         margin:50px  20px 0;

     }
     .link{
         width:94%;
         margin:0 auto;
         display:flex;
         justify-content: space-between;
     }
     a{
           text-decoration: none;
           font-size:18px;
     }
     /*输入框样式*/
     mint-field-core{
         width:100%;
     }
</style>


