<template>
  <div class="item-container">
    <header class="header-bar">
      <router-link :to="'/'">
        <i class="icon iconfont icon-left"></i>
      </router-link>
      <a href="###">
        <i class="icon iconfont icon-cart"></i>
      </a>
    </header>
    <div :class="showable ? 'atlas-box': ''" @click="onShowAtlas" class="container-box">
      <home-banner :slides="slides" :ref="'container'"></home-banner>
    </div>
    <div class="info-box">
      <h2>澳门特产手工紫菜肉松蛋卷250gx3盒年货零食大礼包好吃的饼干糕点</h2>
      <div class="price-banner">
        <strong>
          <span>&yen;</span>
          <em>245-255</em>
        </strong>
        <span>
          火爆促销
        </span>
        <span>
          淘金币抵20%
        </span>
      </div>
      <p class="price-del">价格：&yen; <del>490-600</del></p>
      <div class="pro-address">
        <span>快递：免运费</span>
        <span>月销633笔</span>
        <span>浙江丽水</span>
      </div>
      <div class="service-tags" @click="onShowServiceTags">
        <span v-for="(tags, index) in serviceTags" :key="index">
          <i class="icon iconfont icon-roundcheck"></i>
          {{ tags.title }}
        </span>
      </div>
    </div>
  
    <div class="dimension-bar" @click="onShowDimensionPannel">
      <div v-if="this.selectedSpan.length">
        已选：{{ this.selectedSpan.join(' ') }}
      </div>
      <div v-else>
        请选择
        <span v-for="(tags,index) in lists" :key="index">
          {{ tags.title }}
        </span>
      </div>
    </div>

    <div class="comment-box">
      <div>
        <p class="c-t">宝贝评价（2557）</p>
        <div class="comment-tags-box">
          <span v-for="(comment, index) in commentLists.tags" :key="index">
            {{ comment.title }}({{ comment.count }})
          </span>
        </div>
      </div>
      <ul>
        <li>
          <p class="buyer-info">
            <span class="buyer-logo">
              <img src="/static/img/header.jpg" alt="">
            </span>
            <span class="nickname">李*子</span>
            <span class="icon-love"></span>
            <span class="icon-love"></span>
            <span class="icon-love"></span>
            <span class="icon-love"></span>            
            <span class="icon-love"></span>            
          </p>
          <div class="comment-content">
              这被子确实不错，重量足，挺柔软的，颜色正面料挺不错，看起挺高档的。比我之前买的羽绒被好百倍，因为之前的羽绒被盖了也不暖和，也好像每天跟羽毛睡觉一样，衣服全是羽毛。才买这张被子结果收到非常满意，有需要再来买。
          </div>
          <div class="comment-tips">
            <span>颜色分类：玉色</span>
            <span>200*300cm 8斤冬被</span>
          </div>
        </li>
      </ul>
      <router-link to="item/comment" class="btn-view-comment">
        查看全部评价
      </router-link>
    </div>

    <item-details></item-details>

    <item-footer-bar></item-footer-bar>

    <footer class="buyer-bar">
      <div>
        <a class="add-btn" @click="onShowDimensionPannel">加入购物车</a>
        <a class="buy-btn" @click="onShowDimensionPannel">立即购买</a>
      </div>
    </footer>
    <div class="service-info" v-if="serviceTagsShowable" @click="onHideServiceTags">
      <div class="service-info-box" @click.stop>
        <h2>服务说明</h2>
        <ul>
          <li v-for="(tag, index) in serviceTags" :key="index">
            <dl>
              <dt>
                <i class="icon iconfont icon-roundcheck"></i>
                {{ tag.title }}
              </dt>
              <dd v-if="tag.desc">
                {{ tag.desc }}
              </dd>
            </dl>
          </li>
        </ul>
        <a href="javascript:void(0);" class="ensure-btn" @click="onHideServiceTags">
          确认
        </a>
      </div>
    </div>

    <div class="product-items" v-if="showDimensitionable" @click="onHideDimensionPannel">
      <div class="product-items-box" @click.stop>
        <header>
          <div>
            <img src="/static/img/p2.jpg" alt="">
          </div>
          <div>
            <span>&yen;49-79</span>
            <p>库存：{{ stock }}</p>
            <p>
              <span v-if="selectedSpan.length" class="selected-tag">
                已选：
                {{ selectedSpan.join(' ') }}
              </span>
              <span v-if="selectedSpan.length !== lists.length">
                请选择：
                <span 
                  v-for="(item,index) in lists" 
                  :key="index" 
                  v-if="!item.selectedTag">
                  {{ item.title }}
                </span>
              </span>
            </p>
          </div>
        </header>
        <ul class="product-list">
          <li v-for="(list, index) in lists" :key="index">
            <p>{{ list.title }}</p>
            <div>
              <span v-for="(tag, i) in list.tags" 
                    :key="i" 
                    :class="{'active': i === list.selectedTag}"
                    @click="(list.selectedTag === i) ? (list.selectedTag = '') : (list.selectedTag = i)">
                {{ tag }}
              </span>          
            </div>
          </li>
        </ul>
        <div class="count-bar">
          <span>
            购买数量
          </span>
          <span class="btn" 
          :class="{'disabled': count <= 1}"
          @click="minusCount">-</span>
          <input type="tel" 
          v-model="count"
          @input="matchNumber">
          <span class="btn"
          :class="{'disabled': count >= stock}"
          @click="addCount">+</span>
        </div>
        <footer class="footer-bar">
          <a href="javascript:void(0);" @click="addToCart">
            加入购物车
          </a>
          <a href="javascript:void(0);">
            立即购买
          </a>
        </footer>
      </div>
    </div>

  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner'
