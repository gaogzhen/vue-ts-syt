<script setup lang="ts">
</script>

<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop/>
    <!-- 展示路由组件区域 -->
    <div class="content">
      xxxxx
    </div>
    <!-- 底部组件 -->
    <HospitalBottom/>
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
    font-size: 14px;
  }
  .bottom {
    width: 100%;
    height: 50px;
  }
}
</style>
