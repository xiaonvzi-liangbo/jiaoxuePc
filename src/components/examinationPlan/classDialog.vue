
<template>
  <!-- 开课计划添加弹窗表格 -->
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
import { log } from 'util';
let active = new Active();
@Component({
  name: "screen",
  components: {}
})
export default class extends Vue {
  @Prop() schoolKind!: number;
  @Prop() schoolVal!: number;
  @Prop() projectVal!: number;
  tabHeader: any = [];
  async created() {
    switch (this.projectVal) {
      case 1:
        this.tabHeader = [
          { name: "序号", val: "id" },
          { name: "开课课程", val: "title" },
          { name: "学科门类", val: "type" },
          { name: "所属学年", val: "timestamp" },
          { name: "所属学期", val: "title" },
          { name: "授课老师", val: "status" },
          { name: "创建人", val: "status" },
          { name: "创建时间", val: "timestamp" }
        ];
        break;

      default:
        break;
    }
  }
}
</script>
<style lang="scss" scoped>
.time-select {
  display: flex;
  .el-date-editor {
    margin-right: 20px;
  }
}
</style>