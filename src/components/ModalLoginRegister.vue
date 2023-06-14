<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modalLoginRegister">
                    <div v-if="loading">Cargando...</div>
                    <div v-else>
                        <IconClose @click="close()" class="svg-icon--white close" />
                        <!--LEFT SIDE-->
                        <div class="modalLoginRegister__welcome">
                            <h3>Bienvenido!</h3>
                            <span v-if="isLogin">¿Aún no eres miembro? <strong class="modalLoginRegister__change"
                                    @click="changeIsLogin()">Únete</strong></span>
                            <span v-else>¿Eres miembro? <strong class="modalLoginRegister__change" @click="changeIsLogin()">Inicia sesión</strong></span>
                        </div>
                        <!--RIGHT SIDE-->
                        <div class="modalLoginRegister__content">
                            <h1 v-if="isLogin">Iniciar sesión</h1>
                            <h1 v-if="!isLogin">Registrarse</h1>
                            <!--LOGIN FORM-->
                            <FormKit v-if="isLogin" 
                                type="form" 
                                submit-label="Iniciar sesión" 
                                @submit="doLoginAndMessage"
                                :actions="false">
                                <FormKit 
                                    type="text" 
                                    name="username"
                                    label="Nombre de usuario" 
                                    validation="required" />
                                <FormKit 
                                    type="password"
                                    name="password"
                                    label="Contraseña" 
                                    validation="required" />
                                <FormKit type="submit"  />
                                <span v-if="failed" class="form__failed">{{ failed }}</span>
                            </FormKit>
                            <!--REGISTER FORM-->
                            <FormKit v-else 
                                type="form" 
                                submit-label="Registrarse" 
                                @submit="doRegisterAndMessage"
                                :actions="false"
                                >
                                <FormKit 
                                    type="text" 
                                    label="Nombre de usuario" 
                                    placeholder="Nombre de usuario"
                                    validation="required" 
                                    name="username"/>
                                <!-- <FormKit 
                                    type="email" 
                                    label="Email"
                                    placeholder="Email"
                                    validation="required" /> -->
                                <FormKit 
                                    type="password" 
                                    name="password" 
                                    label="Contraseña" 
                                    validation="required"
                                    placeholder="Contraseña"
                                    suffix-icon="eyeClosed"
                                    @suffix-icon-click="handleIconClick"/>
                                <FormKit 
                                    type="password" 
                                    name="password_confirm" 
                                    label="Confirma la contraseña"
                                    placeholder="Repita la contraseña"
                                    validation="required|confirm"
                                    validation-label="Confirmación de contraseña"
                                    suffix-icon="eyeClosed"
                                    @suffix-icon-click="handleIconClick"/>
                                <FormKit type="submit"  />
                                <span v-if="failed">{{ failed }}</span>
                            </FormKit>
                            <!--
                            <form class="form" v-if="isLogin" @submit.prevent="doLoginAndMessage()">
                                <fieldset class="form__fieldset">
                                    <legend>Datos personales</legend>
                                    
                                    


                                     <div class="form__field">
                                        <label for="email">EMAIL</label>
                                        <input class="form__input" placeholder="Correo Electrónico" name="email"
                                            v-model="email" type="email" required />
                                    </div>   
                                    -->

                            <!-- 
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
                                <button class="button button--large--primary" type="submit">Iniciar sesión</button>
                                <strong class="forgot-password">He olvidado mi contraseña</strong>
                            </form>
                            -->

                            <!--REGISTER FORM-->

                            <!-- <form class="form" v-else @submit.prevent="doRegisterAndMessage()">
                                <fieldset class="form__fieldset">
                                    <legend>Datos personales</legend>
                                    <div class="form__field">
                                        <label for="name">NOMBRE</label>
                                        <input class="form__input" placeholder="Nombre" name="name" v-model="name"
                                            type="text" required />
                                    </div>
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
                                <button class="button button--large--primary" type="submit">Crear cuenta</button>
                            </form> -->
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
import IconClose from "../components/icons/IconClose.vue"

export default {
    name: "ModalLoginRegister",
    components: { Modal, IconClose },
    props: [
        "modalActive", "isLogin"
    ],
    data() {
        return {
            loading: false,
            name: '',
            email: null,
            password: null,
            repeatpassword: '',
            showMessage: false,
            failed: '',
        };
    },
    computed: {
        // ...mapState('user', {
        //     user: state => state.userData,
        //     message: state => state.message,
        // }),
        ...mapState('auth', {
            user: state => state.user,
        }),
        /*
        ...mapState('loginAndRegister', {
            modalActive: state => state.modalActive,
            isLogin: state => state.isLogin,
        }),
        */
    },
    methods: {

        handleIconClick(node, e) {
            node.props.suffixIcon = node.props.suffixIcon === 'eye' ? 'eyeClosed' : 'eye'
            node.props.type = node.props.type === 'password' ? 'text' : 'password'
        },
        
        changeIsLogin() {
            this.failed = ''
            this.$emit("change-modal");
        },
        close() {
            this.$emit("close-modal");
        },
        ...mapActions('user', {
            fetchUser: "fetchUser",
            //doLogin: "doLogin",
            //doRegister: "doRegister",
            resetMessage: "resetMessage"
        }),
        ...mapActions('auth', {
            doLogin: "login",
            fetchUser: "fetchUser",
            doRegister: "register"
        }),
        async doLoginAndMessage(credentials) {
            console.log("Iniciando sesión")
            this.loading = true
            var success = await this.doLogin({ username: credentials.username, password: credentials.password })
            this.loading = false;
            if(!success){
                console.log("Login Failed")
                this.failed = "El nombre de usuario o la contraseña son incorrectos."
            }
            else{
                console.log("éxito")
                // await this.fetchUser();
                // console.log(this.user)
                //this.$emit("close-modal");
                this.$router.go()
            }
            
            //this.$emit("close-modal");

            // if (this.user) {
            //     this.modalActive = false
            // }
            // else {
            //     this.showMessage = true
            //     setTimeout(() => this.showMessage = false, 5000);
            // }
        },
        async doRegisterAndMessage(credentials) {
            this.loading = true
            var success = await this.doRegister({ username: credentials.username, password: credentials.password })
            this.loading = false
            if (success) {
                this.changeIsLogin();
            }
            else {
                this.failed = "El nombre de usuario ya está en uso."
            }
        },
        /*
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
        */
    },
};
</script>

