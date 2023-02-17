import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//import './assets/main.css'
import store from './store/index'
import { firestorePlugin } from 'vuefire'


createApp(App)
.use(router)
.use(store)
.use(firestorePlugin)
.mount('#app')
