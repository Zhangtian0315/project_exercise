<template>
  <div class="emailLoginContainer">
    <div class="phoneLoginWrap">
      <div class="topImg">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <label class="phoneInput">
        <input type="text" placeholder="请输入邮箱" v-model="email"
               name="email" v-validate="{required: true,regex: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}">
        <span class="emailMsg" style="color: red;" v-show="errors.has('email')">{{errors.first('email')}}</span>
      </label>
      <label class="phoneCode">
        <input type="text" placeholder="请输入密码" v-model="pwd"
               name="pwd" v-validate="{required: true,regex: /^[a-zA-Z0-9_]{6}$/}">
        <span class="emailPwd" style="color: red;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</span>
        <span class="btnCode">获取验证码</span>
      </label>
      <div class="outer">
        <div class="forget">
          <span class="left">忘记密码？</span>
          <span class="right">使用短信验证登录</span>
        </div>
      </div>
      <div class="btnWrap">
        <button class="btn1" @click="login">登录</button>
        <button class="btn2" @click="$router.push('/personal')">其他方式登录</button>
      </div>
      <div class="register">
        <p>注册账号></p>
      </div>
    </div>
  
  </div>
</template>

<script>
  export default {
    name: "emailLogin",
    data(){
      return{
          email:'',
          pwd:''
      }
    },
    methods:{
      async login(){
        let names
        names=['email','pwd']
        const success = await this.$validator.validateAll(names)
        if(success){
          alert('登陆成功')
        }
      }
    }
    
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .emailLoginContainer
    width 100%
    background-color #fff
    height 100%
    .phoneLoginWrap
      width 100%
      .topImg
        display flex
        align-items center
        width 100%
        height 133px
        margin-top 10px
        margin-bottom 150px
        img
          margin 0 auto
          width 192px
          height 64px
      .phoneInput,.phoneCode
        display flex
        justify-content center
        width 100%
        height 90px
      .phoneInput
          position relative
          span
            position absolute
            top 20px
            right 100px
            color #b4282d
        input
          display block
          width 675px
          border none
          border-bottom 1px solid #bdbdbd
      .phoneCode
        position relative
        margin-top 20px
        .emailPwd
          position absolute
          top 20px
          right 100px
          color #b4282d
        .btnCode
          position absolute
          bottom 20px
          right 35px
          border-radius 10px
          border 1px solid #333
          padding 5px
          font-size 28px
          color #333
      .outer
        display flex
        justify-content center
        width 100%
      .forget
        display flex
        justify-content space-between
        width 674px
        height 44px
        font-size 28px
        margin-top 20px
        .left
          color #7f7f7f
        .right
          color #333
      .btnWrap
        width 100%
        text-align center
        button
          width 679px
          height 98px
          font-size 28px
          border none
          margin-top 40px
        .btn1
          background-color #b4282d
          color #fff
        .btn2
          border 1px solid #b4282d
          background-color transparent
          color #b4282d
      .register
        width 100%
        display flex
        justify-content center
        p
          font-size 28px
          text-align center
          color #333
          margin-top 20px




</style>
