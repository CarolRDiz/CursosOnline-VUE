<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: "Courses",
    data() {
        return {
            loading: false,
        }
    },
    computed: {
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
        ...mapState('courses', {
            courses: state => state.items,
            
        }),

        ...mapGetters('courses', {
            subtitleCourses: "subtitledCourses",
        })
    },

    async created() {
        this.loading = true;
        await this.fetchCourses()
            .then(() => this.loading = false);
    },

    methods: {
        ...mapActions('courses', {
            fetchCourses: "fetchCourses",
        }),
        ...mapActions('cart', {
            addCourseToCart: "addCourseToCart"
        }),
        fetchImg(image){
            return this.fetchImageURL+image
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
                    <RouterLink :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                        <img :src=fetchImg(course.image) alt="" class="courses__img">
                    </RouterLink>
                    <section class="courses__content">
                        <RouterLink :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                            <h3>{{ course.title }}</h3>
                        </RouterLink>
                        <span>Un curso de {{ course.author }}</span>
                        <span>Duración: {{ course.duration }}</span>
                        <button @click="addCourseToCart(course)"
                            class="button--large">
                                Añadir al carrito {{ course.price }}€
                        </button>
                    </section>
                </article>
            </section>
        </article>
    </div>
</template>
<style>
.courses__img {
    width: 100%;
}
.courses{
    display: flex;
    flex-wrap: wrap;
    column-gap: 50px;
    row-gap: 50px;
}
.courses__course{
    background-color: white;
    width: 100%;
    max-width: 400px;
    padding-bottom: 10px;
}
.courses__content {
    padding: 0 10px 0 10px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
}
.button--large{
    width: 100%;
}
</style>