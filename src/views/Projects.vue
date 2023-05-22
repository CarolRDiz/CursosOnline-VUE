<template>
  <section class="content">
    <!--<aside class="main__aside">
      <Filters @check-filter="updateDataByFilter" />
    </aside>-->
    <div class="heading-block">
      <h1 class="heading-1">Projectos</h1>
      <span class="heading-1__sub">Crea y comparte</span>
    </div>
  </section>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
export default {
  name: 'Projects',
  components: {
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
    },
  }
}
</script>

