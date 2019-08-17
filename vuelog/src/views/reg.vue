<template>
<div class="app_reg">
      <img src="../assets/19-43-04-logo_v4_sso.png" alt="">
     <h3>创建你的快递100账号</h3>
    <mt-field :placeholder="holdname" v-modle="uname"></mt-field>
    <mt-field :placeholder="holdpwd" v-modle="upwd"></mt-field>
    <mt-button class="btn" @click="reg">注册</mt-button>
    <mt-radio></mt-radio>
   

</div>
   
</template>
<script>
export default {
    data(){
        return{
            holdname:"手机号/邮箱",
            holdpwd:"请输入密码",
            uname:"",
            upwd:""
        }
    },
    methods:{
           reg(){
               // 创建正则表达式验证 用户名和密码格式
               var reg1=/^[1][3][0-9]{9}$/
               var reg2=/^[a-z0-9]{3,10}[@][.][a-z]{3-9}$/
               var reg3=/^[a-z0-9]{3-9}$/i
               // 获取用户名和密码
               var uname=this.uname;
               var upwd=this.upwd;
               // 验证
               if(!reg1.test(uname)||!reg2.test(uname)){
                   this.$toast("用户名格式错误")
               };
               if(!reg3.test(upwd)){
                   this.$toast("密码格式错误")
               };
               // 发送axios请求
               var url="Reg";
               var obj={uname,upwd}
               this.axios.get(url,{params:obj}).then(res=>{
                   if(res.data.code==1){
                       this.$router.push("/Product")
                   }else{
                       this.$toast("注册失败")
                   }
               })

           }

    }
}
</script>
<style>
   .btn{
        background-color: orange;
        width:94%;
        height:50px;
        margin:10px auto;
        border-radius: 5px;
        font-size: 25px;
        color:#eee;
    }
</style>




