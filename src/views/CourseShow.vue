<script>

import GoBack from '../components/GoBack.vue'
import { mapState, mapGetters, mapActions } from "vuex"
import LessonItem from '../components/LessonItem.vue'
import CardProject from '../components/CardProject.vue'
import Carousel from '../components/Carousel.vue'
import CarouselSlide from '../components/CarouselSlide.vue'
import Modal from "../components/Modal.vue"
import ModalLoginRegister from '../components/ModalLoginRegister.vue'
import Comment from '../components/Comment.vue'
import MenuFloat from '../components/MenuFloat.vue'
import IconLike from '../components/icons/IconLike.vue'
import IconUser from '../components/icons/IconUser.vue'
import IconComment from '../components/icons/IconComment.vue'
import IconDuration from '../components/icons/IconDuration.vue'
import IconLanguage from '../components/icons/IconLanguage.vue'
import IconSubtitle from '../components/icons/IconSubtitle.vue'
import IconTickCircle from '../components/icons/IconTickCircle.vue'
import ModalCartComponent from '../components/ModalCartComponent.vue'

export default {
    name: "Course",
    components: {
         GoBack, Modal, LessonItem, Carousel, CarouselSlide, CardProject, ModalLoginRegister, Comment, MenuFloat, IconDuration, IconLanguage, IconSubtitle, IconUser, IconComment, IconLike, IconTickCircle, ModalCartComponent
    },
    data() {
        return {
            //course: null,
            modalActive: false,
            modalCartActive: false,
            students: 870,
            number_comments: 200,
            positive_assessment: 98,
            comments: [
                {
                    userimage: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg",
                    username: "Pedro",
                    fecha: "13/2/10",
                    argument: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
                    liked: true
                },
                {
                    userimage: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg",
                    username: "Adfjsk feiiewie spsp",
                    fecha: "13/2/10",
                    argument: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
                    liked: false
                },
                {
                    userimage: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg",
                    username: "Opee reor",
                    fecha: "13/2/10",
                    argument: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    liked: false
                },
                {
                    userimage: "https://cdn-images.livecareer.es/pages/foto_cv_lc_es_7.jpg",
                    username: "Liodskogddaiuew",
                    fecha: "13/2/10",
                    argument: "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis. Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
                    liked: true
                },
            ],

            //FETCH DE LOS TRES PRIMEROS PROJECTS
            projects: [
                {
                    img: "https://www.nicepng.com/png/full/126-1265077_cuadrado-verde-png-cuadrado-de-color-verde.png",
                    title: "Adipiscing elit",
                },
                {
                    img: "https://previews.123rf.com/images/amitspro/amitspro1706/amitspro170600016/80099376-mandala-de-flor-abstracta-patr%C3%B3n-decorativo-fondo-azul-imagen-cuadrada-imagen-de-ilusi%C3%B3n-patr%C3%B3n.jpg",
                    title: "Asfdodn jjdfhs dfssdf sfdfsd",
                },
                {
                    img: "https://images.vexels.com/media/users/3/287396/isolated/preview/9d8ad95d83e7e847fe2b4d7efd81985b-paisaje-de-duotono-cuadrado-de-monta-as.png",
                    title: "SF DSF EFEIJBFE ERETRET",
                }
            ],
            lessons: [
                {
                    title: "TitleLesson",
                    duration: "08:10",
                    chapters: [
                        {
                            title: "TitleLesson1Content1",
                            duration: "02:20",
                            locked: false
                        },
                        {
                            title: "TitleLesson1Content2",
                            duration: "06:20",
                            locked: true
                        }
                    ]
                },
                {
                    title: "TitleLesson2",
                    duration: "08:10",
                    chapters: [
                        {
                            title: "TitleLesson2Content1",
                            duration: "03:20",
                            locked: true
                        },
                        {
                            title: "TitleLesson2Content1",
                            duration: "05:20",
                            locked: false
                        }
                    ]
                }
            ]
        }
    },
    computed: {
        ...mapState({
            fetchImageURL: state => state.fetchImageURL
        }),
        ...mapState('cart', {
            cart: state => state.items
        }),
        ...mapState('courses', {
            course: state => state.course
        }),
    },
    
    async created() {
        await this.fetchCourse(this.$route.params.title)
        //await this.fetchUser();
        //await this.initData()
        this.$watch(() => this.$route.params, this.fetchCourse(this.$route.params.title))
    },
    methods: {
        checkCourseInCart(courseID) {
            return this.cart.includes(courseID)
        },
        menuCart() {
            document.body.classList.add("no-scroll");
            this.modalCartActive=true; 
            
        },
        closeCart(){
            document.body.classList.remove("no-scroll");
            this.modalCartActive=false; 
        },
        addMenuCart(){
            if (!this.checkCourseInCart(this.course.id)) {
                this.addCourseToCart(this.course.id)
                console.log("Curso añadido al carrito")
            }
            else{
                console.log("Curso no añadido al carrito")
            }
            document.body.classList.add("no-scroll");
            this.modalCartActive=true;  
        },
        ...mapActions('courses', {
            fetchCourse: "fetchCourse"
        }),
        fetchImg(image) {
            return this.fetchImageURL + image
        },
        ...mapActions('cart', {
            addCourseToCart: "addCourseToCart",
            eliminateCourseInCart: "eliminateCourseInCart"
        }),
    },
}
</script>
<template>
    
    <div>
        
        <MenuFloat @cart="menuCart" @buy="addMenuCart"/>
        <ModalCartComponent :modalCartActive="modalCartActive" @close-cart="this.closeCart()"/>
        <ModalLoginRegister />
        
        <GoBack />
        <section v-if="course" class="course">
            <div class="course__header" id="trailer">
                <div class="course__left">
                    <div class="course__top">
                        <h1 class="heading-4">{{ course.title }}</h1>
                        <div class="course__by">
                            <small>Un curso de </small>
                            <strong><a class="showCourse__author" href="#">{{ course.author }}</a></strong>
                        </div>
                        <ul class="course__features">
                            <li>
                                <IconLanguage class="svg-icon svg-icon--white" />
                                <strong>Audio: </strong>
                                <span>{{ course.language }}</span>
                            </li>
                            <li>
                                <IconDuration class="svg-icon svg-icon--white" />
                                <strong>Duración: </strong>
                                <span>{{ course.duration }} hora</span>
                            </li>
                            <li v-if="course.subtitle">
                                <IconSubtitle class="svg-icon svg-icon--white" />
                                Subtítulos:
                                {{ course.subtitle.join(', ') }}
                            </li>
                            <li v-else>
                                <IconSubtitle class="svg-icon svg-icon--white" />
                                Sin subtítulos
                            </li>
                            <li>
                                <svg class="svg-icon svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z">
                                    </path>
                                </svg>
                                <strong>Nivel: </strong><span>{{ course.level }}</span>
                            </li>
                        </ul>
                        <button class="button button--secondary--large" @click="addMenuCart()">
                            Comprar
                        </button>
                    </div>


                </div>
                <div class="course__right">
                    <img  :src="fetchImg(course.image)" alt="" class="course__img" />
                </div>
            </div>
            <div class="block">
                <h2 class="heading-5 course__subtitle">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                    rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                    explicabo.
                </h2>
                <div class="box-table" id="details">
                    <table class="tb-stats" align="center" width="100%">
                        <tbody>
                            <tr>
                                <th align="left">Category</th>
                                <th align="left">Course format</th>
                                <th align="left">Language</th>
                                <th align="left">Duration</th>
                                <th align="left">Level</th>
                            </tr>
                            <tr>
                                <td>
                                    <strong class="text-sd">UX Design, UI Design
                                    </strong>
                                </td>
                                <td>
                                    <strong class="text-sd">Online</strong>
                                </td>
                                <td>
                                    <strong class="text-sd">English with Subt.</strong>
                                </td>
                                <td>
                                    <strong class="text-sd">20h 9 mins</strong>
                                </td>
                                <td>
                                    <strong class="text-sd">Beginners and Intermediate</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="course__entry">
                    <div class="entry__divided">
                        <div>
                            <p><strong>Descripción</strong></p>

                            <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis. Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam, quis.

                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                                aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                                voluptatem sequi nesciunt.Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.
                            </p>
                        </div>
                        <div>
                            <p><strong>Requisitos</strong></p>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                                architecto beatae vitae dicta sunt explicabo.</p>
                        </div>
                    </div>
                    <div>
                        <p><strong>Aprenderás</strong></p>
                        <ul>
                            <li>
                                <IconTickCircle class="svg-icon--white" />
                                Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p><strong>El curso incluye</strong></p>
                        <ul>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M7.197,16.963H7.195c-0.204,0-0.399-0.083-0.544-0.227l-6.039-6.082c-0.3-0.302-0.297-0.788,0.003-1.087
							C0.919,9.266,1.404,9.269,1.702,9.57l5.495,5.536L18.221,4.083c0.301-0.301,0.787-0.301,1.087,0c0.301,0.3,0.301,0.787,0,1.087
							L7.741,16.738C7.596,16.882,7.401,16.963,7.197,16.963z"></path>
                                </svg>Adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="block--small" id="lessons">
                    <div class="c-heading">
                        <h2 class="text-default">Módulos</h2>
                        <span class="heading-5">Qué aprenderás en este curso</span>
                    </div>
                    <ul class="lessons-list lessons-list--s1">
                        <!--Heading-->
                        <li class="lessons-list__item">
                            <div class="lessons-list__row lessons-list__row--head">
                                <div class="lessons-list__left">
                                    <div class="lessons-list__heading">Lecciones</div>
                                </div>
                                <div class="lessons-list__right">
                                    <div class="lessons-list__col lessons-list__heading">Chapters</div>
                                    <div class="lessons-list__col lessons-list__heading">Duration</div>
                                    <div class="lessons-list__col lessons-list__heading"></div>
                                </div>
                            </div>
                        </li>
                        <LessonItem v-for="(lesson, i) in lessons" :lesson="lesson" :index="i" :key="i" />
                    </ul>
                </div>
                <div class="block" id="teacher">
                    <div class="c-heading text_center">
                        <h2 class="text-default">Conoce al profesor</h2>
                        <h3 class="heading-1 text-uppercase">LOREM IPSUM</h3>
                        <div class="c-heading__bottom">
                            <span class="c-heading__short-desc">Sed ut perspiciatis unde omnis iste natus, error sit
                                voluptatem.</span>
                        </div>
                    </div>
                    <div class="course__card-projects">
                        <CardProject v-for="(project, index) in projects" :key="index" :project="project"></CardProject>
                    </div>
                </div>
                <div class="block" id="comments">
                    <div class="c-heading">
                        <h2 class="text-default">Comentarios</h2>
                    </div>
                    <div class="course__stats">
                        <div class="course__stat-item">
                            <IconUser class="svg-icon--white" />
                            <span>{{ students }}</span>
                            <span class="stat-item__legend">Estudiantes</span>
                        </div>
                        <div class="course__stat">
                            <IconComment class="svg-icon--white" />
                            <span>{{ number_comments }}</span>
                            <span class="stat-item__legend">Opiniones</span>
                        </div>
                        <div class="course__stat">
                            <IconLike class="svg-icon--white" />
                            <span>{{ positive_assessment }}%</span>
                            <span class="stat-item__legend">Valoraciones positivas</span>
                        </div>


                    </div>

                    <div class="course__comments">
                        <Comment v-for="(comment, index) in comments" :key="index" :comment="comment"></Comment>
                    </div>
                </div>
            </div>

            <!--
<article class="showCourse__content">
                <button v-if="!checkCourseInCart(course.id)" @click="addCourseToCart(course), toggleModal()"
                    class="button--large">
                    <img class="icon" src="../assets/img/anadir-a-la-cesta.png" alt="">
                    Añadir al carrito
                    <span>{{ course.price }}€</span>
                </button>
                <button v-if="checkCourseInCart(course.id)" @click="eliminateCourseInCart(course.id)" class="button--large">
                    <img class="item__delete icon click" src="../assets/img/x-mark.png" alt=""> Quitar del carrito
                </button>
            </article>
            -->

        </section>
        <Modal @close="toggleModal" :modalActive="modalActive">
            <div class="modal--addToCart">
                <h1>Curso añadido a la cesta</h1>
                <img class="icon--large" src="../assets/img/verificar.png" alt="">
            </div>
        </Modal>
        
    </div>
</template>
