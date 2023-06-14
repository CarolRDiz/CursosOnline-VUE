<script>
import MenuFloatCreateCourse from '../components/MenuFloatCreateCourse.vue';
import IconVideoAdd from "../components/icons/IconVideoAdd.vue"
export default {
  name: "CreateCourse",
  components: {
    MenuFloatCreateCourse, IconVideoAdd
  }
}
</script>

<template>
  <MenuFloatCreateCourse @cart="menuCart" @buy="addMenuCart" />
  <section class="createCourse">
    <div class="inner">
      <h1 class="createCourse__title heading-3">Crea tu propio curso</h1>
      <FormKit type="form" submit-label="Crear un curso" :actions="false">
        <!--GROUP DETAILS-->
        <div class="createCourse__section-heading"><span>01.</span>
          <h2>Detalles del curso</h2>
          <p class="createCourse__description">Rellena los siguientes campos de tu curso, tratando de ser descriptivo.
            Siempre podrás cambiar los datos antes de publicarlo.</p>
        </div>
        <FormKit name="details" type="group">
          <!--VALID-->
          <template #default="{ state: { valid } }">
            <!-- <div v-if="!valid" class="not-valid">
              Your account details are not complete!
            </div>
            <div v-else class="valid">
              It all looks good 👍
            </div> -->
            <!--TITLE-->
            <FormKit type="text" name="title" label="Titulo del curso" validation="required" />
            <!--SUBTITLE-->
            <FormKit type="text" name="subtitle" label="Subtítulo del curso" validation="required" />
            <!--DESCRIPTION-->
            <FormKit type="textarea" label="Descripción" rows="10" placeholder="Escribe la descripción de tu curso." />
            <!--REQUIREMENTS-->
            <FormKit type="textarea" label="Requisitos" rows="10"
              placeholder="Escribe los requisitos para realizar este curso." />
            <!--SKILLS LIST-->

            <article class="createCourse__list">
              <h3 class="createCourse__list-heading">¿Qué enseñas en este curso?</h3>
              <div class="formkit-list">
                <FormKit type="list" :value="['']" dynamic #default="{ items, node, value }">
                  <FormKit v-for="(item, index) in items" :key="item" :index="index"
                    label="Conocimiento o habilidad que enseñas" placeholder="Conocimiento o habilidad que enseñas"
                    suffix-icon="trash" @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))" />
                  <button type="button" class="button--small--white" @click="() => node.input(value.concat(''))">
                    + Añadir otro
                  </button>
                  <!-- <pre wrap>{{ value }}</pre> -->
                </FormKit>
              </div>

            </article>

            <!--INCLUDE LIST-->
            <article class="createCourse__list">
              <h3 class="createCourse__list-heading">¿Qué incluye este curso?</h3>
              <div class="formkit-list">
                <FormKit type="list" :value="['']" dynamic #default="{ items, node, value }">
                  <FormKit v-for="(item, index) in items" :key="item" :index="index" label="Incluye"
                    placeholder="Incluye..." suffix-icon="trash"
                    @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))" />
                  <button type="button" class="button--small--white" @click="() => node.input(value.concat(''))">
                    + Añadir otro
                  </button>
                  <!-- <pre wrap>{{ value }}</pre> -->
                </FormKit>
              </div>
            </article>
            <FormKit type="file" label="Tráiler" accept=".mp4" help="Selecciona un vídeo para el tráiler del curso." prefix-icon="fileVIdeo"/>
          </template>
        </FormKit>
        <FormKit type="submit" />
      </FormKit>
    </div>

  </section>
</template>

