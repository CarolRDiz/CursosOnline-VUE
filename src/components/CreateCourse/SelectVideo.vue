<template>
    <div class="select-video">
        <!-- <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage">
        </div> -->
        <!-- <video controls class="imagePreviewWrapper" v-if="previewImage" :src="previewImage"></video> -->
        <FormKit
                                type="form" 
                                submit-label="Iniciar sesión" 
                                @submit="saveVideo"
                                :actions="false"
                                id="video">
        <!-- <input ref="fileInput" type="file" @input="pickFile"> -->
        <FormKit
            type="file"
            name="video"
            help="Selecciona un vídeo entre tus archivos"
            accept=".mp4"
            validation="required"
            file-item-icon="video"
            file-remove-icon="videoRemove"
            no-files-icon="videoAdd"
            />
        </FormKit>
 
        <!-- <label class="file">
            <input type="file" id="file" aria-label="File browser example">
            <span class="file-custom"></span>
        </label> -->
        <div>
            <button @click="cancel" class="button button--text--white">Cancelar</button>
            <button class="button button--small--white" @click="submit">Subir vídeo</button>
        </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
    name: "SelectVideo",
    data() {
        return {
            previewImage: null
        };
    },
    methods: {
        ...mapActions("chapters", {
            updateVideo: "updateVideo"
        }),
        async saveVideo(data){
            console.log(data)
            const updated = await this.updateVideo({ id: this.$route.params.id, video: data.video })
            console.log("UPDATED: " + updated)
            if (updated) {
                this.$router.go()
            }
        },
        cancel() {
            this.$emit("cancel")
        },
        selectImage() {
            this.$refs.fileInput.click()
        },
        submit(){
           this.$formkit.submit('video');
        },
        pickFile() {
            let input = this.$refs.fileInput
            let file = input.files
            if (file && file[0]) {
                let reader = new FileReader
                reader.onload = e => {
                    console.log(e.target.result)
                    this.previewImage = e.target.result
                }
                reader.readAsDataURL(file[0])
                this.$emit('input', file[0])
            }
        }
    }
}
</script>
<style>
.imagePreviewWrapper {
    width: 250px;
    height: 250px;
    display: block;
    cursor: pointer;
    margin: 0 auto 30px;
    background-size: cover;
    background-position: center center;
}
</style>