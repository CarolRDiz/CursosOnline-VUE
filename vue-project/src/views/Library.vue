<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: "Library",

    computed: {
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
        ...mapGetters('user', {
            courses: "userCourses",
        }),
    },
    methods: {
        fetchImg(image){
            return this.fetchImageURL+image
        }
    }
}
</script>
<template>
    <div>
        <h1>Biblioteca</h1>
        <h2>Todos tus cursos</h2>
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
                    <span>Nivel {{ course.level }}</span>
                    <span>{{ course.area }}</span>
                    <span>{{ course.subarea }}</span>
                </section>
            </article>
        </section>
    </div>
</template>
<style>
.cart__list {
    background-color: white;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    row-gap: 10px;
    padding: 0;
}

.cart__item {
    padding: 10px;
    display: flex;
    align-items: center;
    column-gap: 10px;
}

.cart__item:hover {
    background-color: rgb(217, 217, 217);
}

.item__price {
    color: red;
}
</style>