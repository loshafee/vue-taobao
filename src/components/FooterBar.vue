<template>
  <footer>
    <ul class="footer-list">
      <li class="list">
        <a href="###">
          <i class="icon iconfont icon-home"></i>        
          <span>首页</span>
        </a>
      </li>
      <li>
        <a href="###">
          <i class="icon iconfont icon-deliver"></i>        
          <span>物流</span>
        </a>
      </li>
      <li>
        <a href="###">
          <i class="icon iconfont icon-cart"></i>        
          <span>购物车</span>
        </a>
      </li>
      <li>
        <router-link to="/my">
          <i class="icon iconfont icon-my"></i>
          <span>我的淘宝</span>
        </router-link>
      </li>
      <li>
        <a href="javascript:void(0);" @click="onFindMore">
          <i class="icon iconfont icon-more"></i>
          <span>更多</span>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  data () {
    return {

    }
  },
  methods: {
    onFindMore () {
      this.$layer.open({
        content: '此功能需要安装淘宝才能打开哦~',
        btn: ['下载手机淘宝', '逛逛别的'],
        no: (index) => {
          this.$layer.close(index)
        },
        yes: (index) => {
          this.$layer.close(index)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
  footer {
    height: 48px;
  }
  .footer-list {
    display: flex;
    background-color: #fff;
    padding: 4px 0;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid #eee;
    li {
      flex: 1;
      text-align: center;
    }
    .icon {
      font-size: 1.8rem;
    }
    li span {
      font-size: 1.2rem;
      display: block;
    }
  }
</style>

