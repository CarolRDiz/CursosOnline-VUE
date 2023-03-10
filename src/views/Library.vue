<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: "Library",

    data() {
    return {
      coursesPurchased: [],
    }},
    computed: {
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
        ...mapState('user', {
            userCourses: state => state.userData.courses,
        }),
        ...mapGetters('user', {
            courses: "userCourses",
        }),

    },
    methods: {
        fetchImg(image){
            return this.fetchImageURL+image
        },
        ...mapActions('user', {
            localStorageUser: "localStorageUser",
        }),
        ...mapActions('courses', {
            fetchCourses: "fetchCourses",
        }),
    },
    async created() {
        await this.localStorageUser()
        await this.fetchCourses()
        .then(() => this.loading = false);
    }
}
</script>
<template>
    <div class="main__library">
        <h1>Biblioteca</h1>
        <h2>Todos tus cursos</h2>
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
                    <span>Nivel {{ course.level }}</span>
                    <span>{{ course.area }}</span>
                    <span>{{ course.subarea }}</span>
                </section>
            </article>
        </section>
    </div>
</template>
<style>
.main__library{
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
</style>