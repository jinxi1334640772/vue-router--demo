export default {
    nameAction(context){
        context.commit('nameMutation');
        console.log(context,'action');
    }
}