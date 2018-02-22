<template>
  <div class="list-container">
    <header class="search-banner">
      <div class="search-banner-main">
        <select name="" id="">
          <option value="" selected>宝贝</option>
          <option value="">店铺</option>
          <option value="">天猫</option>          
        </select>
        <input type="search" v-model="searchKey" @input="onInput" @focus="onShowPanel">
      </div>
      <div class="tohome">
        <router-link to="/" v-if="searchResultShowable"><i class="icon iconfont icon-home"></i></router-link>
        <div class="top-right-bar" v-else>
          <span @click="onSubmit(searchKey)"><i class="icon iconfont icon-search"></i></span>
          <span @click="onHidePanel">取消</span>
        </div>
      </div>
    </header>
    
    <div class="filter-bar" v-if="searchResultShowable">
      <ul class="filter-bar-top">
        <li>
          <select name="">
            <option value="">综合排序</option>
            <option value="">价格从高到低</option>
            <option value="">价格从低到高</option>
            <option value="">信用排序</option>            
          </select>
        </li>
        <li>
          <span>销量优先</span>
        </li>
        <li @click="showFilter">
          <span>筛选</span>
        </li>
        <li class="list-layout" @click="tabChangeStyle">
          <i class="icon iconfont" :class="getIconStyle"></i>          
        </li>
      </ul>
      <div class="product-list">
        <ul class="product-style" :class="getListStyle">
          <li>
            <div class="product-figure">
              <a href="###"><img src="/static/img/p1.jpg" alt=""></a>
            </div>
            <div class="product-info">
              <a href="###">
                <h2>厚624页！唐诗三百首+宋词三百首/完整版600首 儿童经典 彩图注音版故事书籍儿童唐诗古诗三百首 幼儿早教书正版全集小学生版必背</h2>
              </a>
              <p class="product-price">
                <span class="product-current">&yen; 29.80</span>
                <del class="product-origin">&yen; 50</del>
              </p>
              <p class="product-sub-bar">
                <span>免运费</span>
                <span>666人付款</span>
                <span>上海</span>
              </p>
            </div>
          </li>
          <li>
            <div class="product-figure">
              <a href="###"><img src="/static/img/p1.jpg" alt=""></a>
            </div>
            <div class="product-info">
              <a href="###">
                <h2>厚624页！唐诗三百首+宋词三百首/完整版600首 儿童经典 彩图注音版故事书籍儿童唐诗古诗三百首 幼儿早教书正版全集小学生版必背</h2>
              </a>
              <p class="product-price">
                <span class="product-current">&yen; 29.80</span>
                <del class="product-origin">&yen; 50</del>
              </p>
              <p class="product-sub-bar">
                <span>免运费</span>
                <span>666人付款</span>
                <span>上海</span>
              </p>
            </div>
          </li>
          <li>
            <div class="product-figure">
              <a href="###"><img src="/static/img/p1.jpg" alt=""></a>
            </div>
            <div class="product-info">
              <a href="###">
                <h2>厚624页！唐诗三百首+宋词三百首/完整版600首 儿童经典 彩图注音版故事书籍儿童唐诗古诗三百首 幼儿早教书正版全集小学生版必背</h2>
              </a>
              <p class="product-price">
                <span class="product-current">&yen; 29.80</span>
                <del class="product-origin">&yen; 50</del>
              </p>
              <p class="product-sub-bar">
                <span>免运费</span>
                <span>666人付款</span>
                <span>上海</span>
              </p>
            </div>
          </li>
          <li>
            <div class="product-figure">
              <a href="###"><img src="/static/img/p1.jpg" alt=""></a>
            </div>
            <div class="product-info">
              <a href="###">
                <h2>厚624页！唐诗三百首+宋词三百首/完整版600首 儿童经典 彩图注音版故事书籍儿童唐诗古诗三百首 幼儿早教书正版全集小学生版必背</h2>
              </a>
              <p class="product-price">
                <span class="product-current">&yen; 29.80</span>
                <del class="product-origin">&yen; 50</del>
              </p>
              <p class="product-sub-bar">
                <span>免运费</span>
                <span>666人付款</span>
                <span>上海</span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <section class="search-panel" v-else>
      <ul class="search-result" v-if="searchKey">
        <li v-for="(list, index) in searchTips" :key="index" @click="onSetSearchKey(list[0])">
          <span>
            {{ list[0] }}
          </span>
          <span class="match-key">{{ list[1] }}</span>
          <span class="icon-arrow"><i class="icon iconfont icon-right"></i></span>          
        </li>
      </ul>
      <div class="hot-recoment" v-else>
        <p>大家都在搜</p>
        <div class="hot-recoment-tag">
          <span v-for="(item, index) in hotRecoments.querys" :key="index" @click="onSetSearchKey(item)">
            {{ item }}
          </span>
        </div>
      </div>
    </section>

    <search-filter :showable="showable" @close="hideFilter"></search-filter>
  </div>
</template>

