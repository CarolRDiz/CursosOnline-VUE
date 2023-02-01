<template>
    <h3>{{ course.title }}</h3>
    <span>Autor: {{ course.author }}</span>
    <span>Duration: {{ course.duration }}</span>
    <span>Subtitle: {{ course.subtitle }}</span>
    <span>Precio: {{ course.price }}</span>
    <i @click="$emit('delete-course', course.id)"
        class="fas fa-times">
    </i>
</template>

<script>
    export default {
        name: "Course",
        data() {
            return {
                coursesData:[],
            }
        },
        async created(){
            this.coursesData = Object.values(await this.fetchCourses())
            console.log(courses)
        },
        computed:{
            courseId(){
                console.log(parseInt(this.$route.params.id))
                return parseInt(this.$route.params.id)
                
            },
            course(){
                return coursesData.find(course => course.id === this.courseId)
            }
        },
        
        methods:{
            async fetchCourses(){
            const res = await fetch('http://localhost:3001/api/v1/productos')
            const data = await res.json()
            return data
            }
        },
        
    }
</script>
