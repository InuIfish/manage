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
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
    setup () {
        const data = reactive({
            ruleForm:{
                account:"",
                password: '',
            },
            rules:{account: [
            { required: true, message: '请输入账号', trigger: 'blur' },
            { min: 3, max: 5, message: '账号长度在3-5个字', trigger: 'blur' }],
            password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 16, message: '密码长度为8-16个字', trigger: 'blur' }]
            }
        })

        return {
            ...toRefs(data),
        }
    }
})
</script>

<style lang="scss" scoped>
.login-box{
    width: 100%;
    height: 100%;
    background: url('../assets/IMG_0073.JPG');
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