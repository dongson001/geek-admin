<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="formRef"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="账号" prop="userName">
      <el-input v-model="ruleForm.userName" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input
        type="password"
        v-model="ruleForm.pass"
        autocomplete="off"
      ></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">提交</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { setToken } from '../utils/utils';
const store = useStore();
const router = useRouter();
let formRef = ref(null);
let ruleForm = ref({
  userName: '',
  pass: '',
});
let rules = ref({
  pass: [{ required: true, trigger: 'blur', message: '请输入密码' }],
  userName: [{ required: true, trigger: 'blur', message: '请输入账号' }],
});
const submitForm = function () {
  formRef.value.validate(async (valid) => {
    console.log(valid);
    if (valid) {
      const { code, data } = await store.dispatch('login', ruleForm.value);
      if (code === 0) {
        setToken(data)
        router.replace('/');
      } else {
        message({ message: '登录失败', type: 'error' });
      }
    } else {
    }
  });
};

const resetForm = function () {};
</script>

<style lang="scss" scoped></style>
