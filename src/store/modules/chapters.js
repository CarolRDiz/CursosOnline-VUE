export default {
    namespaced: true,
    state() {
        return {

        }
    },
    actions: {
        async updateVideo({ commit },{id, video}){
            console.log(video[0].file)
            const formData  = new FormData();
            formData.append("file", video[0].file)
            console.log(formData)
            try {
                const res = await fetch(`http://localhost:8080/chapters/video/${id}/`, {
                    method: 'PATCH',
                    headers: {
                        //'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                    body:formData
                })

                if (res.status == 200) {
                    const updatedCourse = await res.json()
                    console.log("UPDATE COURSE hecho")
                    return true
                } else {
                    //throw new Error("Invalid credentials")
                    return false;
                }
            }
            catch (error) {
                //console.error(error.message);
            }
        },
        async createChapter({ commit }, {id, details} ) {
            try {
                const res = await fetch('http://localhost:8080/chapters/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.getItem("token")
                    },
                    //credentials: 'include',
                    body: JSON.stringify({
                        lesson_id: id,
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
                const res = await fetch(`http://localhost:8080/chapters/${id}/`, {
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