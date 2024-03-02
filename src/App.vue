<script setup>
import { RouterLink, RouterView } from 'vue-router'
const warmServer = async() => {
  const response = await fetch('https://aps-website-backend.onrender.com/api/v1/gallery/request/dummy');
  if (!response.ok) {
    console.log('Server not warmed up');
  }
  console.log('Server warmed up');
}
warmServer();

setInterval(warmServer, 15*60*1000);
</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
