<template>
    <section class="createDashboard">
        <h1 class="createDashboard__title heading-3">Crea tus cursos</h1>
        <article class="createDashboard__courses">
            <ul class="createdCourses">
                <li class="createdCourse" v-for="(createdCourse, i) in createdCourses" :key="i">
                    <div class="createdCourse__info">
                        <span v-if="createdCourse.title!=''"
                            class="createdCourse__title">
                            {{createdCourse.title}}
                        </span>
                        <span v-else
                            class="createdCourse__title">
                            Sin título
                        </span>
                        <span class="createdCourse__date">Creado: {{ $filters.formatDate(createdCourse.createdAt) }}</span>
                        <span class="createdCourse__date">Última vez modificado: {{ $filters.formatDate(createdCourse.updatedAt) }}</span>
                    </div>
                    <RouterLink :to="{ name: 'CreateCourse', params: { id: createdCourse.id} }">
                        <IconEdit class="svg-icon--white--filled" />
                    </RouterLink>
                </li>
            </ul>
        <button class="button button--large--secondary" @click="doCreateCourse()">+ Crear un nuevo curso</button>
        
        </article>
        
    </section>
    
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import IconEdit from "../components/icons/IconEdit.vue"
export default {
    name: "CreateCourseDashboard",
    components: {
        IconEdit
    },
    computed:{
        ...mapState('auth', {
            user: state => state.user,
        }),
        ...mapGetters('auth', {
            createdCourses: "getCreatedCourses",
        }),
    },
    async created() {
        this.loading = true;
        await this.fetchUser()
        this.loading = false;
        //this.$watch(() => this.$route.params, this.course = await this.getCourse(this.$route.params.id))
        //await this.fetchUser();
        //await this.initData()
        //this.$watch(() => this.$route.params, await this.getCourse(this.$route.params.id))
    },
    methods: {
        
        ...mapActions('auth', {
            fetchUser: "fetchUser"
        }),
        ...mapActions("courses",{
            createCourse: "createCourse"
        }),
        async doCreateCourse(){
            console.log("Creando un nuevo curso")
            const created = await this.createCourse();
            await this.fetchUser();
            console.log(created)
        }
    }
}
</script>