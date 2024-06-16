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
  import { mapState, mapMutations, mapActions } from 'vuex'
  export default 
  {
      components: {Base, Authentication},
      data() 
      {
          let data = 
          {
               
          }
          return data;
      },
      
      created() {},   
      beforeMount(){},
      computed:
      {
        userToken()
        {
            return this.$store.state.userToken;
        }
      },
      async mounted()
      {
        this.$store.commit("setUserAgent");
        this.$store.commit("setUserToken", this.$cookies.isKey("access_token"));
        if(this.userToken) await this.fetchData('fetchData');
      },
      methods: 
      {
        ...mapMutations(['addSettingsList']),    
        ...mapActions(['fetchData']),          
        async onSignIn(response)
        {
            this.$cookies.set("access_token", response.access_token);
            this.$store.commit("setUserToken", true);
            await this.fetchData('fetchData');
        },
        logout() 
        {
          this.$cookies.remove("access_token");
          this.$store.commit("setUserToken", false);
          if(this.$route.name !== 'home') this.$router.push({name: 'home'})
        },
        appClick(event)
        {
          if(this.userToken && !this.$cookies.isKey("access_token"))
          {
            event.preventDefault();
            this.$store.commit("setUserToken", false);
            if(this.$route.name !== 'home') this.$router.push({name: 'home'});
            event.stopPropagation();
            return;
          }
        },    
        authCheck()
        {
            if(!this.$cookies.isKey("access_token")) {
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

