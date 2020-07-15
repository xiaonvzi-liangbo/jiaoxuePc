import request from '@/utils/request'
import { Component, Vue } from "vue-property-decorator";
import { WebClient } from "./webClient";
export class Active extends WebClient {
  // 获取院校列表
  async getAllKindList() {
    let data: any = await request({
      url: `/wangxiao/kind/getAllKindList`,
      method: 'GET',
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
      method: 'GET',
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
  // /院校列表分页
  async getKindListPage(pageNum: number, pageSize: number, name?: string) {
    let params = this.combin({ pageNum: pageNum, pageSize: pageSize, }, { name: name });
    let data: any = await request({
      url: `/wangxiao/kind/getKindListPage`,
      method: 'GET',
      params: params
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
  //查询省级城市分页
  async getFuAreaListPage(pageNum: number, pageSize: number, areaName?: string) {
    let params = this.combin({ pageNum: pageNum, pageSize: pageSize, }, { areaName: areaName });
    let data: any = await request({
      url: `/wangxiao/area/getFuAreaListPage`,
      method: 'get',
      params: params
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