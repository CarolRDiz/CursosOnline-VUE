<template>
    <div class="card-project">
        <img :src="project.img" :alt="project.title" class="card-project__img">
        <h3 class="card-project__title"><a href="">{{ project.title }}</a></h3>
    </div>
</template>
<script>
    export default {
        name: "CardProject",
        props: ["project"]
    }
</script>