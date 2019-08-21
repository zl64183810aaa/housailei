<template>
  <div>
    <mt-header fixed class="header-bar">
      <router-link to="/Home" slot="left">
        <mt-button icon="back" class="order-text">我的订单</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-navbar v-model="selected" class="navbar-parent">
      <mt-tab-item id="1">全部</mt-tab-item>
      <mt-tab-item id="2">待处理</mt-tab-item>
      <mt-tab-item id="3">代付款</mt-tab-item>
      <mt-tab-item id="4">待处理</mt-tab-item>
      <mt-tab-item id="5">已签收</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
    
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        
      </mt-tab-container-item>
      <mt-tab-container-item id="4">
        
      </mt-tab-container-item>
      <mt-tab-container-item id="5">
        
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
export default {
  data(){
    return {
      selected:"1"
    }
  },
}
</script>
<style scoped>
  .header-bar{
    height:3.5rem;
    background-color:#3581eb;
  }
  .header-bar .order-text{
    font-size:1rem;
  }
  .navbar-parent{
    width:100%;
    height:3rem;
    position:absolute;
    top:4rem;
    left:0;
    font-size:2rem;
  }
</style>