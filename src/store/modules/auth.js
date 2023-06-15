export default {
    namespaced: true,
    state() {
        return {
            //user: localStorage.getItem("username")? JSON.parse(localStorage.getItem("username")):'',
            user: localStorage.getItem("user")? JSON.parse(localStorage.getItem("user")):'',
            token: localStorage.getItem("token"),
            returnUrl: null,
            message: null,
        }
    },
    getters: { // = computed
        getUser(state){
            return state.user;
        },
        getCreatedCourses(state){
            console.log("GETTER: getcCreatedCourses")
            console.log(state.user.createdCourses)
            return state.user.createdCourses;
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setToken(state, token) {
            state.token = token
        },
        logout(state){
            state.user = '',
            state.token = ''
        }
    },
    actions: {
        async login({ commit }, { username, password }) {
            try {
                const res = await fetch('http://localhost:8080/token', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    //credentials: 'include',
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })

                console.log(res.status);

                if (res.status == 200) {
                    const token = await res.text();
                    //commit('setUser', username);
                    commit('setToken', token);
                    //localStorage.setItem('username', username);
                    localStorage.setItem('token', token);
                    return true;
                }
                else {
                    //throw new Error("Invalid credentials")
                    return false;
                }
            }
            catch (error) {
                //console.error(error.message);
            }
        },
        async register({ commit }, { username, password }) {
            try {
                const res = await fetch('http://localhost:8080/registration/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    //credentials: 'include',
                    body: JSON.stringify({
                        username: username,
                        password: password
                    })
                })

                console.log(res.status);

                if (res.status == 200) {
                    return true;
                }
                else {
                    //throw new Error("Invalid credentials")
                    return false;
                }
            }
            catch (error) {
                //console.error(error.message);
            }
        },
        async fetchUser({ commit }){
            console.log("FETCHUSER")
            try {
                const res = await fetch('http://localhost:8080/users/principal/', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                })

                console.log(res.status);

                if (res.status == 200) {
                    const user = await res.json();
                    console.log(user.admin)
                    commit("setUser", user)
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log(JSON.parse(localStorage.getItem("user")))
                    return true;
                }
                else {
                    //throw new Error("Invalid credentials")
                    return false;
                }
            }
            catch (error) {
                //console.error(error.message);
            }
        },
        logout({ commit }){
            console.log("Cerrar")

            localStorage.removeItem('user');
            localStorage.removeItem('token');
            commit('logout')
        }
    },
}

