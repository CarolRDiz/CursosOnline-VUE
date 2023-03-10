<script>
import GoBack from '../components/GoBack.vue'
import { mapState, mapGetters, mapActions } from "vuex"
import Modal from "../components/Modal.vue"
export default {
    name: "Course",
    components: {
        GoBack, Modal
    },
    props: {
        //id: {type: Number, required: true}
    },
    data() {
        return {
            course: null,
            modalActive: false,
        }
    },
    computed: {
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
        ...mapState('cart', {
            cart: state => state.items
        }),
    },
    async created() {
        await this.initData()
        this.$watch(() => this.$route.params, this.initData)
    },
    methods: {
        async initData() {
            const res = await fetch(`https://api-node.up.railway.app/api/v1/productos/${this.$route.params.title}`)
            const data = await res.json()
            this.course = data
        },
        fetchImg(image){
            return this.fetchImageURL+image
        },
        ...mapActions('cart', {
            addCourseToCart: "addCourseToCart",
            eliminateCourseInCart: "eliminateCourseInCart"
        }),
        toggleModal(){
            this.modalActive = !this.modalActive;
        },
        checkCourseInCart(courseID){
            return this.cart.includes(courseID)
        }
    },
}
</script>
<template>
    <div>
        <GoBack />
        <section v-if="course" class="showCourse">
            <img :src="fetchImg(course.image)" alt="" class="showCourse__img" />
            <article class="showCourse__content">
                <h1>{{ course.title }}</h1>
                <ul class="showCourse__ul">
                    <li>
                        Un curso de <a class="showCourse__author" href="#">{{ course.author }}</a>
                    </li>
                    <li>
                        Nivel: {{ course.level }}
                    </li>
                    <li>
                        Audio: {{ course.language }}
                    </li>
                    <li>
                        Duración: {{ course.duration }} hora
                    </li>
                    <li v-if="course.subtitle">
                        Subtítulos:
                        {{ course.subtitle.join(', ') }}
                    </li>
                    <li v-if="!course.subtitle">
                        Sin subtítulos
                    </li>
                </ul>
                <button v-if="!checkCourseInCart(course.id)" @click="addCourseToCart(course), toggleModal()" 
                    class="button--large">
                    <img class="icon" src="../assets/img/anadir-a-la-cesta.png" alt="">
                    Añadir al carrito 
                    <span>{{ course.price }}€</span>
                </button>
                <button v-if="checkCourseInCart(course.id)" @click="eliminateCourseInCart(course.id)"
                    class="button--large">
                    <img  class="item__delete icon click" src="../assets/img/x-mark.png"
                    alt="">  Quitar del carrito
                </button>
            </article>
            <article>
                <router-view></router-view>
            </article>
        </section>
        <Modal @close="toggleModal" :modalActive="modalActive">
            <div class="modal--addToCart">
                <h1>Curso añadido a la cesta</h1>
                <img class="icon--large" src="../assets/img/verificar.png" alt="">
            </div>
        </Modal>
    </div>
</template>
