<template>
  <div>
    <el-button type="primary" @click="handleLogin">登录</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogin() {
      // 登录api、操作、判断
      this.$router.push({ name: 'Institution' })
    }
  }
}
</script>

<style>

</style>