<template>
    <div class="flex flex-col items-center justify-center h-screen mx-3">
        <h1 class="text-4xl font-bold text-gray-800 mb-8">Unauthorized Access</h1>
        <p class="text-lg text-gray-700 mb-8">Sorry, you're not a member of the APS Academic Committee</p>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Automatically redirect to login page after 10 seconds
setTimeout(() => {
    router.push('/login')
}, 5000)
</script>
  