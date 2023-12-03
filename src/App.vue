<template>
  <div id="app">
    <Base v-if="userToken" v-on:logout="logout"/>
    <Authentication v-else v-on:sigin="onSigin"/>
  </div>
</template>
<script>
  import Base from '@/layout/Base.vue';
  import Authentication from '@/layout/Authentication.vue';
  export default 
  {
      components: {Base, Authentication},
      data() 
      {
          let data = 
          {
            userToken: false
          }
          return data;
      },
      computed: {},      
      beforeMount()
      {
        if (localStorage.userToken) 
        {
          //БУдут добавлены куки, что избавит от необходимости делать предварительный запрос
          //будет сделано computed свойство
          this.userToken = localStorage.userToken;
        }
        else
        {
          if(this.$route.name !== 'home') this.$router.push({name: 'home'})
        }
      },
      methods: 
      {
          onSigin(formData) 
          {
              localStorage.userToken = true;
              this.userToken = localStorage.userToken;
          },
          logout() 
          {
            localStorage.removeItem("userToken");
            this.userToken = false;
            if(this.$route.name !== 'home') this.$router.push({name: 'home'})
          }
      }
  }
</script>

