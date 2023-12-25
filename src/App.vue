<script setup lang="ts">
  import AppNavigation from '@/components/AppNavigation.vue'
</script>

<template>
  <div class="app">
    <AppNavigation></AppNavigation>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
  .app {
    min-height: 100vh;
  }
</style>
