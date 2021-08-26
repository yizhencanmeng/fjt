<template>
    <div class="my" @click="login">
        <div class="my-top">
            <p class="my-top-img"><img src="/img/02.png" alt=""></p>
            <p class="my-top-p">登录/注册</p>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        login(){
            this.$router.push('/login')
        }
    },
}
</script>
<style>
.my{
    width: 100%;
    height: auto;
}
.my-top{
    width: 375px;
    height: 300px;
    background-image: url('/img/01.png') !important;
    background-repeat: no-repeat;
    background-size: 100%;
    text-align: center;
}
.my-top-img{
    width: 60px;
    height: 60px;
    margin-left: 155px;
    padding-top: 50px;
}
.my-top-img img{
    width: 100%;
    height: 100%;
}
.my-top-p{
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #fff;
    margin-top: 10px;
}
</style>
