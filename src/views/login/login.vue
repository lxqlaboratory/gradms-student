<template>
  <div class="prologin-container">
    <div class="header">
      <img style="width: 263px;height: 82px;" src="@/assets/login/logo.png">
      <span style="margin-left:15px;font-size: 36px;font-weight: bold;color: white" />
      <span
        style="margin-left:15px;padding-left:15px;border-left: 1px solid gainsboro;font-size: 16px;font-weight: bold;color: white"
      />
      <lang-select style="position: absolute;right: 15%;" />
    </div>
    <div class="main-content">
      <div class="login-box">
        <div class="input-form">
          <div style="width: 100%;">
            <div style="position: relative;width: 100%;margin-top: 15px;">
               <span class="svg-container" >
               <svg-icon icon-class="user" style="margin-top: 10px ;" />
               </span>
              <input v-model="loginForm.userName" :placeholder="$t('login.placeholdUsername')" maxlength="12" class="login-form-input" style="width: 91%">
            </div>
            <div style="position: relative;width: 100%;margin-top: 30px;">
               <span class="svg-container">
             <svg-icon icon-class="password" />
           </span>
              <input v-model="loginForm.password" maxlength="12" :placeholder="$t('login.placeholdPassword')" :type="showPassword?'':'password'" class="login-form-input" style="width: 91%">
              <el-button
                type="text"
                style="position: absolute;top:0;right: 0px;padding-top: 5px;color: #9b0d14"
              >
                <!--                @click="showPassword=!showPassword"-->
                <!--              >{{ !showPassword?$t('login.showPassword'):$t('login.hidePassword') }}-->
              </el-button>
            </div>
          </div>
          <el-row style=" position: relative; margin-top: 15px; width: 100%">
            <el-col style="width: 50%" align="left">
            <el-input v-model="code"  maxlength="4" type="text" size="small" :placeholder="$t('login.verification')" @keyup.enter.native="login" />
            </el-col>
            <el-col align="right" style="width: 50%">
            <div @click="refreshCode">
              <!--验证码组件-->
              <s-identify :identify-code="identifyCode" />
            </div>
            </el-col>
          </el-row>
          <div style="width: 100%;margin-top: 10px">
            <el-row>
              <el-col>
                <el-button type="danger" class="loginBtn" style="width: 100%;margin-bottom: 5%;background: #9b0d14" :loading="loading" @click="login">{{ $t('login.loginTitle') }}</el-button>
              </el-col>
              <el-col>
                <el-button type="danger" class="loginBtn" style="width: 100%;background: #9b0d14" :loading="loading" @click="reDirect">{{ $t('login.authenticationLogin') }}</el-button>
              </el-col>
            </el-row>
            <div style="display: flex;flex-direction: row;justify-content: space-between;align-items: center;width: 100%;margin-top: 25px;color:#9b0d14">
              <el-checkbox v-model="ydxy"><span
                style="font-size: 13px"
              >{{ $t('login.rememberPassword') }}</span></el-checkbox>
              <el-button type="text" style="padding: 0;color: #9b0d14" @click="toRegister">{{ $t('login.forgetPassword') }}？</el-button>
            </div>
          </div>
        </div>
      </div>
      <el-carousel indicator-position="none" class="bgflux">
        <el-carousel-item class="bgflux" style="background: url('https://gradms.sdu.edu.cn/applogin/images/back1.png') repeat-x; background-size: 100% 100%;" />
        <el-carousel-item class="bgflux" style="background: url('https://gradms.sdu.edu.cn/applogin/images/back2.png') repeat-x; background-size: 100% 100%;" />
        <el-carousel-item class="bgflux" style="background: url('https://gradms.sdu.edu.cn/applogin/images/back3.png') repeat-x; background-size: 100% 100%;" />
      </el-carousel>
      <img class="rightimg">
    </div>
    <div class="notice">
      <div style="width: 75%;background-color: gainsboro;height: 1px;" />
      <div class="notice-title">{{ $t('login.noticeTitle') }}:</div>
      <span style="color: gray;font-size: 14px;line-height: 200%;">
        <dd>{{ $t('login.notice1') }}</dd>
        <dd>{{ $t('login.notice2') }}</dd>
      </span>
    </div>
    <div class="login-bottom">Copyright © {{ $t('login.graduateSdu') }}</div>
  </div>
</template>

