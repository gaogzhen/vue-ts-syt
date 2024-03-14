<template>
  <div>
    <!-- 首页轮播图的结构 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
    <!-- 展示底部医院结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级 -->
        <Level />
        <!-- 区域 -->
        <Region />
        <!-- 展示医院组件 -->
        <div class="hospital">
          <!-- 医院列表详情 -->
          <Card class="item" v-for="item in hospitalList" :key="item.id" :hospitalInfo="item" />
        </div>
        <!-- 分页器 -->
        <el-pagination v-model:current-page="pageNo" v-model:page-size="pageSize" :page-sizes="[10, 20, 50, 100]"
          :background="true" layout="prev, pager, next, jumper,->, sizes, total" :total="total"
          @current-change="currentChange" @size-change="sizeChange" />
      </el-col>
      <el-col :span="4">345</el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// 引入首页轮播图组件
import Carousel from './carousel/index.vue'
// 引入搜索组件
import Search from './search/index.vue'
// 引入首页等级组件
import Level from './level/index.vue'
// 引入区域组件
import Region from './region/index.vue'
// 引入医院列表组件
import Card from './card/index.vue'

// 分页器所需数据
import { onMounted, ref } from "vue";
import { reqHospitalList } from "@/api/home";
import type {Content, HospitalListData} from '@/api/home/type'

let pageNo = ref<number>(1);
let pageSize = ref<number>(10);
let total = ref<number>(0)
let hospitalList = ref<Content>([])

onMounted(() => {
  getHospitalList()
})

// 获取医院列表数据
const getHospitalList = async () => {
  let result: HospitalListData = await reqHospitalList(pageNo.value, pageSize.value)
  if (result.code == 200) {
    let data = result.data
    hospitalList.value = data.content
    total = data.totalElements
  }
}

// 分页器页码变化回调
const currentChange = () => {
  getHospitalList()
}
// 每页数量变化回调
const sizeChange = () => {
  // 默认查询第一页
  pageNo.value = 1;
  getHospitalList()
}

</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 48%;
    margin: 10px 0;
  }
}
</style>