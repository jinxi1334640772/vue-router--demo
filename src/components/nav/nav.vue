<template>
    <div class="container">
        <router-link to="/">主页</router-link>
        <router-link :to="{name:'blog'}">博客</router-link>
        <router-link :to="{name:'forum'}">论坛</router-link>
        <router-link to="/shoping">商城</router-link>
        <router-link to="/activity">活动</router-link>
        <router-link to="/message">消息</router-link>
        <router-link to="/login">登录</router-link>
        <router-link to="/register">注册</router-link>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    justify-content: space-around;
}
.container a {
    margin-left: 10px;
    background: deepskyblue;
    text-decoration: none;
    padding: 3px 10px;
}
</style>