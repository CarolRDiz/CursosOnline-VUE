import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//import './assets/main.css'
import store from './store/index'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

createApp(App)
.use(router)
.use(store)
.mount('#app')
