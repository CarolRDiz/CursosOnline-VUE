<script>
    import Button from './Button.vue'
    export default {
        name: 'Header',
        components:{
            Button,
        }
    }
</script>
<template>
    <header>
        <h1>Cursos de música</h1>
        <Button text="Add Course" color="yellow"/>
        <Button text="Update Course" color="blue"/>
        <Button text="Delete Course" color="red"/>
    </header>
</template>