<template>
    <div class="menu-float">
        <div class="inner">
            <!-- <div class="menu-float__wrapper">
                
                <div class="menu-float__layout menu-float__layout--secondary">
                    <div class="menu-float__content">
                        <div class="menu-float__progress">
                            <strong>Curso</strong>
                            <ul class="menu-float__nav">
                                <li><a href="#trailer" class="menu-float__item">Tráiler</a></li>
                                <li><a href="#details" class="menu-float__item">Detalles</a></li>
                                <li><a href="#lessons" class="menu-float__item">Lecciones</a></li>
                                <li><a href="#teacher" class="menu-float__item">Profesor</a></li>
                            </ul>
                        </div>    
                    </div>    
                </div>
                <div class="menu-float__layout menu-float__layout--tertiary">
                    <div class="menu-float__content">
                            <button @click="buy()" class="button button--primary">BUY</button>
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
               
            </div> -->
            <a href="#trailer" class="bt-nav button button--white"><IconArrowUp/></a>
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import IconArrowUp from './icons/IconArrowUp.vue';
import IconBag from './icons/IconBag.vue';
    export default {
        name: "MenuFloat",
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