import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Service from './pages/Services.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/chi-siamo',
            name: 'about',
            component: About
        },
        {
            path: '/servizi',
            name: 'service',
            component: Service
        },
        {
            path:'/:pathMatch(.*)*',
            name: 'error',
            component: NotFound,
        }
    ]
});

export { router };