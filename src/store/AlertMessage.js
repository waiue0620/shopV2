// import axios from 'axios'
// import router from '../router'

export default {
  strict: true,
  namespaced: true,
  state: {
    messages: []
  },
  actions: {
    updateMessage (context, { message, status }) {
      const timestamp = Math.floor(new Date() / 1000)
      context.commit('MESSAGES', {
        message,
        status,
        timestamp
      })
      context.dispatch('removeMessageWithTiming', timestamp)
    },
    removeMessageWithTiming (context, timestamp) {
      setTimeout(() => {
        context.state.messages.forEach((item, i) => {
          if (item.timestamp === timestamp) {
            context.commit('REMOVEMESSAGE', i)
          }
        })
      }, 5000)
    },
    message (context, response) {
      let status = 'success'
      let message = response.data.message
      if (!response.data.success) {
        status = 'danger'
      }
      context.dispatch('updateMessage', { message, status })
    }
  },
  mutations: {
    MESSAGES (state, payload) {
      state.messages.push(payload)
    },
    REMOVEMESSAGE (state, payload) {
      state.messages.splice(payload, 1)
    }
  },
  getters: {
    messages: state => state.messages
  }
}
