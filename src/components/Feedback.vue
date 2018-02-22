<template>
  <div class="feedback-box">
    <header class="header-banner">
      <a @click="goBack" class="back-btn"></a>      
      <h2>用户反馈</h2>
    </header>
    <div class="form-box">
      <form action="">
        <label>
          <span>手机类型</span>
          <input v-model="phoneType">
        </label>
        <label>
          <span>网络信号</span>
          <select v-model="network">
            <option value="">请选择</option>
            <option value="2g">2G</option>
            <option value="3g">3G</option>
            <option value="4g">4G</option>
            <option value="wifi">WIFI</option>
            <option value="other">其他</option>
          </select>
        </label>
        <label>
          <textarea v-model="content" rows="5" placeholder="有什么想说的，尽管来吐槽吧~~"></textarea>
        </label>
        <a class="submit-btn" 
           :class="content ? 'active': ''"
           @click="onSubmit">提交</a>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Feedback',
  data () {
    return {
      phoneType: '',
      network: '',
      content: ''
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    },

    checkVerfify () {
      if (!this.phoneType) {
        this.$layer.open({
          content: '请填写手机类型',
          shade: false,
          style: 'color: #fff; background-color: rgba(0,0,0,0.8);width:70%; margin: 0 auto;',
          time: 3
        })
        return false
      }
      if (!this.network) {
        this.$layer.open({
          content: '请填写网络类型',
          shade: false,
          style: 'color: #fff; background-color: rgba(0,0,0,0.8);width:70%; margin: 0 auto;',
          time: 3
        })
        return false
      }
      if (!this.content) {
        this.$layer.open({
          content: '请填写吐槽内容',
          shade: false,
          style: 'color: #fff; background-color: rgba(0,0,0,0.8);width:70%; margin: 0 auto;',
          time: 3
        })
        return false
      }
      return true
    },
    onSubmit () {
      if (this.checkVerfify()) {
        this.$axios.post('/feedback', {
          'phoneType': this.phoneType,
          'network': this.network,
          'content': this.content
        }).then((res) => {
          if (res.data.code === 1) {
            this.$layer.open({
              content: '提交成功，感谢你的反馈',
              shade: false,
              style: 'color: #fff; background-color: rgba(0,0,0,0.8);width:76%; margin: 0 auto;',
              time: 2
            })
          } else if (res.data.code === -1) {
            this.$layer.open({
              content: res.data.message,
              shade: false,
              style: 'color: #fff; background-color: rgba(0,0,0,0.8);width:76%; margin: 0 auto;'
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .feedback-box {
    min-height: 100vh;
    background-color: #f5f5f5;
  }
  .header-banner {
    position: relative;
    text-align: center;
    font-size: 1.6rem;
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
  .form-box {
    margin-top: 4%;
    padding: 0 4%;
    font-size: 1.4rem;
    input, textarea, select {
      font-size: 1.4rem;
      padding: 8px 10px;
      border-radius: 4px;
    }
    label {
      display: flex;
      padding: 8px 0;
      align-items: center;
      span {
        flex-basis: 24%;
      }
      input, select, textarea {
        flex: 1;
        border: none;
        outline: none;
      }
    }
    textarea {
      font-family: 'Microsoft Yahei';
    }
    .submit-btn {
      display: block;
      margin-top: 8%;
      width: 100%;
      color: #fff;
      background-color: #ddd;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-radius: 4px;
      &.active {
        background-color: #fb5d0f;
      }
    }
  }
</style>
