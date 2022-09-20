<template>
  <div>
    <h1>demo02</h1>
    <p>method</p>
  </div>
  <method-demo />
</template>

<script>
import { defineComponent } from "vue";
import MethodDemo from "../components/methodDemo";

export default defineComponent({
  name: "ViewDemo02",
  components: { MethodDemo },

  data() {
    return {
      count: 4
    }
  }


})


</script>


<style scoped>

</style>