<script>
    import Button from './Button.vue'
    import SearchBar from './SearchBar.vue'
    import TheNavigation from './TheNavigation.vue'
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
        <Button text="Add Course" color="yellow"/>
        <Button text="Update Course" color="blue"/>
        <Button text="Delete Course" color="red"/>
        <input v-model="searchValue"
            type="text"
            placeholder="Buscar..."/>
        <!--<SearchBar @search-filter="$emit('search-filter')"/>-->
    </header>
</template>