import { createRouter, createWebHistory } from 'vue-router';
import SignUp from "../components/SignUp.vue";
import Login from '../components/Login.vue';

const routes = [
    {
        path: '/signup',
        name: 'Home',
        component: SignUp,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;