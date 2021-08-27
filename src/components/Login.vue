<template>
    <div class="login">
        <div class="login-top">
            <img src="/img/02.jpg" alt="">
        </div>
        <div class="fen"></div>
        <div class="home-con">
            <div class="home-con-phone">
                <input type="text" placeholder="请输入手机号" v-model="value">
                <span @click="huoqu">获取验证码</span>
            </div>
            <div class="home-con-duan">
                <input type="text" placeholder="请输入短信验证码" v-model="password">
            </div>
            <div class="home-con-wei">
                <span>*未注册的手机号将自动注册</span>
                <span>使用密码登录</span>
            </div>
            <div class="home-con-login">
                <p class="home-con-login-p" @click="login">登 录</p>
                <p class="home-con-login-xieyi">
                    <img src="/img/05.png" alt="">
                    我同意<span>用户注册协议</span>和<span>隐私保护协议</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import {smsCode,login} from '@/http/api'
export default {
    data() {
        return {
            value:"",
            password:""
        }
    },
    created() {
    },
    methods: {
        async huoqu(){
            var phoneReg = /^[1]([3-9])[0-9]{9}$/
            if(!phoneReg.test(this.value)){
                return this.$toast({
                    message:'手机号格式不正确'
                })
            }else{
                var obj = {mobile:this.value,sms_type:'login'}
                let res = await smsCode(obj)
                console.log(res);
            }
        },
        async login(){
            var obj = {mobile:this.value,password:this.password}
            let res = await login(obj)
            console.log(res);
        }
    },
}
</script>

<style>
.login{
    width: 375px;
    height: auto;
}
.login-top{
    margin-top: 10px;
    width: 375px;
    height: 255px;
}
.login-top img{
    width: 100%;
    height: 100%;
}
.fen{
    margin-top: 20px;
    width: 375px;
    height: 20px;
    background: rgb(221, 220, 220);
}
.home-con{
    width: 375px;
    height: 130px;
}
.home-con-phone{
    width: 300px;
    line-height: 50px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    margin-left: 30px;
    margin-top: 50px;
}
.home-con-phone input{
    border: 0;
    font-size: 15px;
}
.home-con-phone span{
    display: inline-block;
    margin-right: 0;
    margin-left: 40px;
    color: #f00;
}
.home-con-duan{
    width: 300px;
    line-height: 50px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    margin-left: 30px;
}
.home-con-duan input{
    border: 0;
    font-size: 15px;
}
.home-con-wei{
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: 10px;
    color: #b7b7b7;
}
.home-con-login{
    width: 375px;
    height: 187px;
    background-image: url('/img/03.png');
    background-size: 100%;
}
.home-con-login-p{
    padding-left: 165px;
    padding-top: 70px;
    font-size: 14px;
    color: #fff;
}
.home-con-login-xieyi{
    width: 300px;
    line-height: 20px;
    margin-left: 40px;
    margin-top: 30px;
}
.home-con-login-xieyi img{
    width: 15px;
    height: 15px;
}
.home-con-login-xieyi span{
    color: #f00;
}
</style>
