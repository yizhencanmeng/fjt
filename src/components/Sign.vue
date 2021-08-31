<template>
    <div class="sign">
        <div class="sign-top">
            <ul>
                <li><img src="/img/26.jpg" alt=""></li>
                <li>
                    <p>{{$store.state.zhang}}</p>
                    <p>积分</p>
                </li>
                <li><p>签到规则</p></li>
            </ul>
        </div>
        <!-- 日历 -->
        <div class="sign-rili">
            <van-calendar title="日历" :poppable="false" :show-confirm="false" :style="{ height: '335px' }" v-model="value" @click="li"/>
        </div>
        <!-- 好课推荐 -->
        <div class="sign-tui">
            <div class="sign-tui-top">
                <div class="sign-tui-top-left">
                    <p class="sign-tui-top-left-shu"></p>
                    <p class="sign-tui-top-left-p">好课推荐</p>
                </div>
                <div class="sign-tui-top-right">
                    <span>更多</span>
                    <p class="sign-tui-top-right-img"><img src="/img/17.png" alt=""></p>
                </div>
            </div>
            <van-card num="2" title="论狗栋的越来越狗" thumb="/img/28.jpeg"/>
        </div>
        <div class="sign-tui">
            <div class="sign-tui-top">
                <div class="sign-tui-top-left">
                    <p class="sign-tui-top-left-shu"></p>
                    <p class="sign-tui-top-left-p">热门图书</p>
                </div>
                <div class="sign-tui-top-right">
                    <span>更多</span>
                    <p class="sign-tui-top-right-img"><img src="/img/17.png" alt=""></p>
                </div>
            </div>
            <van-card num="2" desc="WYL" title="VUE 开发后台管理系统" thumb="/img/29.jpeg"/>
        </div>
    </div>
</template>

<script>
import {integral} from '@/http/api'
export default {
  data() {
    return {
        value:''
    };
  },
  created() {
  },
  methods: {
      li(){
          console.log(this.value);
      }
  },
};
</script>

<style lang="scss">
.sign{
    width: 375px;
    height: 280px;
    background: url('/img/27.png') 50% no-repeat;
    background-size: cover;
    .sign-top{
        width: 335px;
        height: 104px;
        box-sizing: border-box;
        padding: 30px 0; 
        margin: 0 20px;
        color: #fff;
        ul{
            list-style: none;
            display: flex;
            position: relative;
            li:nth-child(1){
                width: 44px;
                height: 44px;
                margin-right: 8px;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            li:nth-child(2){
                width: 120px;
                height: 44px;
                p:nth-child(1){
                    font-size: 18px;
                    margin-bottom: 6px;
                    font-weight: 500;
                }
                p:nth-child(2){
                    font-size: 12px;
                    font-weight: 500;
                }
            }
            li:nth-child(3){
                width: 76px;
                height: 24px;
                line-height: 24px;
                text-align: center;
                border: 1px solid #fff;
                border-radius: 12px;
                position: absolute;
                right: 0;
            }
        }
    }
    .sign-rili{
        width: 337px;
        height: 335px;
        margin-left: 19px;
        margin-right: 19px;
        margin-bottom: 25px;
        .van-calendar{
            border-radius: 12px;
            box-shadow:2px 2px 5px rgb(141, 141, 141);
        }
    }
    .sign-tui{
        width: 375px;
        height: 135px;
        padding: 0 15px;
        margin-bottom: 25px;
        .sign-tui-top{
            width: 345px;
            line-height: 16px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            .sign-tui-top-left{
                width: 200px;
                display: flex;
                .sign-tui-top-left-shu{
                    width: 2px;
                    height: 13px;
                    background: #e60012;
                }
                .sign-tui-top-left-p{
                    padding-left: 10px;
                    font-size: 15px;
                }
            }
            .sign-tui-top-right{
                width: 145px;
                display: flex;
                margin-left: 200px;
                span{
                    font-size: 12px;
                    color: #b7b7b7;
                }
                .sign-tui-top-right-img{
                    width: 6px;
                    height: 12px;
                    margin-left: 5px;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .van-card{
            width: 345px;
        }
    }
}
</style>
