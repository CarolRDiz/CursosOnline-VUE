<template>
    <li>
        <div class="courses__card-course">

            <RouterLink class="card-course__routerLink"
                :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                <img :src=fetchImg(course.image) alt="" class="card-course__img">
            </RouterLink>
            <section class="card-course__content">
                <div class="card-course__row">
                    <h3 class="card-course__title">
                        <RouterLink :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                            {{ course.title }}
                        </RouterLink>
                    </h3>
                </div>
                <div class="card-course__footer">
                    <div class="card-course__row">
                        <div class="card-course__by">
                            <small>Un curso de </small>
                            <strong>{{ course.author }}</strong>
                        </div>
                        
                        <div class="card-course__box-price">
                            <strong>
                                {{ course.price }}
                            </strong>
                            <sub>EUR</sub>
                        </div>
                    </div>
                    <div class="card-course__row">
                        <div class="card-course__box-score">
                            <div class="box-score__info">
                                <strong>Valoraciones</strong> 4.5/5
                            </div>
                            <div class="box-score__wrap">
                                <div class="box-score__bar" style="width: 50%;"></div>
                            </div>
                        </div>
                        <svg class="svg-icon--black" viewBox="0 0 20 20">
                            <path fill="none" d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
	l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
	c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
	c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
	S1.293,9.212,1.729,9.212z"></path>
                        </svg>
                    </div>
                </div>

                <!--
                    <span>Duración: {{ course.duration }}</span>
                <span class="course__purchased" v-if="checkCoursePurchased(course.id)">Comprado</span>
                <button v-if="!checkCourseInCart(course.id) && !checkCoursePurchased(course.id)"
                    @click="addCourseToCart(course), toggleModal()" class="button--large">
                    <img class="icon" src="../assets/img/anadir-a-la-cesta.png" alt="">
                    Añadir al carrito
                  
                </button>
                <button v-if="checkCourseInCart(course.id) && !checkCoursePurchased(course.id)"
                    @click="eliminateCourseInCart(course.id)" class="button--large">
                    <img class="item__delete icon click" src="../assets/img/x-mark.png" alt=""> Quitar del carrito
                </button>
            -->
            </section>
            <!--
            <Modal @close="toggleModal" :modalActive="modalActive">
                <div class="modal--addToCart">
                    <h1>Curso añadido a la cesta</h1>
                    <img class="icon--large" src="../assets/img/anadir-a-la-cesta.png" alt="">
                </div>
            </Modal>
            -->
        </div>
    </li>
</template>
<script>
import Modal from "./Modal.vue"
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: 'CourseComponent',
    components: { Modal },
    props: ["course"],
    data() {
        return {
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
            user: state => state.userData,
        }),
    },
    methods: {
        ...mapActions('cart', {
            addCourseToCart: "addCourseToCart",
            eliminateCourseInCart: "eliminateCourseInCart"
        }),
        fetchImg(image) {
            return this.fetchImageURL + image
        },
        toggleModal() {
            this.modalActive = !this.modalActive;
        },
        checkCourseInCart(courseID) {
            return this.cart.includes(courseID)
        },
        checkCoursePurchased(courseID) {
            if (this.user) return this.user.courses.includes(courseID)
        }
    }
}
</script>