<template>
    <div class="box-cart">
        <div class="box-cart__content">
            <ul class="box-cart__list">
                <li v-if="courses" v-for="course in courses" class="box-cart___item">
                    <figure>
                        <RouterLink :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                            <img :src=fetchImg(course.image) alt="" class="box-cart___img">
                        </RouterLink>
                    </figure>
                    <div class="box-cart___data">
                        <RouterLink class="box-cart__title"
                            :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                            {{ course.title }}
                        </RouterLink>
                        <span>{{ course.price }}</span>
                    </div>
                    <div class="box-cart__remove" @click="eliminateCourseInCart(course.id)">
                        <IconTrash class="svg-icon--black" />
                    </div>
                </li>
            </ul>
            <div class="box-cart__total">
                <strong>Total</strong>
                <div class="box-cart___box-price">
                    {{ total }}€
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import IconTrash from './icons/IconTrash.vue';
export default {
    name: "Checkout",
    components: {
        IconTrash
    },
    async created() {
        this.loading = true;
        await this.fetchCourses()
            .then(() => this.loading = false);
    },
    computed: {
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
        ...mapGetters('cart', {
            courses: "cartCourses",
            total: "cartTotal",
            count: "cartCount"
        }),
    },
    methods: {
        ...mapActions('courses', {
            fetchCourses: "fetchCourses",
        }),
        ...mapActions('cart', {
            eliminateCourseInCart: "eliminateCourseInCart"
        }),
        fetchImg(image) {
            return this.fetchImageURL + image
        },
    }
}
</script>