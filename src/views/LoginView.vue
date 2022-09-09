<template>
    <div class="login-box">
        <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="80px"
    class="demo-ruleForm"
  >
  <h2>后台系统</h2>
    <el-form-item label="账号" prop="account">
      <el-input v-model="ruleForm.account"  autocomplete="off" />
    </el-form-item>
    <el-form-item label='密码' prop="password">
      <el-input
        v-model="ruleForm.password"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    
    <el-form-item>
      <el-button class = 'loginBtn' type="primary" @click="submitForm(ruleFormRef)"
        >登陆</el-button
      >
      <el-button class = 'loginBtn' @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
    </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs,ref } from 'vue'
import { LoginData } from '../type/login'
import type {FormInstance } from 'element-plus'
import {login } from '../request/api'


export default defineComponent({
    setup () {
      //实例化对象
        const data = reactive(new LoginData())
        // const data = reactive({
        //     ruleForm:{
        //         account:"",
        //         password: '',
        //     }
            
        // })

        const rules  = {
          rules:{
            account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '账号长度在3-5个字', trigger: 'blur' }],
            password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 16, message: '密码长度为8-16个字', trigger: 'blur' }]
            }

        }
        //登陆按键
        const ruleFormRef = ref<FormInstance>() 
        const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  //对表单的内容进行验证
  //valid是布尔类型，为true表示验证成功
  formEl.validate((valid) => {
    if (valid) {
      // console.log('submit!')
      login(data.ruleForm).then((res) =>{
        console.log(res);
      })
      // .catch( error=>{
      //   console.log(error)
      // }
      // )
    } else {
      console.log('error submit!')
      return false
    }
  })
}
        //重置按键
        const resetForm = () =>{
          data.ruleForm.account = "";
          data.ruleForm.password = "";
        }
        return {
            ...toRefs(data),
            ...toRefs(rules),
            resetForm,
            ruleFormRef,
            submitForm
        }
    }
})
</script>

<style lang="scss" scoped>
.login-box{
    width: 100%;
    height: 100%;
    background-image: url('../assets/380EA47A-37D4-41C3-9FE8-B1A3C4803BD1_1_105_c.jpeg');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 1px;
    text-align: center;
    .demo-ruleForm{
    margin: 200px auto;
    width: 500px;
    background: skyblue;
    padding: 40px;
    border-radius: 40px;
    .loginBtn{
        width: 48%;
    }
    h2{
        margin-bottom: 10px;
    }
}
}

</style>