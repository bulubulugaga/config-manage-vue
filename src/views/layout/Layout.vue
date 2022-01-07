<template>
  <el-container class="layout-container">
    <el-header>
      <div style="width: 100%;height: 100%; background: #D3DCE6;">Header</div>
    </el-header>
    <el-container class="layout-inside-container">
      <el-aside width="200px">

      </el-aside>
      <el-main>
        Main
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    console.log(this.$router);
  }
}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
  flex: 0 0 auto;
}
.layout-inside-container {
  height: 100%;
  overflow-y: auto;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
