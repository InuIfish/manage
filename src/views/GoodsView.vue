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
import { computed, defineComponent, onMounted, reactive,toRefs, watch } from 'vue'
import { goodlist } from '@/request/api'
import { initData,listInt} from '@/type/goods'

export default defineComponent({
    setup () {

        const data = reactive(new initData())
        onMounted(() => {
                getgoods()
        })
        const getgoods = () =>
        {goodlist().then(res=>{
            // console.log(res)
            data.list=res.data
            data.selectData.count=res.data.length

        })};
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
            let arr :listInt[]=[]//定义数组，用于查询过后的要展示的数据
            if(data.selectData.title)//判断是否有值
           {
            arr = data.list.filter((value)=>{//将过滤出来的数组赋值给arr
                return value.title.indexOf(data.selectData.title) !== -1//如果能找到下标，就说明值为true
            })
           }
           data.selectData.count=arr.length
           data.list=arr 
        }
        //监听输入框的属性
        watch([()=>data.selectData.title],()=>{
            if(data.selectData.title==""){
                getgoods()
            }
        });
            
        
        return {...toRefs(data),
                currentChange,
                sizeChange,
                datalist,
                onSubmit
        }
    }
})
</script>

<style scoped>

</style>