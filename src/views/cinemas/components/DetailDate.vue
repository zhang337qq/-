<template>
  <van-tabs @click="onClick" animated  title-active-color="#ff5f16" color="#ff5f16">
    <van-tab  v-for="(item) in showDate" :title="item | getPremiereAt('dmd')" >
      <detail-schedule :pageInfo="pageInfo" :liIdex="liIdex" v-if="pageInfo"></detail-schedule>
    </van-tab>
  </van-tabs>
</template>

<script>
// import
import DetailSchedule from './DetailSchedule'

export default {
  name: 'DetailDate',
  data () {
    return {
      liIdex: 0
    }
  },

  watch: {
    liIdex: {
      handler (j) {
        this.filmIndex(j)
        // console.log(j)  // 0 1 2
      },
      immediate: true
    }
  },
  props: {
    showDate: Array,
    pageInfo: Array
  },
  created () {
    this.onClick()
  },
  components: {
    DetailSchedule
  },
  methods: {
    onClick (name, title) {
      console.log(this)
      this.liIdex = name
      console.log(this.liIdex)
    },
    filmIndex (a) {
      this.$emit('dateIndex', a)
    }
  }
}
</script>

<style scoped lang="scss">
  .date-list{
    width: 100%;
  }
</style>
