<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
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
  
<style scoped>
.modal-animation-enter-active,
.modal-animation-leave-active {
    transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
    opacity: 0;
}

.modal-animation-inner-enter-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
    transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
    opacity: 0;
    transform: scale(0.8);
}

.modal-animation-inner-leave-to {
    transform: scale(0.8);
}

.modal {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.7);
}

.modal-inner {
    position: relative;
    max-width: 640px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    padding: 64px 16px;
    display: flex;
    flex-direction: column;
    row-gap: 40px;


}
.modal__center{
    display: flex;
    justify-content: center;
}
.modal-inner button {
    padding: 20px 30px;
    border: none;
    font-size: 16px;
    background-color: crimson;
    color: #fff;
    cursor: pointer;
}

.modal-inner i {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    cursor: pointer;
}

.modal-inner i:hover {
    color: crimson;
}</style>