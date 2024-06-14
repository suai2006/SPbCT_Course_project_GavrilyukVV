import Vue from 'vue'
import Vuex from 'vuex'
import RPCRequest from '@/assets/javascript/RPCRequest.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settingsList:[],
    incedentList:[],
    shortMonth: [ "янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек" ],
    activityData:{
      labels: [ "янв","фев","мар","апр","май","июн" ],
      datasets: [ 
        {
            label: '#',
            data: [0, 15, 12, 25, 5, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    }
  },
  getters: 
  {
    settingsList:(state)=>
    {
      return state.settingsList;
    },
    incedentList:(state)=>
    {
      return state.incedentList;
    },
    getLastincedents:(state)=>
    {
      let arr = state.incedentList.slice(0);
      return arr.splice(0, 2);
    }
  },
  mutations: {
    addSettingsList:(state, data) =>
    {
      state.settingsList = data;
    },
    addIncedentList:(state, data) =>
    {
      state.incedentList = data;
    }
  },
  actions: 
  {
    fetchData: async({commit}) => 
    {
      let settingsResp = await RPCRequest.request('get', 'http://localhost:3000/api/settings');
      let settingsData = settingsResp?.settings || [];
      commit('addSettingsList', settingsData);
      let incedentResp = await RPCRequest.request('get', 'http://localhost:3000/api/incedent');
      let incedentData = incedentResp?.incedents || [];
      commit('addIncedentList', incedentData);
    }
    
  },
  modules: {
  }
})
