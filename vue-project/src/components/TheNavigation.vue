<template>
    <nav>
        <ul class="nav__ul">
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li v-if="user"><RouterLink to="/profile">Profile</RouterLink>  </li>
            <li><RouterLink to="/cart">Carrito</RouterLink>  </li>
            <li v-if="!user"><RouterLink to="/loginRegister">Iniciar sesión</RouterLink>  </li>
            <li v-if="user"><RouterLink to="/library">Biblioteca</RouterLink>  </li>
        </ul>
    </nav>
</template>
<script>
    import { mapState, mapGetters, mapActions } from "vuex"
    export default {
        name: 'TheNavigation',
        computed: {
            ...mapState('user', {
            user: state => state.userData,
            }),
        },
    }
</script>
<style>
    .nav__ul{
        display: flex;
        column-gap: 30px;
    }
    .active-link{
        color: rgb(0, 13, 255);
    }
</style>