export default {
    namespaced: true,
    state() {
        return {

        }
    },
    actions: {
        async getVideo({ commit },{id}){
            const res = await fetch(`http://localhost:8080/videos/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                },
            })
            if (res.status == 200) {
                const video = await res.json()
                return Object.values(video)
            } else {
                //throw new Error("Invalid credentials")
                return false;
            }
        }
    }
}