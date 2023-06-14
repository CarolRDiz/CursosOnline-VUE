export default {
    namespaced: true,
    state() {
        return {
            userData: null,
            message: null,
        }
    },
    getters: { // = computed
        userCourses(state, getters, rootState, rootGetters) { //rootState en getters es el tercer argumento
            return state.userData.courses.map(purchase => {
                const coursePurchased = rootState.courses.items.find(course => course.id == purchase)
                if(coursePurchased){
                    return {
                        id: coursePurchased.id,
                        title: coursePurchased.title,
                        author: coursePurchased.author,
                        duration: coursePurchased.duration,
                        level: coursePurchased.level,
                        area: coursePurchased.area,
                        subarea: coursePurchased.subarea,
                        image: coursePurchased.image,
                    }    
                }
                
            }) 
        },
    },

    mutations: {
        setUser(state, user) {
            state.userData = user
            console.log('setting user' + user)
        },
        changeName(state, newName) {
            state.name = newName
        },
        changeEmail(state, newEmail) {
            state.email = newEmail
        },
        resetUser(state) {
            state.userData = null
        },
        setMessage(state, message){
            state.message = message
        },
        resetMessage(state, message){
            state.message = null
        },
        pushCourseToUser(state, coursesID) {
            console.log("pushCourseToUser")
            console.log(coursesID)
            console.log(state.userData.courses)
            state.userData.courses = state.userData.courses.concat(coursesID)  //UNIR LISTAS
            console.log(state.userData.courses)
            localStorage.setItem("user", JSON.stringify(state.userData))
        },
    },
    actions: {
        addCoursesToUser({commit}, coursesID){
            console.log("addCoursesToUser")
            console.log(coursesID)
            commit("pushCourseToUser",coursesID)
        },
        // async localStorageUser({ commit }) {
        //     console.log("localStorageUser")
        //     // const userName = localStorage.getItem('name');
        //     // const userEmail = localStorage.getItem('email');
        //     // const userCourses = localStorage.getItem('courses');
        //     // const user = {name: userName, email: userEmail, courses: userCourses}
        //     const user = JSON.parse(localStorage.getItem("user"))
        //     console.log(user)
        //     await commit('setUser', user)
        // },
        async doLogin({ commit }, { inputEmail, inputPassword }) {
            commit('resetMessage')
            try {
                const res = await fetch('http://localhost:3001/api/v1/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        email: inputEmail,
                        password: inputPassword
                    })
                })
                if (res.status !== 200) {
                    await commit('setMessage', "No es posible iniciar sesión")
                }
                else{
                    const data = await res.json()
                    const user = data.user
                    console.log("User: " + user)
                    // localStorage.setItem('name', user.name);
                    // localStorage.setItem('email', user.email);
                    // localStorage.setItem('courses', user.courses);
                    localStorage.setItem("user", JSON.stringify(user))
                    await commit('setUser', user)
                    console.log(data)
                    await commit('setMessage', "Ha iniciado sesión")
                }
                
            }
            catch (error) {
                //console.error(error.message);
            }
        },
        async doRegister({ commit }, { inputName, inputEmail, inputPassword }) {
            commit('resetMessage')
            try {
                const res = await fetch('http://localhost:3001/api/v1/users/signup', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials: 'include',
                    body: JSON.stringify({
                        name: inputName,
                        email: inputEmail,
                        password: inputPassword
                    })
                })
                if (res.status === 401) {
                    await commit('setMessage', "Email en uso")
                }
                else{
                    await commit('setMessage', "Usuario creado")
                }
            } catch (error) {
                console.error(error.message);
            }
        },
        resetMessage(){
            commit('resetMessage')
        },

        async logout({ commit }) {
            try {
                const res = await fetch('http://localhost:3001/api/v1/users/logout', {
                    method: 'DELETE',
                    credentials: 'include',
                })
                const data = await res.json()
                console.log(data)
            }
            catch (error) {
                //console.error(error.message);
            }
            localStorage.removeItem('user');
            await commit('resetUser')
        },
    }
}
