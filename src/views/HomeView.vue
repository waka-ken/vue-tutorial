<template>
  <div class="home">
    <HomeTop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HomeTop from '@/components/HomeTop.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HomeTop,
  },
});
</script>
