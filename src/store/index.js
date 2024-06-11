import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    settingsList:[],
    incedentList:[],
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
  actions: {
  },
  modules: {
  }
})
