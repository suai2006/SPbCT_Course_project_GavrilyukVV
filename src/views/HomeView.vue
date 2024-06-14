<template>  
  <Content :title="title">
    <div class="ui cards">
      <BarChart />
      <UserAction />      
    </div>
    <LastIncedents />
    <div class="ui cards"><LineChart /></div>      
  </Content>
</template>
<script>  
  import BarChart from '@/components/home/BarChart.vue';
  import UserAction from '@/components/home/UserAction.vue';
  import LastIncedents from '@/components/home/LastIncedents.vue';
  import LineChart from '@/components/home/LineChart.vue';
  export default 
  {
    name: 'home',
    components: { BarChart, UserAction, LastIncedents, LineChart },
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