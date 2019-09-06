export default {
    nameMutation(state){
        state.name = 'mutation之后的name'
    },
    isLogin(state){
        state.hasLogin = true;
    },
    existLogin(state){
        state.hasLogin = false;
    }
}