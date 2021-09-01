<template>
    <div class="class">
        <div class="index-zishen-con">
            <div class="index-zishen-con-box" v-for="item in tearchers" :key="item.id" @click="tear(item.id)">
                <div class="index-zishen-con-box-img">
                    <img class="index-zishen-con-box-img-img" :src="'/img/'+item.avatar">
                </div>
                <div class="index-zishen-con-box-p">
                    <p class="index-zishen-con-box-p-one">{{item.real_name}}</p>
                    <p class="index-zishen-con-box-p-two">{{item.introduction}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { tearchers } from "@/http/api";
export default {
  data() {
    return {
        tearchers:[]
    }
  },
  async created() {
    let {data: { data: {list:res} }} = await tearchers();
    this.tearchers = res
    var imgs = ["10.png","11.png","12.jpeg","13.png","15.png","16.png"];
    this.tearchers.forEach((item,id) =>{
      item.avatar = imgs[id]
    })
    // console.log(this.tearchers);
  },
  methods: {
    tear(id){
      this.$router.push({
        path:"/classx",
        query:{
          id:id
        }
      })
    }
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
