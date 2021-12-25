<template>
  <div class="home">
    <el-button @click="qqq">111</el-button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  methods: {
    qqq() {
      this.$router.push('/institution');
    }
  }
}
</script>
