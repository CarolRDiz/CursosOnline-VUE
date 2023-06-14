<script>
export default {
    name: "CreateCourse"
}
</script>

<template>
  <section class="createCourse__form">
  <FormKit
    type="form" 
    submit-label="Crear un curso" 
    :actions="false">
    <!--GROUP DETAILS-->
    <h2>Detalles del curso</h2>
      <FormKit
        name="details"
        type="group" >
         <!--VALID-->
        <template #default="{ state: { valid } }">
          <div
            v-if="!valid"
            class="not-valid"
          >
            Your account details are not complete!
          </div>
          <div
            v-else
            class="valid"
          >
            It all looks good 👍
        </div>
          <!--TITLE-->
          <FormKit 
              type="text" 
              name="title"
              label="Titulo del curso" 
              validation="required" 
              />
          <!--SUBTITLE-->
          <FormKit 
              type="text"
              name="subtitle"
              label="Subtítulo del curso" 
              validation="required" />
          <!--DESCRIPTION-->
          <FormKit
              type="textarea"
              label="Descripción"
              rows="10"
              placeholder="Escribe la descripción de tu curso."
          />
          <!--REQUIREMENTS-->
          <FormKit
              type="textarea"
              label="Requisitos"
              rows="10"
              placeholder="Escribe los requisitos para realizar este curso."
          />
          <!--SKILLS LIST-->
          <h3>¿Qué enseñas en este curso?</h3>
          <FormKit type="list" :value="['']" dynamic #default="{ items, node, value }">
            <FormKit
              v-for="(item, index) in items"
              :key="item"
              :index="index"
              label="Conocimiento o habilidad que enseñas"
              placeholder="Conocimiento o habilidad que enseñas"
              suffix-icon="trash"
              @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))"
            />
            <button type="button" class="button--small--white" @click="() => node.input(value.concat(''))">
              + Añadir otro
            </button>
            <!-- <pre wrap>{{ value }}</pre> -->
          </FormKit>
           <!--INCLUDE LIST-->
           <h3>¿Qué incluye este curso?</h3>
          <FormKit type="list" :value="['']" dynamic #default="{ items, node, value }">
            <FormKit
              v-for="(item, index) in items"
              :key="item"
              :index="index"
              label="Incluye"
              placeholder="Incluye..."
              suffix-icon="trash"
              @suffix-icon-click="() => node.input(value.filter((_, i) => i !== index))"
            />
            <button type="button" class="button--small--white" @click="() => node.input(value.concat(''))">
              + Añadir otro
            </button>
            <!-- <pre wrap>{{ value }}</pre> -->
          </FormKit>
          <FormKit
            type="file"
            label="Tráiler"
            accept=".mp4"
            help="Selecciona un vídeo para el tráiler del curso."
            multiple="true"
          />
        </template>
  </FormKit>
  <FormKit type="submit"  />
  </FormKit>
</section>
</template>

