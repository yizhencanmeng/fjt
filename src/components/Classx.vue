<template>
    <div class="classx">
        <div class="classx-top">
            <img :src="classlist.avatar" alt="">
            <div class="classx-top-right">
                <p>{{classlist.real_name}}</p>
            </div>
        </div>
        <div class="classx-con">
            <van-tabs v-model="activeName">
                <van-tab class="classx-van-tab" title="讲师介绍" name="a">
                    <p>老师简介</p>
                    <p>{{classlist.introduction}}</p>
                </van-tab>
                <van-tab title="主讲课程" name="b">
                    <van-card
                        v-for="item in mainCourse" :key="item.id"
                        num="2"
                        price="2.00"
                        :title="item.title"
                        :thumb="item.cover_img"
                        @click="cxiang(item.id)"
                    />
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import {tearchersinfo,mainCourse} from '@/http/api'
export default {
    data() {
        return {
            id:0,
            classlist:{},
            activeName: 'a',
            mainCourse:[]
        }
    },
    created() {
        this.id = this.$route.query.id
        this.getclassx()
        this.getmainCourse()
    },
    methods: {
        async getclassx(){
            let {data:res} = await this.$http.get('http://120.53.31.103:84/api/app/teacher/'+this.id)
            // console.log(res);
            this.classlist= res.data.teacher
            // console.log(this.classlist);
        },
        async getmainCourse(){
            let {data:{data:{list:res}}} = await this.$http.post('http://120.53.31.103:84/api/app/teacher/mainCourse?teacher_id='+this.id)
            // console.log(res);
            this.mainCourse = res
            console.log(this.mainCourse);
        },
        cxiang(id){
            this.$router.push({
                path:'/cxiang',
                query:{
                    id:id
                }
            })
        }
    },
}
</script>

<style lang="scss">
.classx{
    width: 375px;
    .classx-top{
        width: 375px;
        height: 132px;
        display: flex;
        box-sizing: border-box;
        padding: 25px 0 ;
        img{
            width: 82px;
            height: 82px;
            margin-left: 30px;
            border-radius: 50%;
            margin-right: 10px;
        }
        .classx-top-right{
            flex: 1;
            p{
                box-sizing: border-box;
                padding-bottom: 3px;
                font-size: 16px;
                line-height: 21px;
                padding-right: 5px;
                color: #030f09;
            }
        }
    }
    .classx-con{
        width: 375px;
        .classx-van-tab{
            padding: 0 15px;
        }
        p:nth-child(1){
            color: #b7b7b7;
            box-sizing: border-box;
            padding-top: 20px;
        }
        p:nth-child(2){
            box-sizing: border-box;
            padding: 13px 0;
            color: #20242a; 
            font-size: 14px;
            line-height: 28px;
        }
    }
}
</style>
