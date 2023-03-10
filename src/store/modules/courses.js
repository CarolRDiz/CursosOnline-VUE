export default {
    namespaced: true,
    state() { //data
        return {
            items: [],
        }
    },
    getters: { // = computed
        subtitledCourses(state) {
            return state.items.filter(course => course.subtitle == true)
        },
        courses(state) {
            return state.items
        },
    },
    mutations: {
        setCourses(state, coursesData) {
            state.items = coursesData
        },
    },
    actions: {
        async fetchCourses({ commit }) {
            const res = await fetch('https://api-node.up.railway.app/api/v1/productos/', {
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