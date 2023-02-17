import { createStore } from 'vuex'
import actions from './actions'
import cart from './modules/cart'
import courses from './modules/courses'
import user from './modules/user'
// Create a new store instance.
const store = createStore({
    modules:{
      cart,
      courses,
      user
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
