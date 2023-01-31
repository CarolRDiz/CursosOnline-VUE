<template>
    <h3>{{ course.text }}</h3>
    <span>Duration: {{ course.duration }}</span>
    <span>Subtitle: {{ course.subtitle }}</span>
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

