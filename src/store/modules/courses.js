export default {
    namespaced: true,
    state() { //data
        return {
            items: [],
            course: []
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
        setCourse(state, courseData) {
            state.course = courseData
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
        async fetchCourse({ commit }, title) {
            const res = await fetch(`http://localhost:3001/api/v1/productos/${title}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            const courseData = await res.json()
            
            commit('setCourse', courseData)
            console.log("fetchCourse hecho")
        },
    }
}