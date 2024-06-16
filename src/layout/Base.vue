<template>
    <div class="main">
      <div v-if="isDesctop" class="navbar">
        <div class="logo">
            <img src="@/assets/image/main2.png"/>
        </div>
        <nav class="ui blue inverted vertical pointing menu">
            <NavLink link="/" icon="home icon" title="Главная"/>
            <NavLink link="/about" icon="info icon" title="Статистика"/>
            <NavLink link="/objectmap" icon="globe icon" title="Карта объекта"/>
            <NavLink link="/settings" icon="cogs icon" title="Настройки"/>
        </nav>
        <button class="ui blue button" @click="$emit('logout')"><i class="sign-out icon"></i>Выход</button>
      </div> 
      <div v-else class="navbar mobile">
        <button class="ui large blue icon button" style="opacity: 1 !important;" disabled>
          <i class="bars icon"></i>
        </button>
        <nav class="ui blue inverted vertical pointing menu">
            <ButtonLink link="/" icon="home icon"/>
            <ButtonLink link="/about" icon="info icon"/>
            <ButtonLink link="/objectmap" icon="globe icon"/>
            <ButtonLink link="/settings" icon="cogs icon"/>            
        </nav>
        <button class="ui large blue icon button">
          <i class="sign-out icon" @click="$emit('logout')"></i>
        </button>
      </div>     
      
      <div  v-if="isDesctop" class="app_desktop"><router-view/></div>
      <div  v-else class="app_mobile"><router-view/></div>
    </div>    
</template>
<style src="@/assets/css/app.css"></style>
<style scoped src="@/assets/css/base.css"></style>
<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import ButtonLink from '@/components/semantic/ButtonLink.vue';
  import NavLink from '@/components/semantic/NavLink.vue';
  export default 
  {
      components: {NavLink, ButtonLink},
      data() 
      {
          return {
          };
      },
      created() {},     
      mounted(){},
      methods: 
      {
        ...mapActions(['fetchData'])      
      },
      computed :
      {
        isDesctop() {
          return this.$store.state.isDesctop;
        },
      },
      watch:{}
  }
</script>
<style scoped>

</style>
