<template>
  <div class="info">
    <p class="film-name">速度与激情：特别行动</p>
    <p class="film-des">周三09月04日 14:00 英语3D</p>
  </div>
</template>

<script>
  export default {
    name: 'SeatInfo'
  }
</script>

<style scoped lang="scss">
  .info{
    padding: 59px 15px 15px;
    background-color: #fff;
    .film-name{
      font-size: 0.3rem;
      line-height: 0.41rem;
      color: #191a1b;
    }
    .film-des{
      font-size: 0.26rem;
      line-height: 0.38rem;
      margin-top: 0.08rem;
      color: #797d82;
    }
  }
</style>
