import { defineStore } from "pinia";
import { reqHospitalDetail } from "@/api/hospital";
import type  { HospitalDetailResponse, HospitalDetail } from "@/api/hospital/type";
import type { DetailState } from "./interface";



const useDetailStore = defineStore('detail', {
  state: (): DetailState => ({
    // 医院详情数据
    hospitalInfo: {}
  }),
  actions: {
    // 获取医院详情方法
    async getHospitalDetail(hoscode: string) {
          let ret: HospitalDetailResponse = await reqHospitalDetail(hoscode)  
          if (ret.code == 200) {
            this.hospitalInfo = ret.data
          }
    }
  },
  getters: {
  }
})

// 对外暴露仓库
export default useDetailStore;