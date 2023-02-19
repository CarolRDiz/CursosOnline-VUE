<script>
    import Button from './Button.vue'
    import SearchBar from './SearchBar.vue'
    import TheNavigation from './TheNavigation.vue'
    import { mapState, mapGetters, mapActions } from "vuex"
    export default {
        name: 'Header',
        components:{
            Button,
            SearchBar,
            TheNavigation
        },
        data(){
            return{
                searchValue:''  
            }
        },
        computed: {
            ...mapState('user', {
            user: state => state.userData,
            }),
        },
        watch:{
            searchValue(value){
                console.log(value)
                this.$emit('search-filter', value)
            }
        },
        emits: ['search-filter'],
        
    }
</script>
<template>
    <header>
        <h1>Cursos de música</h1>
        <TheNavigation />
        <SearchBar />
        <RouterLink v-if="user" to="/profile">{{ this.user.name }}</RouterLink>
        <!-- <Button text="Add Course" color="yellow"/>
        <Button text="Update Course" color="blue"/>
        <Button text="Delete Course" color="red"/> -->
        
        <!--<SearchBar @search-filter="$emit('search-filter')"/>-->
    </header>
</template>
<style>
    header{
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: orange;
    }
</style>