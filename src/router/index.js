import { createRouter, createWebHistory } from "vue-router";

// Import pages
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';


// Creation routes
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExtraActiveClass: '',

    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: ContactPage,
        },
    ],
});

export { router };

//export routs