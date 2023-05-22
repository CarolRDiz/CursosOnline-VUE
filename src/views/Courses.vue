<template>
  <section class="content">
    <!--<aside class="main__aside">
      <Filters @check-filter="updateDataByFilter" />
    </aside>-->
    <div class="heading-block">
      <h1 class="heading-1">Cursos online</h1>
      <span class="heading-1__sub">Aprende con los mejores profesionales</span>
      <div class="postit"><p>Todos los cursos vienen con certifcados</p></div>
    </div>
    <span v-if="loading">...</span>
    <div v-else class="block">
      
        <ul class="courses">
          <CourseComponent v-if="courses"  v-for="course in courses" :course="course" :key="course.id"  />      
      </ul>
      <Pagination />
      <!--
      <paginate v-if="courses" class="courses" ref="paginator" name="courses" :list="courses" :per="2">
        <CourseComponent v-for="course in paginated('courses')" :course="course" :key="course.id"  />
      </paginate>
      <paginate-links :classes="{ ul: 'pagination', li: 'pagination__item', a: 'pagination__link' }" for="courses" :show-step-links="true" :limit="4" :async="true"></paginate-links>
    -->
  </div>
  </section>
  <LoginAndRegister/>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import CourseComponent from "../components/CourseComponent.vue"
import Pagination from "../components/Pagination.vue"
import Filters from "../components/Filters.vue"
import LoginAndRegister from "../components/LoginAndRegister.vue"
export default {
  name: 'Courses',
  components: {
    CourseComponent,
    Filters,
    Pagination,
    LoginAndRegister
  },
  data() {
    return {
      loading: false,
      subareas: ["musical_production", "instruments", "music_fundamentals"],
      filters: [],
    }
  },
  computed: {/*
    ...mapState('courses', {
      courses: state => state.items
    }),
    */
    courses() {
      const courses = this.$store.getters['courses/courses']
      if(courses){
        if(this.filters.length == 0){
          return courses
          //this.courses = courses
        }
        else{
          const filteredCourses = []
          courses.forEach( course => {
            this.subareas.forEach(subarea => {
              if(this.filters.includes(subarea) && course.subarea == subarea){
                if(!filteredCourses.includes(course)){
                  filteredCourses.push(course)
                }
              }
            })
          })
          return filteredCourses
          //this.courses = filteredCourses
        }
      } else {
        return ''
        //this.courses = []
      }
    },
    ...mapGetters('courses', {
      subtitleCourses: "subtitledCourses",
    })
  },

  async created() {
    this.loading = true;
    await this.fetchCourses()
      .then(() => this.loading = false);
  },

  methods: {
    ...mapActions('courses', {
      fetchCourses: "fetchCourses",
    }),
    updateDataByFilter(updatedOptions) {
      this.filters = updatedOptions
      console.log(this.filters)
    },
  }
}
</script>

