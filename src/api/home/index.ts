// 统一管理首页模块接口
import request from '@/utils/request';
import type { HospitalListData } from './type'

// 通过枚举管理首页模块的接口地址
enum Api {
    // 获取首页医院列表数据
    HOSPITAL_LIST = '/hosp/hospital/',
}

// 获取医院数据
export const reqHospitalList = (page:number,limit:number) => request.get<any, HospitalListData>(Api.HOSPITAL_LIST+`${page}/${limit}`)
