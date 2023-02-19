export default {
    namespaced: true,
    state() { //data
        return {
            items: [],
            //{id, quantity}
            //fetchImageURL: "http://localhost:3001/api/v1/images/"
        }
    },
    getters: { // = computed
        subtitledCourses(state) {
            return state.items.filter(course => course.subtitle == true)
        },
    },
    mutations: {
        setCourses(state, coursesData) {
            state.items = coursesData
        },
    },
    actions: {
        async fetchCourses({ commit }) {
            const res = await fetch('http://localhost:3001/api/v1/productos/', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const coursesData = Object.values(await res.json())
            commit('setCourses', coursesData)
            console.log("fetchCourses hecho")
        },
    }
}