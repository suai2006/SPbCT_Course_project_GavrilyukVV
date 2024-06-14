<template>
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
            <tr v-for="item in getLastincedents" :key="item.id" :ref="item.id">
            <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.message}}</div></td>              
            <td><div class="ui star rating" data-rating="3" data-max-rating="3"></div>{{item.name}}</td>
            <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.room}}</div></td>   
            <td><div class="ui star rating" data-rating="3" data-max-rating="3">{{item.datetime}}</div></td>           
            </tr>
        </tbody>        
    </table>
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
      }, 
      methods: {}     
    }
  </script>