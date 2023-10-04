<template>
    <article class="create-lesson">
        <span>Nueva lección:</span>
        <div class="create-lesson__form">
            <FormKit
                type="form"
                @submit="createALesson"
                :actions="false"
                id="new-lesson"
                >
                <div class="create-lesson__row">
                    <FormKit class="form__label" type="text" name="title" placeholder="Escribe un título"/>
                </div>
                
            </Formkit>
            <div class="create-lesson__row--left">
                <button class="button button--text--white" @click="cancel">Cancelar</button>
                <button class="button button--small--white" @click="submit">Agregar sección</button>      
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
    name: "CreateLesson",
    emits: ["create-lesson", "refresh", "cancel"],
    methods: {
        ...mapActions('lessons', {
            createLesson: "createLesson",
            deleteLesson: "deleteLesson"
        }),
        cancel(){
            console.log("1- cancel")
            this.$emit("cancel")
        },
        submit(){
            this.$formkit.submit('new-lesson');
        },
        createALesson(details){
            console.log("1- createLesson")
            console.log(details)
            this.$emit("create-lesson", details)
        },
    }
}
</script>