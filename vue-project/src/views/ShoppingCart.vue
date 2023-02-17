
<script>
    import {mapState, mapGetters, mapActions} from "vuex"
    export default {
        name: "ShoppingCart",

        computed: {
            ...mapState('cart',{
                checkoutStatus: state => state.checkoutStatus
            }),
            // ...mapState('courses',{
            // }),
            ...mapGetters ('cart',{
                courses: "cartCourses",
                total: "cartTotal",
            }),
            // courses () {
            //     return this.$store.getters.cartCourses
            // },
            // total () {
            //     return this.$store.getters.cartTotal
            // }
        },
        methods: {
            ...mapActions('cart',["checkout"])
        }
    }
</script>
<template>
    <div>
        <h1>Carrito</h1>
        <ul class="cart__list">
            <li v-for="course in courses" class="cart__item">
                <h3>{{ course.title }}</h3>
                <span class="item__price">{{ course.price }}€</span>
            </li>
        </ul>
        <p>Total: {{ total }}</p>
        <button @click="checkout">Checkout</button>
        <p v-if="checkoutStatus">{{ checkoutStatus }}</p>
    </div>
</template>
<style>

.cart__list{
    background-color: white;
    display: flex;
    flex-direction: column;
    list-style-type:none;
    row-gap: 10px;
    padding:0;
}
.cart__item{
    padding: 10px;
    display: flex;
    align-items: center;
    column-gap: 10px;
}
.cart__item:hover{
    background-color: rgb(217, 217, 217);
}
.item__price{
    color:red;
}
</style>