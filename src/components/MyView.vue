<template>
  <div class="my-own">
    <header>
      <div>
        <img src="/static/img/mine_banner.jpg" alt="">
      </div>
      <div class="user-photo">
        <img src="/static/img/default_head.jpg" alt="">
      </div>
      <ul>
        <li>
          <span>0</span>
          <p>收藏的宝贝</p>
        </li>
        <li>
          <span>0</span>
          <p>收藏的店铺</p>
        </li>
        <li>
          <span>0</span>
          <p>我的足迹</p>
        </li>
      </ul>
      <router-link to="my/setting" class="setting-btn">设置</router-link>
    </header>
    <section>
      <ul class="my-channel">
        <li>
          <a href="###">
            <i class="icon iconfont icon-file"></i>
            <p>待付款</p>
          </a>
        </li>
        <li>
          <a href="###">
            <i class="icon iconfont icon-deliver"></i>
            <p>待发货</p>
          </a>
        </li>
        <li>
          <a href="###">
            <i class="icon iconfont icon-edit"></i>
            <p>待收货</p>
          </a>
        </li>
        <li>
          <a href="###">
            <i class="icon iconfont icon-mark"></i>
            <p>待评价</p>
          </a>
        </li>
        <li>
          <a href="###">
            <i class="icon iconfont icon-service"></i>
            <p>退款/售后</p>
          </a>
        </li>
      </ul>
      <ul class="list-bar">
        <li>
          <a href="###">
            <span class="list-icon list-icon-1"><i class="icon iconfont icon-copy"></i></span>
            <span class="t-list">全部订单</span>
            <span class="list-subTips">查看全部订单</span>
          </a>
        </li>
      </ul>

      <ul class="list-bar">
        <li>
          <a href="###">
            <span class="list-icon list-icon-2"><i class="icon iconfont icon-cart"></i></span>
            <span class="t-list">购物车</span>
          </a>
        </li>
        <li>
          <a href="###">
            <span class="list-icon list-icon-3"><i class="icon iconfont icon-search"></i></span>
            <span class="t-list">搜索</span>
          </a>
        </li>
        <li>
          <a href="###">
            <span class="list-icon list-icon-4"><i class="icon iconfont icon-shopping"></i></span>
            <span class="t-list">支付宝</span>
          </a>
        </li>
        <li>
          <a href="###">
            <span class="list-icon list-icon-5"><i class="icon iconfont icon-rest"></i></span>
            <span class="t-list">旺旺</span>
          </a>
        </li>
      </ul>
      
      <ul class="list-bar">
        <li>
          <a href="###">
            <span class="list-icon list-icon-4"><i class="icon iconfont icon-roundcheck"></i></span>
            <span class="t-list">我的彩票</span>
          </a>
        </li>
        <li>
          <a href="###">
            <span class="list-icon list-icon-3"><i class="icon iconfont icon-video"></i></span>
            <span class="t-list">我的机票</span>
          </a>
        </li>
      </ul>
    </section>

    <footer class="footer-bar">
      <ul>
        <li>
          <a href></a>
        </li>
        <li>
          <a href="###">退出</a>
        </li>
        <li>
          <router-link to="/feedback">意见反馈</router-link>
        </li>
        <li>
          <a href="###">电脑版</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  .my-own {
    background-color: #f8f8f8;
    min-height: 100vh;
    header {
      position: relative;
      background-color: #fff;
      .setting-btn {
        position: absolute;
        right: 10px;
        top: 10px;
        padding: 6px 12px;
        font-size: 1.4rem;
        text-align: center;
        color: #fff;
        border-radius: 20px;
        background-color: rgba(0,0,0,.5);
      }
    }
    .user-photo {
      position: absolute;
      left: 20px;
      top: 78px;
      width: 70px;
      height: 70px;
      border-radius: 100px;
      overflow: hidden;
    }
    header ul {
      display: flex;
      margin-left: 20%;
      li {
        flex: 1;
        text-align: center;
        color: #333;
        font-size: 1.4rem;
        margin: 3% 0;
        border-left: 1px solid #d9d9d9;
        &:first-child {
          border-left: none;
        }
        p {
          margin-top: 5px;
        }
      }
    }
    
    .my-channel {
      background-color: #fff;
      padding: 4% 0;
      margin-top: 4%;
      display: flex;
      font-size: 1.2rem;
      color: #555;
      li {
        flex: 1;
        text-align: center;
        a {
          display: block;
          width: 100%;
        }
      }
      .icon {
        font-size: 2rem;
      }
    }
    .list-bar {
      background-color: #fff;
      margin-bottom: 4%;
      li {
        position: relative;
        border-top: 1px solid #e7e7e7;
        &:last-child {
          border-bottom: 1px solid #e7e7e7;
        }
        &:after {
          content: '';
          border: 1px solid #666;
          border-left: none;
          border-top: none;
          transform: rotate(-45deg);
          width: 10px;
          height: 10px;
          position: absolute;
          top: 50%;
          margin-top: -5px;
          right: 4%;
        }
      }
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 8% 0 4%;
        height: 44px;
        line-height: 44px;
        .list-icon {
          color: #fff;
          width: 28px;
          height: 28px;
          text-align: center;
          line-height: 28px;
          border-radius: 4px;
          &-1 {
            background-color: #5090cd;
          }
          &-2 {
            background-color: #e7a200;
          }
          &-3 {
            background-color:#5090cd;
          }
          &-4 {
            background-color: #00aeef;
          }
          &-5 {
            background-color: #00aeef;
          }
          &-6 {
            background-color: #e64c2e;
          }
          .iconfont {
            font-size: 1.8rem;
          }
        }
        .t-list {
          flex: 1;
          font-size: 1.6rem;
          color: #333;
          padding: 0 3%;
        }
      }
    }

    .footer-bar {
      background-color: #fff;
      font-size: 1.6rem;
      
      ul {
        display: flex;
        
        li {
          flex: 1;
          text-align: center;
          a {
            height: 44px;
            line-height: 44px;
            display: block;
          }
        }
      }
    }
  }
</style>
