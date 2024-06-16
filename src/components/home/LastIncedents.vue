<template>
  <div class="ui segment" style="width: 100%;">
    <h3 class="ui first dividing header">Последне инциденты</h3>  
    <div v-if="loading" class="ui relaxed divided list">
      <div class="ui active inverted dimmer" style="position: static; margin-top: 100px;">
          <div class="ui text loader">Загрузка...</div>
      </div>
      <p></p>
    </div>
    <div v-else-if="lastincedentsCount" class="ui relaxed divided list">   
      <div v-for="item in getLastincedents" :key="item.id" :ref="item.id" class="item">
        <i class="large exclamation circle middle aligned icon"></i>
        <div class="content">
          <div class="header">{{item.message}}</div>
            <div class="description"> 
              <p>Время инцедента: {{dateFormat(item.datetime)}}</p>
            </div>
          </div>
      </div>
    </div> 
    <div v-else>
        <div class="ui ignored info attached message">
            <p>Система не получила список инцедентов.</p>
        </div>
        <div class="ui ignored bottom attached warning message">
            <p>
                Возможные причины:            
            </p>
            <div class="ui bulleted list">
                <div class="item">еще не происходило срабатывание системы безопасности и записей о событиях нет;</div>
                <div class="item">данные были удалены или премещены.</div>
            </div>
            <p></p>
        </div>
    </div> 
  </div>    
</template>
  <script>
    export default 
    {
      name: 'LastIncedents',
      components: {},
      data()
      {
        let obj = {};
        return obj;
      },  
      computed: 
      {
        getLastincedents()
        {
          return this.$store.getters['getLastincedents'];
        },  
        lastincedentsCount()
        {
          return this.getLastincedents.length;
        },
        loading()
        {
          return this.$store.state.isLoading;
        }
        
      }, 
      methods: {
        dateFormat(date)
        {
          return new Date(date.split('.')[0]).toLocaleString();
        }
      }     
    }
  </script>