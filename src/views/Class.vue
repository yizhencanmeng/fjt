<template>
    <div class="class">
        <div class="index-zishen-con">
            <div class="index-zishen-con-box" v-for="(item,key) in classes" :key="key">
                <div class="index-zishen-con-box-img">
                    <img class="index-zishen-con-box-img-img" :src="'/img/'+item.teacher_avatar">
                </div>
                <div class="index-zishen-con-box-p">
                    <p class="index-zishen-con-box-p-one">{{item.teacher_name}}</p>
                    <p class="index-zishen-con-box-p-two">{{item.introduction}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { recommend } from "@/http/api";
export default {
    data() {
        return {
            classes:[]
        }
    },
    async created() {
        let {data: { data: res }} = await recommend();
        this.classes = res[2].list
        var imgs = ["10.png","11.png","12.jpeg","13.png","15.png","16.png"];
        this.classes.forEach((item,id) =>{
            item.teacher_avatar = imgs[id]
        })
    },
};
</script>

<style lang="scss">
.class{
    width: 100%;
    height: 100%;
    background: #f7f8fa;
}
  .index-zishen-con {
    width: 375px;
    box-sizing: border-box;
    padding: 15px;
    .index-zishen-con-box {
      width: 345px;
      height: 81px;
      background: #fff;
      box-sizing: border-box;
      padding: 15px;
      margin-bottom: 15px;
      display: flex;
      justify-content: flex-start;
      .index-zishen-con-box-img {
        width: 40px;
        height: 40px;
        margin-right: 12px;
        .index-zishen-con-box-img-img {
          width: 100%;
          height: 100%;
          border-radius: 20px;
        }
      }
      .index-zishen-con-box-p {
        width: 260px;
        height: 51px;
        .index-zishen-con-box-p-one {
          width: 260px;
          line-height: 25px;
          margin-bottom: 5px;
        }
        .index-zishen-con-box-p-two {
          color: #b7b7b7;
        }
      }
    }
  }
</style>
