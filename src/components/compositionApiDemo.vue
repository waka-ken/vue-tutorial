<template>
  <p>{{ test.name }}</p>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";

  interface IPeople {
    name: string,
    age?: number,
  }

  const test = ref<IPeople>( {
    name: 'hoge',
    age: 22,
  })

  const num = ref(0)
  const add = (n: number) => {
    test.value.name += n
  }

  const computedNum = computed(() => num.value + 5)

  const computedNum2 = computed({
    get: () => num.value + 30,
    set: (val: number) => num.value += val
  })

</script>

<style scoped>

</style>