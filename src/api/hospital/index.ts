// 统一医院详情接口
import request from '@/utils/request';

// 枚举请求地址
enum API {
  HOSPITAL_DETAIL_URL = '/hosp/hospital/'
}

// 获取医院详情
export const reqHospitalDetail = (hoscode: string) => request.get<any, any>(API.HOSPITAL_DETAIL_URL + hoscode)