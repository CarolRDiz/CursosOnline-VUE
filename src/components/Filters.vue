<template>
    <section class="main__filters">
        <h3>Filtros</h3>
        <article class="filters__block">
            <h4>Subcategoría</h4>
            <ul class="filters__ul">
                <li v-for="subarea in subareas" class="filters__li">
                <input type="checkbox"
                    :name=subarea
                    @change="checkFilters($event)" 
                    class="filters__checkbox" 
                    :id=subarea>
                    <label class="filters__label" :for=subarea>{{ replaceCharacters(subarea) }}</label>
                </li>
            </ul>
        </article>
        
    </section>
</template>
<script>
    export default{
        name: "Filters",
        emits: [ "check-filter"],
        data(){
            return {
                subareas: ['musical_production', 'instruments', 'music_fundamentals'],
                checkedFiltersValues:[],
            }
        },
        methods: {
            replaceCharacters(string){
                return string.charAt(0).toUpperCase() + string.slice(1).replace('_', ' ');
            },
            checkFilters(event){
                if(event.target.checked === true) {
                    this.checkedFiltersValues.push(event.target.id)
                } else{
                    this.checkedFiltersValues = this.checkedFiltersValues.filter(filter=>filter!=event.target.id)
                }
                this.$emit("check-filter", this.checkedFiltersValues)
            }
        }
    }
</script>