<template>
    <div>
        <div class="select-box">
    
    <el-form :inline="true" :model="selectData" class="demo-form-inline">
<el-form-item label="姓名">
  <el-input v-model="selectData.nickName" placeholder="请输入姓名" />
</el-form-item>
<el-form-item label="角色">
    <el-select v-model="selectData.role" class="m-2" placeholder="请选择" size="default">
    <el-option label="全部" :value = "0"/>
    <el-option
      v-for="item in roleList"
      :key="item.roleId"
      :label="item.roleName"
      :value="item.roleId"
    />
  </el-select>

</el-form-item>
<el-form-item>
  <el-button type="primary" @click="onSubmit">查询</el-button>
</el-form-item>
</el-form>

</div> 
<el-table :data="list" border style="width: 100%">

<el-table-column prop="id" label="ID" width="180" />

<el-table-column prop="nickName" label="姓名" width="180" />

<el-table-column prop="role" label="角色" >
<template #default="scope">
        <el-button
          v-for="item in scope.row.role"
        :key="item.role"
        link
        size="small"
        >
        {{item.roleName}}
        </el-button>
        
      </template>
</el-table-column>

<el-table-column prop="role" label="操作" >
<template #default="scope">
        <el-button
        link
        size="small"
        type="primary"
        @click="changeUser(scope.row)"
        >
        编辑
        </el-button>
        
      </template>
</el-table-column>
</el-table>
</div>

<el-dialog v-model="isShow" title="信息编辑">
    <el-form :model="active">
      <el-form-item label="姓名" label-width="50px">
        <el-input v-model="active.nickName" autocomplete="off" />
      </el-form-item>
      <el-form-item label="职位" label-width="50px">
        <el-select multiple v-model="active.role" placeholder="选择职位">
            <el-option
      v-for="item in roleList"
      :key="item.roleId"
      :label="item.roleName"
      :value="item.roleId"
    />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isShow = false">取消</el-button>
        <el-button type="primary" @click="updateUser"
          >更改</el-button
        >
      </span>
    </template>
  </el-dialog>

</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs,watch } from 'vue'
import { initData,ListInt } from '@/type/user';
import { getUserlist,getRolelist } from '@/request/api';
export default defineComponent({
    setup () {
            onMounted(()=>{
                getUser(),
                getRole()
            })
            const data = reactive(new initData)
        const getUser = () => { 
            getUserlist().then(res=>{
            data.list=res.data

            })
        }
        const getRole = () => { 
            getRolelist().then(res=>{
            data.roleList=res.data

            })
        }
        const onSubmit = ()=>{
            let arr :ListInt[]=[]//定义数组，用于查询过后的要展示的数据
            if(data.selectData.nickName || data.selectData.role)//判断是否有值
           {
            if(data.selectData.nickName){
            arr = data.list.filter((value)=>{//将过滤出来的数组赋值给arr
                return value.nickName.indexOf(data.selectData.nickName) !== -1//如果能找到下标，就说明值为true
            })
            }
           }
           if(data.selectData.role){
            arr = (data.selectData.nickName ? arr:data.list).filter((value)=>{//将过滤出来的数组赋值给arr
                //find方法使用的对象必须是数组对象
                return value.role.find((item)=>item.role===data.selectData.role)
            })
            }else{
                arr = data.list
            }

            data.list =arr
           }
           //监听输入框的内容，为空时重新调用方法初始化表单
           watch([()=>data.selectData.nickName,()=>data.selectData.role],()=>{
            if(data.selectData.nickName=="" || data.selectData.role == 0){
                getUser()
            }
        });
            const changeUser=(row:ListInt)=>{
                    data.active = {
                        id:row.id,
                        nickName:row.nickName,
                        userName:row.userName,
                        role:row.role.map((value)=>value.role)
                    }
                    data.isShow = true
            }
            // const updateUser = () => {
                
            // }

        return {...toRefs(data),
            onSubmit,
            changeUser,
            // updateUser
}
    }
})
</script>

<style scoped>

</style>