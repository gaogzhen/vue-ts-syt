<template>
  <div> 
    <!-- 首页轮播图的结构 -->
    <Carousel/>
    <!-- 首页搜索医院的表单区域 -->
    <Search/>
    
  </div>
</template>

<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from './carousel/index.vue'
// 引入搜索组件
import Search from './search/index.vue'
</script>

<style scoped>

</style>