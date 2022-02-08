import { createStore } from 'vuex'
import dashboard from './modules/dashboard'
import company from './modules/company'
import user from './modules/user'

export default createStore({
  modules: {
    dashboard,
    company,
    user
  },
  state: {
  },
  mutations: {
  },
  actions: {
  }
})
