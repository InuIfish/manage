<template>
    <div>

    <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
        <el-button type="primary" @click="addRole">添加</el-button>
    </el-form-item>
</el-form>


<el-table :data="list" border style="width: 100%">
<el-table-column prop="roleId" label="ID" width="180" />
<el-table-column prop="roleName" label="职位" width="180" />
<el-table-column prop="authority" label="操作" >
<template #default="scope">
        <el-button
        link
        size="small"
        @click="changeRole(scope.row)"
        >
            修改
        </el-button>
        
      </template>
</el-table-column>


</el-table>
</div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue'
import { getRolelist } from '@/request/api';
import { InitData } from '@/type/role';
import { ElMessage, ElMessageBox } from 'element-plus'
export default defineComponent({
    setup () {

        const  data = reactive(new InitData())

        onMounted(() =>{
            getRolelist().then(res =>{
                data.list=res.data
            })
        })


    const addRole  = () =>{
    ElMessageBox.prompt('输入角色名', '添加', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
  }).then(({ value }) => {//value表示在输入框中填写的值
    if(value){//判断输入框内是否有值
        data.list.push({roleId:data.list.length+1,roleName:value,authority:[]})
    }
      ElMessage({
        type: 'success',
        message: `${value}添加成功`,
      });
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '取消',
      });
    });
        };



        return { ...toRefs(data),
        addRole}
    }
})
</script>

<style scoped>

</style>