<template>
  <div class="cinema-list-wrap">
    <ul class="cinema-list">
      <li class="cinema-list-item">
        <!--,districtId:item.districtId-->
        <router-link :to="{name:'CinemasDetail',params:{cinemaId:item.cinemaId}}">
          <div class="cinema-info-lf">
            <!--//影院名称-->
            <span class="cinema-name">
             {{item.name}}
              </span>
            <br>
            <!--影院地址-->
            <span class="cinema-address">
                {{item.address}}
              </span>
          </div>
          <div class="cinema-info-rt">
            <div>
                <span class="cinema-lowPrice price-fmt">
              <i>￥</i>
                <span class="interge">
                  {{item.lowPrice / 100}}
                </span>
              </span>
              <span class="upon">起</span>
            </div>
            <span class="cinema-gpsAddress">
                <strong>1484.8km</strong>
              </span>
          </div>
        </router-link>
      </li>

    </ul>
  </div>
</template>

<script>
  
  export default {
    name: 'CinemasList',
    props:['item']
  }
</script>

<style scoped lang="scss">
  .cinema-list-wrap{
    /*padding-bottom: 49px;*/
    .cinema-list{
      
      .cinema-list-item{
        position: relative;
        background-color: #fff;
        padding: 15px;
        /*border-top: 1px solid #ededed;*/
        a{
          width: 100%;
          display: -webkit-box;
          display: -webkit-flex;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: start;
          -webkit-justify-content: flex-start;
          -ms-flex-pack: start;
          justify-content: flex-start;
          -webkit-box-align: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
          .cinema-info-lf{
            width: calc(100% - 65px);
            text-align: left;
            padding-right: 15px;
            line-height: 0.55rem;
  
            float: left;
            span{
              display: block;
              max-width: 80%;
              overflow: hidden;
              -o-text-overflow: ellipsis;
              text-overflow: ellipsis;
              white-space: nowrap;
              float: left;
            }
            .cinema-name{
              color: #191a1b;
              font-size: 15px;
              float: left;
            }
            .cinema-address{
              color: #797d82;
              font-size: 12px;
              margin-top: 5px;
            }
          }
          .cinema-info-rt{
            width: 70px;
            text-align: center;
            float: right;
            margin-right: -5px;
            line-height: 0.6rem;
            position: absolute;
            top: 0;
            right: 0.2rem;
            
  
            .cinema-lowPrice{
              font-size: 15px;
              color: #ff5f16;
              height: 0!important;
              display: inline-table!important;
              float: none!important;
            }
            i{
              font-size: 11px;
              font-style: normal;
            }
            .interge{
              font-size: 15px;
              color: #ff5f16;
            }
          }
          .upon{
            color: #ff5f16;
            font-size: 10px;
            margin-right: -5px;
          }
          .cinema-gpsAddress{
            strong{
              display: block;
              font-size: 11px;
              color: #797d82;
              margin-top: 5px;
            }
          }
        }
      }
    }
  }
.cinema-list-item:after{
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
