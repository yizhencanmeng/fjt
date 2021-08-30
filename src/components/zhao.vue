<template>
   <div class="login-con">
            <div class="login-con-phone">
                <input class="login-con-phone-input" type="text" placeholder="请输入手机号" v-model="value">
                <span class="login-con-phone-span" @click="yan" >{{txt}}</span>
            </div>
            <div class="login-con-duan" >
                <input class="login-con-duan-input" type="text" placeholder="请输入短信验证码" v-model="sms_code">
            </div>
            <div class="login-con-duan">
                <input class="login-con-duan-input" type="text" placeholder="请输入密码" v-model="password">
            </div>
            <div class="login-con-login">
                <p class="login-con-login-p" @click="login">登 录</p>
            </div>
        </div>
</template>
<script>
import { smsCode, login,password } from "@/http/api";

export default {
  data() {
    return {
      txt: "获取验证码",
      value: "",
      password: "",
      sms_code: ""
    };
  },
  methods: {
    async yan() {
      var phoneReg = /^[1]([3-9])[0-9]{9}$/;
      if (!phoneReg.test(this.value)) {
        return this.$toast({
          message: "手机号格式不正确"
        });
      } else {
        var obj = { mobile: this.value, sms_type: "getPassword" };
        let res = await smsCode(obj);
        console.log(res);
      }
      this.getSecond(60);
    },
    getSecond(wait) {
      let _this = this;
      let _wait = wait;
      if (wait == 0) {
        this.btnDisabled = false;
        this.txt = "获取验证码";
        wait = _wait;
      } else {
        this.btnDisabled = true;
        this.txt = "验证码(" + wait + "s)";
        wait--;
        setTimeout(function() {
          _this.getSecond(wait);
        }, 1000);
      }
    },
    async login() {
      if(this.value=="" && this.sms_code=="" && this.password==""){
        alert("内容不能为空")
        return false
      }
      let res = await password({ mobile: this.value,password:this.password ,sms_code:this.sms_code});
      console.log(res);
      
    },
  }
};
</script>
<style lang="scss">
.login {
  width: 375px;
  height: auto;
}
.login-top {
  margin-top: 10px;
  width: 375px;
  height: 255px;
  .login-top-img {
    width: 100%;
    height: 100%;
  }
}

.fen {
  margin-top: 20px;
  width: 375px;
  height: 20px;
  background: rgb(221, 220, 220);
}
.login-con {
  width: 375px;
  height: 130px;
  .login-con-phone {
    width: 300px;
    line-height: 50px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    margin-left: 30px;
    margin-top: 50px;
    .login-con-phone-input {
      border: 0;
      font-size: 15px;
    }
    .login-con-phone-span {
      display: inline-block;
      margin-right: 0;
      margin-left: 40px;
      color: #f00;
    }
  }
  .login-con-duan {
    width: 300px;
    line-height: 50px;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
    margin-left: 30px;
    .login-con-duan-input {
      border: 0;
      font-size: 15px;
    }
  }
  .login-con-wei {
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
    margin-top: 10px;
    color: #b7b7b7;
  }
  .login-con-login {
    width: 375px;
    height: 187px;
    background-image: url("/img/03.png");
    background-size: 100%;
    .login-con-login-p {
      padding-left: 165px;
      padding-top: 70px;
      font-size: 14px;
      color: #fff;
    }
  }
}
</style>



