<template>
  <div class="search">
    <el-autocomplete 
    v-model="hosname"
    :fetch-suggestions="fetchData"
    :trigger-on-focus="false"
    placeholder="请你输入医院名称" 
    clearable 
    @select="goDetail"
    />
    <el-button type="primary" size="default" :icon="Search">搜索</el-button>
    
  </div>
</template>

<script setup lang="ts">
// 引入element-plus图标
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { reqHospitalListByName } from "@/api/home/index";
import { Content, HospitalListData } from "@/api/home/type";

// 创建路由器对象
let $router = useRouter()
// 搜索关键字：医院名称
let hosname = ref<String>('')



// 搜索组件回调
const fetchData = async (keyword: string, cb: any) => {
    // 用户输入完关键字，请求医院数据
    let ret: HospitalListData =  await reqHospitalListByName(keyword)
    if (ret.code == 200) {
      // 转换数据为组件需求的格式
      let showData = ret.data.map(item => {
        return {
          value: item.hosname, // 医院名称
          hoscode: item.hoscode //医院编码
        }
      })
      cb(showData)
    }
}

// 选中回调：跳转医院详情页
const goDetail = (item: any) => {
  // 跳转医院详情页
  $router.push({path: '/hospital/register', query: {hoscode: item.hoscode}})
  
}

</script>

<script lang="ts">
export default {
  name: 'Search'
}
</script>
<style scoped lang="scss">
.search {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0px;

  ::v-deep(.el-input__wrapper) {
    width: 600px;
    margin-right: 10px;
  }
}
</style>