<template>
    <li class="lessons-list__item" >
        <div @click="this.open=!this.open" class="lessons-list__row js-lesson-dd">
            <div class="lessons-list__left">
                <div class="lessons-list__budget">Lección {{ index }}</div>
                <div class="lessons-list__title">{{ lesson.title }}</div>
            </div>
            <div class="lessons-list__right hidden-lg">
                <div class="lessons-list__col">
                    <span class="text-medium">{{ lesson.chapters.length }}</span>
                </div>
                <div class="lessons-list__col">
                    <span class="text-medium">{{ lesson.duration }}</span>
                </div>
                <div class="lessons-list__col text-right">
                    <button  class="button--white--empty js-open-lessons" >Ver más</button>
                </div>
            </div>
        </div>
        <!--Lesson 1 Contenidos Hidden-->
        <ul class="lessons-list lessons-list--s2 j" :class="{ 'is-open': open }"  id="js-section-1">
            <!--Contenido 1-->
            <li v-for="chapter in lesson.chapters" class="lessons-list--s2__item is-private">
                <div class="lessons-list__row">

                    <div class="lessons-list__left">
                        <div class="lessons-list__ico">
                            <svg v-if="chapter.locked" class="svg-icon" viewBox="0 0 20 20">
                                <path
                                    d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878">
                                </path>
                            </svg>
                            <svg v-else class="svg-icon" version="1.1" id="Layer_1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    viewBox="0 0 100.25 100.25"
                                                    style="enable-background:new 0 0 100.25 100.25;" xml:space="preserve">
                                                    <g>
                                                        <path d="M69.817,48.243l-30-19.5c-0.461-0.3-1.05-0.322-1.533-0.061c-0.483,0.263-0.785,0.769-0.785,1.318v39
		c0,0.55,0.301,1.056,0.785,1.318c0.224,0.121,0.47,0.182,0.715,0.182c0.285,0,0.57-0.081,0.817-0.242l30-19.5
		c0.426-0.276,0.683-0.75,0.683-1.258S70.243,48.519,69.817,48.243z M40.5,66.237V32.764L66.248,49.5L40.5,66.237z" />
                                                        <path d="M49.5,6.5c-23.71,0-43,19.29-43,43s19.29,43,43,43s43-19.29,43-43S73.21,6.5,49.5,6.5z M49.5,89.5
		c-22.056,0-40-17.944-40-40s17.944-40,40-40s40,17.944,40,40S71.556,89.5,49.5,89.5z" />
                                                    </g>
                                                </svg>
                        </div>
                        <div class="lessons-list__title">{{ chapter.title }}</div>
                    </div>
                    <div class="lessons-list__right hidden-lg">
                        <div class="lessons-list__col"><span class="text-medium">{{ chapter.duration }}</span></div>
                        <div class="lessons-list__col">
                            <div class="lessons-list__play">
                                <!--
                             <svg width="40" class="ico-svg" viewbox="0 0 20 20">
                                <use
                                    xlink:href="https://www.awwwards.com/assets/images/sprite-icons.svg#play-2">
                                </use>
                            </svg>   
                            -->

                            </div>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </li>
</template>
<script>
export default {
    name: "LessonItem",
    props: ["lesson", "index"],
    data() {
        return {
            open: false
        }
        
    },
    methods:{
        toogleOpen(){
        }
    }
}
</script>