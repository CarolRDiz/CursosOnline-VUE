import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'; 
import VueBodyClass from 'vue-body-class';

const routes = [
    {path:"/", name:"Home", component: Home},
    {path:"/projects", name:"Projects", component: () => import('../views/Projects.vue')},
    {path:"/creatives", name:"Creatives", component: () => import('../views/Creatives.vue')},
    {path:"/courses", name:"Courses", component: () => import('../views/Courses.vue')},
    {path:"/about", name:"About", component: () => import('../views/About.vue')},
    {path:"/profile", name:"Profile", component: () => import('../views/Profile.vue')},
    {path:"/cart", name:"Cart", component: () => import('../views/ShoppingCart.vue')},
    {path:"/library", name:"Library", component: () => import('../views/Library.vue')},
    {path:"/createCourse", name:"CreateCourse", component: () => import('../views/CreateCourse.vue')},
    {path:"/loginRegister", name:"LoginRegister", component: () => import('../views/LoginRegister.vue')},
    {path:"/checkout", name:"Checkout", component: () => import('../views/Checkout.vue')},
    {
        path:"/course/:id/:title", 
        name:"course.show", 
        meta: { bodyClass: 'gradient' },
        component: () => import('../views/CourseShow.vue'),
    },
    {
        path:"/:patchMatch(.*)*",
        name:"NotFound",
        component: () => import('../views/NotFound.vue'),
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})
const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });

router.beforeEach(async (to) => {
    const user = store.state.auth.user; 
    const publicPages = ['/', '/projects','/creatives', '/courses', '/about', '/cart', '/library','/loginRegister', '/profile','/createCourse','course.show'];
    const authRequired = !publicPages.includes(to.path)&&!publicPages.includes(to.name);
    console.log(authRequired)
    if (authRequired && !user) {
        return '/loginRegister';
    }
})
export default router