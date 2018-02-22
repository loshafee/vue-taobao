<template>
  <footer>
    <div class="footer-top">
      <p>
        <router-link to="/login">登录</router-link>
        <span>|</span>
        <router-link to="/register">注册</router-link>
      </p>
      <router-link to="/feedback">意见反馈</router-link>
      <a>电脑版</a>
    </div>
    <p class="c-copy">
      &copy; 2015 浙B2-20080224
      <a>服务中心</a>
    </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  footer {
    background-color: #fff;
    font-size: 1.4rem;
    .c-copy {
      text-align: center;
      padding: 12px 0;
    }
  }
  .footer-top {
    display: flex;
    border-bottom: 1px solid #eee;
    height: 44px;
    line-height: 44px;
    p {
      flex: 2;
      text-align: center;
      a {
        display: inline-block;
        width: 40%;
      }
    }
    > a {
      flex: 1;
      text-align: center;
      border-left: 1px solid #eee;
    }
  }
</style>
