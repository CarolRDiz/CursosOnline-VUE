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
    <h1>Profile</h1>
    <h2 v-if="user">{{ user.name }}</h2>
    <span v-if="user"> {{ user.email }}</span>
    <button v-if="user" @click="logout(), this.$router.push({ name: 'Home' })">Cerrar sesión</button>

</template>

