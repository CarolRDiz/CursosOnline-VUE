<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default{
    computed: {
            ...mapState('user', {
            user: state => state.userData,
            }),
        },
    methods: {
        ...mapActions('user', {
            logout: "logout"
        }),
    }
}
</script>

<template>
    <div class="main__profile">
        <h1>Perfil</h1>
        <section class="profile__section">
            <h2>{{ user.name }}</h2>
            <span> {{ user.email }}</span>
            <button @click="logout(), this.$router.push({ name: 'Home' })">Cerrar sesión</button>
        </section>
    </div>
</template>

