import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      todos: [
        { content: 'hogehoge', created: '2019-03-31 15:30' },
        { content: 'fugafuga', created: '2019-03-31 16:00' }
      ]
    }),
    mutations: {
      insert (state, obj) {
        const d = new Date()
        const fmt = d.getFullYear() +
                            '年' + (d.getMonth()) +
                            '月' + ('00' + d.getDate()).slice(-2) +
                            '日' + ('00' + d.getHours()).slice(-2) +
                            ':' + ('00' + d.getMinutes()).slice(-2)
        state.todos.unshift({
          content: obj.content,
          created: fmt
        })
      },
      remove (state, obj) {
        for (let i = 0; i < state.todos.length; i++) {
          const ob = state.todos[i]
          // eslint-disable-next-line eqeqeq
          if (ob.content == obj.content && ob.created == obj.created) {
            alert('remove ' + '"' + ob.content + '"')
            state.todos.splice(i, 1)
            return
          }
        }
      }
    }
  })
}

export default createStore
