<template>
    <div>
        {{ videoInfo }}
        <video class="edit-video__video" :src="this.url"></video>
        <button @click='this.$emit("replace-video")' >Editar video</button>
    </div>
</template>
<script>
    import { mapState, mapGetters, mapActions } from "vuex"
    export default {
        name: "EditVideo",
        props: ["video"],
        emits: [ "replace-video"],
        data(){
            return {
                videoInfo: ''
            }
        },
        computed:{
            url(){
                return "http://localhost:8080/videos/stream/"+ this.video;
            }
        },
        async created(){
            this.videoInfo = await this.getVideo({id: this.video})
        },
        methods:{
            ...mapActions("videos", {
            getVideo: "getVideo"
        })
        }
    }
</script>