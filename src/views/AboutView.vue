<template>
  <Content :title="title">
    <h3 class="first">Информация по полученным инцедентам</h3>
    <table class="ui celled padded table">
        <thead>
          <tr>
            <th class="single line">Событие</th>           
            <th>Датчик</th>            
            <th>Помещение</th>
            <th>Время</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in incedentList" :key="item.id" :ref="item.id">
              <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.message}}</div></td>              
              <td><div class="ui star rating" data-rating="3" data-max-rating="3"></div>{{item.name}}</td>
              <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.room}}</div></td>   
              <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.datetime}}</div></td>           
            </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="5">
              <div class="ui right floated pagination menu">
                  <a class="icon item"><i class="left chevron icon"></i></a>
                  <a class="item">1</a>
                  <a class="item">2</a>
                  <a class="item">3</a>
                  <a class="item">4</a>
                  <a class="icon item"><i class="right chevron icon"></i></a>
              </div>
            </th>
          </tr>
        </tfoot>
      </table>
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
    }, 
    methods: {}     
  }
</script>
<style scoped>
.ui.table {
  background: #F9FAFB;
}
tbody {
    display:block;
    height: calc(100vh - 300px);
    max-height:calc(100vh - 300px);
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