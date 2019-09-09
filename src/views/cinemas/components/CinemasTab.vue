<template>
  <div class="cinema-list-tag">
    <div class="cinema-list-tag-name">
      <van-dropdown-menu active-color="#ff5f16">
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value1" :options="option2" />
        <van-dropdown-item v-model="value1" :options="option3" />
      </van-dropdown-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CinemasTab',
    data(){
      return{
        value1: 0,
        value2: "a",
        value3:'c',
        option1: [
          { text: "全城", value: 0 },
          { text: "邛崃市", value: 1 },
          { text: "大邑县", value: 2 }
        ],
        option2:[
          {text:'APP购票', value:0},
          {text:'前台兑换', value:1}
        ],
        option3: [
          { text: "最近去过", value:0 },
          { text: "离我最近", value:1 }
        ],
      }
    },
    methods:{
      showPopup(){
        this.show = true;
      },
      getContainer() {
        return document.querySelector('.primary');
      }
    }
  }
</script>

<style scoped lang="scss">
  .cinema-list-tag{
    width: 100%;
    height: 1rem;
    text-align: center;
    background-color: #fff;
    .cinema-list-tag-name{
      position: relative;
      label{
        float: left;
        width: 33.3%;
        line-height: 49px;
        font-size: 14px;
        color: #191a1b;
        letter-spacing: -.2px;
        img{
          vertical-align: middle;
          padding-left: 2px;
          width: 0.12rem;
          height: 0.06rem;
        }
      }
    }
  }
  .cinema-list-tag::after{
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
    border-bottom: 1px solid #ededed;
    color: #ededed;
    -webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform: scaleY(.5);
    -ms-transform: scaleY(.5);
    transform: scaleY(.5);
  }
</style>
