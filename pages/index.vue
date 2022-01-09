<template>
  <section class="container">
    <h1>Todo App</h1>
    <p><input type="text" name="content"/></p>
    <div>
      <button>save</button>
      <button>find</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <span>{{ todo.content }}</span><span>({{ todo.created }})</span><span>×</span>
      </li>
    </ul>
  </section>

</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    content: ''
  }),
  computed: {
    ...mapState(['todos'])
  }
}

</script>
