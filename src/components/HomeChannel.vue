<template>
  <ul class="channel-wrapper">
      <li v-for="(channel,index) in channels" :key="index">
        <a href="">
          <img :src="channel.icon" alt="">
          <span>{{ channel.title }}</span>
        </a>
      </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      channels: [{
        icon: '/static/img/t1.png',
        title: '天猫'
      }, {
        icon: '/static/img/t2.png',
        title: '聚划算'
      }, {
        icon: '/static/img/t3.png',
        title: '天猫国际'
      }, {
        icon: '/static/img/t4.png',
        title: '外卖'
      }, {
        icon: '/static/img/t5.png',
        title: '天猫超市'
      }, {
        icon: '/static/img/t6.png',
        title: '充值中心'
      }, {
        icon: '/static/img/t7.png',
        title: '飞猪旅行'
      }, {
        icon: '/static/img/t8.png',
        title: '领金币'
      }, {
        icon: '/static/img/t9.png',
        title: '拍卖'
      }, {
        icon: '/static/img/t10.png',
        title: '分类'
      }]
    }
  }
}
</script>

<style scoped lang="less">
  .channel-wrapper {
    display: flex;
    padding: 4% 5%;
    flex-wrap: wrap;
    background-color: #fff;
    li {
      flex: 18%;
      text-align: center;
      margin-bottom: 4%;
      font-size: 1.4rem;
      img {
        margin-bottom: 4px;
      }
    }
  }
</style>
