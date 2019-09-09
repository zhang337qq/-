<template>
  <div>
    <detail-header></detail-header>
    <seat-info></seat-info>
    <seating-chart></seating-chart>
  </div>

</template>

<script>
  import DetailHeader from './components/DetailHeader'
  import SeatInfo from './components/SeatInfo'
  import SeatingChart from './components/SeatingChart'
  export default {
    name: 'chooseSeat',
    data(){
      return{
      
      }
    },
    components:{
      DetailHeader,
      SeatInfo,
      SeatingChart
    }
  }
</script>

<style scoped>

</style>
