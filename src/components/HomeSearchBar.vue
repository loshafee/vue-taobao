<template>
  <header class="header-bar">
    <div>
      <span class="logo">
       <i class="icon iconfont icon-code"></i>
      </span>
      <div class="input-bar">
        <router-link :to="'search'">
          <span>
            <i class="icon iconfont icon-search"></i>
            <i>{{ placeholder }}</i>
          </span>
        </router-link>
        
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      placeholder: '寻找宝贝店铺'
    }
  }
}
</script>

<style scoped lang="less">
  .header-bar {
    height: 41px;
    > div {
      display: flex;
      padding: 6px 10px;
      background-color: #fe5400;
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      box-sizing: border-box;
      z-index: 1000;
    }
    
    .logo {
      height: 28px;
      background-color: #fff;
      margin-right: 4px;
      i {
        font-size: 30px;
        &.icon-code {
          position: relative;
          top: 5px;
        }
      }
    }
    .input-bar {
      flex: 1;
      span {
        font-size: 1.6rem;
        background-color: #fff;
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 5px 8px;
        border: none;
        text-align: center;
      }
    }
  }
</style>


