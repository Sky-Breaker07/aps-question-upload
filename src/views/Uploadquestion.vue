<template>
    <div class="container mx-auto p-6">
        <div v-if="users.user">
            <h1 class="text-2xl font-bold mb-6 text-center" v-if="users.user.firstLogin">Welcome {{ users.user.fullName
                }}</h1>
            <h1 class="text-2xl font-bold mb-6 text-center" v-if="!users.user.firstLogin">Welcome {{
            users.user.firstName }} {{ users.user.middleName }} {{ users.user.lastName }}</h1>
        </div>

        <!-- Tab Buttons -->
        <div class="flex mb-4 justify-center space-x-4">
            <button class="tab-btn" @click="selectedTab = 'mcq'" :class="{ 'active-tab': selectedTab === 'mcq' }">
                MCQ
            </button>
            <button class="tab-btn" @click="selectedTab = 'cloze'" :class="{ 'active-tab': selectedTab === 'cloze' }">
                Cloze (Fill in the blanks)
            </button>
            <button class="tab-btn" @click="selectedTab = 'essay'" :class="{ 'active-tab': selectedTab === 'essay' }">
                Essay
            </button>
        </div>
        <div class="flex justify-end mb-4">
            <button @click="handleLogout"
                class="text-red-500 font-bold hover:text-red-700 px-4 py-2 rounded-lg hover:border-red-500">Log
                Out</button>
        </div>

        <!-- Essay Question Component -->
        <transition name="fade">
            <div v-if="selectedTab === 'essay'" class="question-container">
                <h2 class="question-title text-center">Essay Questions</h2>
                <EssayQuestions />
            </div>
        </transition>

        <!-- Cloze Question Component -->
        <transition name="fade">
            <div v-if="selectedTab === 'cloze'" class="question-container">
                <h2 class="question-title text-center">Cloze Questions</h2>
                <ClozeQuestions />
            </div>
        </transition>
        
        <!-- MCQ Question Component -->
        <transition name="fade">
            <div v-if="selectedTab === 'mcq'" class="question-container">
                <h2 class="question-title text-center">Multiple Choice Questions</h2>
                <McqQuestions />
            </div>
        </transition>
    </div>
</template>

<script setup>
import McqQuestions from '@/components/McqQuestions.vue';
import ClozeQuestions from '@/components/ClozeQuestions.vue';
import EssayQuestions from '@/components/EssayQuestions.vue';
import { useUserStore } from '@/stores/UserStore';
import router from '@/router';
import { onBeforeMount, ref } from 'vue';

const users = useUserStore();
const selectedTab = ref('essay');

onBeforeMount(() => {
    if (!users) {
        router.push('/login')
    } else if (!users.user) {
        router.push('/login')
    } else if (!users.user.isAcademicCommittee) {
        router.push('/unauthorized')
    }
});

const handleLogout = () => {
    users.logout()
    router.push('/login')
}
</script>

<style scoped>
.tab-btn {
    padding: 10px 20px;
    background-color: #4a90e2;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.tab-btn:hover {
    background-color: #3578c4;
}

.active-tab {
    background-color: #3578c4;
}

.question-container {
    margin-top: 20px;
}

.question-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
}

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active in <2.1.8 */
    {
    opacity: 0;
}

/* Responsive styles */
@media screen and (max-width: 768px) {
    .tab-btn {
        padding: 8px 16px;
        font-size: 0.9rem;
    }

    .question-title {
        font-size: 1.3rem;
    }
}
</style>