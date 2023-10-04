<template>
    <div class="lesson">
        <span>Capítulo {{ chapter.id }}: {{ chapter.title }}</span>
        <SelectVideo v-if="selectVideo" @cancel="closeSelectVideo()"></SelectVideo>
        <EditVideo @replace-video="this.selectVideo=true" v-else-if="chapter.video_id" :video="chapter.video_id"></EditVideo>
        <button v-else @click="addVideo" class="button button--white--empty--normal">+ Añadir vídeo</button>
    </div>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex"
import SelectVideo from "./SelectVideo.vue";
import EditVideo from "./EditVideo.vue";
export default {
    name: "Chapter",
    props: ["chapter"],
    components: {
        SelectVideo,
        EditVideo
    },
    data(){
        return{
            selectVideo: false,
            replaceVideo: false
        }
    },
    methods: {
        addVideo(){
            this.selectVideo = true;
        },
        closeSelectVideo(){
            this.selectVideo = false;
        }
    }
}
</script>