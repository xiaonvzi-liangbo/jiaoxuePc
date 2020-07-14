import request from '@/utils/request'
export class Active {


  // 获取院校列表
  async getAllKindList() {
    let data: any = await request({
      url: `/wangxiao/kind/getAllKindList`,
      method: 'get',
    })
    if (data) {
      if (data.code == 0) {
        return data
      } else {
        throw Error(data.msg)
      }
    } else {
      throw Error("获取数据失败")
    }
  }
  //获取院校详情
  async getKind(kind: number) {
    let data: any = await request({
      url: `/wangxiao/kind/getKind`,
      method: 'get',
      params: {
        kind: kind
      }
    })
    if (data) {
      if (data.code == 0) {
        return data
      } else {
        throw Error(data.msg)
      }
    } else {
      throw Error("获取数据失败")
    }
  }
}