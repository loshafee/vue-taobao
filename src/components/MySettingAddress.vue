<template>
  <div class="address-box">
    <header class="header-banner">
      <router-link to="/my/setting" class="back-btn"></router-link>      
      <h2>管理收货地址</h2>
    </header>

    <div class="saved-address-list" v-if="!selectFlag">
      <ul class="address-list">
        <li>
          <div class="user-info">
            <span>收货人：小米</span>
            <span>13800138000</span>
          </div>
          <p>
            收货地址：广东省广州市天河区长兴街道岑村
          </p>
          <span class="icon-default">
            <i class="icon iconfont icon-check"></i>
          </span>
        </li>
        <li class="default-list">
          <div class="user-info">
            <span>收货人：小米</span>
            <span>13800138000</span>
          </div>
          <p>
            收货地址：广东省广州市天河区长兴街道岑村广东省广州市天河区长兴街道岑村广东省广州市天河区长兴街道岑村
          </p>
          <span class="icon-default">
            <i class="icon iconfont icon-check"></i>
          </span>
        </li>
        <li>
          <div class="user-info">
            <span>收货人：小米</span>
            <span>13800138000</span>
          </div>
          <p>
            收货地址：广东省广州市天河区长兴街道岑村
          </p>
          <span class="icon-default">
            <i class="icon iconfont icon-check"></i>
          </span>
        </li>
      </ul>
      <a class="add-btn" @click="onAddaddress">
        新增收货地址
      </a>
    </div>

    <div class="area-list" v-if="selectFlag && !showPanelable">
      <p class="province-line" v-if="address[0]" @click="onSelectedProvince">
        {{ address[0].fullname }}
      </p>
      <p class="city-line" v-if="address[1]" @click="onSelectedCity">
        {{ address[1].fullname }}
      </p>
      <ul class="province-list">
        <li v-for="(province, index) in currentList" 
            :key="index"
            @click="onSelectedArea(province)">
          {{ province.fullname }}
        </li>
      </ul>
    </div>

    <div class="address-details" v-if="showPanelable">
      <ul>
        <li @click="showPanelable = false">
          <span> {{ getAreaLiteral }} </span>
        </li>
        <li>
          <select name="" id="">
            <option value="0">请选择街道</option>
            <option :value="street.id" v-for="(street, index) in areaStreet" :key="index">
              {{ street.fullname }}
            </option>
          </select>
        </li>
        <li>
          <input type="text" placeholder="请输入详细地址">
        </li>
        <li>
          <input type="text" placeholder="请输入收货人姓名">
        </li>
        <li>
          <input type="text" placeholder="请输入收货人联系电话">
        </li>
        <li>
          <input type="text" v-model="zipCode" placeholder="请输入邮编">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MySettingAddress',
  data () {
    return {
      showPanelable: false,
      selectFlag: false,
      selectedProvince: '',
      selectedCity: '',
      selectedCount: '',
      areaIndex: 0,
      currentList: [],
      areaList: [],
      address: [],
      areaStreet: [],
      zipCode: ''
    }
  },
  computed: {
    getAreaLiteral () {
      return this.address.reduce((result, ads) => {
        result += ads.fullname
        return result
      }, '')
    }
  },
  mounted () {
  },
  methods: {
    onAddaddress () {
      this.selectFlag = true
      this.getProvince()
    },
    getProvince () {
      this.$jsonp('http://apis.map.qq.com/ws/district/v1/list', {
        key: 'BOBBZ-XL36U-AV3VJ-4A2KV-SUGUS-LAB5Z',
        output: 'jsonp',
        jsonpCallback: 'callback'
      }).then((res) => {
        this.areaList = res.result
        this.currentList = this.areaList[0]
      })
    },
    getStreet (province) {
      this.$jsonp('http://apis.map.qq.com/ws/district/v1/getchildren', {
        id: province.id,
        key: 'BOBBZ-XL36U-AV3VJ-4A2KV-SUGUS-LAB5Z',
        output: 'jsonp',
        jsonpCallback: 'callback'
      }).then((res) => {
        this.areaStreet = res.result[0]
        this.$axios.get('http://ali-city.showapi.com/areaName', {
          params: {
            areaName: province.fullname,
            level: 3
          },
          headers: {
            Authorization: 'APPCODE 627f642d580b40a8a40a9f9dbccd0cc6'
          }
        }).then((res) => {
          this.zipCode = res.data.showapi_res_body.data[0].zipCode
        })
      })
    },
    onSelectedProvince () {
      this.currentList = this.areaList[this.areaIndex = 0]
      this.address.splice(this.areaIndex)
    },
    onSelectedCity () {
      let cidx = this.address[0].cidx.slice()
      this.currentList = this.areaList[this.areaIndex = 1].slice(cidx[0], cidx[1])
      this.address.splice(this.areaIndex)
    },
    onSelectedArea (province) {
      let cidx = province.cidx
      if (!cidx) {
        this.showPanelable = true
        this.address.splice(this.areaIndex, 1, province)
        this.getStreet(province)
        return
      }
      this.areaIndex++
      this.currentList = this.areaList[this.areaIndex].slice(cidx[0], cidx[1])
      this.address.push(province)
    }
  }
}
</script>

<style lang="less" scoped>
  .address-box {
    position: relative;
    min-height: 100vh;
    background-color: #f8f8f8;
  }
  .header-banner {
    position: relative;
    align-content: center;
    text-align: center;
    font-size: 1.8rem;
    height: 44px;
    line-height: 44px;
    border-bottom: 1px solid #eee;
    background-color: #fff;
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
  .address-list {
    background-color: #fff;
    li {
      position: relative;
      padding: 4% 16% 4% 4%;
      color: #666;
      border-bottom: 1px solid #eee;
      p {
        margin-top: 4px;
      }
      &.default-list {
        background-color: #5e6b85;
        color: #fff;
        .icon-default {
          display: block;
        }
      }
      .icon-default {
        display: none;
        position: absolute;
        right: 5%;
        top: 50%;
        margin-top: -12px;
        color: #fff;
        i {
          font-size: 2.4rem;
          font-weight: bold;
        }
      }
    }
    .user-info {
      font-size: 1.6rem;
      display: flex;
      justify-content: space-between;
    }
  }
  .add-btn {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background-color: #ff5000;
    font-size: 1.8rem;
  }
  .area-list {
    .province-line {
      background-color: #aaa;
    }
    .city-line {
      background-color: #ddd;
    }
    p, li {
      padding: 0 3%;
      font-size: 1.6rem;
      height: 44px;
      line-height: 44px;
      border-bottom: 1px solid #ddd;
    }
  }

  .address-details {
    font-size: 1.6rem;
    li {
      position: relative;
      line-height: 44px;
      border-bottom: 1px solid #eee;
      span {
        display: block;
        padding: 0 3%;
      }
      &:after {
        content: '';
        border: 1px solid #666;
        border-left: none;
        border-top: none;
        transform: rotate(-45deg);
        width: 8px;
        height: 8px;
        position: absolute;
        top: 50%;
        margin-top: -5px;
        right: 4%;
      }
    }
    input, select {
      font-size: 1.6rem;      
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: 13px 3%;
      background-color: transparent;
      -webkit-appearance: none;
      outline: none;
      border: none;
    }
    select {
      padding: 12px 3%;      
    }
  }
</style>
