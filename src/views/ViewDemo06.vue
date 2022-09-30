<template>
  <composition-api-demo />
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import CompositionApiDemo from '../components/compositionApiDemo.vue'

interface IPeople {
  name: string,
  age: number,
}

const person1 = reactive<IPeople>({
  name: 'hoge',
  age: 22
})
const person2 = reactive<IPeople>({
  name: 'test',
  age: 33
})

</script>

<style scoped>

</style>