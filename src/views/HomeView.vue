<!-- WelcomePage.vue -->
<template>
  <div class="flex flex-col items-center justify-center h-screen bg-gray-100 mx-3">
    <h1 class="text-4xl font-bold text-gray-800 mb-8">Welcome, APS Academic Committee Members!</h1>
    <p class="text-lg text-gray-700 mb-8">We appreciate your willingness to contribute to the APS database by uploading questions.</p>
    <button @click="goToUploadQuestionPage" class="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">Upload Questions</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToUploadQuestionPage() {
  router.push('/uploadquestion')
}
</script>
