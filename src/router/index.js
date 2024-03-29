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
    {
        path:"/profile", 
        name:"Profile", 
        component: () => import('../views/Profile.vue'),
        meta: { requiresAuth: true, requiresAdmin: false  }
    },
    {
        path:"/createCourseDashboard", 
        name:"CreateCourseDashboard", 
        component: () => import('../views/CreateCourseDashboard.vue'),
        meta: { requiresAuth: true, requiresAdmin: false  }
    },
    {path:"/cart", name:"Cart", component: () => import('../views/ShoppingCart.vue')},
    {
        path:"/library", 
        name:"Library", 
        component: () => import('../views/Library.vue'),
        meta: { requiresAuth: true , requiresAdmin: false }
    },
    {
        path:"/createCourse/:id", 
        name:"CreateCourse", 
        component: () => import('../views/CreateCourse.vue'),
        meta: { requiresAuth: true, requiresAdmin: false , bodyClass: 'gradient--secondary'},
        children: [
            { 
                path: 'goals', 
                name: 'Goals', 
                component: () => import('../views/CreateCourse/Goals.vue'),
            },
            { 
                path: 'course-structure', 
                name: 'CourseStructure', 
                component: () => import('../views/CreateCourse/CourseStructure.vue'),
            },
            { 
                path: 'setup', 
                name: 'Setup', 
                component: () => import('../views/CreateCourse/Setup.vue'),
            },
            { 
                path: 'film', 
                name: 'Film', 
                component: () => import('../views/CreateCourse/Film.vue'),
            },
            { 
                path: 'curriculum', 
                name: 'Curriculum', 
                component: () => import('../views/CreateCourse/Curriculum.vue'),
            },
            { 
                path: 'basics', 
                name: 'Basics', 
                component: () => import('../views/CreateCourse/Basics.vue'),
            },
            { 
                path: 'curriculum', 
                name: 'Curriculum', 
                component: () => import('../views/CreateCourse/Curriculum.vue'),
            },
            { 
                path: 'pricing', 
                name: 'pricing', 
                component: () => import('../views/CreateCourse/Pricing.vue'),
            },
            { 
                path: 'messages', 
                name: 'messages', 
                component: () => import('../views/CreateCourse/Messages.vue'),
            },
        ],
    },
    {path:"/loginRegister", name:"LoginRegister", component: () => import('../views/LoginRegister.vue')},
    {
        path:"/checkout", 
        name:"Checkout", 
        component: () => import('../views/Checkout.vue'),
        meta: { requiresAuth: true, requiresAdmin: false }
    },
    {
        path:"/course/:id/:title", 
        name:"course.show", 
        meta: { bodyClass: 'gradient--tertiary' },
        meta: { requiresAuth: false, requiresAdmin: false },
        component: () => import('../views/CourseShow.vue'),
    },
    {
        path:"/:patchMatch(.*)*",
        name:"NotFound",
        meta: { requiresAuth: false, requiresAdmin: false },
        component: () => import('../views/NotFound.vue'),
    },
    {
        path: '/admin',
        name: 'Admin',
        meta: { requiresAuth: true, requiresAdmin: true },
        component: () => import('../views/Admin.vue'),
      },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active-link'
})
const vueBodyClass = new VueBodyClass(routes);
router.beforeEach((to, from, next) => { vueBodyClass.guard(to, next) });
router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
  });
router.beforeEach(async (to, from, next) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    console.log(to.meta.requiresAdmin)
    if(to.meta.requiresAdmin) {
        console.log(user.admin == true)
        if(user.admin == true) {
            next()
        } else {
            next("/")
        }
    }
    
    else if(to.meta.requiresAuth) {
        console.log("requiresAuth")
        if(!user ||!token) {
            next({name:"LoginRegister"})
        }
        else{
            next()
        }
    }
    else {
        next()
    }
    /*
    const user = store.state.auth.user; 
    const publicPages = ['/', '/projects','/creatives', '/courses', '/about', '/cart', '/library','/loginRegister', '/profile','/createCourse','course.show', '/admin'];
    const authRequired = !publicPages.includes(to.path)&&!publicPages.includes(to.name);
    const adminPages = ["/admin"];
    const adminRequired = !adminPages.includes(to.path)&&!adminPages.includes(to.name);
    console.log(authRequired)
    if (authRequired && !user) {
        return '/loginRegister';
    }
    else if(adminRequired){
        const admin = await checkAdminRights()
        if(admin==false){
            return "/"
        }
    }
    */
})


export default router