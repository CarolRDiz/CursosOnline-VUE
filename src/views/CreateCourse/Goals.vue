<template>
    <div class="createCourse__content">
        <div class="subheader">
            <h2>Estudiantes objetivo</h2>
        </div>
        <div class="main-content">
            <p class="text">
                Las siguientes descripciones estarán visibles públicamente en la página de inicio de tu curso y afectarán
                directamente al rendimiento de tu curso. Dichas descripciones permitirán a los estudiantes saber si el curso
                es adecuado para ellos.
            </p>
            <FormKit type="form" @submit="saveDetails" :actions="false">
                <ListArticle 
                    label="¿Qué enseñas en este curso?" 
                    text="Debes escribir, al menos, 4 objetivos de aprendizaje o resultados que los estudiantes
                        esperen conseguir al finalizar tu curso." 
                    name="teaches" 
                    :value=course.teaches
                    placeholder="Conocimiento o habilidad que enseñas">
                </ListArticle>
                <ListArticle 
                    label="¿Cuáles son los requisitos o los requisitos previos para realizar tu
                        curso?" 
                    text="Haz una lista de todas las habilidades, herramientas, experiencia y equipos necesarios
                        que los alumnos deberían tener antes de realizar tu curso.
                        Si no hay requisitos, utiliza esto como una oportunidad para bajar la barrera para los
                        principiantes." 
                    name="requirements" 
                    :value=course.teaches
                    placeholder="Requisitos">
                </ListArticle>
                
                <FormKit type="submit">
                    Guardar
                </FormKit>
            </FormKit>
        </div>
    </div>
</template>
<script>

import { mapState, mapGetters, mapActions } from "vuex"
import ListInput from "../../components/ListInput.vue";
import ListArticle from "../../components/ListArticle.vue";
export default {
    components: {
        ListInput, ListArticle
    },
    async created() {
        this.loading = true;
        await this.getCourse(this.$route.params.id)
        // if(this.course.image_id){
        //   this.image = await this.fetchImage(this.course.image_id)
        // }
        this.loading = false;
        //await this.fetchUser();

        //this.$watch(() => this.$route.params, await this.getCourse(this.$route.params.id))
    },
    computed: {
        ...mapState('courses', {
            course: state => state.course,
        }),
    },
    methods: {
        ...mapActions('courses', {
            getCourse: "getCourse",
        }),
        saveDetails(details) {
            console.log(details)
        }
    }


}
</script>