<script>

import { mapState, mapGetters, mapActions } from "vuex"
import MenuFloatCreateCourse from '../components/MenuFloatCreateCourse.vue';
import IconVideoAdd from "../components/icons/IconVideoAdd.vue"
import IconTickCircle from "../components/icons/IconTickCircle.vue";
import IconCircle from "../components/icons/IconCircle.vue"
import IconLeft from "../components/icons/IconLeft.vue"
import IconSettings from "../components/icons/IconSettings.vue";
export default {
  name: "CreateCourse",
  components: {
    MenuFloatCreateCourse, IconVideoAdd, IconTickCircle, IconCircle, IconLeft, IconSettings
  },
  data() {
    return {
      //course:'',
      loading: false,
      image: '',
      course: ''
    }
  },
  computed: {
    trailerUrl() {
      return "http://localhost:8080/videos/stream/" + this.course.video_id
    },

    // ...mapState('courses', {
    //   course: state => state.course,
    // }),
    ...mapGetters('courses', {
      imageUrl: "imageUrl",
      //course: "course",
      trailerUrl: "trailerUrl"
    }),
  },

  async created() {
    this.loading = true;
    this.course = await this.getCourse(this.$route.params.id)
    // if(this.course.image_id){
    //   this.image = await this.fetchImage(this.course.image_id)
    // }
    this.loading = false;
    //await this.fetchUser();

    //this.$watch(() => this.$route.params, await this.getCourse(this.$route.params.id))
  },

  methods: {
    getVideoUrl(videoId) {
      return `http://localhost:8080/videos/stream/${videoId}`;
    },
    ...mapActions('courses', {
      getCourse: "getCourse",
      updateDetailsCourse: "updateDetailsCourse",
      updateVideoCourse: "updateVideoCourse",
      updateImageCourse: "updateImageCourse",
      fetchImage: "fetchImage"
    }),
    async saveDetails(details) {
      console.log("SAVE DETAILS")
      const updated = await this.updateDetailsCourse({ id: this.$route.params.id, details: details })
      console.log("UPDATED: " + updated)
      this.$router.go()
    },
    async saveVideo(data) {
      console.log("SAVE VIDEO")
      console.log(data)
      const updated = await this.updateVideoCourse({ id: this.$route.params.id, video: data.video })
      console.log("UPDATED: " + updated)
      if (updated) {
        this.$router.go()
      }
    },
    async saveImage(data) {
      console.log("SAVE IMAGE")
      console.log(data.image)
      const updated = await this.updateImageCourse({ id: this.$route.params.id, image: data.image })
      console.log("UPDATED: " + updated)
      if (updated) {
        this.$router.go()
      }
    },
    async refreshCourse() {
      console.log("Refresh")
      this.loading = true
      await this.getCourse()
      this.loading = false
    }
  }
}
</script>

<template>
  <!-- <MenuFloatCreateCourse @cart="menuCart" @buy="addMenuCart" /> -->
  <!-- <div v-if="this.loading">Cargando</div> -->
  <!-- <section v-else class="createCourse"> -->
  <section class="createCourse">
    <div class="createCourse__header">
      <div class="createCourse__header--left">
        <div class="back-link">
        <IconLeft class="svg-icon--white"></IconLeft>
        <router-link to="/createCourseDashboard">Volver a los cursos</router-link>
      </div>
      
      <h1 class="createCourse__title">{{ course.title }}</h1>
      <!-- <button class="button button--normal--white--empty">Vista previa</button> -->
      </div>
      <IconSettings class="svg-icon--white"></IconSettings>
      <!-- <button class="button button--normal--white">Guardar</button> -->
    </div>
    <div class="createCourse__main">
      <div class="createCourse__container">
        <div class="side-nav">
          <ul class="side-nav__nav">
            <li class="side-nav__section">
              <span class="side-nav--nav-section-title">
                Planifica tu curso
              </span>
              <ul>
                <li class="side-nav__item">
                  <router-link :to="`/createCourse/${this.$route.params.id}/goals`" class="side-nav__item-link">
                    <IconTickCircle class="svg-icon--white" />
                    <span>
                      Estudiantes objetivo
                    </span>
                  </router-link>
                </li>
                <li class="side-nav__item">
                  <router-link :to="`/createCourse/${this.$route.params.id}/course-structure`" class="side-nav__item-link">
                    <IconCircle class="svg-icon--white" />
                    <span>
                      Estructura del curso
                    </span>
                  </router-link>
                </li>
                <li class="side-nav__item">
                  <router-link :to="`/createCourse/${this.$route.params.id}/setup`" class="side-nav__item-link">
                    <IconCircle class="svg-icon--white" />
                    <span>
                      Configuración y vídeo de prueba
                    </span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="side-nav__section">
              <span class="side-nav--nav-section-title">
                Crea tu contenido
              </span>
              <ul>
                <li class="side-nav__item">
                  <router-link :to="`/createCourse/${this.$route.params.id}/film`" class="side-nav__item-link">
                    <IconCircle class="svg-icon--white" />
                    <span>
                      Grabación y edición
                    </span>
                  </router-link>
                </li>
                <li class="createCourse__item-article">
                  <router-link :to="`/createCourse/${this.$route.params.id}/curriculum`" class="side-nav__item-link">
                    <IconCircle class="svg-icon--white" />
                    <span>
                      Programa
                    </span>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="side-nav__section">
              <span class="side-nav--nav-section-title">
                Publica tu curso
              </span>
              <ul>
                <li class="side-nav__item">
                  <router-link :to="`/createCourse/${this.$route.params.id}/basics`" class="side-nav__item-link">
                    <IconCircle class="svg-icon--white" />
                    <span>
                      Página de inicio del curso
                    </span>
                  </router-link>
                </li>
                <li class="side-nav__item">
                  <router-link :to="`/createCourse/${this.$route.params.id}/pricing`" class="side-nav__item-link">
                    <IconCircle class="svg-icon--white" />
                    <span>
                      Precios
                    </span>
                  </router-link>
                </li>
                <li class="side-nav__item">
                  <router-link :to="`/createCourse/${this.$route.params.id}/messages`" class="side-nav__item-link">
                    <IconCircle class="svg-icon--white" />
                    <span>
                      Mensajes del curso
                    </span>
                  </router-link>

                </li>
              </ul>
            </li>
          </ul>
        </div>
        <RouterView :key="$route.path"/>
      </div>
    </div>  
      


  </section>
</template>

