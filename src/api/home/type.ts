// index ts datatype
// string, number, boolean, null, undefined, symbol, bigint

// 返回数据类型
export interface ResponseData {
  code: number,
  message: string,
  ok: boolean
}

// 医院列表类型
export interface HospitalData {
  id: string,
  createTime: string,
  updateTime: string,
  isDeleted: number,
  param: {
    hostypeString: string,
    fullAddress: string
  },
  hoscode: string,
  hosname: string,
  hostype: string,
  provinceCode: string,
  cityCode: string,
  districtCode: string,
  address: string,
  logoData: string,
  intro: string,
  route: string,
  status: number,
  bookingRule: {
    cycle: number,
    releaseTime: string,
    stopTime: string,
    quitDay: number,
    quitTime: string,
    rule: string[]
  }
}

// 医院列表数组类型
export type Content = HospitalData[]

// 医院列表接口返回数据ts类型
export interface HospitalListData extends ResponseData {
  data: {
    content: Content,
    pageable: {
      sort: {
        sorted: boolean,
        unsorted: boolean,
        empty: boolean
      },
      offset: number,
      pageNumber: number,
      pageSize: number,
      paged: boolean,
      unpaged: boolean
    },
    last: boolean,
    totalPages: number,
    totalElements: number,
    size: number,
    number: number,
    sort: {
      sorted: boolean,
      unsorted: boolean,
      empty: boolean
    },
    numberOfElements: number,
    first: boolean,
    empty: boolean
  }
}

// 医院字典ts类型
export interface HosDict {
  "id": number,
  "createTime": string,
  "updateTime": string,
  "isDeleted": number,
  "param": {},
  "parentId": number,
  "name": string,
  "value": string,
  "dictCode": string,
  "hasChildren": boolean

}
// 字典数组
export type DictArr = HosDict[]
// 字典接口返回数据ts类型
export interface HospitalDictData extends ResponseData {
  data: DictArr
}