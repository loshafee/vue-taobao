<template>
  <div>
    <header class="header-banner">
      <router-link to="/item" class="back-btn"></router-link>      
      <h2>评论</h2>
    </header>
    <div class="comment-list">
      <div class="top-tags">
        <span>全部</span>
        <span>好评({{ commentCount.good }})</span>
        <span>中评({{ commentCount.normal }})</span>
        <span>差评({{ commentCount.bad}})</span>
      </div>
      <ul>
        <li v-for="(comment, index) in currentCommentList" :key="index">
          <p class="buyer-info">
            <span class="buyer-logo">
              <img :src="comment.userInfo.logoUrl" alt="">
            </span>
            <span class="nickname"> {{comment.userInfo.nickName}} </span>
            <span v-for="i in comment.userInfo.rank.level" 
                  :key="i"
                  class="icon-style"
                  :class="'icon-' + comment.userInfo.rank.icon">
            </span>           
          </p>
          <div class="comment-content">
            {{ comment.message }}
          </div>
          <p class="comment-time"> {{comment.date}} </p>
          <div class="comment-image">
            <p v-for="(image, index) in comment.commentImages" :key="index">
              <img :src="image" alt="">
            </p>
          </div>  
        </li>
      </ul>
    </div>
    <footer class="footer-pagination">
      <div>
        <a class="prev-btn" :class="{'disabled': currentPage === 0}" @click="onPrevPage">上一页</a>
        <select name="" id="" @change="onSelectPage($event.target.selectedIndex)">
          <option :selected="index===currentPage" :value="index" 
                  v-for="(page, index) in totalPage" 
                  :key="index">
                  第 {{ index + 1 }} 页
          </option>
        </select>
        <a class="next-btn" :class="{'disabled': currentPage === totalPage - 1}" @click="onNextPage">下一页</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'ItemComment',
  data () {
    return {
      commentCount: {
        good: 12345,
        normal: 222,
        bad: 12
      },
      currentPage: 0,
      perPageCount: 10,
      commentLists: [{
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-1',
            level: 3
          }
        },
        message: '昨晚才拿到手！！这几天在下雪！！明天天气晴晒下，晚上盖下看看！！然后在给你评价吧！',
        date: '2018-01-01',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }, {
        userInfo: {
          logoUrl: '/static/img/header.jpg',
          nickName: '李**子',
          rank: {
            icon: 'style-2',
            level: 3
          }
        },
        message: '这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。',
        date: '2018-01-02',
        commentImages: ['/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg', '/static/img/p1.jpg']
      }]
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.commentLists.length / 10)
    },
    currentCommentList () {
      return this.commentLists.slice().splice(this.currentPage * this.perPageCount, 10)
    }
  },
  methods: {
    onSelectPage (index) {
      this.currentPage = index
      this.onToTop()
    },
    onPrevPage () {
      if (this.currentPage <= 0) return
      this.currentPage--
      this.onToTop()
    },
    onNextPage () {
      if (this.currentPage >= this.totalPage - 1) return
      this.currentPage++
      this.onToTop()
    },
    onToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
  .header-banner {
    position: relative;
    text-align: center;
    font-size: 1.6rem;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #eee;
    .back-btn {
      position: absolute;
      left: 0;
      top: 0;
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
  .top-tags {
    font-size: 1.4rem;
    margin: 0 auto;
    border-bottom: 1px solid #eee;
    width: 90%;
    padding: 16px 4px;
    span {
      &:first-child {
        color: #fff;
        background-color: #f50;
      }
      background-color: #ffefef;
      border-radius: 4px;
      color: #111;
      padding: 4px 6px;
      margin-right: 6px;
      margin-bottom: 8px;
    }
  }
  .comment-list {
    ul {
      font-size: 1.3rem;
      margin: 0 auto 8px;
      width: 92%;
      color: #444;
      li {
        border-bottom: 1px solid #eee;
        padding: 12px 0 14px;
      }
      .buyer-info {
        display: flex;
        align-items: center;
        .buyer-logo {
          border-radius: 50%;
          overflow: hidden;
          height: 36px;
          width: 36px;
        }
        .nickname {
          margin: 0 4px;
        }
        .icon-style {
          background-size: 16px 15px;
          background-position: center center;
          width: 16px;
          height: 20px;
          background-repeat: no-repeat;
        }
        .icon-style-1 {
          background-image: url(/static/img/c_1.png);
        }
        .icon-style-2 {
          background-image: url(/static/img/b_blue_1.gif);
        }
      }
      .comment-content {
        margin-top: 12px;
        line-height: 1.5;
      }
      .comment-time {
        margin-top: 8px;
        color: #999;
      }
      .comment-image {
        display: flex;
        flex-wrap: wrap;
        p {
          flex-basis: 14%;
          margin-right: 4px;
          margin-top: 8px;
        }
      }
    }
  }
  .footer-pagination {
    height: 48px;
    line-height: 48px;
    font-size: 1.4rem;
    > div {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      background-color: #fff;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-around;
      align-items: center;
      a.disabled {
        color: #999;
      }
    }
    select {
      height: 48px;
      color: #333;
      font-size: 1.4rem;
      -webkit-appearance: none;
      padding: 0 16px;
      border: none;
      outline: none;
    }
  }
</style>
