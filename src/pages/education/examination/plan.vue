<template>
  <div class="app-container">
    <schoole-choose from="examinationPlan"></schoole-choose>
    <screen></screen>
    <div class="buttonRight">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        @click="handleCreate"
      >创建开考计划</el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        @click="handleDownload"
      >导入开考计划</el-button>
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
    <add-plan
      :addPlanType="addPlanType"
      @dialogChang="dialogChang"
      :dialogFormVisible="dialogFormVisible"
    ></add-plan>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Form } from "element-ui";
import { cloneDeep } from "lodash";
import {
  getArticles,
  getPageviews,
  createArticle,
  updateArticle,
  defaultArticleData
} from "@/api/articles";
import { IArticleData } from "@/api/types";
import { exportJson2Excel } from "@/utils/excel";
import { formatJson } from "@/utils";
import Pagination from "@/components/Pagination/index.vue";
import screen from "@/components/examinationPlan/screen.vue";
import schooleChoose from "@/components/examinationPlan/schooleChoose.vue";
import addPlan from "@/components/examinationPlan/addPlan.vue";

import { log } from "util";

@Component({
  name: "ComplexTable",
  components: {
    Pagination,
    screen,
    schooleChoose,
    addPlan
  }
})
export default class extends Vue {
  addPlanType: boolean = true; //弹窗创建或是修改
  private downloadLoading = false;
  list: any[] = [];
  projectVal = "";
  tabHeader = [
    { name: "序号", val: "id" },
    { name: "专业代码", val: "title" },
    { name: "专业名称", val: "type" },
    { name: "学历层次", val: "timestamp" },
    { name: "所属省份", val: "title" },
    { name: "主考院校", val: "status" },
    { name: "课程名称", val: "status" },
    { name: "课程代码", val: "timestamp" },
    { name: "考试日期", val: "status" },
    { name: "考试状态", val: "status" },
    { name: "具体时间", val: "timestamp" },
    { name: "创建时间", val: "timestamp" },
    { name: "创建人", val: "status" }
  ];

  private tableKey = 0;
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
  private pageviewsData = [];

  created() {
    this.getList();
  }
  //关闭弹窗
  dialogChang() {
    this.dialogFormVisible = false;
  }
  //创建开考计划按钮点击事件
  private handleCreate() {
    this.addPlanType = true;
    this.dialogFormVisible = true;
  }

  //导出数据
  private handleDownload() {
    this.downloadLoading = true;
    const tHeader = ["timestamp", "title", "type", "importance", "status"];
    const filterVal = ["timestamp", "title", "type", "importance", "status"];
    const data = formatJson(filterVal, this.list);
    exportJson2Excel(tHeader, data, "table-list");
    this.downloadLoading = false;
  }
  //编辑
  private handleUpdate(row: any) {
    this.addPlanType = false;
    this.dialogFormVisible = true;
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
  private async getList() {
    this.listLoading = true;
    const { data } = await getArticles(this.listQuery);
    this.list = data.items;
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

.buttonRight {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 20px;
}

.pagination-container {
  float: right;
}
</style>