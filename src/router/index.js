import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {path:"/", name:"Home", component: Home},
    {path:"/about", name:"About", component: () => import('../views/About.vue')},
    {path:"/profile", name:"Profile", component: () => import('../views/Profile.vue')},
    {path:"/cart", name:"Cart", component: () => import('../views/ShoppingCart.vue')},
    {path:"/library", name:"Library", component: () => import('../views/Library.vue')},
    {path:"/loginRegister", name:"LoginRegister", component: () => import('../views/LoginRegister.vue')},
    {
        path:"/course/:id/:title", 
        name:"course.show", 
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
export default router