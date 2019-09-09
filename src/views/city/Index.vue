<template>
  <div class="city">
    <hz-location @changeCity="selectCity" v-show="false"></hz-location>
    <!-- 城市定位页面的头部 -->
    <div class="city-title">
      <div class="city-go-back" @click="$router.go(-1)">
        <span>X</span>
      </div>
      <div class="city-title-header">
        当前城市-
        <span>{{$store.state.cityName}}</span>
      </div>
    </div>
    <!-- 城市定位页面的搜索部位 -->
    <div class="search-city">
      <input type="text" placeholder="输入城市名或拼音" />
      <span>取消</span>
    </div>
    <!-- 热门城市和GPS  -->
    <div class="recommend-city">
      <!-- GPS -->
      <div class="gps-city">
        <p>GPS定位你所在的城市</p>
        <span @click="toFilms">{{$store.state.cityName}}</span>
      </div>
      <!-- 热门城市 -->
      <div class="recommend">
        <p>热门城市</p>
        <span v-for="(item,index) in HotCity" :key="index" @click="toFilms">{{item.name}}</span>
      </div>
    </div>
    <!-- 城市按照首字母排序的列表 -->
    <hz-index-bar
      @changeCity="selectCity2"
      v-if="cityList.length"
      :indexes="indexes"
      :dataList="cityData"
    ></hz-index-bar>
    <!-- <ul class="city-list">
      <li>
        <p>A</p>
        <ul>
          <li>阿拉善盟</li>
          <li>鞍山</li>
          <li>安庆</li>
        </ul>
      </li>
    </ul>-->
  </div>
</template>
<script>
import HzLocation from "@/components/Location";
import { setCityId, setCityName } from "@/utils/local-data";
import HzIndexBar from "./IndexBar";
import { getCityList } from "@/api/city";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      cityList: [], // 城市的数据
      gpsCityName: "", // 定位城市名称
      gpsCityId: "", //定位城市的ID
      indexes: [] //存储的是所有城市拼音的首字母
      // HotCity: []
    };
  },
  computed: {
    // 这个计算属性返回的是按照首字母排序完成的城市列表的一个对象
    cityData() {
      // {A:[{}],B:[{}]}
      let result = {}; // 存储所有城市，是按城市的拼音首字母分类
      this.cityList.forEach(element => {
        let key = element.pinyin.charAt(0).toUpperCase();
        if (!result[key]) {
          result[key] = [];
          this.indexes.push(key);
        }
        result[key].push(element);
      });
      this.indexes.sort();
      // console.log(result);
      return result;
    },
    HotCity() {
      let res = [];
      this.cityList.forEach(item => {
        if (item.isHot == 1) {
          res.push(item);
        }
      });
      return res;
    }
  },
  components: {
    HzLocation,
    HzIndexBar
  },
  created() {
    this.getCityData();
  },
  methods: {
    ...mapMutations(["setCityId", "setCityName"]),
    selectCity(name) {
      // 根据当前城市名称获取相应的城市id
      // 将城市id以及名称存放在localStorage中和vuex中
      // console.log("父组件拿到的城市....", name);
      this.gpsCityName = name;
      this.getCityIdByName();
      this.setCity(this.gpsCityId, this.gpsCityName);
    },
    getCityData() {
      getCityList().then(result => {
        if (result.status == 0) {
          this.cityList = result.data.cities;
          // console.log("获取数据", this.cityList);
        }
      });
    },
    getCityIdByName() {
      for (let i = 0; i < this.cityList.length; i++) {
        if (this.cityList[i].name == this.gpsCityName) {
          this.gpsCityId = this.cityList[i].cityId;
          break;
        }
      }
      // console.log(this.gpsCityId, this.gpsCityName);
    },
    // 存储当前城市的id以及名称
    setCity(id, name) {
      // console.log("存储当前城市信息....");
      setCityId(id);
      setCityName(name);
      this.setCityId(id);
      this.setCityName(name);
    },
    selectCity2(id, name) {
      this.setCity(id, name);
      this.$router.push("/films");
    },
    toFilms(e) {
      let str = e.target.innerHTML;
      let id = 0;
      for (let i = 0; i < this.cityList.length; i++) {
        if (this.cityList[i].name == str) {
          id = this.cityList[i].cityId;
          break;
        }
      }
      this.selectCity2(id, str);
    }
  }
};
</script>
<style lang="scss" scoped>
.city {
  background-color: #f4f4f4;
  font-size: 0.34rem;
  .city-title {
    height: 0.88rem;
    text-align: center;
    line-height: 0.88rem;
    background-color: #fff;
    position: relative;
    .city-go-back {
      width: 0.88rem;
      float: left;
      font-size: 0.54rem;
    }
    .city-title-header {
      text-align: center;
    }
  }
  .search-city {
    display: flex;
    padding: 0.19rem 0.3rem;
    color: #2c3e50;
    input {
      box-sizing: border-box;
      font-size: 0.28rem;
      width: 6.044rem;
      height: 0.6rem;
      padding-left: 2em;
    }
    span {
      flex: 1;
      line-height: 0.6rem;
      text-align: center;
    }
  }
  .recommend-city {
    background-color: #fff;
    padding-left: 0.3rem;
    padding-top: 0.3rem;
    .gps-city {
      p {
        font-size: 0.26rem;
        color: #797d82;
        margin-bottom: 0.2rem;
      }
      span {
        display: inline-block;
        height: 0.6rem;
        background-color: #f4f4f4;
        line-height: 0.6rem;
        border-radius: 3px;
        margin: 0 0.15rem;
        font-size: 0.28rem;
        color: #191a1b;
        width: 2rem;
        text-align: center;
        margin-bottom: 0.3rem;
      }
    }
    .recommend {
      p {
        font-size: 0.26rem;
        color: #797d82;
        margin-bottom: 0.2rem;
      }
      span {
        display: inline-block;
        height: 0.6rem;
        background-color: #f4f4f4;
        line-height: 0.6rem;
        border-radius: 3px;
        margin: 0 0.15rem;
        font-size: 0.28rem;
        color: #191a1b;
        width: 2rem;
        text-align: center;
        margin-bottom: 0.3rem;
      }
    }
  }
  .city-list {
    background-color: #fff;
    li {
      p {
        height: 0.6rem;
        line-height: 0.6rem;
        background-color: #f4f4f4;
        padding-left: 0.3rem;
        font-size: 0.28rem;
      }
      ul {
        padding-left: 0.3rem;
        font-size: 0.28rem;
        li {
          font-size: 0.3rem;
          height: 0.6rem;
          line-height: 0.6rem;
          border-bottom: 1px solid #f1f1f1;
        }
      }
    }
  }
}
</style>
