
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import Modal from "../components/Modal.vue"
export default {
    name: "ShoppingCart",
    components: {Modal},
    data() {
        return {
            loading: false,
            modalActive: false,
        }
    },
    computed: {
        ...mapState('cart', {
            checkoutStatus: state => state.checkoutStatus,
            cartCoursesId: state => state.items
        }),
        // ...mapState('courses',{
        // }),
        ...mapGetters('cart', {
            courses: "cartCourses",
            total: "cartTotal",
            count: "cartCount"
        }),
        // courses () {
        //     return this.$store.getters.cartCourses
        // },
        // total () {
        //     return this.$store.getters.cartTotal
        // }
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
    },
    methods: {
        fetchImg(image) {
            return this.fetchImageURL + image
        },
        ...mapActions('user', {
            checkout: "checkout",
        }),
        ...mapActions('user', {
            addCoursesToUser: "addCoursesToUser",
        }),
        ...mapActions('cart', {
            checkout: "checkout",
            eliminateCourseInCart: "eliminateCourseInCart"
        }),
        toggleModal(){
            this.modalActive = !this.modalActive;
        },
    }
}
</script>
<template>
    <section class="main__cart">
        <article class="cart__article cart__info">
            <div>
              <span>Carrito </span><span>( {{ this.count }} cursos)</span>  
            </div>
            
            <router-link class="cart__home-link" to="/">Continuar comprando<img class="icon--small" src="../assets/img/flecha-correcta.png" alt=""></router-link>
        </article>

        <article class="cart__article">
            {{ cartCoursesId }}
        <ul v-if="total!=0" class="cart__list">
            <li v-for="course in courses" class="cart__item">
                <div class="item__right">
                    <img :src="fetchImg(course.image)" alt="" class="item__img" />
                    <div class="item__info">
                        <div class="item__group">
                            <span class="item__title">{{ course.title }}</span>
                            <span class="item__author">Un curso de {{ course.author }}</span>   
                        </div>
                        <span class="item__span">Audio: {{ course.language }}</span>
                        <span class="item__span" v-if="course.subtitle" >Subtítulos: {{ course.subtitle.join(', ') }}</span>
                        <span class="item__span" v-if="!course.subtitle">
                            Sin subtítulos
                        </span>
                    </div>
                </div>
                <div class="item__left">
                    <span class="item__price">{{ course.price }}€</span>
                    <img @click="eliminateCourseInCart(course.id)" class="item__delete icon click" src="../assets/img/quitar-del-carrito.png"
                        alt="">  
                </div>
                
            </li>
        </ul>
        <div v-if="total==0">
            Tu carrito está vacío.
        </div>
        <div v-if="total!=0">
            <p>Total: {{ total }}</p>
            <button @click="addCoursesToUser(cartCoursesId), checkout(), toggleModal()">Comprar</button>
        </div>
    </article>
    <Modal @close="toggleModal" :modalActive="modalActive">
            <div class="modal--addToCart">
                <h1>La compra se ha realizado con éxito</h1>
                <img class="icon--large" src="../assets/img/verificar.png" alt="">
                <RouterLink class="modal__link" to="/library">Ir a su biblioteca de cursos</RouterLink>
            </div>
    </Modal>
</section>
</template>