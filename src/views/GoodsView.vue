<template>
   <div> <div class="select-box">
    
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
    <el-table :data="datalist.comlist" border style="width: 100%">
    <el-table-column prop="id" label="id" width="180" />
    <el-table-column prop="title" label="title" width="180" />
  </el-table>
  <el-pagination @current-change="currentChange"   
  @size-change="sizeChange" 
  background 
  layout="prev, pager, next"  
  :total="selectData.count"  
/>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive,toRefs } from 'vue'
import { goodlist } from '@/request/api'
import { initData} from '@/type/goods'

export default defineComponent({
    setup () {

        const data = reactive(new initData())
        goodlist().then(res=>{
            // console.log(res)
            data.list=res.data
            data.selectData.count=res.data.length

        });
        const datalist = reactive({
            comlist:computed(()=>{
                //[1，10][11,20][21,30]
                
                return data.list.slice(
                (data.selectData.page-1)*data.selectData.pagesize,
                data.selectData.page*data.selectData.pagesize)
            })
        })
        //绑定点击事件
        const currentChange=(page:number)=>{
            data.selectData.page=page
        }
        
        const sizeChange = (pagesize:number)=>{
            data.selectData.pagesize=pagesize
        }
        const onSubmit = ()=>{
            
        }

        return {...toRefs(data),
                currentChange,
                sizeChange,
                datalist
        }
    }
})
</script>

<style scoped>

</style>