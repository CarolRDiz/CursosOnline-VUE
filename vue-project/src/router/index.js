import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
    {path:"/", name:"Home", component: Home},
    //Lazy Loading Routes
    {path:"/about", name:"About", component: () => import('../views/About.vue')},
    {path:"/profile", name:"Profile", component: () => import('../views/Profile.vue')},
    {path:"/cart", name:"Cart", component: () => import('../views/ShoppingCart.vue')},
    {path:"/loginRegister", name:"LoginRegister", component: () => import('../views/LoginRegister.vue')},
    {
        path:"/course/:id/:title", 
        name:"course.show", 
        component: () => import('../views/CourseShow.vue'),
        //props: route=> ({id: parseInt(route.params.id)}),
        // children:[
        //     {path:"/articleComponent", name:"articleComponent", component: () => import('../views/articleComponent.vue')},
        // ]
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