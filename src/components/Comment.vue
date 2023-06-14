<template>
    <div class="comment">
        <div class="comment__unit-head">
            <div class="comment__circle">
                <img class="comment__user-img" :src="comment.userimage" :alt="comment.username">
            </div>
            <div class="comment__unit-head-left">
                <a class="comment__user-name" href="">{{ comment.username }}</a>
                <span class="comment__date">{{ comment.fecha }}</span>
            </div>
        </div>
        <div class="comment__unit-body">
            <div class="comment__vote">
                <IconLike class="svg-icon--white" v-if="comment.liked"/>
                <IconDislike class="svg-icon--white" v-else/>    
            </div>
        <p class="comment__argument">{{ comment.argument }}</p>
    </div>
    </div>
</template>
<script>
import IconLike from "./icons/IconLike.vue"
import IconDislike from "./icons/IconDislike.vue"
export default {
    name: "Comment",
    components: {
        IconLike, IconDislike
    },
    props: ["comment"]
}
</script>