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
    <plan-table></plan-table>
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
import { IArticleData } from "@/api/types";
import { exportJson2Excel } from "@/utils/excel";
import { formatJson } from "@/utils";
import Pagination from "@/components/Pagination/index.vue";
import screen from "@/components/examinationPlan/screen.vue";
import planTable from "@/components/examinationPlan/table.vue";

import schooleChoose from "@/components/examinationPlan/schooleChoose.vue";
import addPlan from "@/components/examinationPlan/addPlan.vue";

import { log } from "util";

@Component({
  name: "ComplexTable",
  components: {
    Pagination,
    screen,
    schooleChoose,
    addPlan,
    planTable
  }
})
export default class extends Vue {
  addPlanType: boolean = true; //弹窗创建或是修改
  private downloadLoading = false;
  list: any[] = [];
  projectVal = "";

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
  private async getList() {}
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