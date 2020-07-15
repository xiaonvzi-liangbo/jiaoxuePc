
<template>
  <!-- 开考计划表格 -->
  <div>
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
        :width="item.val=='id'?'50':''"
      >
        <template slot-scope="{row}">
          <span>{{ row[item.val]}}</span>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" width="230" class-name="fixed-width">
        <template slot-scope="{row, $index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">编辑</el-button>
          <el-button
            v-if="row.status!=='deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    ></el-pagination>
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
  tableKey: number = 0;
  currentPage: number = 1;
  schoolKind: number = 4;
  schoolVal: number = 0;
  projectVal: number = 1;
  schoolDetail: any = [];
  tabHeader: any = [];
  screenVal: string = "";
  list: any = [];
  async created() {
    Bus.$on("projectVal", (e: any) => {
      this.schoolKind = e.schoolKind;
      this.projectVal = e.projectVal;
      this.schoolVal = e.schoolVal;
      this.setHeader();
    });
    this.getList();
    this.setHeader();
  }
  async getList() {
    let data: any = await active.getAllKindList();
    this.list = await data.data;
  }
  setHeader() {
    if (this.schoolKind == 13) {
      this.tabHeader = [
        { name: "序号", val: "id" },
        { name: "开课课程", val: "title" },
        { name: "鉴定级别", val: "type" },
        { name: "所属学年", val: "status" },
        { name: "所属学期", val: "status" },
        { name: "授课老师", val: "timestamp" },
        { name: "创建人", val: "status" },
        { name: "创建时间", val: "status" }
      ];
    } else if (this.schoolKind == 16) {
      this.tabHeader = [
        { name: "序号", val: "id" },
        { name: "开课课程", val: "title" },
        { name: "专业", val: "type" },
        { name: "所属学年", val: "status" },
        { name: "所属学期", val: "status" },
        { name: "授课老师", val: "timestamp" },
        { name: "创建人", val: "status" },
        { name: "创建时间", val: "status" }
      ];
    } else if (this.schoolKind == 18) {
      this.tabHeader = [
        { name: "序号", val: "id" },
        { name: "开课课程", val: "title" },
        { name: "级别", val: "type" },
        { name: "所属学年", val: "status" },
        { name: "所属学期", val: "status" },
        { name: "授课老师", val: "timestamp" },
        { name: "创建人", val: "status" },
        { name: "创建时间", val: "status" }
      ];
    } else {
      switch (this.projectVal) {
        case 1:
          this.tabHeader = [
            { name: "序号", val: "id" },
            { name: "开课课程", val: "title" },
            { name: "课程类型", val: "type" },
            { name: "课程代码", val: "timestamp" },
            { name: "所属地区", val: "title" },
            { name: "所属学年", val: "status" },
            { name: "所属学期", val: "status" },
            { name: "授课老师", val: "timestamp" },
            { name: "创建人", val: "status" },
            { name: "创建时间", val: "status" }
          ];
          break;
        case 2:
          this.tabHeader = [
            { name: "序号", val: "id" },
            { name: "开课课程", val: "title" },
            { name: "课程阶段", val: "type" },
            { name: "所属地区", val: "type" },
            { name: "所属学年", val: "status" },
            { name: "所属学期", val: "status" },
            { name: "授课老师", val: "timestamp" },
            { name: "创建人", val: "status" },
            { name: "创建时间", val: "status" }
          ];
          break;
        case 3:
          this.tabHeader = [
            { name: "序号", val: "id" },
            { name: "开课课程", val: "title" },
            { name: "学科门类", val: "type" },
            { name: "所属学年", val: "status" },
            { name: "所属学期", val: "status" },
            { name: "授课老师", val: "timestamp" },
            { name: "创建人", val: "status" },
            { name: "创建时间", val: "status" }
          ];
          break;
        case 5:
          this.tabHeader = [
            { name: "序号", val: "id" },
            { name: "开课课程", val: "title" },
            { name: "考试种类", val: "type" },
            { name: "所属学年", val: "status" },
            { name: "所属学期", val: "status" },
            { name: "授课老师", val: "timestamp" },
            { name: "创建人", val: "status" },
            { name: "创建时间", val: "status" }
          ];
          break;
        case 8 || 10:
          this.tabHeader = [
            { name: "序号", val: "id" },
            { name: "开课课程", val: "title" },
            { name: "学位类型", val: "type" },
            { name: "所属门类", val: "title" },
            { name: "课程类型", val: "type" },
            { name: "所属学年", val: "status" },
            { name: "所属学期", val: "status" },
            { name: "授课老师", val: "timestamp" },
            { name: "创建人", val: "status" },
            { name: "创建时间", val: "status" }
          ];
          break;
        case 9:
          this.tabHeader = [
            { name: "序号", val: "id" },
            { name: "开课课程", val: "title" },
            { name: "一级学科", val: "type" },
            { name: "二级学科", val: "title" },
            { name: "考试日期", val: "type" },
            { name: "考试状态", val: "status" },
            { name: "具体时间", val: "status" },
            { name: "创建时间", val: "status" },
            { name: "创建人", val: "status" }
          ];
          break;
        default:
          break;
      }
    }
  }
  //编辑
  private handleUpdate(row: any) {
    this.$emit("handleUpdate");
    /*  this.addPlanType = false;
    this.dialogFormVisible = true; */
  }
  //删除
  private handleDelete(row: any, index: number) {
    this.$notify({
      title: "Success",
      message: "Delete Successfully",
      type: "success",
      duration: 2000
    });
    this.list.splice(index, 1);
  }
  //表格每页个数修改
  handleSizeChange() {}
  //表格页数修改

  handleCurrentChange() {}
}
</script>
<style lang="scss" scoped>
.el-table {
  color: #000 !important;
}
.el-pagination {
  margin-top: 10px;
  float: right;
}
</style>