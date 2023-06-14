<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div class="modal-inner">
                    <i v-if="!notClose" @click="close" class="far fa-times-circle"></i>
                    <!-- Modal Content -->
                    <slot />
                    <div v-if="!notClose" class="modal__center">
                      <button @click="close" type="Cerrar">Cerrar</button>  
                    </div>
                    
                </div>
            </transition>
        </div>
    </transition>
</template>
  
<script>
export default {
    props: ["modalActive", "notClose"],
    setup(props, { emit }) {
        const close = () => {
            emit("close");
        };
        return { close };
    },
};
</script>