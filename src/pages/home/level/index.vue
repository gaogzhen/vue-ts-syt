<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div> 
      <ul class="hospital">
        <li :class="{active: highlightFlag == ''}" @click="changeHighlight('')">全部</li>
        <li v-for="item in hospitalLevelList" :key="item.value" :class="{active: highlightFlag == item.value}" @click="changeHighlight(item.value)">
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

// 医院等级数组
let hospitalLevelList = ref<DictArr>([])
// 控制医院等级高亮
let highlightFlag = ref<string>('')

// 组件挂载完毕
onMounted(() => {
  // 获取医院等级数据
  getLevelList()
})

// 获取医院等级数据
const getLevelList = async () => {
  let resp: HospitalDictData = await reqHospitalDict('Hostype')
  if (resp.code == 200) {
    hospitalLevelList.value = resp.data
    
  }
}

// 点击医院等级回调
const changeHighlight = (level: string) => {  
  // 点击那个等级 响应式高亮赋值那个level值
  highlightFlag.value = level
  // 触发自定义事件：将医院等级参数回传给父组件
  $emit('getLevel', level)
}

let $emit = defineEmits(['getLevel'])
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  h1 {
    font-weight: 900;
    margin: 10px 0;
  }

  .content {
    display: flex;
    .left {
      margin-right: 10px;
      width: 40px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
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