import { createRouter, createWebHistory } from "vue-router";

// Import pages
import HomePage from '../pages/HomePage.vue';
import ContactPage from '../pages/ContactPage.vue';
import DetailPage from '../pages/DetailPage.vue';
import NotFoundPage from '../pages/NotFoundPage.vue'


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
        {
            path: '/projects/:slug',
            name: 'project-detail',
            component: DetailPage,
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFoundPage,
        },
    ],
});

export { router };

//export routs