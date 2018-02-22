<template>
    <div class="channel">
      <h2>
        <i class="icon iconfont icon-tag"></i>
        <span>超实惠</span>
      </h2>
      <div class="channel-product-box">
        <ul>
          <li>
            <a href="###">
              <img src="/static/img/c2_1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="###">
              <img src="/static/img/c2_2.png" alt="">
            </a>
          </li>
          <li>
            <a href="###">
              <img src="/static/img/c2_3.png" alt="">
            </a>
          </li>
          <li>
            <a href="###">
              <img src="/static/img/c2_4.jpg" alt="">
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="###">
              <img src="/static/img/c2_1_1.png" alt="">
            </a>
          </li>
          <li>
            <a href="###">
              <img src="/static/img/c2_2_1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="###">
              <img src="/static/img/c2_3_1.jpg" alt="">
            </a>
          </li>
          <li>
            <a href="###">
              <img src="/static/img/c2_4_1.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeChannelAffordable',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .channel {
    background-color: #fff;
    margin-top: 2%;
  }
  .channel h2 {
    text-align: center;
    color: rgb(255, 53, 14);
    font-size: 1.6rem;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #eee;

  }
  .channel-product-box ul {
    display: flex;
    height: 120px;
  }
</style>
