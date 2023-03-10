<script>
import { mapState, mapGetters, mapActions } from "vuex"
import Modal from "./Modal.vue"
export default {
    name: "Courses",
    props: ["courses"],
    components: {Modal},
    data() {
        return {
            loading: false,
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
        ...mapState('user', {
            purchases: state => state.userData.courses
        }),
        ...mapGetters('courses', {
            subtitleCourses: "subtitledCourses",
        })
    },

    methods: {
        ...mapActions('courses', {
            fetchCourses: "fetchCourses",
        }),
        ...mapActions('cart', {
            addCourseToCart: "addCourseToCart",
            eliminateCourseInCart: "eliminateCourseInCart"
        }),
        fetchImg(image){
            return this.fetchImageURL+image
        },
        toggleModal(){
            this.modalActive = !this.modalActive;
        },
        checkCourseInCart(courseID){
            return this.cart.includes(courseID)
        },
        checkCoursePurchased(courseID){
            return this.purchases.includes(courseID)
        }
    },
}
</script>
<template>
    <div>
        <span v-if="loading">...</span>
        <article v-else>
            <h2>Courses</h2>
            <section class="courses">
                <article v-if="courses" v-for="course in courses" :key="course.id" class="courses__course">
                    <RouterLink class="course__routerLink" :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                        <img :src=fetchImg(course.image) alt="" class="course__img">
                    </RouterLink>
                    <section class="course__content">
                        <RouterLink class="course__link" :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                            <h3>{{ course.title }}</h3>
                        </RouterLink>
                        <span>Un curso de {{ course.author }}</span>
                        <span>Duración: {{ course.duration }}</span>

                        <span class="course__purchased" v-if="checkCoursePurchased(course.id)">Comprado</span>
                        <button v-if="!checkCourseInCart(course.id)&&!checkCoursePurchased(course.id)" @click="addCourseToCart(course), toggleModal()" 
                            class="button--large">
                            <img class="icon" src="../assets/img/anadir-a-la-cesta.png" alt="">
                            Añadir al carrito 
                            <span>{{ course.price }}€</span>
                        </button>
                        <button v-if="checkCourseInCart(course.id)&&!checkCoursePurchased(course.id)" @click="eliminateCourseInCart(course.id)"
                            class="button--large">
                            <img  class="item__delete icon click" src="../assets/img/x-mark.png"
                            alt="">  Quitar del carrito
                        </button>
                    </section>
                </article>
            </section>
        </article>
        <Modal @close="toggleModal" :modalActive="modalActive">
            <div class="modal--addToCart">
                <h1>Curso añadido a la cesta</h1>
                <img class="icon--large" src="../assets/img/anadir-a-la-cesta.png" alt="">
            </div>
        </Modal>
    </div>
</template>