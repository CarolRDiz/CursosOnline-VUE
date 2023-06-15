import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//import './assets/main.css'
import store from './store/index'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'
import { plugin, defaultConfig } from '@formkit/vue'
import config from './formkit.config.js'
import moment from 'moment';

const app = createApp(App)
app
.use(router)
.use(store)
.use(plugin, defaultConfig(config))
.mount('#app')
router.app = app

app.config.globalProperties.$filters = {
    formatDate(value) {
        return moment(String(value)).format('MM/DD/YYYY hh:mm')
    }
  }
// createApp(App)
// .use(router)
// .use(store)
// .use(plugin, defaultConfig(config))
// .mount('#app')



