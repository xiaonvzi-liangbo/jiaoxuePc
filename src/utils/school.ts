import request from '@/utils/request'
export class Active {


  // 获取活动详情
  async getSchoolList() {
    request({
      url: `/wangxiao/kind/getKindList`,
      method: 'get',

    })


  }
}