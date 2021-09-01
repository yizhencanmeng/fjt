<template>
    <div class="cxiang">
        <img class="cxiang-img" :src="courseinfo.cover_img" alt="">
        <div class="cxiang-top">
            <p class="cxiang-top-p">{{courseinfo.title}}</p>
            <div class="cxiang-top-box">
                <p>剩余名额:{{courseinfo.store_num}}</p>
                <p>报名截止时间:2021.07.15 00:00</p>
                <p>开课时间:2021/07/05 00:00 - 2021/07/06 00:00</p>
                <p>开课地点:{{courseinfo.city_name}}{{courseinfo.district_name}}{{courseinfo.address}}</p>
            </div>
            <p class="cxiang-top-foot">
                <span class="cxiang-top-foot-one">22.00</span>
                <span class="cxiang-top-foot-two">100.00</span>
            </p>
        </div>
        <div class="cxiang-youhui">
            <div class="cxiang-youhui-top">
                <span class="cxiang-youhui-top-one">优惠：</span>
                <span class="cxiang-youhui-top-two">领取优惠券最多可减<span class="cxiang-youhui-top-two-span">80</span></span>
                <span class="cxiang-youhui-top-three">领取 ></span>
            </div>
            <div class="cxiang-youhui-top">
                <span class="cxiang-youhui-top-one">服务：</span>
                <span class="cxiang-youhui-top-two">课程售后</span>
                <span class="cxiang-youhui-top-three">详情 ></span>
            </div>
        </div>
        <div class="cxiang-item">
            <p class="cxiang-item-p">教学团队</p>
            <ul>
                <li v-for="item in teachers" :key="item.id">
                    <img :src="item.avatar" alt="">
                    <p class="cxiang-item-ul-p">{{item.teacher_name}}</p>
                </li>
            </ul>
        </div>
        <div class="cxiang-tab">
            <van-tabs v-model="active" scrollspy sticky>
                <van-tab v-for="(item,key) in kecheng" :key='key' :title="item">
                    <div v-show="key == 0" class="cxiang-tab-div">
                        <p>课程介绍</p>
                        <div>
                            <p>少林功夫</p>
                            <p>金钟罩铁布衫</p>
                            <p>飞檐走壁</p>
                        </div>
                    </div>
                    <div class="fen"></div>
                    <div v-show="key == 1" class="cxiang-tab-div2">
                        <p>课程大纲</p>
                        <div>
                            <p>1、站马步</p>
                        </div>
                    </div>
                    <div class="fen"></div>
                    <div v-show="key == 2" class="cxiang-tab-div3">
                        <p>课程评论</p>
                        <div class="cxiang-tab-div3-img">
                            <img src="/img/30.png" alt="">
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>
        <div class="box"></div>
        <div class="cxiang-btn">
            <div class="cxiang-btn-box">
                <p>立即报名</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id:0,
            courseinfo:[],
            teachers:[],
            active:0,
            kecheng:['课程介绍','课程大纲','课程评价']
        }
    },
    created() {
        this.id = this.$route.query.id
        this.getcourseinfo()
        this.getteachers()
    },
    methods: {
        async getcourseinfo(){
            let {data:{data:{info:res}}} = await this.$http.get('http://120.53.31.103:84/api/app/courseInfo/basis_id='+this.id)
            // console.log(res);
            this.courseinfo = res
        },
        async getteachers(){
            let {data:{data:{teachers:res}}} = await this.$http.get('http://120.53.31.103:84/api/app/courseInfo/basis_id='+this.id)
            console.log(res);
            this.teachers = res
        }
    },
}
</script>

