<template>
  <div>
    <!-- <el-container class="layout-container">
      <el-header>
        <div style="width: 100%;height: 100%; background: red;"></div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <ul>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>1</li>
            <li>2</li>
          </ul>
        </el-aside>
        <el-container>
          <el-main>
            Main
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container> -->

    <div style="position: relative; height: 100%;">
      <div style="display: flex;
        flex-direction: column;
        flex: auto;
        background: #f5f7f9;height: 100%;
        overflow-y: auto;">

        <div style="height: 64px"></div>

        <div style="display: flex;
          flex-direction: row;
          flex: auto;
          background: #f5f7f9;
          height: 100%;
          overflow-y: auto;">
          <div style="flex: 0 0 200px;
            background: rgb(244, 244, 244);
            box-shadow: rgb(0 0 0 / 10%) 3px 0px 6px;
            overflow-y: scroll;height:100%">
              <ul>
                <li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li><li>1</li>
                <li>1</li>
                <li>1</li>
              </ul>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100%;
}
.el-header {
  padding: 0;
}
.el-aside {
  background-color: #D3DCE6;
  color: #333;
  height: calc(100vh - 60px);
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