import ItemDetails from '@/components/ItemDetails'
import ItemFooterBar from '@/components/ItemFooterBar'
export default {
  name: 'ItemView',
  data () {
    return {
      showable: false,
      slides: [{
        href: '',
        src: '/static/img/p1.webp'
      },
      {
        href: '',
        src: '/static/img/p2.webp'
      },
      {
        href: '',
        src: '/static/img/p3.webp'
      },
      {
        href: '',
        src: '/static/img/p4.webp'
      }],
      serviceTagsShowable: false,
      serviceTags: [{
        title: '15天退货',
        desc: '15天退货，退货邮费买家承担'
      }, {
        title: '1次破损补寄',
        desc: '商品在运输途中出现破损的，消费者可向卖家提出补寄申请，可补寄1次，补寄邮费由买家承担'
      }, {
        title: '运费险'
      }, {
        title: '集分宝',
        desc: ''
      }, {
        title: '支付宝支付',
        desc: ''
      }],
      commentLists: {
        tags: [{
          title: '质量很好+',
          count: 305
        }, {
          title: '划算+',
          count: 190
        }, {
          title: '颜色不错+',
          count: 82
        }, {
          title: '快递不错+',
          count: 122
        }, {
          title: '手感不错+',
          count: 34
        }, {
          title: '物流太慢+',
          count: 33
        }]
      },
      showDimensitionable: false,
      stock: 10,
      count: 1,
      lists: [{
        title: '尺寸',
        tags: ['150*200cm3斤夏被', '150*200cm4斤夏被', '150*200cm6斤夏被', '150*200cm3斤春被'],
        selectedTag: ''
      }, {
        title: '颜色分类',
        tags: ['粉色-蚕丝棉被', '玉色-蚕丝棉被', '米黄-蚕丝棉被', '白色-蚕丝棉被'],
        selectedTag: ''
      }]
    }
  },
  computed: {
    selectedSpan () {
      return this.lists.reduce((array, item) => {
        if (item.selectedTag !== '') {
          array.push(item.tags[item.selectedTag])
        }
        return array
      }, [])
    },
    selectedTagsTitle () {
      return this.lists.reduce((array, item) => {
        if (item.selectedTag === '') {
          array.push(item.title)
        }
        return array
      }, [])
    }
  },
  mounted () {
  },
  methods: {
    onShowAtlas () {
      this.showable = !this.showable
      let pos = (this.showable) ? 'static' : 'relative'
      this.$refs.container.$el.style.position = pos
    },
    onShowServiceTags () {
      this.serviceTagsShowable = true
    },
    onHideServiceTags () {
      this.serviceTagsShowable = false
    },
    onShowDimensionPannel () {
      this.showDimensitionable = true
    },
    onHideDimensionPannel () {
      this.showDimensitionable = false
    },
    minusCount () {
      if (this.count <= 1) return
      this.count--
    },
    addCount () {
      if (this.count >= this.stock) return
      this.count++
    },
    matchNumber (event) {
      if (!/^(\d+)?$/.test(event.target.value)) {
        this.count = 1
      }
    },
    addToCart () {
      if (this.selectedSpan.length !== this.lists.length) {
        this.$layer.open({
          content: '请选择 ' + this.selectedTagsTitle.join(' '),
          shade: false,
          style: 'color: #fff; background-color: rgba(0,0,0,0.8);width:70%; margin: 0 auto;',
          time: 3
        })
      }
    }
  },
  components: {
    HomeBanner,
    ItemDetails,
    ItemFooterBar
  }
}
</script>

