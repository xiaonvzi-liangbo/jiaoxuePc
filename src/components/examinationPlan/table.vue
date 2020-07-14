
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
    });
    switch (this.projectVal) {
      case 1:
        this.tabHeader = [
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

        break;

      default:
        break;
    }
    let data: any = await active.getKind(this.schoolKind);
    console.log(data, "============");
    this.schoolDetail = await data.data;
  }
  //编辑
  private handleUpdate(row: any) {
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
}
</script>
<style lang="scss" scoped>
</style>