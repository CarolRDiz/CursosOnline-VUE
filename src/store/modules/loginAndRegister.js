export default{
    namespaced: true,
    state:{
        modalActive: false,
        isLogin: true,
    },
    mutations:{
        changeModalActiveLogin(state) {
            state.isLogin=true;
            state.modalActive=!state.modalActive;
        },
        changeModalActiveRegister(state) {
            state.isLogin=false;
            state.modalActive=!state.modalActive;
        },
        changeModalActive(state) {
            state.modalActive=!state.modalActive;
        },
        changeIsLogin(state) {
            state.isLogin=!state.isLogin;
        }
    },
    actions:{
        changeModalActiveLogin({commit}){
            console.log("changeModalActiveLogin")
            commit("changeModalActiveLogin")
        },
        changeModalActiveRegister({commit}){
            console.log("changeModalActiveRegister")
            commit("changeModalActiveRegister")
        },
        changeModalActive({commit}){
            console.log("changeModalActive")
            commit("changeModalActive")
        },
        changeIsLogin({commit}){
            commit("changeIsLogin")
        },
    }
}