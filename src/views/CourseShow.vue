<script>

import GoBack from '../components/GoBack.vue'
import { mapState, mapGetters, mapActions } from "vuex"
import LessonItem from '../components/LessonItem.vue'
import CardProject from '../components/CardProject.vue'
import Carousel from '../components/Carousel.vue'
import CarouselSlide from '../components/CarouselSlide.vue'
import Modal from "../components/Modal.vue"
import LoginAndRegister from '../components/LoginAndRegister.vue'
import Comment from '../components/Comment.vue'
export default {
    name: "Course",
    components: {
        GoBack, Modal, LessonItem, Carousel, CarouselSlide, CardProject, LoginAndRegister, Comment
    },
    data() {
        return {
            //course: null,
            modalActive: false,
            students: 870,
            number_comments: 200,
            positive_assessment: 98,
            comments:[
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
    //await this.initData()
    this.$watch(() => this.$route.params, this.fetchCourse(this.$route.params.title))
},
methods: {
        ...mapActions('courses', {
    fetchCourse: "fetchCourse"
}),
        /*async initData() {
            const res = await fetch(`https://api-node.up.railway.app/api/v1/productos/${this.$route.params.title}`)
            const data = await res.json()
            this.course = data
        },*/
        fetchImg(image) {
        return this.fetchImageURL + image
    },
        ...mapActions('cart', {
        addCourseToCart: "addCourseToCart",
        eliminateCourseInCart: "eliminateCourseInCart"
    }),
        toggleModal() {
        this.modalActive = !this.modalActive;
    },
    checkCourseInCart(courseID) {
        return this.cart.includes(courseID)
    }
},
}
</script>
<template>
    <div>
        <GoBack />
        <section v-if="course" class="course">
            <div class="course__header">
                <div class="course__left">
                    <div class="course__top">
                        <h1 class="heading-4">{{ course.title }}</h1>
                        <div class="course__by">
                            <small>Un curso de </small>
                            <strong><a class="showCourse__author" href="#">{{ course.author }}</a></strong>
                        </div>
                    </div>
                    <div class="course__botton">
                        <ul class="course__features">
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M17.659,3.681H8.468c-0.211,0-0.383,0.172-0.383,0.383v2.681H2.341c-0.21,0-0.383,0.172-0.383,0.383v6.126c0,0.211,0.172,0.383,0.383,0.383h1.532v2.298c0,0.566,0.554,0.368,0.653,0.27l2.569-2.567h4.437c0.21,0,0.383-0.172,0.383-0.383v-2.681h1.013l2.546,2.567c0.242,0.249,0.652,0.065,0.652-0.27v-2.298h1.533c0.211,0,0.383-0.172,0.383-0.382V4.063C18.042,3.853,17.87,3.681,17.659,3.681 M11.148,12.87H6.937c-0.102,0-0.199,0.04-0.27,0.113l-2.028,2.025v-1.756c0-0.211-0.172-0.383-0.383-0.383H2.724V7.51h5.361v2.68c0,0.21,0.172,0.382,0.383,0.382h2.68V12.87z M17.276,9.807h-1.533c-0.211,0-0.383,0.172-0.383,0.383v1.755L13.356,9.92c-0.07-0.073-0.169-0.113-0.27-0.113H8.851v-5.36h8.425V9.807z">
                                    </path>
                                </svg>
                                <strong>Audio: </strong>
                                <span>{{ course.language }}</span>
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M10.25,2.375c-4.212,0-7.625,3.413-7.625,7.625s3.413,7.625,7.625,7.625s7.625-3.413,7.625-7.625S14.462,2.375,10.25,2.375M10.651,16.811v-0.403c0-0.221-0.181-0.401-0.401-0.401s-0.401,0.181-0.401,0.401v0.403c-3.443-0.201-6.208-2.966-6.409-6.409h0.404c0.22,0,0.401-0.181,0.401-0.401S4.063,9.599,3.843,9.599H3.439C3.64,6.155,6.405,3.391,9.849,3.19v0.403c0,0.22,0.181,0.401,0.401,0.401s0.401-0.181,0.401-0.401V3.19c3.443,0.201,6.208,2.965,6.409,6.409h-0.404c-0.22,0-0.4,0.181-0.4,0.401s0.181,0.401,0.4,0.401h0.404C16.859,13.845,14.095,16.609,10.651,16.811 M12.662,12.412c-0.156,0.156-0.409,0.159-0.568,0l-2.127-2.129C9.986,10.302,9.849,10.192,9.849,10V5.184c0-0.221,0.181-0.401,0.401-0.401s0.401,0.181,0.401,0.401v4.651l2.011,2.008C12.818,12.001,12.818,12.256,12.662,12.412">
                                    </path>
                                </svg>
                                <strong>Duración: </strong>
                                <span>{{ course.duration }} hora</span>
                            </li>
                            <li v-if="course.subtitle">
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z">
                                    </path>
                                </svg>
                                Subtítulos:
                                {{ course.subtitle.join(', ') }}
                            </li>
                            <li v-else>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M14.999,8.543c0,0.229-0.188,0.417-0.416,0.417H5.417C5.187,8.959,5,8.772,5,8.543s0.188-0.417,0.417-0.417h9.167C14.812,8.126,14.999,8.314,14.999,8.543 M12.037,10.213H5.417C5.187,10.213,5,10.4,5,10.63c0,0.229,0.188,0.416,0.417,0.416h6.621c0.229,0,0.416-0.188,0.416-0.416C12.453,10.4,12.266,10.213,12.037,10.213 M14.583,6.046H5.417C5.187,6.046,5,6.233,5,6.463c0,0.229,0.188,0.417,0.417,0.417h9.167c0.229,0,0.416-0.188,0.416-0.417C14.999,6.233,14.812,6.046,14.583,6.046 M17.916,3.542v10c0,0.229-0.188,0.417-0.417,0.417H9.373l-2.829,2.796c-0.117,0.116-0.71,0.297-0.71-0.296v-2.5H2.5c-0.229,0-0.417-0.188-0.417-0.417v-10c0-0.229,0.188-0.417,0.417-0.417h15C17.729,3.126,17.916,3.313,17.916,3.542 M17.083,3.959H2.917v9.167H6.25c0.229,0,0.417,0.187,0.417,0.416v1.919l2.242-2.215c0.079-0.077,0.184-0.12,0.294-0.12h7.881V3.959z">
                                    </path>
                                </svg>
                                Sin subtítulos
                            </li>
                            <li>
                                <svg class="svg-icon" viewBox="0 0 20 20">
                                    <path
                                        d="M11.709,7.438H8.292c-0.234,0-0.427,0.192-0.427,0.427v8.542c0,0.234,0.192,0.427,0.427,0.427h3.417c0.233,0,0.426-0.192,0.426-0.427V7.865C12.135,7.63,11.942,7.438,11.709,7.438 M11.282,15.979H8.719V8.292h2.563V15.979zM6.156,11.709H2.74c-0.235,0-0.427,0.191-0.427,0.426v4.271c0,0.234,0.192,0.427,0.427,0.427h3.417c0.235,0,0.427-0.192,0.427-0.427v-4.271C6.583,11.9,6.391,11.709,6.156,11.709 M5.729,15.979H3.167v-3.416h2.562V15.979zM17.261,3.167h-3.417c-0.235,0-0.427,0.192-0.427,0.427v12.812c0,0.234,0.191,0.427,0.427,0.427h3.417c0.234,0,0.427-0.192,0.427-0.427V3.594C17.688,3.359,17.495,3.167,17.261,3.167 M16.833,15.979h-2.562V4.021h2.562V15.979z">
                                    </path>
                                </svg>
                                <strong>Nivel: </strong><span>{{ course.level }}</span>
                            </li>


                        </ul>
                    </div>

                </div>
                <div class="course__right">
                    <img :src="fetchImg(course.image)" alt="" class="course__img" />
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
                <div class="block--small">
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
                        <LessonItem v-for="(lesson, i) in lessons" :lesson="lesson" :index="i" :key="i"/>
                    </ul>
                </div>
                <div class="block" id="lectures">
                    <div class="c-heading text_center">
                        <h2 class="text-default">Conoce al profesor</h2>
                        <h3 class="heading-1 text-uppercase">LOREM IPSUM</h3>
                        <div class="c-heading__bottom">
                            <span class="c-heading__short-desc">Sed ut perspiciatis unde omnis iste natus, error sit voluptatem.</span>
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
                            <svg  class="svg-icon" viewBox="0 0 20 20">
                                    <path fill="none" d="M14.023,12.154c1.514-1.192,2.488-3.038,2.488-5.114c0-3.597-2.914-6.512-6.512-6.512
                                        c-3.597,0-6.512,2.916-6.512,6.512c0,2.076,0.975,3.922,2.489,5.114c-2.714,1.385-4.625,4.117-4.836,7.318h1.186
                                        c0.229-2.998,2.177-5.512,4.86-6.566c0.853,0.41,1.804,0.646,2.813,0.646c1.01,0,1.961-0.236,2.812-0.646
                                        c2.684,1.055,4.633,3.568,4.859,6.566h1.188C18.648,16.271,16.736,13.539,14.023,12.154z M10,12.367
                                        c-2.943,0-5.328-2.385-5.328-5.327c0-2.943,2.385-5.328,5.328-5.328c2.943,0,5.328,2.385,5.328,5.328
                                        C15.328,9.982,12.943,12.367,10,12.367z"></path>
                            </svg>
                            <span>{{ students }}</span>    
                            <span class="stat-item__legend">Estudiantes</span>
                        </div>
                        <div class="course__stat">
                            <svg class="svg-icon" viewBox="0 0 20 20">
							<path d="M17.211,3.39H2.788c-0.22,0-0.4,0.18-0.4,0.4v9.614c0,0.221,0.181,0.402,0.4,0.402h3.206v2.402c0,0.363,0.429,0.533,0.683,0.285l2.72-2.688h7.814c0.221,0,0.401-0.182,0.401-0.402V3.79C17.612,3.569,17.432,3.39,17.211,3.39M16.811,13.004H9.232c-0.106,0-0.206,0.043-0.282,0.117L6.795,15.25v-1.846c0-0.219-0.18-0.4-0.401-0.4H3.189V4.19h13.622V13.004z"></path>
						</svg>
                            <span>{{ number_comments }}</span>
                            <span class="stat-item__legend">Opiniones</span>
                        </div>
                        <div class="course__stat">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                                <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
                            </svg>
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
        <LoginAndRegister />
    </div>
</template>
