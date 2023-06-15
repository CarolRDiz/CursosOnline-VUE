export default {
    namespaced: true,
    state() { //data
        return {
            items: [],
            course: '',
        }
    },
    getters: { // = computed
        subtitledCourses(state) {
            return state.items.filter(course => course.subtitle == true)
        },
        courses(state) {
            return state.items
        },
        course(state) {
            return state.course
        },
        trailerUrl(state) {
            return "http://localhost:8080/videos/stream/"+state.course.video_id
        },
        imageUrl(state) {
            return "http://localhost:8080/images/"+state.course.image_id
        }
    },
    mutations: {
        setCourses(state, coursesData) {
            state.items = coursesData
        },
        setCourse(state, courseData) {
            state.course = courseData
        },
        setTrailerUrl(state, url) {
            state.trailerURL = url
        },
    },
    actions: {
        async createCourse({commit}){
            const res = await fetch('http://localhost:8080/courses/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    title: ''
                })
            })
            if (res.status == 201) {
                // const newCourse = await res.json()
                // commit("setCourse", newCourse)
                // localStorage.setItem('course', JSON.stringify(newCourse));
                console.log("CREATE COURSE hecho")
                return true
            } else {
                //throw new Error("Invalid credentials")
                return false;
            }
        },
        async updateDetailsCourse({commit}, {id, details}){
            console.log(details.title)
            const res = await fetch(`http://localhost:8080/courses/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body: JSON.stringify({
                    title: details.title,
                    subtitle: details.subtitle,
                    description: details.description,
                    requirements: details.requirements,
                    teaches: details.teaches,
                    includes: details.includes,
                })
            })
            if (res.status == 200) {
                const updatedCourse = await res.json()
                // commit("setCourse", updatedCourse)
                //localStorage.setItem('course', JSON.stringify(updatedCourse));
                console.log("UPDATE COURSE hecho")
                return true
            } else {
                //throw new Error("Invalid credentials")
                return false;
            }
        },
        async updateVideoCourse({commit}, {id, video}){
            console.log(video[0].file)
            const formData  = new FormData();
            formData.append("video", video[0].file)
            // for(const name in data) {
            //     formData.append(name, data[name]);
            // }
            const res = await fetch(`http://localhost:8080/courses/video/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body:formData
            })
            if (res.status == 200) {
                const updatedCourse = await res.json()
                commit("setCourse", updatedCourse)
                //localStorage.setItem('course', JSON.stringify(updatedCourse));
                console.log("UPDATE COURSE hecho")
                return true
            } else {
                //throw new Error("Invalid credentials")
                return false;
            }
        },
        async fetchImage({commit}, id){
            const res = await fetch(`http://localhost:8080/images/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            if (res.status == 200) {
                const image = await res.json()
                console.log(image)          
                return image
            } else {
                //throw new Error("Invalid credentials")
                return null;
            }
        },
        async updateImageCourse({commit}, {id, image}){
            console.log(image[0].file)
            const formData  = new FormData();
            formData.append("image", image[0].file)
            const res = await fetch(`http://localhost:8080/courses/video/${id}/`, {
                method: 'PATCH',
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
                body:formData
            })
            if (res.status == 200) {
                const updatedCourse = await res.json()
                commit("setCourse", updatedCourse)
                localStorage.setItem('course', JSON.stringify(updatedCourse));
                console.log("UPDATE COURSE hecho")
                return true
            } else {
                //throw new Error("Invalid credentials")
                return false;
            }
        },
        async getCourse({commit}, id){
            console.log(id)
            const res = await fetch(`http://localhost:8080/courses/${id}/`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
            })
            if (res.status == 200) {
                const courseData = await res.json()
                commit('setCourse', courseData)
                localStorage.setItem('course', JSON.stringify(courseData));
                console.log("GET COURSE hecho")
                
                return courseData
            } else {
                //throw new Error("Invalid credentials")
                return null;
            }
        },

        async getVideoUrl({commit}, id){
            const res = await fetch(`http://localhost:8080/videos/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
            })
            if (res.status == 200) {
                const videoUrl = await res.json()
                return videoUrl
            } else {
                return null;
            }
        },

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