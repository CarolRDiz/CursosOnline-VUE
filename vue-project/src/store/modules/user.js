export default {
    namespaced: true,
    state() {
        return {
            userData: null,
        }
    },
    getters: { // = computed
        
    },
    mutations: {
        setUser(state, user){
            state.userData = user
            console.log('setting user'+user)
        },
        changeName(state, newName){
            state.name = newName
        },
        changeEmail(state, newEmail){
            state.email = newEmail
        },
        resetUser(state){
            state.userData = null
        }
    },
    actions: {
        async fetchUser ({ commit }){
            const res = await fetch('http://localhost:3001/api/v1/users/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
            })
            const userData = await res.json()
            console.log("Antes de setUser"+userData)
            await commit('setUser', userData)
            console.log("Después de setUser")
        },
        async doLogin({ dispatch },{inputEmail, inputPassword}) {
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
                const data = await res.json()
                console.log(data)
            }
                catch (error) {
                //console.error(error.message);
            } finally{
                console.log("fetchUser")
                await dispatch('fetchUser')
            }
            
        },
        async logout({commit}){
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
            commit('resetUser')
        },
    }
}
