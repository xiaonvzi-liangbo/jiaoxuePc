
<template>
  <!-- 开课计划添加弹窗表格 -->
  <div>
    <div class="sreen">
      <div class="sreen-list" v-if="projectVal!=1">所属学院:{{schoolDetail.name}}</div>
      <div class="sreen-list">所属项目:计算机等级</div>
      <div class="sreen-list" v-if="projectVal==1">所属专业:心理健康教育</div>
      <div class="sreen-list">所属课程: 计算机二级考试</div>

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
  tableKey: number = 0;

  schoolDetail: any = [];
  tabHeader: any = [
    { name: "选择课程章节名称", val: "id" },
    { name: "教师", val: "title" }
  ];
  screenVal: string = "";
  list: any = [];
  async created() {
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