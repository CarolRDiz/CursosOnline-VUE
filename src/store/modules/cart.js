export default{
    namespaced: true,
    state:{
        items: [],
        checkoutStatus: null,
        modalCart: false
    },
    getters:{
        cartCount(state){
            return state.items.length
        },
        cartCourses(state, getters, rootState, rootGetters){ //rootState en getters es el tercer argumento
            return state.items.map(cartItem => {
                console.log(rootState.courses.items)
                const course = rootState.courses.items.find(course => course.id === cartItem)
                if(course){
                    return {
                    id: course.id,
                    title: course.title,
                    author: course.author,
                    price: course.price,
                    duration: course.duration,
                    language: course.language,
                    subtitle: course.subtitle,
                    image: course.image
                    }
                }
                
            })
        },
        cartTotal(state, getters, rootState, rootGetters){
            return rootGetters["cart/cartCourses"].reduce((total, course) => total + course.price, 0)
        },
    },
    mutations:{
        pushCourseToCart(state, courseID) {
            state.items.push(courseID)
        },
        deleteCourseInCart(state, courseID) {
            state.items = state.items.filter(course => course != courseID);
        },
        setCheckoutStatus(state, status){
            state.checkoutStatus = status
        },
        emptyCart(state) {
            state.items = []
        },
        toggleModalCart(state){
            state.modalCart = !state.modalCart
        }
    },
    actions:{
        addCourseToCart({state, getters,commit, rootState, rootGetters}, courseID){
            console.log("addCourseToCart")
            const cartItem = state.items.find(itemId => itemId === courseID)
            if (!cartItem){
                commit("pushCourseToCart", courseID)
            }
            else{
                //context.commit("incrementItemQuantity",{root})
            }
            console.log(state.items)
        },
        eliminateCourseInCart({commit}, courseID){
            commit("deleteCourseInCart", courseID)
        },
        checkout({ state, commit }) {
            commit("emptyCart")
            commit("setCheckoutStatus", "success")
            //commit("setCheckoutStatus", "fail")
        },
        toggleModalCart({state, getters,commit, rootState, rootGetters}){
            rootState.loginAndRegister.modalActive = false;
            commit("toggleModalCart")
        }
    }
}