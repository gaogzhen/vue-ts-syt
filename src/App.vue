<template>
  <div class="container">
    <!-- 顶部全局组件 -->
    <HospitalTop/>
    <!-- 展示路由组件区域 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 底部组件 -->
    <HospitalBottom/>
    <!-- 登录组件 -->
    <Login v-if="userStore.visiable" />
  </div>
</template>

<script setup lang="ts">
import Login from '@/components/login/index.vue';
//引入用户仓库
import useUserStore from "@/store/modules/user";
let userStore = useUserStore();
</script>

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
