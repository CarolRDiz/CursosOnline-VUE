export default{
    namespaced: true,
    state:{
        items: [],
        checkoutStatus: null,
    },
    getters:{
        cartCourses(state, getters, rootState, rootGetters){ //rootState en getters es el tercer argumento
            return state.items.map(cartItem => {
                const course = rootState.courses.items.find(course => course.id === cartItem)
                return {
                    title: course.title,
                    price: course.price,
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
        setCheckoutStatus(state, status){
            state.checkoutStatus = status
        },
        emptyCart(state) {
            state.items = []
        },
    },
    actions:{
        addCourseToCart({state, getters,commit, rootState, rootGetters}, course){
            console.log("addCourseToCart")
            const cartItem = state.items.find(itemId => itemId === course.id)
            if (!cartItem){
                commit("pushCourseToCart", course.id)
            }
            else{
                //context.commit("incrementItemQuantity",{root})
            }
        },
        async addCoursesToUser({ state, commit }) {
            const res = await fetch('http://localhost:3001/api/v1/users/user/courses', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    courses: state.items
                })
            })
            console.log("addCoursesToUser hecho")
            await commit("emptyCart")
            await commit("setCheckoutStatus", "success")
            //commit("setCheckoutStatus", "fail")
        },
    }
}