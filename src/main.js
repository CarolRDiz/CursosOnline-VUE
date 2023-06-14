import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//import './assets/main.css'
import store from './store/index'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config.js'

const app = createApp(App)
app
.use(router)
.use(store)
.use(plugin, defaultConfig(config))
.mount('#app')
router.app = app

// createApp(App)
// .use(router)
// .use(store)
// .use(plugin, defaultConfig(config))
// .mount('#app')

