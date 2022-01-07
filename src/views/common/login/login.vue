<template>
  <div>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<script>
// import { getInstitutionList } from 'api/admin/institution'
export default {
  methods: {
    handleLogin() {
      // 登录api、操作、判断
      this.$router.push({ name: 'Admin' })

      // this.$message.error('aaa');

      // getInstitutionList().then(res => {
      //   console.log(res);
      // })
    }
  }
}
</script>

<style>

</style>
