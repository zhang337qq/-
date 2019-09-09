<template>
  <div>
    <div class="film-list-content">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ul class="film-list-group">
          <hz-film-list-item v-for="(val) in list" :type="1" :key="val.filmId" :item="val"></hz-film-list-item>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
import HzFilmListItem from "@/views/film/components/filmListItem";
import { getFilmList } from "@/api/films";
export default {
  components: {
    HzFilmListItem
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      pageInfo: {
        pageNum: 0,
        pageSize: 10
      }
    };
  },
  methods: {
    onLoad() {
      this.pageInfo.pageNum++;
      //  console.log('在请求数据',this.pageInfo.pageNum)
      let query = {
        type: 1,
        ...this.pageInfo
      };
      getFilmList(query).then(result => {
        if (result.status == 0) {
          this.loading = false;
          // 请不同页请求的数据与之前的数据连接起来
          this.list = this.list.concat(result.data.films);
          if (this.list.length >= result.data.total) {
            console.log("没有更多的数据了");
            this.finished = true;
          }
        }
      });
    }
  }
};
</script>
<style scoped>
.film-list-content {
  /* margin-top:1.86rem; */
  background: #fff;
}
.film-list-group {
  padding: 0 0.3rem;
}
.film-list-item {
  height: 1.88rem;
  padding: 0.3rem 0;
  position: relative;
}
.film-list-item:after {
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
.film-list-item > a {
  display: flex;
  width: 100%;
  align-items: center;
}
.film-list-item-pic {
  width: 1.32rem;
  height: 1.88rem;
  flex: none;
  overflow: hidden;
}
.padding {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.film-list-item-pic > img {
  width: 100%;
}
.film-list-item-desc {
  flex: 1;
  padding: 0 0.2rem;
  max-width: calc(100% - 2.32rem);
  box-sizing: border-box;
}
.item-desc-name {
  font-size: 0.32rem;
}
.item-desc-name .name {
  color: #191a1b;
  margin-right: 0.1rem;
}
.item-desc-name .is-3d {
  font-size: 0.18rem;
  color: #fff;
  background-color: #d2d6dc;
  height: 0.28rem;
  line-height: 0.28rem;
  padding: 0 2px;
  border-radius: 2px;
}
.film-list-item-desc .info-col {
  font-size: 0.26rem;
  color: #797d82;
  margin-top: 0.12rem;
  overflow-x: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
.item-desc-grade .grade {
  color: #ffb232;
  font-size: 0.28rem;
}
.film-list-item-action {
  width: 1rem;
  flex: none;
  height: 1.1rem;
  font-size: 0;
}
.film-list-item-action .buy {
  display: block;
  box-sizing: border-box;
  line-height: 0.5rem;
  height: 0.5rem;
  width: 1rem;
  color: #ff5f16;
  font-size: 0.26rem;
  text-align: center;
  position: relative;
  border: 1px solid #ff5f16;
  border-radius: 2px;
}
</style>
