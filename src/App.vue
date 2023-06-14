<template>
  <Header  @search-filter="this.searchValue = $event" />

  <main >
    <RouterView :key="$route.path"/>
  </main>
</template>

<script>

import Header from './components/Header.vue'
import { mapState, mapGetters, mapActions } from "vuex"


export default {
  name: 'App',
  components: {
    Header
  },

  data() {
    return {
      courses: [],
      searchValue: '',
      modalCartActive: false,
    }
  },
  methods: {
    // ...mapActions('user', {
    //   localStorageUser: "localStorageUser",
    // }),

    deleteCourse(id) {
      if (confirm('Are you sure?')) {
        this.courses = this.courses.filter((course) => course.id !== id)
      }
    },
    algo(searchValue) {
      console.log(searchValue)
    },
    /*
    async fetchCourses() {
      const res = await fetch('https://api-node.up.railway.app/api/v1/productos')
      const data = await res.json()
      return data
    }
    */
  },

  async created() {
    /*this.courses = Object.values(await this.fetchCourses())*/
    console.log(this.courses)
    //this.localStorageUser()
  },

  computed: {
    // coursesList() {
    //   // SEARCH FILTER
    //   if (this.searchValue.trim().length > 0) {
    //     return this.courses.filter((course) => course.title.toLowerCase().includes(this.searchValue.trim().toLowerCase()))
    //   }
    //   return this.courses
    // },
  },
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
