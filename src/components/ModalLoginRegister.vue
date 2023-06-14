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
                            
                            <span v-if="showMessage" class="auth__message"> {{ message }}</span>
                        </div>

                    </div>
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
                await this.fetchUser();
                // console.log(this.user)
                //this.$emit("close-modal");
                this.$router.go()
            }
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
    },
};
</script>

