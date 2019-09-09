<template>
<div class="schedule-list">
  <div v-for="(item) in pageInfo">
    <div class="schedule-item">
      <div class="left">
        <div class="start-at">
          {{item.showAt | getPremiereAt('schedule')}}
          </div>
          <div class="end-at">
            {{item.endAt | getPremiereAt('schedule')}}散场
        </div>
      </div>
     <div class="middle">
      <div class="language">
        {{item.filmLanguage}}
      </div>
       <div class="hall">
        {{item.hallName}}
       </div>
     </div>
      <div class="right">
        <router-link :to="{name:'schedule',params:{scheduleId:231321}}">
          <div class="buy-ticket">
            购票
          </div>
        </router-link>
        <div class="lowest-price">
          <div class="price-icon">
            ￥
          </div>
          {{item.salePrice/100}}
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'DetailSchedule',
    props:{
      pageInfo:Array,
      liIdex:Number
    }
  }
</script>

<style scoped lang="scss">
  .schedule-list{
    min-height: calc(100vh - 44px);
    .schedule-item{
      height: 74px;
      padding: 15px;
      position: relative;
      background: #fff;
      display: flex;
      justify-content: space-around;
      align-items: center;
  
      /*//左侧*/
      .left{
        .start-at{
          font-size: 15px;
          color: #191a1b;
        }
        .end-at{
          font-size: 13px;
          color: #797d82;
          margin-top: 2px;
        }
      }
      /*中间*/
      .middle{
        float: left;
        .language{
          font-size: 15px;
          color: #191a1b;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .hall{
          font-size: 13px;
          color: #797d82;
          margin-top: 2px;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      /*右侧*/
      .right{
        float: right;
        padding: 10px 0;
        line-height: 25px;
        a{
          color: #ff5f16;
          text-align: center;
        }
        .buy-ticket{
          float: right;
          height: 25px;
          width: 50px;
          border-radius: 2px;
          position: relative;
          text-align: center;
          font-size: 0.28rem;
        }
        .buy-ticket:after{
          content: " ";
          -webkit-transform: scale(.5);
          -ms-transform: scale(.5);
          transform: scale(.5);
          position: absolute;
          border: 1px solid #ff5f16;
          top: -50%;
          right: -50%;
          bottom: -50%;
          left: -50%;
          border-radius: 4px;
        }
        .lowest-price{
          width: 1rem;
          float: right;
          padding-right: 20px;
          font-size: 15px;
          display: flex;
          justify-content: center;
          .price-icon{
            font-size: 10px;
          }
        }
      }
    }
  }
.schedule-item:after{
  content: " ";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  height: 1px;
  border-top: 1px solid #ededed;
  color: #ededed;
  -webkit-transform-origin: 0 0;
  -ms-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleY(.5);
  -ms-transform: scaleY(.5);
  transform: scaleY(.5);
}
</style>
