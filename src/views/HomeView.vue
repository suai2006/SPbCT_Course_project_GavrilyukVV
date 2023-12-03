<template>  
  <Content :title="title">
    <h3 class="first">Text Container</h3>
  </Content>
</template>
<script>  
  export default 
  {
    name: 'home',
    components: {},
    data()
    {
      let obj = {
        title : "Главная страница"
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