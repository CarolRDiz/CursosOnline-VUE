<script>
import Logo from './Logo.vue'
import SearchBar from './SearchBar.vue'
import TheNavigation from './TheNavigation.vue'
import { mapState, mapGetters, mapActions } from "vuex"
export default {
    name: 'Header',
    components: {
        SearchBar,
        TheNavigation,
        Logo,
    },
    data() {
        return {
            //MODAL LOGIN REGISTER
            modalActive: false,
            isLogin: false,
            searchValue: ''
        }
    },
    computed: {
        ...mapState('user', {
            user: state => state.userData,
        }),
    },
    watch: {
        searchValue(value) {
            console.log(value)
            this.$emit('search-filter', value)
        }
    },
    emits: ['search-filter'],
    methods: {
        // ...mapActions('user', {
        //     localStorageUser: "localStorageUser",
        // }),
        
    },
    created() {
        //this.localStorageUser()
    },

}
</script>
<template>
    
    <header>
        <span class="header__logo"><Logo class="logo"/></span>
        <SearchBar />
        <TheNavigation />
        <RouterLink v-if="user" to="/profile">{{ this.user.name }}</RouterLink>
        <!--<SearchBar @search-filter="$emit('search-filter')"/>-->
    </header>
</template>
