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
      <el-menu
      active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
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
        <el-menu-item index="2">
          <span>商品列表</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>

          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">

          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
        </el-aside>


        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
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

    const router = useRouter



    
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