<script>
import { login } from '@/api/user'
import LangSelect from '@/components/LangSelect'
import SIdentify from '../../components/Sidentify/index'
export default {
  name: 'Prelogin',
  components: { LangSelect, SIdentify },
  data() {
    return {
      msg: '',
      identifyCode: '',
      code: '',
      identifyCodes: '1234567890',
      showPassword: false,
      loading: false,
      loginForm: {
        userName: '',
        password: ''
      },
      ydxy: true,
      swiperList: ['https://gradms.sdu.edu.cn/applogin/images/back1.png', 'https://gradms.sdu.edu.cn/applogin/images/back2.png', 'https://gradms.sdu.edu.cn/applogin/images/back3.png']
    }
  },
  created() {
    this.refreshCode()
  },
  mounted() {
    this.getCookie()
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
    // alert(this.getCookie())
  },
  methods: {
    toRegister() {
      this.$router.push({ path: '/preregister' })
    },
    login: function() {
      if (this.code === '') {
        this.$message({
          type: 'error',
          message: this.$t('login.inputverification')
        })
        this.loading = false
      } else if (this.identifyCode !== this.code) {
        this.code = ''
        this.refreshCode()
        this.$message({
          type: 'error',
          message: this.$t('login.correctverification')
        })
        this.loading = false
      } else {
        const _this = this
        // 判断复选框是否被勾选 勾选则调用配置cookie方法
        if (_this.ydxy == true) {
          console.log('checked == true')
          // 传入账号名，密码，和保存天数3个参数
          _this.setCookie(_this.loginForm.userName, _this.loginForm.password, 7)
        } else {
          console.log('清空Cookie')
          // 清空Cookie
          _this.clearCookie()
        }
        const jsonForm = JSON.stringify({ username: this.loginForm.userName, password: this.loginForm.password })
        login(jsonForm).then(response => {
        // console.log(response.msg);
          _this.msg = response.msg
          if (this.msg === 'userNoExist') {
            _this.$message({
              type: 'error',
              message: 'userNoExist'
            })
          } else if (this.msg === 'passwordError') {
            _this.$message({
              type: 'error',
              message: 'passwordError'
            })
          } else if (this.msg === 'systemError') {
            _this.$message({
              type: 'error',
              message: 'systemError'
            })
          } else {
            console.log('执行方法了')
            _this.loading = true
            _this.$store.dispatch('user/getInfo')
            _this.$router.push({ path: '/dashboard' })
            _this.loading = false
          }
        }).catch(err => {
          _this.loading = false
          console.log(err)
        })
      }
    },
    setCookie(c_name, c_pwd, exdays) {
      const exdate = new Date() // 获取时间
      exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays) // 保存的天数
      // 字符串拼接cookie
      window.document.cookie = 'userName' + '=' + c_name + ';path=/;expires=' + exdate.toGMTString()
      window.document.cookie = 'password' + '=' + c_pwd + ';path=/;expires=' + exdate.toGMTString()
    },
    // 读取cookie
    getCookie: function() {
      if (document.cookie.length > 0) {
        const arr = document.cookie.split('; ') // 这里显示的格式需要切割一下自己可输出看下
        for (let i = 0; i < arr.length; i++) {
          const arr2 = arr[i].split('=') // 再次切割
          // 判断查找相对应的值
          if (arr2[0] == 'userName') {
            this.loginForm.userName = arr2[1] // 保存到保存数据的地方
          } else if (arr2[0] == 'password') {
            this.loginForm.password = arr2[1]
          }
        }
      }
    },
    // 清除cookie
    clearCookie: function() {
      this.setCookie('', '', -1) // 修改2值都为空，天数为负1天就好了
    },
    reDirect() {
      window.location.href = 'http://pass.sdu.edu.cn/cas/login?service=https%3A%2F%2F202.194.7.29%2Fcaslogin.jsp'
    },

    // 验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[this.randomNum(0, this.identifyCodes.length)]
      }
      console.log(this.identifyCode)
    }
  }

}
</script>

<style lang="scss">
  .el-checkbox__input.is-checked+ .el-checkbox__label{
    color: #9b0d14;
  }
  .el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate.el-checkbox__inner{
    background-color: #9b0d14;
    border-color: #9b0d14;
  }
  .el-checkbox__inner:hover{
    border-color: #9b0d14;
  }
  .el-checkbox__input.is-focus.el-checkbox__inner{
    border-color: #9b0d14;
  }
  .el-checkbox__label{
    border-color: #9b0d14;
  }
</style>

<style lang="scss" scoped>
  $topicColor:#930E14;

  .el-checkbox__input.is-checked.el-checkbox__inner{
    background-color: #9b0d14;
    border-color: #9b0d14;
  }
  .el-checkbox__input.is-indeterminate .el-checkbox__inner {
    background-color: #9b0d14;
    border-color: #9b0d14;
  }

  .input-form {
    min-height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .login-form-input {
    width: 100%;
    padding: 5px;
    border: 0 none;
    border-bottom: 2px solid gainsboro;
    font-size: 14px;

    &:focus {
      outline: none;
      border-bottom: 2px solid #9b0d14;
    }
  }

  $topcicolor: #9b0d14;
  .prologin-container {
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    .notice{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top:2vh;

      .notice-title{
        margin-top: 1vh;
        padding: 5px 15px 5px 15px;
        border-left: 6px solid #9b0d14;
        font-weight: bold;
        width: 60%;
        text-align: left;
      }
    }
    .login-bottom{
      color: white;
      font-size: 13px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 6vh;
      background-color: #9b0d14;
      text-align: center;
      line-height: 6vh;
    }
    .header {
      min-width:100%;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-start;
      border-bottom: 1px solid gainsboro;
      box-shadow:  0px 0px 4px gainsboro;
      padding: 2vh 0 2vh 15%;
      margin-bottom: 2px;
      background: #9b0d14;
    }
    .main-content {
      position: relative;
       min-height: 30vw;
      width: 100%;
      .bgflux{
        position: absolute;
        top: 0;
        left: 0;
        height: 30vw;
        width: 100vw;
      }
      .login-box {
        position: absolute;
        right: 10%;
        top: 5vh;
        z-index: 99;
        padding: 20px;
        width: 340px;
        height: 340px;
        background-color: #fff;
        box-sizing: border-box;
        border-radius: 5px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.14);
      }
      .loginBtn{
        height: 32px;
        /*line-height: 15px;*/
        vertical-align: middle;
        padding:  0px 0px !important;

      }
    }

    }
  .login-code{
    cursor: pointer;
  }
  .svg-container {
    color: #889aa4;
    display: inline-block;
  }
</style>
