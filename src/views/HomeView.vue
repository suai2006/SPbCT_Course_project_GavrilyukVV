<template>  
  <Content :title="title">
    <h3 class="first">Text Container</h3>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData"/>
  </Content>
</template>
<script>  
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  export default 
  {
    name: 'home',
    components: { Bar },
    data()
    {
      let obj = 
      {
        title : "Главная страница",
        chartData: 
        {
          labels: [ 'Январь', 'Февраль', 'Март' ],
          datasets: [ {label: 'Data One', data: [40, 20, 12] } ]
        },
        chartOptions: 
        {
            responsive: true
        }
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