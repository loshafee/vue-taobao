<template>
  <div class="login-box">
    <div class="login-logo">
      <img src="/static/img/logo.png" alt="">
    </div>
    <form action="/" method="post">
      <div class="input-group">
        <input type="text" :placeholder="userPlaceholder" v-model="username">
      </div>
      <div class="input-group">
        <input type="password" :placeholder="passwordPlaceholder" v-model="password">
      </div>
      <div class="login-tips">
        <router-link :to="'/register'">
          免费注册
        </router-link>
        <a href="#/login" @click="onForgetPwd">忘记密码</a>
      </div>
      <div class="login-button">
        <a href="javascript:void(0);" class="btn-login" @click="login">登录</a>
        <router-link to="/register" class="btn-code">短信验证码登录/注册</router-link>
      </div>
    </form>
    <!-- <vue-layer></vue-layer> -->
  </div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'Login',
  data () {
    return {
      userPlaceholder: '手机号/邮箱/会员名',
      passwordPlaceholder: '请输入密码',
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      let username = this.username.trim()
      let password = this.password.trim()
      let _this = this

      if (!username) {
        this.$layer.open({
          content: '用户名不能为空',
          success () {
          },
          yes (index) {
            _this.$layer.close(index)
          },
          no (index) {
          }
        })
        return
      }
      if (!password) {
        this.$layer.open({
          content: '密码不能为空'
        })
        return
      }

      axios.post('/login', {
        username: username,
        password: password
      }).then(function (response) {
        if (response.data.status === 'fail') {
          _this.$layer.open({
            content: response.data.message
          })
        } else if (response.data.status === 'succ') {
          // 登录成功，vuex中设置token
          _this.$store.commit('setToken', response.data.token)
          // _this.$router.push('/')
        }
      })
    },
    onForgetPwd () {
      this.$layer.open({
        title: ['忘记密码怎么办？', 'background-color: #f40; color:#fff;'],
        content: '亲，当前淘宝网页版暂不支持密码找回，请打开手机淘宝网进行找密哟',
        btn: ['下载手机淘宝', '返回'],
        no: (index) => {
          this.$layer.close(index)
        },
        yes: (index) => {
          this.$axios.get('/download', {
            responseType: 'stream'
          }).then((res) => {
            console.log(res)
          })
          this.$layer.close(index)
        }
      })
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
  .login-box {
    .login-logo {
      width: 24%;
      margin: 10% auto;
    }
    form {
      width: 90%;
      margin: 0 auto;
      font-size: 1.4rem;
      .input-group {
        margin-bottom: 10%;
        input {
          border: none;
          border-bottom: 1px solid #ff5000;
          display: block;
          font-size: 1.4rem;
          width: 100%;
          padding: 8px 12px;
          box-sizing: border-box;
        }
      }
      .login-tips {
        display: flex;
        justify-content: space-between;
        margin-bottom: 6%;
      }
      .login-button {
        margin-top: 12%;
        a {
          display: block;
          border-radius: 8px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          margin-bottom: 8%;
        }
        .btn-login {
          color: #fff;
          background-color: #ff5000;
        }
        .btn-code {
          color: #ff5000;
          border: 1px solid #ff5000;
        }
      }
    }
  }
</style>
