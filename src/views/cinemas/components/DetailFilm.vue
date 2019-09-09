<template>
    <div class="film-info">
      <router-link to="">
        <div class="film-head">
          <span class="film-name">
          {{filmList.name}}
          </span>
          <span class="film-score">
            {{filmList.grade}}
          </span>
          <span class="film-score-unit">
            分
          </span>
        </div>
        <div class="film-desc">
         {{filmList.category}}|{{filmList.runtime}}分钟 | {{filmList.director}}| {{filmList.actors | getActors}}
          <img src="@/assets/imgs/next.png" alt="">
        </div>
      </router-link>
    </div>
</template>

<script>
  export default {
    // name: 'DetailFilm',
    props:{
      filmList:Object
    }
  }
</script>

<style scoped lang="scss">
  .film-info{
    width: 100%;
    background: #fff;
    height: 1.6rem;
    padding: 0.3rem 0;
    position: relative;
    .film-head{
      margin-bottom: 0.2rem;
      text-align: center;
      line-height: 0.36rem;
      .film-name{
        font-size: 0.3rem;
        color: #191a1b;
        padding-right: 0.1rem;
      }
      .film-score{
        font-size: 0.32rem;
        font-style: italic;
        color: #ffb232;
      }
      .film-score-unit{
        font-size: 0.2rem;
        color: #ffb232;
      }
    }
    .film-desc{
      text-align: center;
      height: 18px;
      color: #797d82;
      font-size: 13px;
      padding: 0 12%;
      overflow: hidden;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      img{
        width: 4px;
        height: 8px;
        position: absolute;
        right: 15px;
        top: 0;
        margin-top: 36px;
      }
    }
  
  }
</style>
