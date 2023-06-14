<template>
    <ModalLoginRegister :modalActive="modalActive" :isLogin="isLogin" @change-modal="this.isLogin=!this.isLogin" @close-modal="closeModal"/>
    <nav>
        <ul class="nav__ul">
            <li class="nav__li">
                <svg v-if="!user" @click="changeModalActiveLogin()" class="svg-icon--white icon__loginRegister" viewBox="0 0 20 20">
                    <path fill="none" d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
								c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
								c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
								c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
								c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
								C15.328,9.982,12.943,12.367,10,12.367z"></path>
                </svg>
            </li>

            <li class="nav__li " v-if="!user"><button class="button button--normal--white"
                    @click="changeModalActiveLogin()">Entrar</button></li>
            <li class="nav__li" v-if="!user"><button class="button button--normal--primary--empty"
                    @click="changeModalActiveRegister()">Regístrate</button></li>
            <li v-if="user&&user.admin==false">
                <RouterLink to="/createCourse2" class="button button--normal--primary">Crear curso</RouterLink>
            </li>
            <li v-if="user&&user.admin">
                <RouterLink to="/admin">Administrador</RouterLink>
            </li>
            
            <li v-if="user">
                <button @click="this.logout()">Salir</button>
            </li>
        </ul>
    </nav>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import SearchBar from "./SearchBar.vue"
import ModalLoginRegister from './ModalLoginRegister.vue'
export default {
    name: 'TheNavigation',
    components:{
        ModalLoginRegister
    },
    data() {
        return {
            //MODAL LOGIN REGISTER
            modalActive: false,
            isLogin: false,
        }
    },
    computed: {
        ...mapState('auth', {
            user: state => state.user,
        }),
        ...mapGetters('auth', {
            getUser: "getUser",
        }),
    },
    methods: {
        ...mapActions("auth",{
            logout: "logout"
        }),
        ...mapActions("courses",{
            createCourse: "createCourse"
        }),
        changeModalActiveLogin(){
            this.modalActive = true;
            this.isLogin = true;
        },
        changeModalActiveRegister(){
            this.modalActive = true;
            this.isLogin = false;
        },
        closeModal() {
            this.modalActive = false;
        },
        async doCreateCourse(){
            const courseCreated = await this.createCourse();
            if(courseCreated){
                this.$router.push({ name: 'CreateCourse' })
            } else {
                alert("no es posible crear un nuevo curso")
            }
        }
    }
}
</script>
