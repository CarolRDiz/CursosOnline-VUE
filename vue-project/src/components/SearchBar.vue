<template>
    <input v-model="searchValue"
            type="text"
            placeholder="Buscar..."/>
</template>
<script>
    export default {
        name: 'SearchBar',
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