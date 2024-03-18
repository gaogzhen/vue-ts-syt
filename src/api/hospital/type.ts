// 详情数据接口类型ts

// 返回数据类型
export interface ResponseData {
  code: number,
  message: string,
  ok: boolean
}

// 预约规则数据
export interface Rule {
  "cycle": number,
  "releaseTime": string,
  "stopTime": string,
  "quitDay": number,
  "quitTime": string,
  "rule": []
}

// 医院信息数据
export interface HospitalData {
  "id": string,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {
    "hostypeString": string,
    "fullAddress": string
  },
  "hoscode": string,
  "hosname": string,
  "hostype": string,
  "provinceCode": string,
  "cityCode": string,
  "districtCode": string,
  "address": string,
  "logoData": string,
  "intro": string,
  "route": string,
  "status": number,
  "bookingRule": null
}

// 医院详情数据类型
export interface HospitalDetail extends ResponseData{
  data: {
    bookingRule: Rule,
    hospital: HospitalData
  }
}