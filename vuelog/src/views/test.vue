<template>
    <div>
          <h1>接口</h1>
        
    </div>
</template>
<script>
export default {
     data(){
         return {
             data:[]
         }  
     },
     methods: {
        //  loadMore(){
        //      this.axios.get("http://v.juhe.cn/exp/index?key=dd9744fc67c36aad359aa9e43b9fccb0&com=yd&no=3102621928722").then(res=>{
        //          console.log(res)
        //      })
        //  }http://apis.juhe.cn/simpleWeather/query?city=%E8%8B%8F%E5%B7%9E&key=2c67bb629407f55783da5abafed91c96
     },
     created() {
        /* this.axios.jsonp("http://v.juhe.cn/exp/index","key=dd9744fc67c36aad359aa9e43b9fccb0&com=yd&no=4300428128673").then(res=>{console.log(res.result.list)});*/
         this.axios.jsonp("http://apis.juhe.cn/simpleWeather/query","city=1&key=2c67bb629407f55783da5abafed91c96").then(res=>{console.log(res)}).catch(err=>{console.log(err)});
     },
}
</script>
