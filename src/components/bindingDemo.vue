<template>
  <div>
    <p class="static" :class="{ active: isActive, error: hasError }">テキスト</p>
    <p :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">テスト</p>
  </div>
</template>

<script>
export default {
  name: "bindingDemo",

  data() {
    return {
      isActive: true,
      hasError: false
    }
  }
}
</script>

<style scoped>
.active {
  color: #42b983;
}

.error {
  color: red;
}

</style>