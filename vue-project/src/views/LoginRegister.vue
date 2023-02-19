<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: "Login",
    data() {
        return {
            isLogin: true,
            loading: false,
            name:'',
            email: null,
            password: null,
            repetpassword: '',
        };
    },
    computed:{
        ...mapState('user', {
            user: state => state.userData,
            message: state => state.message,
        }),
    },
    async mounted() {
        // this.isLoading = true;
        // try {
        //     const response = await fetch('http://localhost:3001/api/v1/users/login', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         credentials: 'include',
        //     })
        //     if(response.data){this.user = response.data.userData}
            
        // } catch (error) {
        //     console.error(error.message);
        // } finally {
        //     this.isLoading = false;
        // }
    },
    methods: {
        ...mapActions('user', {
            fetchUser: "fetchUser",
            doLogin: "doLogin",
            logout: "logout",
            doRegister: "doRegister"
        }),
        resetData() {
            this.email = this.password = '';
        },
    },
};

</script>
<template>
    <article>
        <button @click="isLogin = true">Iniciar sesión</button>
        <button @click="isLogin = false">Registrarse</button>
        <form v-if="isLogin" @submit.prevent="doLogin({ inputEmail: this.email, inputPassword: this.password})">
            <fieldset>
                <legend>Datos personales</legend>
                <label for="email">Correo electrónico:</label>
                <input name="email" v-model="email" type="email" required />
                <label for="password">Contraseña:</label>
                <input name="password" v-model="password" type="password" required />
            </fieldset>
            <button type="submit">Iniciar sesión</button>
        </form>

        <form v-else @submit.prevent="doRegister({ inputName:this.name, inputEmail: this.email, inputPassword: this.password})">
            <fieldset>
                <legend>Datos personales</legend>
                <label for="name">Nombre:</label>
                <input 
                    name="name"
                    v-model="name"
                    type="text"
                    required
                />
                <label for="email">Correo electrónico:</label>
                <input 
                    name="email"
                    v-model="email"
                    type="email"
                    required
                />
                <label for="password">Contraseña:</label>
                <input
                    name="password"
                    v-model="password"
                    type="password"
                    required
                />
                <label for="repetpassword">Repite la contraseña:</label>
                <input
                    name="repetpassword"
                    v-model="repetpassword"
                    type="password"
                    required
                />
            </fieldset>
            <input type="submit" value="Registrarse"/>
        </form>    
        <span v-if="message"> {{ message }}</span>
    </article>
</template>