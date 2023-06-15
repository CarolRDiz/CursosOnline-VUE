<script>

import { mapState, mapGetters, mapActions } from "vuex"
import MenuFloatCreateCourse from '../components/MenuFloatCreateCourse.vue';
import IconVideoAdd from "../components/icons/IconVideoAdd.vue"
export default {
  name: "CreateCourse",
  components: {
    MenuFloatCreateCourse, IconVideoAdd
  },
  computed: {
    ...mapGetters('courses', {
      course: "course",
    }),
  },
  async created() {
    await this.getCourse(this.$route.params.id)
    //await this.fetchUser();
    //await this.initData()
    this.$watch(() => this.$route.params, this.getCourse(this.$route.params.id))
  },
  methods: {
    ...mapActions('courses', {
      getCourse: "getCourse"
    }),
    saveDetails(details){
      console.log("SAVE DETAILS")
      console.log(details)
    }
  }
}
</script>

<template>
  <MenuFloatCreateCourse @cart="menuCart" @buy="addMenuCart" />
  <section class="createCourse">
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
        <FormKit type="textarea" label="Descripción" rows="10" placeholder="Escribe la descripción de tu curso."
          :value="course.dscription" />
        <!--REQUIREMENTS-->
        <FormKit type="textarea" label="Requisitos" rows="10"
          placeholder="Escribe los requisitos para realizar este curso." :value="course.requirements" />
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
    </div>
    <FormKit type="file" label="Tráiler" accept=".mp4" help="Selecciona un vídeo para el tráiler del curso."
      prefix-icon="fileVIdeo" />

  </section>
</template>

