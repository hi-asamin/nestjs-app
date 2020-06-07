const user = {
  namespaced: true,
  state: {
    id: 1,
    name: 'sam',
  },
  mutations: {
    SET_USER(state, user) {
      state.id = user.id
      state.name = user.name
    }
  },
  actions: {
    setUser({ commit }, user) {
      commit("SET_USER", user)
    }
  }
}

export default user