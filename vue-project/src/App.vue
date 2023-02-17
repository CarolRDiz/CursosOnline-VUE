<template>
  <Header @search-filter="this.searchValue=$event"/>
  <!--<Courses @delete-course="deleteCourse" v-if="coursesList.length"
  :courses="coursesList" />
  <div v-else>No se han encontrado cursos para esta búsqueda: {{ searchValue }}.</div>
  -->
  <main>
      <RouterView :key="$route.path"/>
  </main>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
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
<style>
h1{
  font-size: 40px;
}
*{
  font-size: 18px;
  box-sizing: border-box;
}
main{
  background-color: rgb(221, 221, 221);
  padding: 30px;
}
ul{
  padding: 0;
  list-style-type:none;
}
</style>
