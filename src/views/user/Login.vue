<template>
  <div id="app">
    <div class="web-login">
      <div class="logo">
        <!--<img src="@/assets/imgs/web-login.png" />-->
      </div>
      <div class="login-form">
        <form>
          <div class="form-group">
            <input type="tel" maxlength="13" placeholder="手机号" class="input-control" />
            <div style="display:none">
              <div class="clear-mobile-btn">
                <i class style="position:absolute;right:90px;line-height:40px;font-size:23px;color:rgb(189,192,197);">x</i>
              </div>
            </div>
            <div class="getSmsCode sms-code disable" style="position:absolute;right:0;top:0;">获取验证码</div>
          </div>
          <div class="errorTip" style="display:none"></div>
          <div class="errorTip" style="display:none"></div>
          <div class="form-group">
            <input placeholder="验证码">
          </div>
          <div class="submit login-btn">
            <span>登录</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .web-login {
    font-size: 15px;
  }
  .web-login .logo {
    margin: 79px auto 40px;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
  .web-login .logo img {
    height: 60px;
  }
  .web-login .logo-form {
    width: 100%;
    position: relative;
  }
  form {
    display: block;
    margin-top: 0em;
  }
  form .form-group {
    line-height: 55px;
    margin: 0 25px;
    position: relative;
  }
  form .form-group .input-control {
    height: 15px;
    line-height: 15px;
    padding: 20px 0;
    width: 100%;
    font-size: 15px;
    color: #191a1b;
    border: 0;
    outline-width: 0;
  }
  form .form-group .clear-mobile-btn {
    font-size: 13px;
    position: absolute;
    top: 8px;
    right: 0;
    display: inline-block;
  }
  form .form-group .getSumCode {
    font-size: 13px;
    color: #bdc0c5;
    line-height: 30px;
    width: 90px;
    text-align: right;
    float: right;
    border-radius: 3px;
    cursor: pointer;
  }
  .web-login .login-form .submit{
    line-height: 45px;
    font-size: 16px;
    margin: 70px 25px 0;
    border-radius: 3px;
    text-align: center;
    background-color: #ff5f16;
    height: 44px;
    color: #fff;
    border: none;
  }
  .web-login .login-form .login-btn{
    margin-top: 70px;
  }
  .web-login .login-form .submit span{
    opacity: 0.3
  }
</style>
