<template>
  <div class="filter-container" v-if="showable">
    <div class="pop-mask" @click="onHide"></div>
    <div class="filter-content">
      <ul>
        <li class="list-range">
          <label>价格区间（元）</label>
          <div>
            <input type="tel" :value="beginRange | matchNumber" @input="onMatchNumber" placeholder="最低价">
            <span>-</span>
            <input type="tel" :value="endRange | matchNumber" @input="onMatchNumber1" placeholder="最高价">
          </div>
        </li>
        <li v-for="(list, index) in dataFilters" :key="index">
          <search-filter-tag :discountTags="list.discountTags" :title="list.title" :selectedMoreabled="list.selectedMoreabled" :selectedTags="list.selectedTags"></search-filter-tag>
        </li>
      </ul>
      <footer class="footer-bar">
        <a href="javascript:void(0);" @click="onReset">重置</a>
        <a href="javascript:void(0);" class="active-btn" @click="onEnsure">确定</a>
      </footer>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import SearchFilterTag from '@/components/SearchFilterTag'
Vue.filter('matchNumber', function (value) {
  return isNaN(parseFloat(value)) ? '' : (typeof value === 'number' ? value : parseFloat(value))
})

export default {
  name: 'SearchFilter',
  props: ['showable'],
  data () {
    return {
      beginRange: '',
      endRange: '',
      dataFilters: [{
        selectedMoreabled: true,
        title: '折扣和服务',
        discountTags: ['免运费', '天猫', '全球购', '消费者保障', '手机专享价', '淘金币', '货到付款', '7天退换', '促销'],
        selectedTags: []
      }, {
        selectedMoreabled: false,
        title: '城市',
        discountTags: ['广州', '上海', '深圳', '北京', '成都', '昆明', '长沙', '武汉', '太原'],
        selectedTags: []
      }]
    }
  },
  computed: {
    getSelectedTags () {
      return {
        discount: this.dataFilters[0].selectedTags,
        city: this.dataFilters[1].selectedTags
      }
    }
  },
  methods: {
    onReset () {
      this.beginRange = ''
      this.endRange = ''
      this.dataFilters.forEach((item) => {
        item.selectedTags = []
      })
    },
    onEnsure () {
      this.$axios.post('/api/searchFilter', Object.assign({
        prices: {
          begin: this.beginRange,
          end: this.endRange
        }
      }, this.getSelectedTags)).then((response) => {
        this.onReset()
        this.onHide()
      }, (err) => {
        console.log(err)
      })
    },
    onMatchNumber (event) {
      this.beginRange = event.target.value.trim()
    },
    onMatchNumber1 (event) {
      this.endRange = event.target.value.trim()
    },
    onShow () {

    },
    onHide () {
      this.$emit('close')
    }
  },
  components: {
    SearchFilterTag
  }
}
</script>

<style lang="less" scoped>
  .filter-container {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100vh;
    font-size: 1.6rem;
  }
  .pop-mask {
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
  }
  .filter-content {
    position: absolute;
    right: 0;
    top: 0;
    width: 90%;
    background-color: #fff;
    height: 100%;
    li {
      border-bottom: 1px solid #e7e7e7;
      padding: 6% 5% 2%;
      &.list-range {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 6%;
        div {
          display: flex;
          align-items: center;
          justify-content: center;
          input {
            background-color: #f2f2f2;
            font-size: 1.6rem;
            width: 60px;
            padding: 7px 6px;
            border-radius: 4px;
          }
          span {
            margin: 0 8px;
          }
        }
      }
    }
  }
  .footer-bar {
    display: flex;    
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 48px;
    line-height: 48px;
    border-top: 1px solid #e7e7e7;
    a {
      flex: 1;
      text-align: center;
      &.active-btn {
        color: #fff;
        background-color: #ff5000;
      }
    }
  }
</style>
