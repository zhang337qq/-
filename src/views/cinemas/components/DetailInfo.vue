<template>
  <div class="cinema-info">
    <div class="tags">
      
      <template v-for="(item) in listName">
        <span>{{item.name}}</span>
      </template>
      <i> > </i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailPlaying',
    data(){
      return{
        fl:[]
      }
    },
    props:{
      listName:Array
    },
    created(){
      // this.getfl()
    },
    methods:{
      // getfl(){
      //   console.log(131231)
      //   console.log(this.list)
      // }
    }
  }
</script>

<style scoped lang="scss">
  .cinema-info{
    .tags{
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      font-size: 0.12rem;
      color: #ffb232;
      overflow: hidden;
      position: relative;
      padding: 5px 0 15px;
      span{
        padding: 2px 4px;
        border: 1px solid #ffb232;
        margin-left: 0.2rem;
      }
      i{
        font-size: 0.3rem;
        margin-left: 0.2rem;
      }
    }
  }
</style>
