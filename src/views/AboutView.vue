<template>
  <Content :title="title">
    <h3 class="first">Text Container</h3>
  </Content>
</template>
<script>
  export default 
  {
    name: 'about',
    components: {},
    data()
    {
      let obj = {
        title : "This is an about page"
      };
      return obj;
    },
    beforeMount(){},
    mounted()
    {
      document.title = this.title;
    },
    computed: {},      
    methods: {}     
  }
</script>