import Vue from 'vue'
import Vuex from 'vuex'
import RPCRequest from '@/assets/javascript/RPCRequest.js';
Vue.use(Vuex)

export default new Vuex.Store({
  state: 
  {
    isLoading:true,
    userToken:false,
    isMobile:false,
    isDesctop:true,    
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
    settingsList:(state) => {
      return state.settingsList;
    },
    incedentList:(state)=> {
      return state.incedentList;
    },    
    getLastincedents :(state)=>
    {
      let arr = state.incedentList.slice(0);
      return arr.splice(0, 2);
    },
    
  },
  mutations: {
    addSettingsList:(state, data) => {
      state.settingsList = data;
    },
    addIncedentList:(state, data) =>{
      state.incedentList = data;
    },
    isMobile:(state, data) => {
      state.isMobile = data;
    },
    isDesctop:(state, data) => {
      state.isDesctop = data;
    },
    setUserAgent :(state)=>
    {      
      if(['iPhone', 'Android'].find(f => (navigator.userAgent.indexOf(f) !== -1)))
      {
        state.isDesctop = false;
      }
      else 
      {
        state.isDesctop = true;
      }      
    },
    setSettingsList(state, data)
    {
      let item = state.settingsList.find(f => f.id == data.id);
      let idx = state.settingsList.indexOf(item);
      item.value = data.value;
      state.settingsList.splice(idx, 1, item);      
    },
    setUserToken(state, data) {
        state.userToken = data;
    }
    
  },
  actions: 
  {
    fetchData: async({commit, state}) => 
    {
      state.isLoading = true;
      let settingsResp = await RPCRequest.request('get', 'http://localhost:3000/api/settings');
      let settingsData = settingsResp?.settings || [];
      let incedentResp = await RPCRequest.request('get', 'http://localhost:3000/api/incedent');
      let incedentData = incedentResp?.incedents || [];      
      state.settingsList = settingsData;
      state.incedentList = incedentData;
      state.isLoading = false;
    }    
  },
  modules: {
  }
})