<script>
import SearchFilter from '@/components/SearchFilter'
export default {
  name: 'Search',
  data () {
    return {
      title: '',
      currentStyleIndex: 1,
      listStylePre: 'product-style-',
      iconStyle: ['computer', 'app', 'menu'],
      showable: false,
      searchResultShowable: true,
      searchKey: '',
      hotRecoments: {
        result: [],
        count: 0,
        querys: []
      },
      searchTips: []
    }
  },
  computed: {
    getListStyle () {
      return this.listStylePre + this.currentStyleIndex
    },
    getIconStyle () {
      return 'icon-' + this.iconStyle[this.currentStyleIndex - 1]
    }
  },
  methods: {
    showFilter () {
      this.showable = true
    },
    hideFilter () {
      this.showable = false
    },
    tabChangeStyle () {
      if (this.currentStyleIndex >= 3) {
        this.currentStyleIndex = 0
      }
      this.currentStyleIndex++
    },
    onInput () {
      if (this.searchKey) {
        this.$jsonp('https://suggest.taobao.com/sug', {
          q: this.searchKey,
          jsonpCallback: 'callback'
        }).then((res) => {
          this.searchTips = res.result
        })
      }
    },
    onSetSearchKey (value) {
      value && (this.searchKey = value)
      this.onSubmit()
    },
    onSubmit () {
      this.searchKey && this.$axios.get('/api/search', {
        params: {
          key: this.searchKey
        }
      }).then((res) => {
        this.onHidePanel()
      })
    },
    onShowPanel () {
      this.searchResultShowable = false
    },
    onHidePanel () {
      this.searchResultShowable = true
    },
    onRecoment () {
      this.$jsonp('https://suggest.taobao.com/sug', {
        area: 'sug_hot',
        jsonpCallback: 'callback'
      }).then((res) => {
        this.hotRecoments = res
      })
    }
  },
  mounted () {
    this.onRecoment()
  },
  components: {
    SearchFilter
  }
}
</script>

<style lang="less" scoped>
  .list-container {
    background-color: #eee;    
    min-height: 100vh;
  }
  .search-banner {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-bottom: 1px solid #dbdbdb;
    &-main {
      flex: 1;
      display: flex;
      background-color: #e3e3e5;
      padding: 2px 8px;
      border-radius: 4px;
      select {
        padding: 4px 0;
        background-color: transparent;
        // -webkit-appearance: none;
        outline: none;
        border: none;
        font-size: 1.4rem;        
      }
      input {
        flex: 1;
        padding-left: 12px;
        background-color: transparent;
        font-size: 1.6rem;
        color: #333;
      }
    }
    .tohome {
      text-align: center;
      padding-left: 12px;
      .top-right-bar {
        font-size: 1.4rem;
        white-space: nowrap;
        span {
          display: inline-block;
          height: 28px;
          line-height: 28px;
          vertical-align: middle;
          margin: 0 4px;
        }
      }
      .iconfont {
        font-size: 2rem;
      }
    }
  }
  .filter-bar-top {
    background-color: #fff;
    border-bottom: 1px solid #d9d9d9;    
    display: flex;
    font-size: 1.4rem;
    li {
      flex: 2;
      text-align: center;
      padding: 8px 0;
      color: #333;
      select {
        border: none;
        outline: none;
        padding: 2px 0;
        margin-top: -6px;
        font-size: 1.4rem;
        color: #333;
      }
      > span {
        border-left: 1px solid #d9d9d9;        
        display: block;
      }
      &.list-layout {
        flex: 1;
        border-left: 1px solid #d9d9d9;   
        .iconfont {
          font-size: 1.8rem;
        }     
      }
    }
  }
  .product-style {
    &-1 {
      li {
        flex-direction: column;
        align-items: center;
      }
      .product-figure {
        width: 100%;
      }
    }
    &-2 {
      li {
        flex-direction: row;
      }
      .product-figure {
        flex: 1;
      }
      .product-info {
        flex: 2.5;
        padding-left: 4%;
      }
    }
    &.product-style-3 {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      li {
        display: list-item;
        padding: 3%;
        width: 50%;
        box-sizing: border-box;
        &:nth-child(even) {
          border-left: 1px solid #d9d9d9;
        }
       .product-info a {
          display: none;
        }
        .product-price {
          margin: 3% 0;
        }
      }
    }
    li {
      display: flex;
      padding: 4% 4% 3%;
      border-bottom: 1px solid #d9d9d9;
    }
    .product-info {
      a {
        display: block;
        margin: 2% 0;
        h2 {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          font-weight: bold;
          font-size: 1.6rem;
          line-height: 1.4;
        }
      }
      .product-price {
        margin: 2% 0;
      }
      .product-current {
        color: #eb5211;
        font-size: 1.6rem;
        font-weight: bold;
      }
      .product-origin {
        color: #999;
        font-size: 1.4rem;
      }
      .product-sub-bar {
        color: #999;
        display: flex;
        justify-content: space-between;
      }
    }
  }
  .search-panel {
    font-size: 1.6rem;
    .search-result {
      background-color: #f9f9f9;
      li {
        padding: 0 4%;        
        border-bottom: 1px solid #dedede;
        height: 44px;
        line-height: 44px;
        overflow: hidden;
        .match-key {
          font-size: 1.4rem;
          color: #666;
        }
        .icon-arrow {
          float: right;
        }
      }
    }
    .hot-recoment {
      p {
        background-color: #e3e3e5;
        padding: 6px 4%;
      }
      &-tag {
        background-color: #f9f9f9;
        padding: 3% 4%;
        display: flex;
        flex-wrap: wrap;
        span {
          border: 1px solid #dedede;
          color: #666;
          border-radius: 8px;
          height: 28px;
          line-height: 28px;
          padding: 0 15px;
          margin-bottom: 12px;
          margin-right: 12px;
        }
      }
    }
  }
</style>
