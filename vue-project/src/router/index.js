import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {path:"/", name:"Home", component: Home},
    //Lazy Loading Routes
    {path:"/about", name:"About", component: () => import('../views/About.vue')},
    {path:"/profile", name:"Profile", component: () => import('../views/Profile.vue')},
    {path:"/course/:id", component: () => import('../views/CourseShow.vue')}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})
export default router