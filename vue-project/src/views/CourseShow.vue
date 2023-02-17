<script>
    import GoBack from '../components/GoBack.vue'
    import { mapState, mapGetters, mapActions } from "vuex"
    export default {
        name: "Course",
        components:{
            GoBack
        },
        props:{
            //id: {type: Number, required: true}
        },
        data() {
            return {
                course: null,
            }
        },
        computed:{
            ...mapState({
                fetchImageURL: state => state.fetchImageURL
            }),
        },
        async created(){
            await this.initData()
            this.$watch(()=> this.$route.params, this.initData)
        },
        methods:{
            async initData(){
                const res = await fetch(`http://localhost:3001/api/v1/productos/${this.$route.params.title}`)
                const data = await res.json()
                this.course = data
            }
        },
    }
</script>
<template>
    <div>
        <GoBack />
        <section v-if="course" class="course__section">
            <img :src=fetchImageURL+course.image alt="" class="course__img"/>
            <article class="course__content">
                <h2>{{ course.title }}</h2>
                <ul class="course__ul">
                    <li>
                        Autor: {{ course.author }}
                    </li>
                    <li>
                        Duration: {{ course.duration }}
                    </li>
                    <li>
                        Subtitle: {{ course.subtitle }}
                    </li>
                    <li>
                        Precio: {{ course.price }}
                    </li>
                </ul>
                <i @click="$emit('delete-course', course.id)"
                    class="fas fa-times">
                </i>
            </article>
            <article>
                <router-view></router-view>
            </article>
        </section>
    </div>
</template>


<style>
h2{
    font-size: 30px;
}
h3{
    font-size: 20px;
}
.course__section{
    background-color: rgb(212, 212, 212);
    display: flex;
    column-gap: 40px;
}
.course__img{
    width: 800px;
}
.course__ul{
    background-color: rgb(237, 237, 237);
    padding: 10px;
}
</style>