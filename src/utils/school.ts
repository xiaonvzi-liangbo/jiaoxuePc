import request from '@/utils/request'
export class Active {


  // 获取活动详情
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
}