<template>
  <div class="home">
    <el-container>
      <el-header height="80px">
        <el-row :gutter="20">
    <el-col :span="4"><img src="../assets/logo.png" class="logo"></el-col>
    <el-col :span="16"><h2>后台管理系统</h2></el-col>
    <el-col :span="4">
      <span class="btn">退出登陆</span>
    </el-col>
  </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <!-- router 开启路由模式，通过标签里面的index进行跳转 -->
      <el-menu
      active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        router 


      >
        <el-sub-menu index="1">
          <template #title>

            <span>Navigator One</span>
          </template>
          <el-menu-item-group title="Group One">
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <!-- :inde="""点击了哪个路由就会跳转到所点击的页面去 -->
        <!-- v-for循环获取list里面的item -->
        <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
          <span>{{item.meta.title}}</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>

          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">

          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
        </el-aside>


        <el-main>
          <!-- 设置路由出口 -->
          <router-view></router-view>

        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useRouter } from 'vue-router';
export default defineComponent({
  name: 'HomeView',
  setup ()
  {
    const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
    const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

    const router = useRouter()
    //获取index下的所有路由列表，获取meta里面带有isShow的路由
    const list = router.getRoutes().filter(v=> v.meta.isShow)
    return { list }


  }
});
</script>



<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.el-header{
  height: 80px;
  background-color: skyblue;
  .logo{
  height: 80px;
}
h2{
  text-align: center;
  height: 80px;
  line-height: 80px;
}
.btn{
  text-align: center;
  height: 80px;
  line-height: 80px;
}
}


.el-aside{

  .el-menu{
    height: calc(100vh - 80px);
  }
}
</style>
