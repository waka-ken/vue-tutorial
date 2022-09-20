<template>
 <div>
   <p>
     {{ count }}
     <span><button @click="increment">add</button></span>
   </p>
 </div>
  <div>
    <p>貸出されている本があるか</p>
    <span>{{ publishedBooksTitle }}</span>
  </div>
  <div>
    <p>Ask a yes/no question:</p>
    <input v-model="question" />
    <p>answer:{{ answer }}</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "methodDemo",
  data() {
    return {
      count: 4,
      author: {
        name: 'taro tanaka',
        books: [
            '本のタイトル１',
            '本のタイトル２',
            '本のタイトル３',
        ]
      },
      question: '',
      answer: 'Questions usually contain a question mark. ;-)'
    }
  },

  methods: {
    increment() {
      this.count++;
    },
    getAnswer() {
      this.answer = 'thinking ...'
      axios
        .get('https://yesno.wtf/api')
        .then((response) => {
          this.answer = response.data.answer
        })
      .catch( (error) => {
        this.answer = 'Error! Could not reach the API. ' + error
      })
    }
  },

  computed: {
    publishedBooksTitle() {
      return this.author.books.length > 0 ? 'Yes' : 'No'
    },
  },

  watch: {
    question(newQuestion, oldQuestion) {
      if(newQuestion.indexOf('?') > -1) {
        this.getAnswer();
      }
    }
  }
}
</script>

<style scoped>

</style>