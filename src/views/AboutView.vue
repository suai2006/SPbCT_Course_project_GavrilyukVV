<template>
  <Content :title="title">
    <h3 class="first">Информация по полученным инцедентам</h3>
    <table class="ui celled padded table">
        <thead>
          <tr>
            <th class="single line">Помещение</th>            
            <th>Время</th>
            <th>Датчик</th>            
            <th>Сообщение</th>
          </tr>
        </thead>
        <tbody>
            <tr v-for="item in incedentList" :key="item.id" :ref="item.id">
              <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.room}}</div></td>
              <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.datetime}}</div></td>
              <td><div class="ui star rating" data-rating="3" data-max-rating="3"></div>{{item.name}}</td>
              <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.room}}</div></td>              
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
    beforeMount(){},
    mounted()
    {
        document.title = this.title;
        console.log(this.incedentList);
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