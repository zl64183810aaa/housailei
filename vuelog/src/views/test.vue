<template>
    <div>
          <h1>接口</h1>
    </div>
</template>
<script>
export default {
     data(){
         return {

         }
     },
     methods: {
         loadMore(){
             this.axios.get("http://v.juhe.cn/exp/index?key=dd9744fc67c36aad359aa9e43b9fccb0&com=yd&no=3102621928722").then(res=>{
                 console.log(res)
             })
         }
     },
     created() {
         this.loadMore()
     },
}
</script>
