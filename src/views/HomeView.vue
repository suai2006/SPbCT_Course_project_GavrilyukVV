<template>  
  <Content :title="title">
    <div class="ui cards">
      <PieChart />
      <UserAction />      
    </div>
    <LastIncedents />
    <LineChart />   
  </Content>
</template>
<script>  
  import PieChart from '@/components/home/PieChart.vue';
  import BarChart from '@/components/home/BarChart.vue';
  import UserAction from '@/components/home/UserAction.vue';
  import LastIncedents from '@/components/home/LastIncedents.vue';
  import LineChart from '@/components/home/LineChart.vue';
  export default 
  {
    name: 'home',
    components: { PieChart, BarChart, UserAction, LastIncedents, LineChart },
    props: {},
    data()
    {
      let obj = 
      {
        title : "Главная страница",        
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