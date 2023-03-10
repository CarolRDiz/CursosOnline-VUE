<template>
    <nav>
        <ul class="nav__ul">
            <li class="nav__li"><RouterLink class="nav__link" to="/">Inicio</RouterLink></li>
            <li class="nav__li" v-if="user"><RouterLink class="nav__link" to="/profile">Perfil</RouterLink>  </li>
            <li class="nav__li"><RouterLink class="nav__link" to="/cart">Carrito</RouterLink>  </li>
            <li class="nav__li" v-if="!user"><RouterLink class="nav__link" to="/loginRegister">Iniciar sesión</RouterLink>  </li>
            <li class="nav__li" v-if="user"><RouterLink class="nav__link" to="/library">Biblioteca</RouterLink>  </li>
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
    
</style>