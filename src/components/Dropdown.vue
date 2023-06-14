<template>
    <div class="menu-item" :class="{ open: isOpen }" @click="isOpen = !isOpen">
        <RouterLink class="menu-item--selected" to="#">{{ title }}</RouterLink>
        <IconArrowUp v-if="isOpen" class="svg-icon--black" />
        <IconArrowDown v-else class="svg-icon--white" />
        <transition name="fade" appear>
            <div class="sub-menu" v-if="isOpen">
                <div v-for="(item, i) in items" :key="i" class="sub-item" @click="setCurrentSelectedOption(item)">
                    <RouterLink   :to="item.link">{{ item.title }}</RouterLink>
                </div>
            </div>
        </transition>
        
    </div>
    
  </template>
  <script>
  import IconArrowDown from './icons/IconArrowDown.vue';
  import IconArrowUp from './icons/IconArrowUp.vue';
  export default {
    name: "Dropdown",
    components: {
        IconArrowDown, IconArrowUp
    },
    props:["title", "items"],
    data(){
        return {
            isOpen: false,
        }
    },
    methods: {
        setCurrentSelectedOption(option) {
         this.$emit("setSelectedOption", option);
        },
    }
  }
  </script>
  