<template>
  <div>
    <el-card>
      <template #header>
        <h2>登录</h2>
      </template>
      <el-form ref="formRef" label-position="top" label-width="100px" :model="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, shallowRef } from 'vue';
import { ElMessage } from 'element-plus';
import { login as Login } from '../../api/users';

const formRef = shallowRef(null);
const form = reactive({ username: '', password: '' });
const rules = reactive({
  username: [{ required: true, message: '用户名必须填写', trigger: 'change' }],
  password: [{ required: true, message: '密码必须填写', trigger: 'change' }],
});
async function login() {
  await formRef.value.validate();
  const res = await Login({ username: form.username, password: form.password });
  localStorage.setItem('token', res.data);
  ElMessage.success('登录成功');
}
</script>

<style lang="scss" scoped>
.el-card {
  width: 400px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
