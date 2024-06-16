<template>
  <Content :title="title">
    <div class="ui segment">
      <h3 class="first">Информация по полученным инцедентам</h3>
      <div v-if="incedentCount" class="ui relaxed divided list">   
        <div v-for="item in incedentList" :key="item.id" :ref="item.id" class="item">
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
        title : "Оперативная информация"
      };
      return obj;
    },
    mounted()
    {
        document.title = this.title;
    },
    computed: 
    {
        incedentList()
        {
            return this.$store.state.incedentList;
        },     
        incedentCount()
        {
          return this.incedentList.length;
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
<style scoped>
.incedents {
  background: #FFFFFF;
  padding: 1.5em 1em;
  border-radius: 0.28571429rem;
  box-shadow: 0px 1px 3px 0px #D4D4D5, 0px 0px 0px 1px #D4D4D5;
  font-size: 1em;
  order: none;
}
tbody {
    display:block;
    height: calc(100vh - 310px);
    max-height:calc(100vh - 310px);
    overflow-y:scroll;
    background: #FFFFFF;
}
thead, tbody tr {
    display:table;
    width:100%;
    table-layout:fixed;
}
thead {
    width:100%; 
    padding-right: 10px;
}
table {
    width:200px;
}
.ui.table tr:last-child td {
    border-bottom: 1px solid rgba(34, 36, 38, 0.1);
}
.ui.rating
{
  white-space: normal;
}
</style>