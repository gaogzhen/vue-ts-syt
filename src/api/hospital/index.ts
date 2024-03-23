// 统一医院详情接口
import request from '@/utils/request';
import type { HospitalDetail, DeparmentResponseData } from "./type";
// 枚举请求地址
enum API {
  HOSPITAL_DETAIL_URL = '/hosp/hospital/',
  //获取某一个医院的科室的数据
  HOSPITALDEPARMENT_URL = '/hosp/hospital/department/',
}

// 获取医院详情
export const reqHospitalDetail = (hoscode: string) => request.get<any, HospitalDetail>(API.HOSPITAL_DETAIL_URL + hoscode)
//获取医院科室的接口
export const reqHospitalDeparment = (hoscode: string) => request.get<any, DeparmentResponseData>(API.HOSPITALDEPARMENT_URL + hoscode);