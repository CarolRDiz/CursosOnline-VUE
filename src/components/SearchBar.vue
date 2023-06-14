<template>
    <!--
       <div class="header-search" data-search-target="search">
        <div class="header-search__overlay" data-search-target="overlay" data-action="click->search#close"></div>
        <div class="search-form">
            <div class="search-form__field">
                <button type="submit" class="search-form__button" aria-label="Search">
                    <svg class="ico-svg" viewbox="0 0 20 20" width="20">
                        <use xlink:href="https://www.awwwards.com/assets/redesign/images/sprite-icons.svg#lupe"></use>
                    </svg>
                </button>
                <input type="text" value="" placeholder="Search in Inspiration" class="search-form__input js-search-input"
                    data-action="focus->search#show keyup->search#search" data-search-target="input">
            </div>
            <div class="search-form__in hidden-sm">
                <div class="search-form__separator">IN</div>
                <div class="search-dropdown" data-controller="search-dropdown"
                    data-action="click->search-dropdown#showSelector">
                    <svg class="ico-svg search-dropdown__arrow" viewbox="0 0 20 20" width="12">
                        <use xlink:href="https://www.awwwards.com/assets/redesign/images/sprite-icons.svg#arrow-dd"></use>
                    </svg>
                    <div class="search-dropdown__selected">Inspiration
                    </div>
                    <div class="search-dropdown__options">
                        <a class="search-dropdown__option " data-option="inspiration"
                            data-action="click->search-dropdown#selectItem" href="/inspiration_search/">Inspiration</a>
                        <a class="search-dropdown__option is-child" data-option="submission"
                            data-action="click->search-dropdown#selectItem" href="/websites/">Websites</a>
                        <a class="search-dropdown__option is-child" data-option="element"
                            data-action="click->search-dropdown#selectItem" href="/elements/">Elements</a>
                        <a class="search-dropdown__option is-child" data-option="collection"
                            data-action="click->search-dropdown#selectItem" href="/collections/search/">Collections</a>
                        <a class="search-dropdown__option " data-option="post"
                            data-action="click->search-dropdown#selectItem" href="/blog/">Blog</a>
                        <a class="search-dropdown__option " data-option="course"
                            data-action="click->search-dropdown#selectItem" href="/academy/">Courses</a>
                        <a class="search-dropdown__option " data-option="user"
                            data-action="click->search-dropdown#selectItem" href="/directory/">Directory</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    -->

    <div class="searchBar">
        <IconSearch class="svg-icon--white"/>
        <input class="searchBar__input" v-model="searchValue" type="text" placeholder="Buscar..." />
        
        
        <!-- <button class="searchBar-dropdown">
            <span class="searchBar-dropdown__selected search-dropdown--is-active">
                <RouterLink to="/courses">Cursos</RouterLink>
            </span>
            <IconArrowDown class="svg-icon--white"/>
            <ul class="searchBar-dropdown__options">
                <li>
                    <RouterLink to="/courses">Cursos</RouterLink>
                </li>
                <li>
                    <RouterLink to="/projects">Proyectos</RouterLink>
                </li>
                <li>
                    <RouterLink to="/creatives">Creativos</RouterLink>
                </li>
            </ul>
        </button> -->
        <Dropdown
            :title="title"
            :items="services"
            @setSelectedOption="setNewSelectedOption($event)"
        ></Dropdown>
    </div>
    
</template>
<script>
import IconSearch from './icons/IconSearch.vue'
import IconArrowDown from './icons/IconArrowDown.vue'
import Dropdown from './Dropdown.vue'

export default {
    name: 'SearchBar',
    components: {
        IconSearch, IconArrowDown, Dropdown
    },
    data() {
        return {
            services: [
                {
                    title: "All Courses",
                    link: "/courses",
                },
                {
                    title: "Users",
                    link: "#",
                }
            ],
            title: "Courses",
            searchValue: '',
            config: {
                options: [
                {
                    value: "option 1"
                },
                {
                    value: "option 2"
                },
                {
                    value: "option 3"
                }
                ],
                placeholder: "Placeholder",
                backgroundColor: "#cde4f5",
                textColor: "black",
                borderRadius: "1.5em",
                border: "1px solid gray",
                width: 180
            }
        }
    },
    watch: {
        searchValue(value) {
            console.log(value)
            this.$emit('search-filter', value)
        }
    },
    methods: {
        setNewSelectedOption(selectedOption) {
            console.log("setNewSelectedOption")
            console.log(selectedOption.title)
            this.title = selectedOption.title;
        }
    },
    emits: ['search-filter'],
}
</script>