<template>  
    <div class="card" style="width: auto;">
        <div class="content">
        <div class="ui dividing header">Информация по датчикам</div>
        <div class="chart-container" style="position: relative; width: 100%;height: 100%; display: inline-block;vertical-align: top;">
            <Pie id="bar-chart-id" :options="barOptions" :data="chartData"/>
        </div>
        </div>        
    </div>
</template>
<script> 
  import { Pie, Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, BarElement, LinearScale } from 'chart.js'  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, BarElement, LinearScale);
  export default 
  {
    components: { Pie },
    data()
    {
      let obj = 
      {
        chartData: 
        {
          labels: [ 'ДД1', 'ДД2', 'ДД3', 'ДД4', 'ДДГ' ],
          datasets: [ 
            {
              label: "#", 
              data: [40, 20, 12, 30, 2],
              backgroundColor: 
              [
                'rgb(255, 99, 132)',
                'green',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)'
              ],
              hoverOffset: 4
            } 
          ]
        },
        barOptions: 
        {
            responsive: true,
            plugins :
            {   
              title: {
                  display: true,
                  text: '',
              },           
              legend: {position:"bottom"}
            }
        },
      };
      return obj;
    },
  }
</script>