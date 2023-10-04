<template>
    <div class="lesson">
        <span>Lección {{ lesson.id }}: {{ lesson.title }}</span>
        <div v-for="chapter in lesson.chapters">
            <Chapter :chapter="chapter"></Chapter>
        </div>
        <CreateChapter v-if="newChapter" @create-chapter="doCreateChapter" @cancel="cancelCreateChapter"></CreateChapter>
        <button v-else @click="addChapter" class="button button--white--empty--normal">+ Agregar capítulo</button>
    </div>
    
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import CreateChapter from './CreateChapter.vue';
import Chapter from "./Chapter.vue";
export default {
    name: "Lesson",
    props: ["lesson"],
    components:{
        CreateChapter, Chapter
    },
    data(){
        return{
            newChapter: false
        }
    },
    methods:{
        ...mapActions('chapters', {
            createChapter: "createChapter",
            deleteChapter: "deleteChapter"
        }),
        addChapter(){
            this.newChapter = true
        },
        cancelCreateChapter(){
            console.log("2- emit cancel recibido")
            this.$formkit.reset('new-chapter')
            this.newChapter = false;
        },
        async doCreateChapter(details) {
            console.log("2- emit create-chapter recibido")
            const created = await this.createChapter({ id: this.lesson.id, details: details })
            if (created) {
                console.log("3- Chapter creado con éxito")
                this.$formkit.reset('new-chapter')
                this.newChapter = false;
                this.$router.go()
            }
        },
    }
}
</script>