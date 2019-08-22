<template>
  <div>
    <mt-header fixed class="profile-header">
      <router-link to="/Home" slot="left">
        <mt-button icon="back" class="profile-button">我的资料</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-cell title="手机号:" to="//github.com" is-link class="phone">
      <span style="color:#5493ee">绑定</span>
    </mt-cell>
    <mt-cell title="邮箱:" to="//github.com" is-link class="email">
      <span style="color:#5493ee">绑定</span>
    </mt-cell>
    <mt-cell title="性别:" is-link class="sex">
      <span>女</span>
    </mt-cell>
    <mt-cell title="生日:" is-link class="birthday"></mt-cell>
    <mt-cell title="实名认证" is-link class="Verified">
      <span style="color:#d29318">去认证</span>
    </mt-cell>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  .profile-header{
    height:3.5rem;
    background-color:#3581eb;
  }
  .profile-header .profile-button{
    font-size:1rem;
  }
  .phone{
    width:100%;
    height:3rem;
    position:absolute;
    top:3.5rem;
  }
  .email{
    width:100%;
    height:3rem;
    position:absolute;
    top:6.5rem;
  }
  .sex{
    width:100%;
    height:3rem;
    position:absolute;
    top:9.5rem;
  }
  .birthday{
    width:100%;
    height:3rem;
    position:absolute;
    top:12.5rem;
  }
  .Verified{
    width:100%;
    height:3rem;
    position:absolute;
    top:16rem;
  }
</style>