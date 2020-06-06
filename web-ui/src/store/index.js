import Vue from 'vue'
import Vuex from 'vuex'

import user from './user_module'
import tenant from './tenant_module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    tenant
  }
});