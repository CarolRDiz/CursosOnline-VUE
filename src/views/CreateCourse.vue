<script>

import { mapState, mapGetters, mapActions } from "vuex"
import MenuFloatCreateCourse from '../components/MenuFloatCreateCourse.vue';
import IconVideoAdd from "../components/icons/IconVideoAdd.vue"
export default {
  name: "CreateCourse",
  components: {
    MenuFloatCreateCourse, IconVideoAdd
  },
  data (){
    return {
      //course:'',
      loading: false,
      image: ''
    }
  },
  computed: {
    trailerUrl(){
      return "http://localhost:8080/videos/stream/"+this.course.video_id
    },

    ...mapState('courses', {
      course: state=>state.course,
    }),
    ...mapGetters('courses', {
      imageUrl: "imageUrl",
      //course: "course",
      trailerUrl: "trailerUrl"
    }),
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
    async saveDetails(details){
      console.log("SAVE DETAILS")
      const updated = await this.updateDetailsCourse({id: this.$route.params.id, details: details})
      console.log("UPDATED: "+updated)
      this.$router.go()
    },
    async saveVideo(data){
      console.log("SAVE VIDEO")
      console.log(data)
      const updated = await this.updateVideoCourse({id: this.$route.params.id, video: data.video})
      console.log("UPDATED: "+updated)
      if(updated){
        this.$router.go()
      }
    },
    async saveImage(data){
      console.log("SAVE IMAGE")
      console.log(data.image)
      const updated = await this.updateImageCourse({id: this.$route.params.id, image: data.image})
      console.log("UPDATED: "+updated)
      if(updated){
        this.$router.go()
      }


    }
  }
}
</script>

<template>
  <MenuFloatCreateCourse @cart="menuCart" @buy="addMenuCart" />
  <div v-if="this.loading">Cargando</div>
  <section v-else class="createCourse">
    <div class="inner">
      <h1 class="createCourse__title heading-3">Crea tu propio curso</h1>
      <FormKit type="form" @submit="saveDetails" :actions="false">

        <div class="createCourse__section-heading"><span>01.</span>
          <h2>Detalles del curso</h2>
          <p class="createCourse__description">Rellena los siguientes campos de tu curso, tratando de ser descriptivo.
            Siempre podrás cambiar los datos antes de publicarlo.</p>
        </div>

        <!--TITLE-->
        <FormKit type="text" name="title" label="Titulo del curso"  :value="course.title" />
        <!--SUBTITLE-->
        <FormKit type="text" name="subtitle" label="Subtítulo del curso"  :value="course.subtitle" />
        <!--DESCRIPTION-->
        <FormKit type="textarea" 
          label="Descripción" 
          rows="10" 
          placeholder="Escribe la descripción de tu curso."
          :value="course.dscription" 
          name="description"/>
        <!--REQUIREMENTS-->
        <FormKit 
          type="textarea" 
          label="Requisitos" 
          rows="10"
          placeholder="Escribe los requisitos para realizar este curso." 
          :value="course.requirements" 
          name="requirements"/>
        <!--SKILLS LIST-->

        <article class="createCourse__list">
          <h3 class="createCourse__list-heading">¿Qué enseñas en este curso?</h3>
          <div class="formkit-list">
            <FormKit 
              type="list" 
              dynamic #default="{ items, node, value }"
              name="teaches"
              :value="course.teaches">
              <FormKit v-for="(item, index) in items" 
                :key="item" 
                :index="index"
                label="Conocimiento o habilidad que enseñas" placeholder="Conocimiento o habilidad que enseñas"
                suffix-icon="trash" 
                @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))" />
              <button type="button" class="button--small--white" @click="() => node.input(value.concat(''))">
                + Añadir
              </button>
              <!-- <pre wrap>{{ value }}</pre> -->
            </FormKit>
          </div>

        </article>

        <!--INCLUDE LIST-->
        <article class="createCourse__list">
          <h3 class="createCourse__list-heading">¿Qué incluye este curso?</h3>
          <div class="formkit-list">
            <FormKit 
              type="list" 
              :value="course.includes" 
              dynamic #default="{ items, node, value }"
              name="includes"
              >
              <FormKit v-for="(item, index) in items" :key="item" :index="index" label="Incluye" placeholder="Incluye..."
                suffix-icon="trash" @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))" />
              <button type="button" class="button--small--white" @click="() => node.input(value.concat(''))">
                + Añadir
              </button>
              <!-- <pre wrap>{{ value }}</pre> -->
            </FormKit>
          </div>
        </article>
        
        <FormKit type="submit" label="Guardar" />
      </FormKit>

      <article class="createCourse__trailer" >
          <h3 class="createCourse__list-heading">Tráiler</h3>
          <div class="form__trailer">
            <video v-if="course.video_id" class="createCourse__trailer-video" controls>
              <source :src="trailerUrl" />
            </video>
            <FormKit
              type="form"
              :actions="false"
              @submit="saveVideo"
            >
              <FormKit type="file" label="Elegir tráiler" accept=".mp4"  
                  validation="required"
                  name="video"/>
            <FormKit type="submit" label="Subir" />
          </FormKit>
          </div>
        </article>
        
        <article class="createCourse__portada" >
          <h3 class="createCourse__list-heading">Imagen de portada</h3>
          <div class="form__trailer">
            <img v-if="course.image" class="createCourse__trailer-video" :src="'data:image/jpeg;base64,'+course.image"/>
            <FormKit
              type="form"
              :actions="false"
              @submit="saveImage"
            >
              <FormKit type="file" label="Elegir imagen" accept=".png,.jpg,.jpeg,.svg"  
                  validation="required"
                  name="image"/>
            <FormKit type="submit" label="Subir" />
          </FormKit>
          </div>
        </article>

    </div>
    

  </section>
</template>

