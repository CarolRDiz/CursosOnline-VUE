<template>
    <article class="createCourse__portada" >
        {{ id }}
        <h3 class="createCourse__list-heading">Lecciones</h3>
        <div class="lessons__form">
            <FormKit
                v-for="(item, index) in lessons" :key="item" :index="index"
                type="form"
                :actions="false"
                @submit="saveImage"
                >
                <FormKit type="text" name="title" label="Titulo de la lección" />
                <FormKit  label="Editar" type="submit"  />
                {{ item.id }}
                <button @click="doDeleteLesson(item.id)">Borrar</button>
            </FormKit>

            <FormKit
                type="form"
                :actions="false"
                @submit="doCreateLesson"
                >
                <FormKit type="text" name="title" label="Titulo de la lección" validation="required"/>
                <FormKit type="submit"  label="Crear"/>
            </FormKit>
        </div>
    </article>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: "CreateLesson",
    props: ["id", "lessons"],
    emits: ["refresh"],
    methods: {
        ...mapActions('lessons', {
            createLesson: "createLesson",
            deleteLesson: "deleteLesson"
        }),
        ...mapActions('courses', {
            getCourse: "getCourse",
        }),
        async doCreateLesson(details){
            const created = await this.createLesson({id: this.id, details:details})
            if (created) {
                this.$emit("refresh")
            }
        },
        async doDeleteLesson(id){
            const deleted = await this.deleteLesson(id)
            if (deleted) {
                this.$emit("refresh")
            }
        }
    }
}
</script>