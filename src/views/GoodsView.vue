<template>
    <div class="select-box">
    
        <el-form :inline="true" :model="selectData" class="demo-form-inline">
    <el-form-item label="标题">
      <el-input v-model="selectData.title" placeholder="请输入关键字" />
    </el-form-item>
    <!-- <el-form-item label="详情">
      <el-select v-model="formInline.region" placeholder="请输入关键字">
      </el-select>
    </el-form-item> -->
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive,toRefs } from 'vue'
import { goodlist } from '@/request/api'
import { initData} from '@/type/goods'

export default defineComponent({
    setup () {

        const data = reactive(new initData())
        goodlist().then(res=>{
            console.log(res)

        });

        return {...toRefs(data)}
    }
})
</script>

<style scoped>

</style>