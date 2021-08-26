<template>
  <div class="home">
    <router-view></router-view>
    <div class="home-footer">
      <router-link to="/index">首页</router-link>
      <router-link to="/class">课程</router-link>
      <router-link to="/zixun">资讯</router-link>
      <router-link to="/books">图书</router-link>
      <router-link to="/my">我的</router-link>
    </div>
  </div>
</template>

<script>
</script>
<style>
.home{
  width: 100%;
  height: 100%;
}
.home-footer{
  width: 375px;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
}
.home-footer a{
  width: 75px;
  line-height: 50px;
  text-align: center;
  font-size: 18px;
  text-decoration: #fff;
  display: inline-block;
}
</style>