<style lang="scss">
.fen{
    width: 375px;
    height: 3px;
    background: #f0f2f5;
}
.box{
    height: 150px;
    background: #fff;
}
.cxiang{
    width: 375px;
    background: #f0f2f5;
    box-sizing: border-box;
    .cxiang-img{
        width: 215px;
        height: 220px;
        display: block;
    }
    .cxiang-top{
        width: 375px;
        height: 209px;
        background: #fff;
        padding: 15px;
        box-sizing: border-box;
        .cxiang-top-p{
            font-size: 16px;
            font-weight: 400;
            color: #333;
            padding-right: 40px;
            line-height: 23px;
        }
        .cxiang-top-box{
            padding-top: 5px;
            p{
                font-size: 14px;
                font-weight: 400;
                color: rgba(0,0,0,.45);
                line-height:30px;
            }
        }
        .cxiang-top-foot{
            width: 345px;
            height: 32px;
            font-size: 17px;
            font-weight: 500;
            color: #ee1f1f;
            line-height: 32px;
            .cxiang-top-foot-one{
                font-size: 13px;
                color: #999;
                text-decoration: line-through;
            }
        }
    }
    .cxiang-youhui{
        width: 375px;
        height: 64px;
        margin-top: 15px;
        padding: 15px 15px 5px 15px;
        box-sizing: border-box;
        background: #fff;
        .cxiang-youhui-top{
            display: flex;
            width: 345px;
            height: 22px;
            align-items: center;
            box-sizing: border-box;
            padding-bottom: 10px;
            .cxiang-youhui-top-one{
                width: 36px;
                font-size: 10px;
                font-weight: 400;
                color: #8c8c8c;
                margin-right: 4px;
            }
            .cxiang-youhui-top-two{
                flex: 1;
                font-size: 12px;
                font-weight: 400;
                color: #595959;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                .cxiang-youhui-top-two-span{
                    color: #ea7a2f;
                }
            }
            .cxiang-youhui-top-three{
                font-size: 12px;
                font-weight: 400;
                color: #8c8c8c;
                padding-right: 12px;
            }
        }
    }
    .cxiang-item{
        margin-top: 10px;
        background: #fff;
        width: 375px;
        height: 235px;
        padding: 5px 10px;
        box-sizing: border-box;
        .cxiang-item-p{
            font-size: 15px;
            font-weight: 500;
            color: #262626;
            padding-top: 10px;
        }
        ul{
            display: flex;
            flex-wrap: wrap;
            padding: 10px 0;
            box-sizing: border-box;
            li{
                padding: 10px 0;
                width: 20%;
                height: 90px;
                display: flex;
                align-items: center;
                flex-direction: column;
                box-sizing: border-box;
                img{
                    width: 39px;
                    height: 39px;
                    border-radius: 50%;
                }
                p{
                    width: 100%;
                    box-sizing: border-box;
                    padding: 8px 3px 0;
                    padding-top: 8px;
                    font-size: 12px;
                    font-weight: 400;
                    color: #595959;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    text-align: center;
                }
            }
        }
    }
    .cxiang-tab{
        width: 375px;
        margin-top: 10px;
        background: #fff;
        box-sizing: border-box;
        .cxiang-tab-div{
            width: 375px;
            height: 120px;
            background: #fff;
            padding: 5px 10px;
            div{
                margin-top: 10px;
                margin-left: 5px;
            }
            >p{
                font-size: 15px;
            }
        }
        .cxiang-tab-div2{
            width: 375px;
            height: 120px;
            background: #fff;
            padding: 5px 10px;
            div{
                margin-top: 10px;
                margin-left: 5px;
            }
            >p{
                font-size: 15px;
            }
        }
        .cxiang-tab-div3{
            width: 375px;
            height: 120px;
            background: #fff;
            padding: 5px 10px;
            div{
                margin-top: 10px;
                margin-left: 5px;
            }
            >p{
                font-size: 15px;
            }
            .cxiang-tab-div3-img{
                width: 355px;
                height: 185px;
                margin-left: 10px;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                img{
                    width: 150px;
                    height: 150px;
                }
            }
        }
    }
    .cxiang-btn{
        width: 375px;
        position: fixed;
        left: 0;
        bottom: 0;
        height: 50px;
        background: #fff;
        box-sizing: border-box;
        .cxiang-btn-box{
            box-sizing: border-box;
            width: 344px;
            height: 37px;
            margin: 5px auto;
            border-radius: 18.5px;
            background: #e60012;
            font-size: 13px;
            font-weight: 500;
            color: #fff;
            text-align: center;
            line-height: 37px;
        }
    }
}
</style>
