<template>
  <div class="center-view" id="app">
    <div class="avatar">
      <router-link to="/Login">
        <img src="@/assets/imgs/login.png" class="login-icon" />
      </router-link>
      <router-link to="/Login">
        <div class="nick-name">立即登录</div>
      </router-link>
    </div>
    <ul class="my-order">
      <li>
        <img src="@/assets/imgs/Film order.png" />
        <div>电影订单</div>
      </li>
      <li>
        <img src="@/assets/imgs/Commodity order.png" />
        <div>商品订单</div>
      </li>
    </ul>
    <div class="margin-set my-card">
      <img src="@/assets/imgs/Seat tickets.png" class="margin-set-icon" />
      <span class="label">卖座券</span>
      <img src="@/assets/imgs/arrow.png" class="arrow" />
    </div>
    <div class="margin-set my-card">
      <img src="@/assets/imgs/redbag.png" class="margin-set-icon" />
      <span class="label">组合红包</span>
      <img src="@/assets/imgs/arrow.png" class="arrow" />
    </div>
    <div class="margin-set my-card">
      <img src="@/assets/imgs/balance.png" class="margin-set-icon" />
      <span class="label">余额</span>
      <span class="value">
        <i>¥</i>
        <span>0</span>
      </span>
      <img src="@/assets/imgs/arrow.png" class="arrow" />
    </div>
    <div class="margin-set my-card">
      <img src="@/assets/imgs/set.png" class="margin-set-icon" />
      <span class="label">设置</span>
      <img src="@/assets/imgs/arrow.png" class="arrow" />
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .avatar {
    text-align: center;
    margin-top: -0.88rem;
    height: 2.72rem;
    padding-left: 0.44rem;
    padding-top: 1.28rem;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: -webkit-box;
    display: flex;
    /* -webkit-box-align: center; */
    align-items: center;
    color: #fff;
  }
  .avatar .login-icon {
    width: 1.26rem;
    height: 1.26rem;
    border-radius: 0.7rem;
    margin-right: 0.4rem;
    border: 0.04rem solid #fff;
  }
  .avatar .nick-name {
    color: white;
    font-size: 0.32rem;
  }
  .my-order {
    width: 100%;
    margin: 0 auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
    font-size: 0.26rem;
    padding: 0;
    height: 1.58rem;
    background: #fff;
    margin-bottom: 0.2rem;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .my-order li {
    position: relative;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    list-style: none;
  }
  .my-order li img {
    width: 0.52rem;
    height: 0.52rem;
  }
  .my-order li > div {
    color: #797d82;
  }
  .margin-set {
    background: #fff;
    padding: 0 0.3rem;
    height: 0.98rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .margin-set .margin-set-icon {
    width: 0.4rem;
    height: 0.4rem;
  }
  .margin-set .label {
    margin-left: 0.3rem;
    color: #191a1b;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 0.3rem;
  }
  .margin-set .value {
    text-align: right;
    color: #797d82;
    padding-right: 0.28rem;
  }
  .margin-set .value i {
    font-size: 0.22rem;
    font-style: normal;
  }
  .margin-set .value > span{
    font-size: 0.3rem;
    
  }
  .margin-set .arrow {
    text-align: right;
    width: 0.12rem;
    height: 0.2rem;
  }
</style>
