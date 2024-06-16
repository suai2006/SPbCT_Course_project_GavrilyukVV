<template>  
    <div class="card" style="flex-grow: 1">
        <div class="content">
            <div class="header">Активность пользователя</div>
            <div v-if="loading" class="ui relaxed divided list">
                <div class="description ui active inverted dimmer" style="position: static; margin-top: 100px;">
                    <div class="ui text loader">Загрузка...</div>
                </div>
                <p></p>
            </div>
            <div v-else class="description">
                <table class="ui single line table">
                <thead><tr><th>Событие</th><th>Дата</th></tr></thead>
                <tbody>
                    <tr><td>Авторизация</td><td>{{curentDate}}</td></tr>
                    <tr><td>Авторизация</td><td>13.06.2024, 10:28:57</td></tr>
                    <tr><td>Изменение способа оповещения</td><td>12.06.2024, 10:28:57</td></tr>
                    <tr><td>Авторизация</td><td>12.06.2024, 18:28:57</td></tr>
                    <tr><td>Смена пароля</td><td>11.06.2024, 16:28:57</td></tr>                    
                    <tr><td>Авторизация</td><td>11.06.2024, 10:28:57</td></tr>
                </tbody>
                </table>
            </div>
        </div>        
    </div>
</template>
<script> 
  
  export default 
  {
    components: { },
    data()
    {
      let obj = 
      {
        
      };
      return obj;
    },
    computed: {
        curentDate()
        {
            let dt = new Date();
            return dt.toLocaleString();
        },
        loading()
        {
          return this.$store.state.isLoading;
        }
    },      
  }
</script>
<style scoped>
.ui.table tr td:first-child
{
    white-space: normal!important;
}
.ui.table tr td
{
    padding: 6px 0.78571429em;
}
.content > .header + .description
{
    margin-top: 18px!important;
}
</style>