<script>
import Home from './Home.vue'
import About from './About.vue'
import Profile from './Profile.vue'
import NotFound from './NotFound.vue'
import Header from './components/Header.vue'
//ROUTING
const routes = {
  '/': Home,
  '/about': About,
  '/profile': Profile
}

export default {
  name: 'App',
  components: {
    Header,
  },
  data() {
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash
		})
  }
}
//
</script>

<template>
  <Header title="Header"/>
  <h1>App.vue</h1>
  <a href="#/">Home</a> |
  <a href="#/about">About</a> |
  <a href="#/profile">Profile</a> |
  <a href="#/non-existent-path">Broken Link</a>
  <component :is="currentView" />
</template>











<!--
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

-->