<template>
  <div class="region">
    <div class="content">
      <div class="left">地区:</div> 
      <ul>
        <li :class="{active: highlightFlag == ''}" @click="changeHighlight('')">全部</li>
        <li v-for="item in hospitalRegionList" :key="item.value" :class="{active: highlightFlag == item.value}" @click="changeHighlight(item.value)">
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { reqHospitalDict } from "@/api/home";
import type { HospitalDictData, DictArr } from "@/api/home/type";

// 医院区域数组
let hospitalRegionList = ref<DictArr>([])
// 控制医院区域高亮
let highlightFlag = ref<string>('')

// 组件挂载完毕
onMounted(() => {
  // 获取医院区域数据
  getRegionList()
})

// 获取医院区域数据
const getRegionList = async () => {
  let resp: HospitalDictData = await reqHospitalDict('Beijin')
  if (resp.code == 200) {
    hospitalRegionList.value = resp.data
    
  }
}

// 点击医院区域回调
const changeHighlight = (region: string) => {  
  // 点击那个区域 响应式高亮赋值那个region值
  highlightFlag.value = region
}
</script>

<script lang="ts">
export default {
  name: 'Region'
}
</script>

<style scoped lang="scss">
.region {
  color: #7f7f7f;
  margin-top: 10px;

  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 40px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        margin-right: 10px;
        margin-bottom: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer; 
      }
    }
  }
}

</style>