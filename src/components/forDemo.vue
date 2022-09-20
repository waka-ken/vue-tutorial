<template>
  <div v-if="!todos.length">
    <h1>表示するリストがありません</h1>
  </div>
  <div>
    <form v-on:submit.prevent="addNewTodo">
      <label for="new-todo">Add a todo</label>
      <input
          v-model="newTodoText"
          id="new-todo"
          placeholder="文字を入力"
      />
      <button>Add</button>
    </form>
  </div>
  <table>
    <tr>
      <th>有効</th>
      <th>タイトル</th>
      <th>日付</th>
    </tr>
    <tr v-for="(list, index) in todos" :key="index" :title="list.title">
      <td><input type="checkbox" v-model="list.checkbox" ></td>
      <td>{{ list.title }}</td>
      <td>{{ formatDate(list.date) }}</td>
      <td><button @click="todos.splice(index, 1)">remove</button></td>
    </tr>
  </table>
  <div>
    チェックが入っているリスト
    <ul>
      <li v-for="item in selectedList" :key="item">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: "forDemo",
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: 0,
          checkbox: false,
          title: 'テスト０１',
          date: '2022-09-19'
        },
        {
          id: 1,
          checkbox: true,
          title: 'テスト０２',
          date: '2022-09-20'
        },
        {
          id: 2,
          checkbox: false,
          title: 'テスト０３',
          date: '2022-09-21'
        },
      ],
      nextTodoId: 4
    }
  },

  methods: {
    formatDate(date){
      return moment(date).format('YYYY年MM月DD日')
    },
    onCheck(checked) {
      return checked = !checked
    },

    addNewTodo() {
      this.todos.push({
        id: this.nextTodoId++,
        title: this.newTodoText,
      })
      this.newTodoText = ''
    }
  },

  computed: {
    selectedList() {
      return this.todos.filter((list) => {
        return list.checkbox === true;
      })
    }
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th ,td {
  border: 1px solid;
}

</style>