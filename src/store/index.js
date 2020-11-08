import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    question: '',
    response: '',
    image: ''
  },
  mutations: {
    setQuestion (state, question) {
      state.question = question
    },
    setResponse (state, response) {
      state.response = response
    },
    setImage (state, image) {
      state.image = image
    }
  },
  actions: {
    async getResult ({ commit }) {
      const response = await axios.get('https://yesno.wtf/api')
      commit('setResponse', response.data.answer)
      commit('setImage', response.data.image)
    }
  },
  modules: {
  }
})
