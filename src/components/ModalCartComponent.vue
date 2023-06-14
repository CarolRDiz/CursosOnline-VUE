<template>
    <div v-show="modalCartActive" class="modal-cart">
        <!--v-show="modalActive" -->

        <div class="modal-cart__sidebar">
            <div class="cart-sidebar">
                <div class="modal-cart__header">
                    <div>
                        <span class="modal-cart__title">Tu carrito</span>
                        <span class="modal-cart__count">{{ count }}</span>
                    </div>
                    <span @click="close()">
                        <IconClose class="svg-icon--white" />
                    </span>
                </div>
                <div v-if="count != 0" class="cart-sidebar__content">
                    <ul class="list-cart">

                        <li v-if="courses" v-for="course in courses" class="list-cart__item">
                            <div class="list-cart__info">
                                <figure>
                                    <RouterLink
                                        :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                                        <img :src=fetchImg(course.image) alt="" class="cart__img">
                                    </RouterLink>
                                </figure>
                                <div class="list-cart__data">
                                    <strong class="list-cart__title">
                                        <a href="#">{{ course.title }}</a>
                                    </strong>
                                    <div class="card-course__by">
                                        <small>De </small>
                                        <strong>{{ course.author }}</strong>
                                    </div>
                                </div>
                            </div>
                            <div class="list-cart__right">
                                <div class="card-course__remove" @click="eliminateCourseInCart(course.id)">
                                    <IconTrash class="svg-icon--white" />
                                </div>

                                <div class="card-course__box-price">
                                    <strong>
                                        {{ course.price }}
                                    </strong>
                                    <sub>EUR</sub>
                                </div>
                            </div>

                        </li>
                    </ul>
                    <div class="cart-sidebar__footer">
                        <div class="cart-sidebar__total">
                            <strong>Total</strong>
                            <div class="card-course__box-price">
                                <strong>
                                    {{ total }}
                                </strong>
                                <sub>EUR</sub>
                            </div>
                        </div>
                        <button @click="checkout()"
                            class="cart-sidebar__checkout button button--complete--secondary">Comprar</button>
                        <a class="link-underlined" @click="close()">Continuar comprando</a>
                    </div>

                </div>
                <div v-else class="cart-sidebar__cart-empty">
                    <h3 class="cart-empty__message">Ahora mismo no tienes productos en el carrito</h3>
                    <div class="cart-sidebar__shopping-cart-icon">
                        <IconShoppingCart class="svg-icon--white--large" />
                    </div>
                    <div>
                        <a class="link-underlined" @click="close()">Continuar comprando</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import IconClose from "../components/icons/IconClose.vue"
import IconTrash from "../components/icons/IconTrash.vue"
import IconShoppingCart from "../components/icons/IconShoppingCart.vue"
export default {
    name: "ModalCartComponent",
    components: {
        IconClose, IconTrash, IconShoppingCart
    },
    props: ["modalCartActive"],
    computed: {
        ...mapState('user', {
            user: "userData"
        }),
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
        ...mapGetters('cart', {
            courses: "cartCourses",
            total: "cartTotal",
            count: "cartCount"
        }),
    },
    async created() {
        this.loading = true;
        await this.fetchCourses()
            .then(() => this.loading = false);
    },
    methods: {
        checkout() {
            if (!this.user) {
                this.$router.push({ name: 'LoginRegister' })
            }
            else {
                this.$router.push({ name: 'Checkout' })
            }
        },
        ...mapActions('cart', {
            eliminateCourseInCart: "eliminateCourseInCart"
        }),
        ...mapActions('courses', {
            fetchCourses: "fetchCourses",
        }),
        close() {
            this.$emit('close-cart')
        },
        ...mapActions('cart', {
            eliminateCourseInCart: "eliminateCourseInCart",
        }),
        fetchImg(image) {
            return this.fetchImageURL + image
        },
    }
}
</script>