import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
//import './assets/main.css'
import store from './store/index'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'



createApp(App)
.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })
.use(router)
.use(store)
.mount('#app')
