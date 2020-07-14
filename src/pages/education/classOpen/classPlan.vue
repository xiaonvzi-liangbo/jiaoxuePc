<template>
  <div class="app-container">
    <schoole-choose from="classPlan"></schoole-choose>
    <screen></screen>
    <div class="buttonRight">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        @click="handleCreate"
      >创建计划</el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        @click="handleDownload"
      >导出数据</el-button>
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
        :width="item.val=='id'?'50':''"
      >
        <template slot-scope="{row}">
          <span>{{ row[item.val] }}</span>
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

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form, Tree } from "element-ui";
import { cloneDeep } from "lodash";
import { exportJson2Excel } from "@/utils/excel";

import { formatJson } from "@/utils";
import Pagination from "@/components/Pagination/index.vue";
import screen from "@/components/examinationPlan/classScreen.vue";
import schooleChoose from "@/components/examinationPlan/schooleChoose.vue";
import Bus from "../../../utils/bus.js";
import { Active } from "../../../utils/school";
let active = new Active();
@Component({
  name: "ComplexTable",
  components: {
    Pagination,
    schooleChoose,
    screen
  }
})
export default class extends Vue {
  schoolList: any = "";
  schoolVal: number = 0; //院校
  projectVal: number = 1; //项目
  majorVal: number = 0; //专业
  screenVal: string = ""; //搜索
  provinceVal: number = 15; //省份
  kcTypeVal: number = 0; //课程类型
  teacherVal: number = 0; //授课老师
  timeVal: string = ""; //时间
  tempArticleData: any = {
    project: "",
    schoole: "",
    major: "",
    kcName: "",
    kcCode: "",
    time: "",
    startTime: "",
    endTime: ""
  }; //创建开考计划
  addPlanType: boolean = true; //弹窗创建或是修改
  private downloadLoading = false;
  list: any[] = [];

  tabHeader = [
    { name: "序号", val: "id" },
    { name: "开课课程", val: "title" },
    { name: "学科门类", val: "type" },
    { name: "所属学年", val: "timestamp" },
    { name: "所属学期", val: "title" },
    { name: "授课老师", val: "status" },
    { name: "创建人", val: "status" },
    { name: "创建时间", val: "timestamp" }
  ];
  private tableKey = 0;
  private total = 0;
  private listLoading = true;
  private listQuery = {
    page: 1,
    limit: 20,
    importance: undefined,
    title: undefined,
    type: undefined,
    sort: "+id"
  };
  private showReviewer = false;
  private dialogFormVisible = false;

  private dialogPageviewsVisible = false;
  private pageviewsData = [];
  async created() {
    let data = await active.getAllKindList();
    this.schoolList = data.data;
    Bus.$on("projectVal", (e: any) => {
      this.projectVal = e.projectVal;
      this.schoolVal = e.schoolVal;
    });
    this.getList();
  }
  //创建开考计划按钮点击事件
  private handleCreate() {
    this.openPage(true);
  }
  //导出数据按钮点击事件
  private handleDownload() {
    this.downloadLoading = true;
    const tHeader = ["timestamp", "title", "type", "importance", "status"];
    const filterVal = ["timestamp", "title", "type", "importance", "status"];
    const data = formatJson(filterVal, this.list);
    exportJson2Excel(tHeader, data, "table-list");
    this.downloadLoading = false;
  }
  //编辑按钮点击事件
  private handleUpdate(row: any) {
    this.openPage(false);
  }
  //删除按钮点击事件
  private handleDelete(row: any, index: number) {
    this.$notify({
      title: "Success",
      message: "Delete Successfully",
      type: "success",
      duration: 2000
    });
    this.list.splice(index, 1);
  }
  //打开编辑页面
  openPage(addPlanType: boolean) {
    let title = "";
    for (let i in this.schoolList[this.schoolVal].types) {
      let item = this.schoolList[this.schoolVal].types[i];
      if (this.projectVal == item.kind) {
        title = item.name;
      }
    }
    let data: any = {
      schoolKind: this.schoolList[this.schoolVal].kind,
      schoolVal: this.schoolVal,
      projectVal: this.projectVal,
      title: title,
      addPlanType: addPlanType
    };
    this.$router.push({
      path: "/addClassPlan",
      query: data
    });
  }
  private async getList() {
    this.listLoading = true;

    // Just to simulate the time of the request
    setTimeout(() => {
      this.listLoading = false;
    }, 0.5 * 1000);
  }
}
</script>
<style lang="scss" scoped>
.filter-item {
  width: 130px;
}
.choose {
  border: 1px solid #dfe6ec;
  width: 100%;
  height: 150px;
  margin-bottom: 20px;

  .school {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 20px 20px 20px 0;
    .schoolItem {
      border: 1px solid #dfe6ec;
      width: 210px;
      height: 62px;
      line-height: 62px;
      text-align: center;
      color: #626261;
      margin-left: 20px;
    }
    .schoolItem:hover {
      color: #fff;
      background-color: #40a9ff;
    }
    .on {
      color: #fff;
      background-color: #0099ff;
    }
  }
  .chooseMajor {
    width: 100%;
    padding: 0 20px;
    display: flex;
    .text {
      font-weight: bold;
    }
    .project,
    .major {
      display: flex;
      align-items: center;
    }
    .project {
      margin-right: 20px;
    }
  }
}

.buttonRight {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 20px;
}
.time-select {
  display: flex;
  .el-date-editor {
    margin-right: 20px;
  }
}
.pagination-container {
  float: right;
}
</style>