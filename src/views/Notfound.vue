<template>
    <div class="flex flex-col items-center justify-center h-screen">
        <h1 class="text-5xl font-bold text-gray-800 mb-4 animate-bounce">404</h1>
        <h2 class="text-2xl font-semibold text-gray-600 mb-4">Oops! Page not found.</h2>
        <p class="text-gray-500 mb-8">The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <router-link to="/"
            class="flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">
            <svg class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18">
                </path>
            </svg>
            Go to Home
        </router-link>
    </div>
</template>
  
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// Automatically redirect to home page after 5 seconds
setTimeout(() => {
    router.push('/')
}, 10000)
</script>
  
<style scoped>
@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-20px);
    }

    60% {
        transform: translateY(-10px);
    }
}

.animate-bounce {
    animation: bounce 2s infinite;
}</style>
  