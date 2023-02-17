<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: "Login",
    data() {
        return {
            isLogin: true,
            loading: false,
            email: null,
            password: null,
            repetpassword: '',
        };
    },
    computed:{
        ...mapState('user', {
            user: state => state.userData,
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
            logout: "logout"
        }),
        // async logout(){
        //     this.isLoading = true;
        //     try {
        //         const res = await fetch('http://localhost:3001/api/v1/users/logout', {
        //             method: 'DELETE',
        //             credentials: 'include',
        //         })
        //         const data = await res.json()
        //         console.log(data)
        //     }
        //      catch (error) {
        //         //console.error(error.message);
        //     } finally {
        //         this.isLoading = false;
        //         this.resetData()
        //     }
        // },
        redirect() {
            this.$router.push({ name: "Home" });
        },
        resetData() {
            this.email = this.password = '';
        },
        
            
        
        // async doRegister() {
        //     this.isLoading = true;
        //     try {
        //     await this.$store.dispatch("user/doRegister", {
        //         email: this.userData.email,
        //         password: this.userData.password,
        //         repeatpassword: this.userData.repeatpassword
        //     });
        //     console.log("Registered");
        //     this.resetData();
        //     this.redirect();
        //     } catch (error) {
        //     console.error(error.message);
        //     } finally {
        //     this.isLoading = false;
        //     }
        // },
    },
};

</script>
<template>
    <article>
        {{ user }}
        <button @click="logout(), resetData()">Cerrar sesión</button>
        <button @click="isLogin = true">Iniciar sesión</button>
        <button @click="isLogin = false">Registrarse</button>
        <form v-if="isLogin" @submit.prevent="doLogin({inputEmail: this.email, inputPassword: this.password})">
            <fieldset>
                <legend>Datos personales</legend>
                <label for="email">Correo electrónico:</label>
                <input name="email" v-model="email" type="email" required />
                <label for="password">Contraseña:</label>
                <input name="password" v-model="password" type="password" required />
            </fieldset>
            <button type="submit">Iniciar sesión</button>
        </form>

        <form v-else>
            <fieldset>
                <legend>Datos personales</legend>
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
                    type="repetpassword"
                    required
                />
            </fieldset>
            <input type="submit" value="Registrarse"/>
        </form>    

    </article>
</template>