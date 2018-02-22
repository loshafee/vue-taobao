<template>
  <div class="register-box">
    <header>
      <div class="mall-logo">
        <img src="/static/img/logo.png" alt="">
      </div>
      <h2>淘宝用户登录/注册</h2>
    </header>
    <form>
      <div class="form-box">
        <div class="input-group">
          <span class="area-number">+86</span>
          <input type="text" placeholder="手机号码" v-model="phone">
        </div>
        <div class="input-group">
          <input type="text" placeholder="短信验证码" v-model="code">
          <a href="javascript:void(0);" class="code-btn" @click="getCode">{{ btnTips }}</a>
        </div>
        </div>
      <div class="input-group register-bar">
        <a href="javascript:void(0);" class="register-btn" @click="onSubmit">立即登录/注册</a>
      </div>
      <div class="input-group login-bar">
        <router-link to="/login" class="register-btn">用户名密码登录</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      phone: '',
      code: '',
      btnTips: '获取验证码',
      disabled: false,
      time: 60,
      newTips: '重新发送'
    }
  },
  computed: {
    checkPhone () {
      return /^1\d{10}$/.test(this.phone.trim())
    },
    showTips () {
      return this.newTips + `(${this.time})`
    }
  },
  methods: {
    getCode () {
      if (this.phone.trim() === '') {
        this.$layer.open({
          content: '手机号码不能为空'
        })
        return
      }
      if (!this.checkPhone) {
        this.$layer.open({
          content: '手机格式不正确，请重新输入，例（13800000000）'
        })
        return
      }
      if (!this.disabled) {
        this.btnTips = this.showTips
        this.tick()
        this.$axios.post('/register/getCode', {
          phone: this.phone.trim()
        }).then(function (response) {
          console.log(response)
        })
      }
    },
    tick () {
      clearInterval(this.timerId)
      this.disabled = true
      this.timerId = setInterval(() => {
        this.time--
        this.btnTips = this.showTips
        if (this.time < 0) {
          this.resetCode()
        }
      }, 1000)
    },
    resetCode () {
      clearInterval(this.timerId)
      this.btnTips = '获取验证码'
      this.time = 60
      this.disabled = false
    },
    checkCode () {
      return true
    },
    onSubmit () {
      if (this.phone.trim() === '') {
        this.$layer.open({
          content: '手机号码不能为空'
        })
        return
      }
      if (!this.checkPhone) {
        this.$layer.open({
          content: '手机格式不正确，请重新输入，例（13800000000）'
        })
        return
      }
      if (this.code.trim() === '') {
        this.$layer.open({
          content: '验证码不能为空'
        })
        return
      }
      if (this.checkCode()) {
        this.$axios.post('/register', {
          phone: this.phone,
          code: this.code
        }).then((response) => {
          let message = {
            content: response.data.message
          }
          if (response.data.code === 1) {
            this.$store.commit('setToken', response.data.token)
            this.resetCode()
            Object.assign(message, {
              btn: ['我知道了'],
              yes: (index) => {
                this.$layer.close(index)
                this.$router.push('/')
              }
            })
          }
          this.$layer.open(message)
          console.log(response)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
  .register-box {
    background-color: #f2f2f2;
    height: 100vh;
    box-sizing: border-box;
    header {
      text-align: center;
      padding-top: 8%;
      h2 {
        font-size: 1.6rem;
        color: #333;
      }
    }
    .mall-logo {
      width: 18%;
      margin: 0 auto 4%;
    } 
    form {
      display: block;
      width: 90%;
      margin: 0 auto;
      .form-box {
        border-radius: 12px;
        overflow: hidden;
        background-color: #fff;
        margin: 12% auto 12%;
      }
    }
    .input-group {
      display: flex;
      font-size: 1.4rem;
      justify-content: center;
      align-items: center;
      &:first-child {
        border-bottom: 1px solid #d9d9d9;
      }
      .area-number {
        padding: 0 12px;
        border-right: 1px solid #d9d9d9;
        height: 40px;        
        line-height: 40px;
      }
      .code-btn {
        padding: 0 12px;
        border-left: 1px solid #d9d9d9;       
        height: 40px;        
        line-height: 40px; 
      }
      input {
        padding: 12px 18px;
        font-size: 1.4rem;
        flex: 1;
      }
    }
    .register-bar {
      a {
        flex: 1;
        text-align: center;
        font-size: 1.6rem;
        color: #fff;
        border-radius: 8px;
        height: 40px;
        line-height: 40px;
        background-color: #ff5000;
      }
    }
    .login-bar {
      a {
        flex: 1;
        text-align: center;
        font-size: 1.6rem;
        color: #333;
        border-radius: 8px;
        height: 40px;
        line-height: 40px;
        border: 1px solid #d9d9d9;
        background-color: #fff;
        margin-top: 16px;
      }
    }
  }
</style>
