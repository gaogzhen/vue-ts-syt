// 统一管理首页模块接口
import request from '@/utils/request';
import type { HospitalListData, HospitalDictData } from './type'

// 通过枚举管理首页模块的接口地址
enum Api {
    // 获取首页医院列表数据
    HOSPITAL_LIST = '/hosp/hospital/',
    // 获取医院等级和地区字典数据
    HOSPITAL_DICT = '/cmn/dict/findByDictCode/',
    // 根据医院名称获取医院列表
    HOSPITAL_LIST_BY_NAME = '/hosp/hospital/findByHosname/',
}

// 获取医院数据
export const reqHospitalList = (page:number,limit:number,hostype='',districtCode='',hosname='') => request.get<any, HospitalListData>(Api.HOSPITAL_LIST+`${page}/${limit}?hostype=${hostype}&districtCode=${districtCode}&hosname=${hosname}`)
// 获取医院等级和地区字典数据
export const reqHospitalDict = (dictCode:string) => request.get<any, HospitalDictData>(Api.HOSPITAL_DICT+dictCode)
// 根据医院名称获取医院列表
export const reqHospitalListByName = (hosname:string) => request.get<any, HospitalListData>(Api.HOSPITAL_LIST_BY_NAME+hosname)
