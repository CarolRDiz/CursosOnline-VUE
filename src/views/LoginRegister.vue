<script>
import { mapState, mapGetters, mapActions } from "vuex"
import Modal from "../components/Modal.vue"

export default {
    name: "Login",
    components: {Modal},
    data() {
        return {
            isLogin: true,
            loading: false,
            name: '',
            email: null,
            password: null,
            repeatpassword: '',
            modalActive: false,
            errors: [],
            showMessage: false,
            modalActiveRegister: false,
        };
    },
    computed: {
        ...mapState('user', {
            user: state => state.userData,
            message: state => state.message,
        }),
    },
    methods: {
        ...mapActions('user', {
            fetchUser: "fetchUser",
            doLogin: "doLogin",
            logout: "logout",
            doRegister: "doRegister",
            resetMessage: "resetMessage"
        }),
        async doLoginAndMessage(){
            this.loading = true
            await this.doLogin({ inputEmail: this.email, inputPassword: this.password })
            this.loading = false
            if(this.user){
                this.modalActive = true
            }
            else{
                this.showMessage = true
                setTimeout(() => this.showMessage = false, 5000);
            }
        },
        async doRegisterAndMessage(){
            this.loading = true
            await this.doRegister({ inputName: this.name, inputEmail: this.email, inputPassword: this.password })
            this.loading = false
            if(this.message=="Usuario creado"){
                this.modalActiveRegister = true
                this.isLogin = true
            }
            else{
                this.showMessage = true
                setTimeout(() => this.showMessage = false, 5000);
            }
        },
        resetData() {
            this.email = this.password = '';
        },
        toggleModal(){
            this.modalActive = !this.modalActive;
        },
        toggleModalRegister(){
            this.modalActiveRegister = !this.modalActiveRegister;
        },
        checkForm(e) {
            var ExpRegName = "^[A-ZÑÁÉÍÓÚ]+[A-ZÑa-zñáéíóúÁÉÍÓÚ ]*$";
            var ExpRegEmail = "^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$"

            this.errors = []

            if (this.name.match(ExpRegName) == null){
                this.errors.push('El nombre no es válido. Solo se permiten letras y espacios.');
            }

            if (this.email.match(ExpRegEmail)== null){
                this.errors.push('El email no es válido.');
            }

            if (!this.name) {
                this.errors.push('El nombre es obligatorio.');
            }
            if (!this.email) {
                this.errors.push('El email es obligatorio.');
            }
            if (!this.password) {
                this.errors.push('La contraseña es obligatoria.');
            }
            if (!this.repeatpassword) {
                this.errors.push('La confirmación de la contraseña es obligatoria.');
            }

            if (this.password != this.repetpassword) {
                this.errors.push('La confirmación de la contraseña no coincide con la contraseña propuesta.');
            }

            if (this.errors.length) {
                return false
            }

            else {
                return true
            }

            e.preventDefault();
        }
    },
};

</script>
<template>
    <section class="main__auth">
        <div v-if="loading">Cargando...</div>
        <div v-else>
            <h1 v-if="isLogin">Iniciar sesión</h1>
            <h1 v-if="!isLogin">Registrarse</h1>
            <!-- <div class="auth__options">
                    <button class="auth__option" :class="{'auth__option--active':isLogin }" @click="isLogin = true">Iniciar sesión</button>
                    <button class="auth__option" :class="{'auth__option--active':!isLogin }" @click="isLogin = false">Registrarse</button>
                </div> -->
            <p v-if="errors.length">
                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>
            <form class="auth__form" v-if="isLogin"
                @submit.prevent="doLoginAndMessage()">
                <fieldset class="auth__fieldset">
                    <legend>Datos personales</legend>
                    <label for="email">Correo electrónico:</label>
                    <input class="form__input" placeholder="Correo Electrónico" name="email" v-model="email" type="email"
                        required />
                    <label for="password">Contraseña:</label>
                    <input class="form__input" placeholder="Contraseña" name="password" v-model="password" type="password"
                        required />
                </fieldset>
                <button class="form__submit" type="submit">Iniciar sesión</button>
            </form>
            <form class="auth__form" v-else
                @submit.prevent="doRegisterAndMessage()">
                <fieldset class="auth__fieldset">
                    <legend>Datos personales</legend>
                    <label for="name">Nombre:</label>
                    <input class="form__input" placeholder="Nombre" name="name" v-model="name" type="text" required />
                    <label for="email">Correo electrónico:</label>
                    <input class="form__input" placeholder="Correo Electrónico" name="email" v-model="email" type="email" required />
                    <label for="password">Contraseña:</label>
                    <input class="form__input" placeholder="Contraseña" name="password" v-model="password" type="password" required />
                    <label for="repeatpassword">Repite la contraseña:</label>
                    <input class="form__input" placeholder="Repetir contraseña" name="repeatpassword" v-model="repeatpassword" type="password" required />
                </fieldset>
                <input class="form__submit" type="submit" value="Registrarse" />
            </form>
            <span v-if="showMessage" class="auth__message"> {{ message }}</span>
            <button class="auth__change" v-if="isLogin" @click="isLogin = false">Registrarse</button>
            <button class="auth__change" v-else @click="isLogin = true">Iniciar sesión</button>
        </div>
        <Modal :notClose="true" @close="toggleModal" :modalActive="modalActive">
            <div class="modal--login">
                <h1>Has iniciado sesion</h1>
                <a class="modal__link" @click="$router.back()">Volver</a>
            </div>
        </Modal>
        <Modal :notClose="false" @close="toggleModalRegister" :modalActive="modalActiveRegister">
            <div class="modal--login">
                <h1>El usuario ha sido creado con éxito</h1>
            </div>
        </Modal>
    </section>
</template>
