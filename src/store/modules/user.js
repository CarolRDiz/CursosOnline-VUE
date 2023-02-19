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
                const course = rootState.courses.items.find(course => course.id === purchase)
                return {
                    id: course.id,
                    title: course.title,
                    author: course.author,
                    duration: course.duration,
                    level: course.level,
                    area: course.area,
                    subarea: course.subarea,
                    image: course.image,
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
        }
    },
    actions: {
        async localStorageUser({ commit }) {
            let user = localStorage.getItem('user');
            await commit('setUser', user)
        },
        async doLogin({ commit }, { inputEmail, inputPassword }) {
            try {
                const res = await fetch('https://api-node.up.railway.app/api/v1/users/login', {
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
                    localStorage.setItem('user', user);
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
            try {
                const res = await fetch('https://api-node.up.railway.app/api/v1/users/signup', {
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

        async logout({ commit }) {
            try {
                const res = await fetch('https://api-node.up.railway.app/api/v1/users/logout', {
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
