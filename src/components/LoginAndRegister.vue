<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="loginAndRegister">
                    <div v-if="loading">Cargando...</div>
                    <div v-else>
                        <svg @click="changeModalActive()" class="close svg-icon" viewBox="0 0 20 20">
                            <path fill="none" d="M13.864,6.136c-0.22-0.219-0.576-0.219-0.795,0L10,9.206l-3.07-3.07c-0.219-0.219-0.575-0.219-0.795,0
								c-0.219,0.22-0.219,0.576,0,0.795L9.205,10l-3.07,3.07c-0.219,0.219-0.219,0.574,0,0.794c0.22,0.22,0.576,0.22,0.795,0L10,10.795
								l3.069,3.069c0.219,0.22,0.575,0.22,0.795,0c0.219-0.22,0.219-0.575,0-0.794L10.794,10l3.07-3.07
								C14.083,6.711,14.083,6.355,13.864,6.136z M10,0.792c-5.086,0-9.208,4.123-9.208,9.208c0,5.085,4.123,9.208,9.208,9.208
								s9.208-4.122,9.208-9.208C19.208,4.915,15.086,0.792,10,0.792z M10,18.058c-4.451,0-8.057-3.607-8.057-8.057
								c0-4.451,3.606-8.057,8.057-8.057c4.449,0,8.058,3.606,8.058,8.057C18.058,14.45,14.449,18.058,10,18.058z"></path>
                        </svg>
                        <div class="loginAndRegister__welcome">
                            <h3>Bienvenido!</h3>
                            <!--<font-awesome-icon :icon="['fasr', 'face-smile']" spin style="color: #18f069;" />-->
                            <span v-if="isLogin">¿Aún no eres miembro? <strong @click="changeIsLogin()">Únete</strong></span>
                            <span v-else>¿Eres miembro? <strong @click="changeIsLogin()">Inicia sesión</strong></span>
                        </div>
                        <div class="loginAndRegister__content">
                            <h1 v-if="isLogin">Iniciar sesión</h1>
                            <h1 v-if="!isLogin">Registrarse</h1>
                            <p v-if="errors.length">
                                <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                            <ul>
                                <li v-for="error in errors">{{ error }}</li>
                            </ul>
                            </p>
                            <form class="auth__form" v-if="isLogin" @submit.prevent="doLoginAndMessage()">
                                <fieldset class="form__fieldset">
                                    <legend>Datos personales</legend>
                                    <div class="form__field">
                                        <label for="email">EMAIL</label>
                                        <input class="form__input" placeholder="Correo Electrónico" name="email"
                                            v-model="email" type="email" required />
                                    </div>
                                    <div class="form__field">
                                        <label for="password">CONTRASEÑA</label>
                                        <input class="form__input" placeholder="Contraseña" name="password"
                                            v-model="password" type="password" required />
                                    </div>

                                    <label class="checkbox bounce form__label-checkbox">
                                        <input type="checkbox">
                                        <svg viewBox="0 0 21 21">
                                            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                        </svg>
                                        Mantener la sesión abierta
                                    </label>
                                </fieldset>
                                <button class="button--large--primary" type="submit">Iniciar sesión</button>
                                <strong class="forgot-password">He olvidado mi contraseña</strong>
                            </form>
                            <form class="auth__form" v-else @submit.prevent="doRegisterAndMessage()">
                                <fieldset class="form__fieldset">
                                    <legend>Datos personales</legend>
                                    <div class="form__field">
                                        <label for="name">NOMBRE</label>
                                        <input class="form__input" placeholder="Nombre" name="name" v-model="name" type="text"
                                            required />
                                    </div>
                                    <div class="form__field">
                                        <label for="email">EMAIL</label>
                                        <input class="form__input" placeholder="Correo Electrónico" name="email" v-model="email"
                                            type="email" required />
                                    </div>
                                    <div class="form__field">
                                        <label for="password">CONTRASEÑA</label>
                                        <input class="form__input" placeholder="Contraseña" name="password" v-model="password"
                                            type="password" required />
                                    </div>
                                    <div class="form__field">
                                        <label for="repeatpassword">REPITE LA CONTRASEÑA</label>
                                        <input class="form__input" placeholder="Repetir contraseña" name="repeatpassword"
                                            v-model="repeatpassword" type="password" required />
                                    </div>
                                </fieldset>
                                <label class="checkbox bounce form__label-checkbox">
                                        <input type="checkbox">
                                        <svg viewBox="0 0 21 21">
                                            <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
                                        </svg>
                                        He leído y acepto los Términos y Condiciones.
                                    </label>
                                    <button class="button--large--primary" type="submit">Crear cuenta</button>
                            </form>
                            <span v-if="showMessage" class="auth__message"> {{ message }}</span>
                        </div>

                    </div>
                    <!--
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
        -->
                </div>
            </transition>
        </div>
    </transition>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import Modal from "../components/Modal.vue"

export default {
    name: "LoginAndRegister",
    components: { Modal },
    setup(props, { emit }) {
        const close = () => {
            emit("close");
        };
        return { close };
    },
    data() {
        return {
            loading: false,
            name: '',
            email: null,
            password: null,
            repeatpassword: '',
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
        ...mapState('loginAndRegister', {
            modalActive: state => state.modalActive,
            isLogin: state => state.isLogin,
        }),
    },
    methods: {
        ...mapActions('loginAndRegister', {
            changeModalActive: "changeModalActive",
            changeIsLogin: "changeIsLogin"
        }),
        ...mapActions('user', {
            fetchUser: "fetchUser",
            doLogin: "doLogin",
            logout: "logout",
            doRegister: "doRegister",
            resetMessage: "resetMessage"
        }),
        async doLoginAndMessage() {
            this.loading = true
            await this.doLogin({ inputEmail: this.email, inputPassword: this.password })
            this.loading = false
            if (this.user) {
                this.modalActive = true
            }
            else {
                this.showMessage = true
                setTimeout(() => this.showMessage = false, 5000);
            }
        },
        async doRegisterAndMessage() {
            this.loading = true
            await this.doRegister({ inputName: this.name, inputEmail: this.email, inputPassword: this.password })
            this.loading = false
            if (this.message == "Usuario creado") {
                this.modalActiveRegister = true
                this.isLogin = true
            }
            else {
                this.showMessage = true
                setTimeout(() => this.showMessage = false, 5000);
            }
        },
        resetData() {
            this.email = this.password = '';
        },

        checkForm(e) {
            var ExpRegName = "^[A-ZÑÁÉÍÓÚ]+[A-ZÑa-zñáéíóúÁÉÍÓÚ ]*$";
            var ExpRegEmail = "^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$"

            this.errors = []

            if (this.name.match(ExpRegName) == null) {
                this.errors.push('El nombre no es válido. Solo se permiten letras y espacios.');
            }

            if (this.email.match(ExpRegEmail) == null) {
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

