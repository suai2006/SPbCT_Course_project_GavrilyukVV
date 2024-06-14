<template>
  <div id="app" @click="appClick">
    <Base v-if="userToken" v-on:logout="logout"/>
    <Authentication v-else v-on:signin="onSignIn"/>
  </div>
</template>
<script>
  import Base from '@/layout/Base.vue';
  import Authentication from '@/layout/Authentication.vue';
  const axios = require('axios');
  import { mapState, mapMutations } from 'vuex'
  export default 
  {
      components: {Base, Authentication},
      data() 
      {
          let data = 
          {
            userToken: false,            
          }
          return data;
      },
      
      created() {},   
      beforeMount()
      {
        
      },
      methods: 
      {
        ...mapMutations(['addSettingsList']),        
        onSignIn(response)
        {
            this.$cookies.set("access_token", response.access_token);
            this.userToken = true;              
        },
        logout() 
        {
          this.$cookies.remove("access_token");
          this.userToken = false;
          if(this.$route.name !== 'home') this.$router.push({name: 'home'})
        },
        appClick(event)
        {
          if(this.userToken && !this.$cookies.isKey("access_token"))
          {
            event.preventDefault();
            this.userToken = false;
            if(this.$route.name !== 'home') this.$router.push({name: 'home'});
            event.stopPropagation();
            return;
          }
        },    
        authCheck()
        {
            if(this.$cookies.isKey("access_token")) this.userToken = true;
            else
            {
              this.userToken = false;
              if(this.$route.name !== 'home')  this.$router.push({name: 'home'});
            }
        },   
      },
      watch:
      {
        '$route.name':
        {
          handler: function() {
            this.authCheck();
          },
          deep: true,
          immediate: true
        }
      }
  }
</script>

