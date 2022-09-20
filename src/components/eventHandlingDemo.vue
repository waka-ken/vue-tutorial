<template>
  <div>
    <button @click="clickEvent">add</button>
    <button @click="say('Hi!')">say Hi!</button>
    <button @click="warn('まだフォームが入力されていません', $event)">submit</button>
    <p>The button above has been clicked {{ counter }} times.</p>
    キーボードenterキーで入力が可能です
    <input v-model="text" @keyup.enter="submit(text)" />
  </div>
</template>

<script>
export default {
  name: "eventHandlingDemo",

  data() {
    return {
      counter: 0,
      name: 'Vue.js',
      message: '',
      text: ''
    }
  },

  methods: {
    clickEvent(event) {
      this.counter += 1;
      alert('Hello ' + this.name + '!')
      if (event) {
        alert(event.target.tagName)
      }
    },
    say(message) {
      alert(message)
    },
    warn(message, event) {
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    submit(text) {
      if (!text) {
        alert('何も入力されていません')
      }
      alert(text)
      this.text = ''
    }
  }
}
</script>

<style scoped>

</style>