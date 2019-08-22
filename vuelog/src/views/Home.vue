<template>
  <div class="container">
    <!-- 导航 登录 -->
    <div class="page-head">
      <div  class="loginDiv">
        <img src="../assets/notlog.png" class="loginImage">
        <span @click="login" class="loginText">登录</span>
      </div>
      <div class="moreDiv">
        <img src="../assets/r_arrow.png"  @click="myprofile" class="moreLogin">
      </div>
    </div><!--导航最后-->
    <!-- 我的订单 -->
    <div class="myorder">
      <div class="left-order">我的订单</div>
      <ul class="ul">
        <li>
          <i class="iconfont icon-daichuli"></i>
          <div>待处理</div>
        </li>
        <li>
          <i class="iconfont icon-daifukuan"></i>
          <div>待付款</div>
        </li>
        <li>
          <i class="iconfont icon-93"></i>
          <div>待分享</div>
        </li>
        <li>
          <i class="iconfont icon-qianshou"></i>
          <div>已签收</div>
        </li>
        <li @click="more">
          <i class="iconfont icon-ding_huabanfuben"></i>
          <div>全部订单</div>
        </li>
      </ul>
    </div><!--我的订单结尾-->
    <!-- 各种记录 -->
    <div class="recording">
      <ul class="recording-details">
        <li>
          <i class="iconfont icon-chazhao"></i>
          <div>查件记录</div>
        </li>
        <li>
          <i class="iconfont icon-jiaoyijilu"></i>
          <div>取件记录</div>
        </li>
        <li>
          <i class="iconfont icon-dizhiguanli"></i>
          <div>地址管理</div>
        </li>
      </ul>
    </div><!--记录结尾-->
    <!-- 帮助中心 -->
    <div class="help">
      <ul class="help-details">
        <li>
          <i class="iconfont icon-bangzhuzhongxin"></i>
          <div>帮助中心</div>
        </li>
        <li>
          <i class="iconfont icon-denglu"></i>
          <div>关注公众号</div>
        </li>
        <li>
          <i class="iconfont icon-zhaoshengbaobiao"></i>
          <div>消息中心</div>
        </li>
        <li>
          <i class="iconfont icon-tuijian"></i>
          <div>推荐小程序</div>
        </li>
      </ul>
    </div><!--帮助中心结尾-->
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
    login(){
      this.$router.push("/login")
    },
    more(){
      this.$router.push("/Myorder")
    },
    myprofile(){
      this.$router.push("/Myprofile")
    }
  }
}
</script>
<style scoped>
  .container{
    width:100%;
    position:relative;
  }
  /* 导航标题样式 */
  .page-head{
    display:flex;
    justify-content:space-between;
    width:100%;
    height:11rem;
    background-image:linear-gradient(to bottom,#4781ed,#4781ed,#4781ed,#4781ed,#4781ed,#6d9fee,#80adec,#c6d3f1,#edeaf5)
  }
  .page-head>.loginDiv{
    height:3rem;
    display:flex;
    align-items:center;
    margin-left:1rem;
    margin-top:3.5rem;
  }
  .page-head>.loginDiv>.loginImage{
    width:2rem;
    height:2rem;
    background-color:#fff;
    border-radius:50%;
    padding:10px 5px 0;
  }
  .page-head>.loginDiv>.loginText{
    display:inline-block;
    color:#fff;
    margin-left:1rem;
  }
  .page-head>.moreDiv{
    width:2rem;
    margin-top:4.2rem;
    margin-right:0.5rem;
  }
  .page-head>.moreDiv>.moreLogin{
    width:1.5rem;
  }
  /* 我的订单样式 */
  .myorder{
    display:flex;
    flex-direction:column;
    width:93%;
    height:6rem;
    background-color:#fff;
    position:absolute;
    top:8rem;
    left:0.8rem;
    border-radius:0.2rem;
  }
  .myorder>.left-order{
    margin-left:-76%;
    margin-top:0.3rem;
    font-size:1rem;
  }
  ul{
    list-style: none;
    margin:0;
    padding:0;
  }
  .myorder>.ul{
    display:flex;
    justify-content:space-around;
    margin-top:1rem;
    text-align: center;
  }
  .myorder>.ul>li>div{
    font-size:0.8rem;
    margin-top:0.8rem;
    color:#6c6c6c;
  }
  /* 各种记录样式 */
  .recording{
    width:93%;
    height:5rem;
    background-color:#fff;
    position:absolute;
    top:14.5rem;
    left:0.8rem;
  }
  .recording>.recording-details{
    display:flex;
    text-align: center;
    justify-content:space-around;
  }
  .recording>.recording-details>li{
    width:100%;
    margin-top:0.8rem;
  }
  .recording>.recording-details>li>div{
    font-size:0.8rem;
    color:#6c6c6c;
    margin-top:0.6rem;
  }
  /* 帮助中心 */
  .help{
    width:93%;
    height:5rem;
    background-color:#fff;
    position:absolute;
    top:20rem;
    left:0.8rem;
  }
  .help>.help-details{
    height:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
    text-align: center;
  }
  .help>.help-details>li{
    margin-top:0.8rem;
  }
  .help>.help-details>li>div{
    font-size:0.8rem;
    color:#6c6c6c;
    margin-top:0.6rem;
  }
</style>