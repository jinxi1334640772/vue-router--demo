<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png">
        <div>
            <p>{{name1}}</p>
            <p>{{moduleGetter}}</p>
        </div>
        <button @click="displaythis">显示this</button>
        <button @click="moduleMutation">mutation</button>
        <button @click="nameAction">antion</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
    computed: {
      ...mapState({name1:'name'}),
      ...mapGetters('moduleA',['moduleGetter'])
    },
    methods: {
      ...mapMutations('moduleA',['moduleMutation']),
        displaythis() {
            console.log(this, 'this');
        },
        nameAction() {
            this.$store.dispatch('nameAction');
        }
    }
}
</script>

<style>
</style>
