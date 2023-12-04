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