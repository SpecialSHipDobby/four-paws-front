import { createRouter, createWebHistory } from 'vue-router';
import SignUp from "../components/SignUp.vue";

const routes = [
    {
        path: '/signup',
        name: 'Home',
        component: SignUp,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;