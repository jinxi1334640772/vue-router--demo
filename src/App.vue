<template>
    <div id="app">
      <navbar></navbar>
      <router-view></router-view>
        <button @click="displaythis('wangtianyun')">跳转到message/wangtianyun</button>
        <button @click="login">登录</button>
        <button @click="existLogin">退出登录</button>
        <router-view name="other"></router-view>
    </div>
</template>

<script>
import navbar from './components/nav/nav.vue'
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
  components:{navbar},
    computed: {
      ...mapState({name1:'name'}),
      ...mapGetters('moduleA',['moduleGetter'])
    },
    methods: {
      ...mapMutations('moduleA',['moduleMutation']),
      ...mapMutations(['isLogin','existLogin']),
      login(){
        this.isLogin();
      },
        displaythis(id) {
            console.log(this,id, 'this');
            //方法一，没有参数，用path加不加斜杠都可以通过
            // this.$router.push('login');
            //方法二
            // this.$router.push({name:'login'});
            //方法三
            // this.$router.push({path:'login'})
            //方法一，带参数
            // this.$router.push(`/message/${id}`)
            //方法二
            // this.$router.push({path:`message/${id}`})
            //三
            this.$router.push({name:'messageSub',params:{id}})

        },
        nameAction() {
            this.$store.dispatch('nameAction');
        }
    }
}
</script>

<style>
</style>
