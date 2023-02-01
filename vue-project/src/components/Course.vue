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
        props: {
            course: Object,
        },
        emits: ['delete-course'],
    }
</script>

