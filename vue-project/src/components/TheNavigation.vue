<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>    |
        <RouterLink to="/about">About</RouterLink>  |
        <RouterLink to="/profile">Profile</RouterLink>  |   
    </nav>
</template>
<script>
    export default {
        name: 'TheNavigation',
    }
</script>
<style>
    .active-link{
        color: red;
    }
</style>