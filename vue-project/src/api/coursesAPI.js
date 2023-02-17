import axios from 'axios'

const coursesAPI= axios.create({
    baseURL: 'http://localhost:3001/api/v1/productos'
})

export default coursesAPI

/*
fetchCourses(){
    const res = await fetch('http://localhost:3001/api/v1/productos')
    const data = await res.json()
    return data
}
*/