<template>
    <div>
          <h1>接口</h1>
        账号：<input type="text" v-model="uname">
        密码：<input type="password" v-model="upwd">
        手机号 <input type="text" v-model="phone">
    </div>
</template>
<script>
export default {
     data(){
         return {
             data:[],
             uname:"",
             upwd:"",
             phone:""
         }  
     },
     methods: {
          loadMore(){
               var obj={uname,upwd}
                  this.axios.get("login",{
                     params:obj
                  }).then(res=>{
                   console.log(res)
                   if(res.data.code==-1){
                      var time=res.data.msg
                       this.$toast(`${time}`) 
                   }else{
                       var time=res.data.msg
                       this.$toast(`${time}`)
                       this.$router.push("/product")
                       }
                    }) 
          }
     },
     created() {
        /* this.axios.jsonp("http://v.juhe.cn/exp/index","key=dd9744fc67c36aad359aa9e43b9fccb0&com=yd&no=4300428128673").then(res=>{console.log(res.result.list)});*/
        // this.axios.jsonp("http://apis.juhe.cn/simpleWeather/query","city=1&key=2c67bb629407f55783da5abafed91c96").then(res=>{console.log(res)}).catch(err=>{console.log(err)});
     },
}
</script>
