import { createStore } from 'vuex'
import actions from './actions'
import cart from './modules/cart'
import courses from './modules/courses'
import user from './modules/user'
import auth from './modules/auth'
import loginAndRegister from './modules/loginAndRegister'
// Create a new store instance.
const store = createStore({
    modules:{
      cart,
      courses,
      user,
      loginAndRegister,
      auth
    },
    state () { //data
      return{
        fetchImageURL: "http://localhost:3001/api/v1/images/"
      }
    },
    getters:{ // = computed
        
    },
    actions:{

    },
    mutations:{
        
    }
})
export default store
