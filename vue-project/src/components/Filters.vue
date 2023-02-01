<template>
    <h3>Filters</h3>
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
const filters = [
    ""
]
export default {
        name: 'Filters',
    }
</script>