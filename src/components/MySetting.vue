<template>
  <div class="container">
    <header class="header-banner">
      <router-link to="/my" class="back-btn"></router-link>      
      <h2>设置</h2>
      <router-link to="/" tag="span">
        <i class="icon iconfont icon-home"></i>
      </router-link>
    </header>
    <ul class="list-bar">
      <router-link tag="li" to="setting/address">
        <span class="t-list">收货地址</span>
      </router-link>
    </ul>
    <a class="logout-btn">
      退出当前账号
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .container {
    background-color: #f8f8f8;
    min-height: 100vh;
  }
  .header-banner {
    display: flex;
    align-content: center;
    text-align: center;
    font-size: 1.8rem;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
    h2 {
      flex: 1;
    }
    > span {
      width: 44px;
      i {
        font-size: 2rem;
      }
    }
    .back-btn {
      width: 44px;
      height: 44px;
      &:after {
        content: '';
        display: inline-block;
        border-left: 1px solid #aaa;
        border-top: 1px solid #aaa;
        vertical-align: middle;
        width: 12px;
        height: 12px;
        transform: rotate(-45deg);
      }
    }
  }
  .list-bar {
    margin: 12px 0;
    background-color: #fff;
    li {
      position: relative;
      font-size: 1.6rem;
      height: 44px;
      line-height: 44px;
      padding: 0 4%;
      &:after {
        content: '';
        border: 1px solid #666;
        border-left: none;
        border-top: none;
        transform: rotate(-45deg);
        width: 8px;
        height: 8px;
        position: absolute;
        top: 50%;
        margin-top: -5px;
        right: 4%;
      }
    }
  }
  .logout-btn {
    display: block;
    width: 92%;
    margin: 8% auto;
    color: #fff;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background-color: #ff5000;
    font-size: 1.8rem;
    border-radius: 4px;
  }
</style>
