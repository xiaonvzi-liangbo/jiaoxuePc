import request from '@/utils/request'
import { Component, Vue } from "vue-property-decorator";
export class WebClient extends Vue {
  async functionThen(data: any) {
    if (data.code == 0) {
      this.$notify({
        title: "操作成功",
        message: data.msg,
        type: "success",
        duration: 2000
      });
    } else {
      this.$notify({
        title: "错误",
        message: data.msg,
        type: "error",
        duration: 2000
      });
    }
  }
  protected combin<T1, T2>(objA: T1, objB: T2): T1 & T2 {
    let r: any = {};
    if (objA != null) {
      for (let name in objA) {
        if (objA[name] !== undefined) {
          r[name] = objA[name];
        }
      }
    }
    if (objB != null) {
      for (let name in objB) {
        if (objB[name] !== undefined) {
          r[name] = objB[name];
        }
      }
    }

    return r;
  }
}