<template>
    <div class="container">
        <h1>$route.params.id: {{$route.params.id}}</h1>
        <h1>props： 传值{{id}}</h1>
        <div>meta传值：name:{{$route.meta.name}}</div>
        <div>meta传值：age:{{$route.meta.age}}</div>
    </div>
</template>
<script>
export default {
    props: ['id', 'name', 'age'],
    beforeRouteUpdate(to, from, next) {
        console.log(to, from);
        alert('你好，这里是组件内更新守卫beforRouteUpdate，当此组件被复用时，该守卫才执行，最常见的是动态路由参数的改变导致的组件复用')
        next();
    }
}
</script>