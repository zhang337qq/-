<template>
  <van-index-bar :index-list="indexes">
    <template v-for="(char) in indexes">
      <van-index-anchor :index="char" :key="char" />
      <van-cell
        @click="$emit('changeCity',city.cityId,city.name)"
        :title="city.name"
        v-for="(city) in dataList[char]"
        :key="city.cityId"
      />
    </template>
  </van-index-bar>
</template>
<script>
// {A:[{},{}]}
export default {
  props: ["dataList", "indexes"],
  created() {
    // console.log("index-bar组件中的城市数据", this.dataList);
  }
};
</script>
