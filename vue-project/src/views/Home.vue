<template>
  <div>
     <Courses />
  </div>
</template>
<script>
import {mapState, mapGetters, mapActions} from "vuex"
import Courses from "../components/Courses.vue"
export default {
  name: 'Home',

  components:{
    Courses
  },
}
</script>