<style lang="less" scoped>
  .item-container {
    background-color: #eee;
    min-height: 100vh;
  }
  .header-bar {
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    height: 40px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    padding: 8px 16px;
    a {
      color: #fff;
      width: 36px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      border-radius: 20px;
      background-color: rgba(0,0,0,.4);
      .icon {
        font-size: 2rem;
      }
    }
  }
  .container-box {
    .swiper-container {
      height: 100vw;
      overflow: hidden;
    }
  }
  .atlas-box {
    z-index: 100;
    position: fixed;
    height: 100vh;
    width: 100%;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0,.8);
  }
  .info-box {
    padding: 0 4%;
    border-bottom: 1px solid #eee;    
    background-color: #fff;    
    h2 {
      font-size: 1.6rem;
      color: #333;
      line-height: 1.2;
      padding: 6px 0;
    }
    .price-banner {
      strong {
        display: inline-block;
        vertical-align: middle;
        color: #ff651e;
        font-size: 2rem;   
        margin-right: 8px;     
      }
      > span {
        display: inline-block;
        vertical-align: middle;
        font-size: 1.2rem;
        margin: 0 2px;
        height: 24px;
        line-height: 24px;
        padding: 0 6px;
        border: 1px solid #ff9204;
        border-radius: 4px;
        color: #ff9204;
      }
    }
    .price-del, .pro-address {
      color: #999;
      font-size: 1.2rem;
    }
    .price-del {
      margin: 6px 0;
    }
    .pro-address {
      display: flex;
      justify-content: space-between;
    }
    .service-tags {
      margin-top: 6px;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      height: 40px;
      overflow: hidden;
      background-position: right center;
      background-repeat: no-repeat;
      background-size: 7.5px 13px;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjQzMkFFNTQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MjQzMkFFNjQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNDMyQUUzNDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNDMyQUU0NDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YpVSkgAAATZJREFUeNpinDlzJhsDA0MBEP8E4mlpaWm/GYgETECcC8SdQDwBiNfOmjWLjRTNv5D4vkC8hlgDQJqnAfEycgxgAvrxL5COI8cAkM0M5BrABGOQYwDj////UQSACpmB1CIgjkIS3gcyCGjBN6w2Y3HBXCRhJyDeAjSYC69mJANSgXgGkrAjugFMuAIDaADIP1n4DMDwMzoAKmSEpoUMJOHbQGzERCghILlgDpKwKhDPZiIyGbMCsSya2HuCmqFxvAaI3ZGEdwBxDhORGn2RhEEB6AX0zj+cAYZD42IgjoeGA/aowqERlGwTYRqxasajMQ6aeLCnMFI0omiGZojFxGqEa0bKSWHEagQBZikpKWxZkKBGmM1xaBo3EaMRphk50DYDcSgxGkGABYgXgJwPxXNIKfQBAgwAqZCKsABxZ/8AAAAASUVORK5CYII=);      
      font-size: 1.3rem;
      > span {
        margin-right: 3%;
        .icon {
          color:#ff9204;
        }
        // flex: 1;
        // text-align: center;
        height: 40px;
        line-height: 40px;
      }
    }
  }
  .dimension-bar {
    background-color: #fff;
    height: 44px;
    line-height: 44px;
    margin: 12px 0;
    padding: 0 4%;
    font-size: 1.4rem;
    background-position: 96% center;
    background-repeat: no-repeat;
    background-size: 7.5px 13px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAaCAYAAABozQZiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1MjQzMkFFNTQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1MjQzMkFFNjQ0MEYxMUU1OTZDRjk2ODYxMEYzRTU0MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjUyNDMyQUUzNDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjUyNDMyQUU0NDQwRjExRTU5NkNGOTY4NjEwRjNFNTQxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YpVSkgAAATZJREFUeNpinDlzJhsDA0MBEP8E4mlpaWm/GYgETECcC8SdQDwBiNfOmjWLjRTNv5D4vkC8hlgDQJqnAfEycgxgAvrxL5COI8cAkM0M5BrABGOQYwDj////UQSACpmB1CIgjkIS3gcyCGjBN6w2Y3HBXCRhJyDeAjSYC69mJANSgXgGkrAjugFMuAIDaADIP1n4DMDwMzoAKmSEpoUMJOHbQGzERCghILlgDpKwKhDPZiIyGbMCsSya2HuCmqFxvAaI3ZGEdwBxDhORGn2RhEEB6AX0zj+cAYZD42IgjoeGA/aowqERlGwTYRqxasajMQ6aeLCnMFI0omiGZojFxGqEa0bKSWHEagQBZikpKWxZkKBGmM1xaBo3EaMRphk50DYDcSgxGkGABYgXgJwPxXNIKfQBAgwAqZCKsABxZ/8AAAAASUVORK5CYII=); 
  }
  .comment-box {
    padding: 6px 4%;
    background-color: #fff;
    font-size: 1.4rem;
    .c-t {
      height: 36px;
      line-height: 36px;
    }
    .comment-tags-box {
      display: flex;
      flex-wrap: wrap;
      font-size: 1.3rem;
      span {
        background-color: #ffefef;
        border-radius: 4px;
        color: #111;
        padding: 4px 6px;
        margin-right: 6px;
        margin-bottom: 8px;
      }
    }
    ul {
      font-size: 1.3rem;
      margin: 6px 0;
      .buyer-info {
        display: flex;
        align-items: center;
        .buyer-logo {
          border-radius: 50%;
          overflow: hidden;
          height: 20px;
          width: 20px;
        }
        .nickname {
          margin: 0 4px;
        }
        .icon-love {
          background: url(/static/img/c_1.png) no-repeat;
          background-size: 16px 15px;
          background-position: center center;
          width: 16px;
          height: 20px;
        }
      }
      .comment-content {
        margin: 8px 0;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
      }
      .comment-tips {
        color: #999;
      }
    }
    .btn-view-comment {
      display: block;
      width: 40%;
      text-align: center;
      margin: 0 auto;
      border-radius: 4px;
      border: 1px solid #ff5000;
      color: #ff5000;
      padding: 6px 0;
    }
  }
  .buyer-bar {
    height: 60px;
    > div {
      position: fixed;
      width: 100%;
      left: 0;
      bottom: 0;
      display: flex;
      height: 44px;
      line-height: 44px;
      text-align: center;
      a {
        flex: 1;
        font-size: 1.4rem;
        color: #fff;
        &.add-btn {
          background-color: #ff9402;
        }
        &.buy-btn {
          background-color: #ff5000;
        }
      }
    }
  }
  .service-info {
    z-index: 100;
    position: fixed;
    left: 0;
    top:0;
    background-color: rgba(0,0,0,.4);
    width: 100%;
    height: 100vh;
    &-box {
      position: absolute;
      left: 0;
      width: 100%;
      bottom: 0;
      background-color: #fff;
      padding-top: 6px;
      height: 80%;
      ul {
        height: 80%;
        overflow-y: auto;
      }
      h2 {
        text-align: center;
        font-size: 1.8rem;
        height: 50px;
        line-height: 50px;
      }
      li {
        border-bottom: 1px solid #eee;
        padding: 18px 4%;
      }
      dl dt {
        font-size: 1.6rem;
        color: #333;
        .icon {
          color:#ff9204;
          font-size: 2rem;
          margin-right: 6px;
        }
      }
      dd {
        font-size: 1.2rem;
        color: #999;
        margin-left: 2em;
        margin-top: 8px;
        line-height: 1.6;
      }
      .ensure-btn {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        color: #fff;
        background-color: #ff5000;
        font-size: 1.6rem;
        height: 48px;
        line-height: 48px;
        text-align: center;
      }
    }
  }
  .product-items {
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,.4);
    &-box {
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: #fff;
      width: 100%;
      header {
        display: flex;
        padding-right: 4%;
        align-items: center;
        font-size: 1.6rem;
        border-bottom: 1px solid #eee;
        .selected-tag {
          color: #999;
        }
        p {
          margin: 4px 0;
        }
        div:first-child {
          position: relative;
          top: -16px;
          margin: 0 12px;
          border-radius: 8px;
          overflow: hidden;
        }
        div:nth-child(2) {
          width: 60%;
        }
        div > span {
          color:#ff5000;
        }
      }
      .product-list {
        padding: 0 4%;
        li {
          margin: 8px 0;
          border-bottom: 1px solid #eee;
          padding-bottom: 4px;
        }
        p {
          font-size: 1.6rem;
          height: 40px;
          line-height: 40px;
        }
        div {
          display: flex;
          flex-wrap: wrap;
          span {
            color: #333;
            height: 32px;
            line-height: 32px;
            padding: 0 8px;
            border-radius: 4px;
            background-color: #f9f9f9;
            font-size: 1.4rem;
            margin-right: 8px;
            margin-bottom: 8px;
            &.active {
              background-color: #ff5000;
              color: #fff;
            }
          }
        }
      }
      .count-bar {
        display: flex;
        margin: 8px 4%;
        padding: 8px 0 14px;
        border-bottom: 1px solid #eee;
        span:first-child {
          flex: 1;
          font-size: 1.6rem;
          line-height: 26px;
        }
        input {
          font-size: 1.4rem;
          width: 28px;
          color: #333;
          background-color: #f1f1f1;
          margin: 0 4px;
          text-align: center;
        }
        .btn {
          width: 28px;
          height: 26px;
          line-height: 26px;
          text-align: center;
          color: #878787;
          background-color: #f1f1f1;
          font-size: 2rem;
          font-weight: bold;
          &.disabled {
            background-color: #f9f9f9;
            color: #dddddd;
          }
        }
      }
    }
    .footer-bar {
      margin-top: 16px;
      display: flex;
      a {
        color: #fff;
        font-size: 1.4rem;
        text-align: center;
        height: 44px;
        line-height: 44px;
        flex: 1;
        &:first-child {
          background-color: #f90;
        }
        &:nth-child(2) {
          background-color: #f60;
        }
      }
    }
  }
</style>
