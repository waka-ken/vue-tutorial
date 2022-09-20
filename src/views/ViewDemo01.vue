<template>
  <div>
    <h1>demo01</h1>
    <p>ループと条件分岐について</p>
    <forDemo />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import forDemo from '@/components/forDemo.vue';

export default defineComponent( {
  name: 'ViewDemo01',
  components: {
    forDemo,
  }
})
</script>

<style scoped>

</style>