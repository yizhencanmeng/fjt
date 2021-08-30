<template>
      <div>
            <div class="my-wo">
            <ul class="my-wo-ul">
                <li class="my-wo-ul-li" @click="zhao">
                    <span class="my-wo-ul-li-i">设置密码</span>
                    <span class="my-wo-ul-li-im">></span>
                </li>
                 <li class="my-wo-ul-li" @click="zhu">
                    <span class="my-wo-ul-li-i">注销账号</span>
                    <span class="my-wo-ul-li-im">></span>
                </li>
            </ul>
        </div>
        <div class="btn">
            <button class="tui" @click="tuichu">退出登录</button>
        </div>
      </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    zhao(){
        this.$router.push('/zhao')
    },
    zhu(){
        this.$router.push('/zhu')
    },
    tuichu(){
        this.$store.commit('del')
        this.$router.push('/My')
    }
  },
};
</script>

<style lang="scss">
.my-wo {
  width: 100%;
  .my-wo-ul {
    width: 100%;
    list-style: none;
    background: #d3d0d0;
    .my-wo-ul-li {
      width: 100%;
      // height: 56px;
      background: white;
      margin-top: 1px;
      align-content: center;
      line-height: 56px;
      position: relative;
      .my-wo-ul-li-img {
        width: 15px;
        height: 14px;
      }
      .my-wo-ul-li-i {
        margin-left: 5px;
        font-size: 15px;
      }
      .my-wo-ul-li-im {
        font-size: 20px;
        position: absolute;
        top: 0;
        right: 20px;
      }
    }
  }
}
.btn{
    width: 100%;
    height: 100px;
    .tui{
        width: 80%;
        height: 40px;
        background: red;
        color: aliceblue;
        font-size: 20px;
        margin-left:10%;
        border: 1px solid red;
    }
}
</style>

