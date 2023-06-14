<script>

export default {
    
}
</script>
<template>
        <span v-if="loading">...</span>
        <section class="courses" v-else>

            <article v-if="courses" v-for="course in courses" :key="course.id" class="courses__course">
                <RouterLink class="course__routerLink" :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                    <img :src=fetchImg(course.image) alt="" class="course__img">
                </RouterLink>
                <section class="course__content">
                    <RouterLink class="course__link" :to="{ name: 'course.show', params: { id: course.id, title: course.title } }">
                        <h3>{{ course.title }}</h3>
                    </RouterLink>
                    <span>Un curso de {{ course.author }}</span>
                    <span>Duración: {{ course.duration }}</span>

                    <span class="course__purchased" v-if="checkCoursePurchased(course.id)">Comprado</span>
                    <button v-if="!checkCourseInCart(course.id)&&!checkCoursePurchased(course.id)" @click="addCourseToCart(course), toggleModal()" 
                        class="button button--large">
                        <img class="icon" src="../assets/img/anadir-a-la-cesta.png" alt="">
                        Añadir al carrito 
                        <span>{{ course.price }}€</span>
                    </button>
                    <button v-if="checkCourseInCart(course.id)&&!checkCoursePurchased(course.id)" @click="eliminateCourseInCart(course.id)"
                        class="button button--large">
                        <img  class="item__delete icon click" src="../assets/img/x-mark.png"
                        alt="">  Quitar del carrito
                    </button>
                </section>
            </article>
            
        </section>
        <Modal @close="toggleModal" :modalActive="modalActive">
            <div class="modal--addToCart">
                <h1>Curso añadido a la cesta</h1>
                <img class="icon--large" src="../assets/img/anadir-a-la-cesta.png" alt="">
            </div>
        </Modal>
</template>