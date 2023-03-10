<template>
  <Header @search-filter="this.searchValue = $event" />
  <!--<Courses @delete-course="deleteCourse" v-if="coursesList.length"
    :courses="coursesList" />
    <div v-else>No se han encontrado cursos para esta búsqueda: {{ searchValue }}.</div>
    -->
  <main>
    <RouterView :key="$route.path" />
  </main>
</template>

<script>
import Header from './components/Header.vue'
import { mapState, mapGetters, mapActions } from "vuex"
// import { auth } from "./firebase"

export default {
  name: 'App',
  components: {
    Header,
  },

  data() {
    return {
      courses: [],
      searchValue: ''
    }
  },
  mounted() {
    // const VUE_APP_ROOT_API = process.env.VUE_APP_ROOT_API;
    // console.log(VUE_APP_ROOT_API)
  },
  methods: {
    ...mapActions('user', {
      localStorageUser: "localStorageUser",
    }),

    deleteCourse(id) {
      if (confirm('Are you sure?')) {
        this.courses = this.courses.filter((course) => course.id !== id)
      }
    },
    algo(searchValue) {
      console.log(searchValue)
    },
    async fetchCourses() {
      const res = await fetch('https://api-node.up.railway.app/api/v1/productos')
      const data = await res.json()
      return data
    }
  },

  async created() {
    this.courses = Object.values(await this.fetchCourses())
    console.log(this.courses)
    this.localStorageUser()
  },

  computed: {
    // currentView() {
    //   return routes[this.currentPath.slice(1) || '/'] || NotFound
    // },
    coursesList() {
      // SEARCH FILTER
      if (this.searchValue.trim().length > 0) {
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
<style>
@import "./assets/css/main.css";

</style>
