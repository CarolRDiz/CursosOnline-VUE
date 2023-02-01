<template>
  <Header @search-filter="this.searchValue=$event"/>
  <!--<Courses @delete-course="deleteCourse" v-if="coursesList.length"
  :courses="coursesList" />
  <div v-else>No se han encontrado cursos para esta búsqueda: {{ searchValue }}.</div>
  -->
  <div>
      <RouterView />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Courses from './components/Courses.vue'

export default {
  name: 'App',
  components: {
    Header,
    Courses,
  },

  data() {
    return {
      courses:[],
      searchValue:''
    }
  },

  methods:{
    deleteCourse(id){
      if(confirm('Are you sure?')){
        this.courses = this.courses.filter((course) => course.id !== id)
      }
    },
    algo(searchValue){
      console.log(searchValue)
    },
    async fetchCourses(){
      const res = await fetch('http://localhost:3001/api/v1/productos')
      const data = await res.json()
      return data
    }
  },

  async created(){
    this.courses = Object.values(await this.fetchCourses())
    console.log(this.courses)
  },

  computed: {
    // currentView() {
    //   return routes[this.currentPath.slice(1) || '/'] || NotFound
    // },
    coursesList (){
      // SEARCH FILTER
      if(this.searchValue.trim().length > 0){
        return this.courses.filter((course) => course.title.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
      }
      return this.courses
    },
  },

  // mounted() {
  //   window.addEventListener('hashchange', () => {
	// 	  this.currentPath = window.location.hash
	// 	})
  // }
}
</script>













<!--
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

-->