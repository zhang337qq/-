<template>
  <div>
    <header class="header-title">
      <img src="@/assets/imgs/back.png" class="go-back" />
      <span class="header-title-center">昆虫总动员2：来自远方的后援军</span>
    </header>
  </div>
</template>
<style scoped>
/* 顶部标题固定部分 */
.header-title {
  position: fixed;
  top: 0;
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  z-index: 9000;
  background-color: hsla(0, 0%, 100%, 0);
  color: transparent;
  text-align: center;
  font-size: 0.34rem;
  transition: all 0.3s;
}
.header-title .go-back {
  width: 0.6rem;
  height: 0.6rem;
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
}
.film-detail-title {
  transition: all 0.3s ease;
  background-color: #fff;
  color: #191a1b;
}
.film-detail-title:after {
  display: block;
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
  -webkit-transform: scaleY(0.5);
  -ms-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
</style>
