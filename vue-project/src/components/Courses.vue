<template>
    <ul>
       <li 
       :key="course.id" 
       v-for="course in courses" 
       :class="[course.subtitle?'subtitle-true': '']">
            <Course @delete-course="$emit('delete-course', course.id)"
            :course="course" />
        </li> 
    </ul>
    
</template>

<script>
    import Course from "./Course.vue"
    export default {
        name: 'Courses',
        props: {
            courses: Object,
        },
        components:{
            Course,
        },
        emits: ['delete-course'],
    }
</script>

<style>
.subtitle-true{
    background-color:rgb(178, 255, 175);
}
</style>