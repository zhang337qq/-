<template>
<div class="seating-chart-wrap">
  <div class="seating-chart">
    <div class="screen">
      <!--几号厅-->
      1号厅(激光)
    </div>
    <div class="axion-y">
      <div class="rowName">
        1
      </div>
      <div class="rowName">
        1
      </div>
      <div class="rowName">
        1
      </div>
      <div class="rowName">
        1
      </div>
      <div class="rowName">
        1
      </div>
      <div class="rowName">
        1
      </div>
      <div class="rowName">
        1
      </div>
    </div>
    <div class="map" style="transform: translate(24.605px, 26.4507px) scale(0.789474);">
      <div class="axion-middle" style="height: 275px;">
      
      </div>
      <div class="seats">
        <div class="seat" style="left: 50px; top: 0;">
          <div class="single">
            <div class="normal">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'SeatingChart'
  }
</script>

<style scoped lang="scss">
  .seating-chart-wrap{
    top: 118px;
    touch-action: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    width: 100%;
    height: calc(100vh - 45px - 118px);
    overflow-y: hidden;
    .seating-chart{
      position: relative;
      height: 345px;
      width: 475px;
      .screen{
        position: relative;
        z-index: 2;
        height: 20px;
        min-width: 190px;
        font-size: 11px;
        line-height: 20px;
        border-radius: 1px 1px 8px 8px;
        text-align: center;
        color: #fff;
        background-color: #dbdbdb;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        transform: scale(0.789474);
        left: 109.883px;
      }
      .axion-y{
        position: absolute;
        width: 15px;
        left: 10px;
        top: 70px;
        z-index: 2;
        text-align: center;
        background-color: #191a1b;
        opacity: .2;
        border-radius: 11.5px;
        color: #fff;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        transform: translateY(0.500889px) scale(1, 0.789474);
        .rowName{
          width: 100%;
          height: 20px;
          margin: 2.5px 0;
          display: inline-block;
          transform: scale(0.789474);
          font-size: 0.1rem;
        }
      }
      .map{
        position: absolute;
        bottom: 95px;
        top: 70px;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        -webkit-transform-origin: 0 0;
        -ms-transform-origin: 0 0;
        transform-origin: 0 0;
        .axion-middle{
          position: absolute;
          left: calc(50% + 1px);
          border-left: 1px dotted #bdc0c5;
          z-index: 2;
          -webkit-transform: scaleX(.5);
          -ms-transform: scaleX(.5);
          transform: scaleX(.5);
        }
        .seats{
          position: relative;
          .seat{
            -webkit-transition: all .4s ease;
            transition: all .4s ease;
            position: absolute;
            display: inline-block;
            margin: 2.5px;
            .single{
              width: 24px;
              height: 24px;
              overflow: hidden;
              position: relative;
              .normal{
                height: 100%;
              }
            }
          }
        }
      }
    }
  }
</style>
