<template>
    <div class="address">
      <img src="@/assets/imgs/dz.png" alt="" style="width: 0.28rem;height: 0.42rem;">
      <div class="address-des">
        {{list.address}}
      </div>
      <router-link to="">
        <img src="@/assets/imgs/phone.png" alt="">
      </router-link>
    </div>
</template>

<script>
  export default {
    name: 'DetailPhone',
    props:{
      list:{}
    }
  }
</script>

<style scoped lang="scss">
    .address{
      height: 1rem;
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding-left: 0.34rem;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      border-top: 1px solid #ededed;
      .address-des{
        font-size: 0.28rem;
        height:1rem;
        line-height: 1rem;
        padding: 0 0.24rem;
        -webkit-box-flex: 1;
        -webkit-flex: 1;
        -ms-flex: 1;
        flex: 1;
        position: relative;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      a{
        padding: 0 0.6rem;
        height: 0.5rem;
        position: relative;
        border-left: 1px solid #ededed;
        img {
          width: 0.34rem;
          height: 0.36rem;
          position: absolute;
          top: 0.08rem;
          right: 0.3rem;
        }
      }
    }
</style>
