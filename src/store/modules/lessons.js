export default {
    namespaced: true,
    state() {
        return {

        }
    },
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
    actions: {
        async createLesson({ commit }, {id, details} ) {
            try {
                const res = await fetch('http://localhost:8080/lessons/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                    //credentials: 'include',
                    body: JSON.stringify({
                        course_id: id,
                        title: details.title
                    })
                })

                console.log(res.status);

                if (res.status == 201) {
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
        async deleteLesson({ commit }, id ) {
            try {
                const res = await fetch(`http://localhost:8080/lessons/${id}/`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                })

                console.log(res.status);

                if (res.status == 201) {
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
    }
}