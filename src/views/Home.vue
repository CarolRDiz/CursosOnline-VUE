<template>
  <div class="home">
    <aside class="main__aside">
      <Filters @check-filter="updateDataByFilter" />
    </aside>
    <Courses :courses="courses" />
  </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import Courses from "../components/Courses.vue"
import Filters from "../components/Filters.vue"
export default {
  name: 'Home',
  components: {
    Courses,
    Filters
  },
  data() {
    return {
      loading: false,
      subareas: ["musical_production", "instruments", "music_fundamentals"],
      filters: [],
    }
  },
  computed: {
    courses() {
      const courses = this.$store.getters['courses/courses']
      if(courses){
        if(this.filters.length == 0){
          return courses
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
        }
      } else {
        return ''
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
    }
  }
}
</script>

