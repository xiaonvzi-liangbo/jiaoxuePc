
<template>
  <!-- 开课计划添加弹窗表格 -->
  <div>
    <div class="sreen">
      <div class="sreen-list">所属学院:{{schoolDetail.name}}</div>
      <div class="sreen-list" v-if="projectVal!=2">所属项目:计算机等级</div>
      <div class="sreen-list" v-if="projectVal==1||projectVal==3||projectVal==2">所属专业:心理健康教育</div>
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
    </div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column
        v-for="(item,index) in tabHeader"
        :key="index"
        :label="item.name"
        align="center"
      >
        <template slot-scope="{row}">
          <span>{{row[item.val]}}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Bus from "../../utils/bus.js";
import { Active } from "../../utils/school";
import { log } from "util";
let active = new Active();
@Component({
  name: "screen",
  components: {}
})
export default class extends Vue {
  @Prop() schoolKind!: number;
  @Prop() schoolVal!: number;
  @Prop() projectVal!: number;
  schoolDetail: any = [];
  tabHeader: any = [];
  screenVal: string = "";
  list: any = [];
  async created() {
    if (this.schoolKind == 16) {
      this.tabHeader = [
        { name: "专业", val: "id" },
        { name: "考试科目", val: "title" },
        { name: "考试时间", val: "timestamp" }
      ];
    } else if (this.schoolKind == 13) {
      this.tabHeader = [
        { name: "鉴定级别", val: "id" },
        { name: "鉴定形式", val: "title" },
        { name: "考试科目", val: "timestamp" },
        { name: "考试批次", val: "title" },
        { name: "考试日期", val: "timestamp" }
      ];
    } else if (this.schoolKind == 18) {
      this.tabHeader = [
        { name: "科目名称", val: "id" },
        { name: "级别", val: "title" },
        { name: "科目代码", val: "timestamp" },
        { name: "考试方式", val: "title" },
        { name: "考试日期", val: "timestamp" }
      ];
    } else {
      switch (this.projectVal) {
        case 1:
          this.tabHeader = [
            { name: "  专业代码", val: "id" },
            { name: "课程名称", val: "title" },
            { name: "课程代码", val: "type" },
            { name: "主考学校", val: "timestamp" },
            { name: "考试时间", val: "title" }
          ];
          break;
        case 2:
          this.tabHeader = [
            { name: "课程阶段", val: "id" },
            { name: " 考试科目", val: "title" },
            { name: "所属省份", val: "type" },
            { name: "考试时间", val: "timestamp" }
          ];
          break;
        case 3:
          this.tabHeader = [
            { name: "学科门类", val: "id" },
            { name: "门类代码", val: "title" },
            { name: "考试科目", val: "type" },
            { name: "考试时间", val: "timestamp" }
          ];
          break;
        case 5:
          this.tabHeader = [
            { name: "考试种类", val: "id" },
            { name: "考试代码", val: "title" },
            { name: "考试时间", val: "timestamp" }
          ];
          break;
        case 8 || 9:
          this.tabHeader = [
            { name: "所属门类", val: "id" },
            { name: "学位类型", val: "title" },
            { name: "学科专业", val: "type" },
            { name: "考试时间", val: "timestamp" }
          ];
          break;

        case 10:
          this.tabHeader = [
            { name: "门类", val: "id" },
            { name: "学位类型", val: "title" },
            { name: "学科专业", val: "type" },
            { name: "考试时间", val: "timestamp" }
          ];
          break;
        default:
          break;
      }
    }
    let data: any = await active.getKind(this.schoolKind);
    console.log(data, "============");
    this.schoolDetail = await data.data;
  }
}
</script>
<style lang="scss" scoped>
.sreen {
  line-height: 30px;
  position: relative;
  bottom: 25px;
  border-top: 1px solid #dfe6ec;
  padding-top: 14px;
  .sreen-list {
    display: inline-block;
    margin-right: 20px;
  }
  .screen-item {
    float: right;
    width: 328px;
    font-size: 8px;
  }
}
.el-table {
  position: relative;
  bottom: 10px;
}
</style>