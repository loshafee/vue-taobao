<template>
  <div class="news-bar">
    <span class="news-bar-logo">
      <img src="/static/img/topnews.png" alt="">
    </span>
    <div class="news-bar-content" v-for="(news, index) in newsList" :key="index" :class="(index === activeIndex)?'active':''">
      <span class="tag">
        {{ news.tag }}
      </span>
      <p>
        {{ news.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeTopNews',
  data () {
    return {
      activeIndex: 0,
      newsList: [
        {
          tag: '热文',
          title: '外国人进门处从不放鞋柜，是为什么呢？'
        },
        {
          tag: '萌宠',
          title: '不放鞋柜，是为什么呢？'
        },
        {
          tag: '围观',
          title: '???'
        },
        {
          tag: '运动',
          title: '鞋柜，是为什么呢？'
        }
      ]
    }
  },
  methods: {
    tab () {
      this.activeIndex++
      if (this.activeIndex >= this.newsList.length) {
        this.activeIndex = 0
      }
    }
  },
  mounted () {
    // this.timerId = setInterval(this.tab.bind(this), 3000)
  },
  beforeDestroy () {
    clearInterval(this.timerId)
  }
}
</script>

<style scoped lang="less">
  .news-bar {
    border-top: 1px solid #d9d9d9;
    padding: 8px 3%;
    margin: 0 auto;
    display: flex;
    background-color: #fff;
    &-logo {
      width: 86px;
      box-sizing: border-box;
      border-right: 1px solid #d9d9d9;
      margin-right: 12px;
      padding-right: 10px;
    }
    &-content {
      display: none;
      width: 80%;
      &.active {
        display: block;
      }
      font-size: 1.4rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .tag {
        padding: 2px 4px;
        border: 1px solid red;
        color: red;
        border-radius: 4px;
        margin-right: 2px;
      }
      span, p {
        display: inline-block;
      }
    }
  }
</style>
