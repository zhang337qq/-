<template>
  <div>
    <div class="film-list-content">
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <ul class="film-list-group">
          <hz-film-list-item v-for="(val) in list" :type="2" :key="val.filmId" :item="val"></hz-film-list-item>
        </ul>
      </van-list>
    </div>
  </div>
</template>
<script>
import HzFilmListItem from "@/views/film/components/filmListItem";
import { getFilmList } from "@/api/films";
export default {
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
  components: {
    HzFilmListItem
  },
  methods: {
    onLoad() {
      this.pageInfo.pageNum++;
      //  console.log('在请求数据',this.pageInfo.pageNum)
      let query = {
        type: 2,
        ...this.pageInfo
      };
      getFilmList(query).then(result => {
        if (result.status == 0) {
          this.loading = false;
          // 请不同页请求的数据与之前的数据连接起来
          this.list = this.list.concat(result.data.films);
          // console.log(this.list);
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
</style>
