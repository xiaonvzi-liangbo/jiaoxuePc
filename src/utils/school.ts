import request from '@/utils/request'
export class Active {


  // 获取活动详情
  async getSchoolList(data: any) {
    request({
      url: `/wangxiao/kind/getKindListPage`,
      method: 'get',
      data

    })


  }
}