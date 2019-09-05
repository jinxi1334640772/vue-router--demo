export default {
    namespaced: true,
    state:{
        moduleName :'高顿教育'
    },
    getters: {
        moduleGetter(state){
            return state.moduleName+'这是moduleGetter之后的name'
        }
    },
    mutations:{
        moduleMutation(state){
            state.moduleName = 'moduleMutation之后的name'
        }
    },
    actions: {
        moduleAction(context){
            context.commit('moduleMutation')
        }
    }
}