<template>  
  <Content :title="title">
    <h3 class="first">Text Container</h3>
    <div class="chart-container" style="position: relative; height:400px; width:609px;display: inline-block;vertical-align: top;">
        <Bar id="bar-chart-id" :options="barOptions" :data="chartData"/>
    </div>
    <div class="chart-container" style="position: relative; height:350px; width:350px;display: inline-block;vertical-align: top;">
        <Pie id="pie-chart-id" :options="pieOptions" :data="chartData" />
    </div>   
  </Content>
</template>
<script>  
  import { Pie, Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, BarElement, LinearScale } from 'chart.js'  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, BarElement, LinearScale);
  export default 
  {
    name: 'home',
    components: { Pie, Bar },
    props: 
    {},
    data()
    {
      let obj = 
      {
        title : "Главная страница",
        chartData: 
        {
          labels: [ 'ДД1', 'ДД2', 'ДД3', 'ДД4', 'ДДГ' ],
          datasets: [ 
            {
              label: 'Сработки', 
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
        pieOptions: 
        {
            responsive: true,
            plugins :{
              legend: {position: 'left'}
            }
        },
        barOptions: 
        {
            responsive: true,
            legend: {position: false}
        },
      };
      return obj;
    },
    beforeMount(){},
    mounted(){
      document.title = this.title;
    },
    computed: {},      
    methods: {} 
  };
</script>