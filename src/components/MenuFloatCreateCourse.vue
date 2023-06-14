<template>
    <div class="menu-float">
        <div class="inner">
            <div class="menu-float__wrapper">
                
                <div class="menu-float__layout menu-float__layout--secondary">
                    <div class="menu-float__content">
                        <div class="menu-float__progress">
                            <strong>Crea tu curso</strong>
                            <ul class="menu-float__nav">
                                <li><a href="#details" class="menu-float__item">Detalles</a></li>
                                <li><a href="#content" class="menu-float__item">Contenido</a></li>
                                <li><a href="#price" class="menu-float__item">Precio</a></li>
                            </ul>
                        </div>    
                    </div>    
                </div>
                <div class="menu-float__layout menu-float__layout--tertiary">
                    <div class="menu-float__content">
                            <button @click="buy()" class="button button--primary">Guardar</button>
                            <button @click="cart()" class="button button--white">
                                <span class="cart-count">
                                    <IconBag class="svg-icon--black"/>
                                    <span class="js-bubble">
                                        {{ count }}
                                    </span>
                                </span>
                            </button>
                    </div>    
                </div>
               
            </div>
            <a href="#trailer" class="bt-nav button button--white"><IconArrowUp/></a>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import IconArrowUp from './icons/IconArrowUp.vue';
import IconBag from './icons/IconBag.vue';
    export default {
        name: "MenuFloatCreateCourse",
        components: {
            IconArrowUp, IconBag
        },
        computed:{
            ...mapGetters('cart', {
                courses: "cartCourses",
                total: "cartTotal",
                count: "cartCount"
            }),
        },
        methods: {
            buy(){
                this.$emit('buy')
            },
            cart(){
                this.$emit('cart')
            }
        },
    }
</script>