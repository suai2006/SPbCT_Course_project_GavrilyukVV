<template>  
<div class="card" style="width: 100%;margin-top: 0;">
    <div class="content">
        <div class="header">Статистика использования системы</div>
        <div class="chart-container" style="position: relative; min-height:220px; width:100%;display: inline-block;vertical-align: top;">
            <LineChart id="myChart" :options="options" :data="chartData"/>
        </div>
    </div>
</div>    
</template>
<script> 
import { Line as LineChart } from 'vue-chartjs'
import {Chart, LineController, LineElement, PointElement, LinearScale, Title} from 'chart.js';
Chart.register(LineController, LineElement, PointElement, LinearScale, Title);

  export default 
  {
    components: { LineChart },
    data()
    {

      let obj = 
      {
        options: 
        {
            responsive: true,
            maintainAspectRatio: false,
            plugins :{ legend: {display: false}}
        },
      };
      return obj;
    },
    mounted () {},
    computed:
    {
        chartData()
        {
            return this.$store.state.activityData;
        }
    }
  }
</script>