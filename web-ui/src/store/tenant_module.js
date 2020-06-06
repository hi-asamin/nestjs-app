const tenant = {
  namespaced: true,
  state: {
    id: 1,
    name: 'true',
  },
  mutations: {
    SET_USER(state, user) {
      state.id = user.id
      state.name = user.namespaced
    }
  },
  actions: {
    setDraewer({ commit }, user) {
      commit("SET_USER", user)
    }
  }
}

export default tenant