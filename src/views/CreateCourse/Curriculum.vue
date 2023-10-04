<template>
    <div class="createCourse__content">
        <div class="subheader">
            <h2>Programa</h2>
        </div>
        <div class="main-content">
            <div v-for="lesson in course.lessons">
                <Lesson :lesson="lesson"></Lesson>
            </div>
            <CreateLesson v-if="newLesson" @create-lesson="doCreateLesson" @cancel="cancelCreateLesson"></CreateLesson>
            <button @click="addLesson()" class="button button--white--empty--normal">+ Lección</button>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import CreateLesson from '../../components/CreateCourse/CreateLesson.vue';
import Lesson from "../../components/CreateCourse/Lesson.vue";

export default {
    components: {
        CreateLesson,
        Lesson
    },
    data() {
        return {
            newLesson: false
        }
    },
    computed: {
        ...mapState('courses', {
            course: state => state.course,
        }),
    },
    methods: {
        ...mapActions('lessons', {
            createLesson: "createLesson",
            deleteLesson: "deleteLesson"
        }),
        async doCreateLesson(details) {
            console.log("2- emit create-lesson recibido")
            const created = await this.createLesson({ id: this.$route.params.id, details: details })
            if (created) {
                console.log("3- Leccion creada con éxito")
                this.$formkit.reset('new-lesson')
                this.newLesson = false;
                this.$router.go()
            }
        },
        cancelCreateLesson() {
            console.log("2- emit cancel recibido")
            this.$formkit.reset('new-lesson')
            this.newLesson = false;
        },
        addLesson() {
            this.newLesson = true;
        }
    }
}
</script>