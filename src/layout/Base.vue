<template>
    <div class="main">
      <div class="navbar">
        <div class="logo">
            <img src="@/assets/image/main2.png"/>
        </div>
        <nav class="ui blue inverted vertical pointing menu">
            <router-link to="/" exact class="item" exact-active-class="active" active-class="active">Главная<i class="home icon"></i></router-link>
            <router-link to="/about" exact class="item" exact-active-class="active" active-class="active">Статистика<i class="info icon"></i></router-link>
            <router-link to="/objectmap" exact class="item" exact-active-class="active" active-class="active">Карта объекта<i class="globe icon"></i></router-link>
            <router-link to="/settings" exact class="item" exact-active-class="active" active-class="active">Настройки<i class="cogs icon"></i></router-link> 
        </nav>
        <button class="ui blue button" @click="$emit('logout')"><i class="sign-out icon"></i>Выход</button>
      </div>      
      <div class="ui main container">
          <router-view/>
      </div>        
    </div>    
</template>
<style src="@/assets/css/app.css"></style>
<style scoped src="@/assets/css/base.css"></style>
<script>
  const axios = require('axios');
  import { mapState, mapMutations } from 'vuex'
  export default 
  {
      components: {},
      data() 
      {
          let data = 
          {
                
          }
          return data;
      },
      
      created() {},   
      beforeMount()
      {
        this.getSetiingsList();
        this.getIncedendList();
      },
      methods: 
      {
        ...mapMutations(['addSettingsList','addIncedentList']),        
        async getSetiingsList() 
        {
          let response = await this.query('get', 'http://localhost:3000/api/settings');
          console.log(response?.settings);
          this.addSettingsList(response?.settings || []);
        },
        async getIncedendList() 
        {
          let response = await this.query('get', 'http://localhost:3000/api/incedent');
          this.addIncedentList(response?.incedents || []);
        },
        async query(method, url, data)
        {
          try 
          {
            let config = 
            {
                method: method,
                maxBodyLength: Infinity,
                url: url,
                headers: { 
                    'Content-Type': 'application/json'                    
                }
            };
            if(data) config.data = data;
            let response = await axios.request(config);

            return response.data;
          } catch (error) {
            console.log(error);
          }
        }
      },
      watch:
      {
       
      }
  }
</script>
