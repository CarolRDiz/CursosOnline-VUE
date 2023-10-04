<template>
    <article class="create-lesson">
        <span>Nueva capítulo:</span>
        <div class="create-lesson__form">
            <FormKit
                type="form"
                @submit="createAChapter"
                :actions="false"
                id="new-chapter"
                >
                <div class="create-lesson__row">
                    <FormKit class="form__label" type="text" name="title" placeholder="Escribe un título"/>
                </div>
                
            </Formkit>
            <div class="create-lesson__row--left">
                <button class="button button--text--white" @click="cancel">Cancelar</button>
                <button class="button button--small--white" @click="submit">Agregar capítulo</button>      
            </div>
            
        </div>
    </article>
    <!-- <article class="createCourse__portada" >
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
    </article> -->
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: "CreateChapter",
    emits: ["create-lesson", "refresh"],
    methods: {
        ...mapActions('lessons', {
            createLesson: "createLesson",
            deleteLesson: "deleteLesson"
        }),
        // createALesson(details){
        //     console.log("createLesson")
        //     this.$emit("create-lesson", details)
        // },
        cancel(){
            console.log("1- cancel")
            this.$emit("cancel")
        },
        submit(){
            this.$formkit.submit('new-chapter');
        },
        createAChapter(details){
            console.log("1- createChapter")
            console.log(details)
            this.$emit("create-chapter", details)
        },
        login(){
            console.log("VAMOOOOOS")
        },
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