<template>
  <div class="app-container">
    <div class="screen">
      <div>搜索</div>
      <el-input placeholder="请输入学院名称" v-model="screenVal" class="screen-item"></el-input>
      <el-button type="primary" @click="getList()">查询</el-button>
    </div>
    <div class="buttonRight">
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        @click="handleCreate"
      >添加学院</el-button>
    </div>
    <el-table :key="tableKey" :data="list" border fit highlight-current-row style="width: 100%;">
      <el-table-column type="selection" width="40"></el-table-column>
      <el-table-column
        v-for="(item,index) in tabHeader"
        :key="index"
        :label="item.name"
        align="center"
        :width="item.val=='kind'?'50':''"
      >
        <template slot-scope="{row}">
          <div
            v-if="item.val=='status'"
            class="iconRound"
            :class="row[item.val]==0?'iconRoundRed':'iconRoundGreen'"
          ></div>
          <span v-if="item.val=='status'">{{ row[item.val]==1?'正常':'禁用'}}</span>
          <span v-else-if="item.val=='organization'">{{ row[item.val]=='1'?'新里程（山东）教育信息有限公司':''}}</span>
          <span v-else>{{ row[item.val]}}</span>
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
      @prev-click="prevClick"
      @next-click="nextClick"
      :total="total"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
    ></el-pagination>
    <el-dialog :title="addPlanType?'添加学院':'编辑学院'" :visible.sync="dialogFormVisible">
      <el-form label-position="right" label-width="100px" style="width: 400px; margin-left:50px;">
        <el-form-item label="学院名称：">
          <el-input placeholder="请输入省份名称" v-model="form.schoole" />
        </el-form-item>
        <el-form-item label="选择机构">
          <el-select v-model="form.mechanism" class="filter-item" placeholder="Please select">
            <el-option
              v-for="(item) in $t('mechanism')"
              :key="item.key"
              :label="item.name"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChang()">取消</el-button>
        <el-button type="primary" @click="addPlanType?addProvince():editProvince()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Active } from "../../utils/school";
import { WebClient } from "../../utils/webClient";
import request from "@/utils/request";
let webClient = new WebClient();
let active = new Active();
@Component({
  name: "ComplexTable",
  components: {}
})
export default class extends Vue {
  screenVal: string = ""; //搜送内容
  list: any[] = [];
  addPlanType: boolean = true;
  private dialogFormVisible = false;
  coolegeKind: number | null = null;
  tableKey: number = 0; //表单key
  currentPage: number = 1; //当前页数
  total: number = 0; //总条数
  size: number = 20; //每页数量
  tabHeader: any = [
    { name: "序号", val: "kind" },
    { name: "学院名称", val: "name" },
    { name: "所属机构", val: "organization" },
    { name: "状态", val: "status" },
    { name: "创建时间", val: "creatTime" },
    { name: "备注", val: "note" }
  ];
  form: any = {
    schoole: "",
    mechanism: "0",
    desc: ""
  };
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
  //编辑
  private handleUpdate(row: any) {
    console.log(row, "===============row");
    this.form.schoole = row.name;
    this.coolegeKind = row.kind;
    this.addPlanType = false;
    this.dialogFormVisible = true;
  }

  async getList() {
    let data;
    if (this.screenVal) {
      data = await active.getKindListPage(
        this.currentPage,
        this.size,
        this.screenVal
      );
    } else {
      data = await active.getKindListPage(this.currentPage, this.size);
    }
    this.list = await data.data.records;
    this.total = await data.data.total;
  }
  //表格每页个数修改
  handleSizeChange(val: number) {
    this.size = val;
    this.getList();
  }
  //表格页数修改
  handleCurrentChange(val: number) {
    this.currentPage = val;
    this.getList();
  }
  //上一页
  prevClick() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.getList();
    }
  }
  //下一页
  nextClick() {
    this.currentPage++;
    this.getList();
  }
  //添加学院
  async addProvince() {
    let status;
    if (this.form.delivery) {
      status = 0;
    } else {
      status = 1;
    }
    let data: any = await request({
      url: `/wangxiao/kind/addKind`,
      method: "POST",
      params: {
        name: this.form.schoole
      }
    });
    webClient.functionThen(data);
    if (data.code == 0) {
      this.getList();
      this.dialogFormVisible = false;
    }
  }
  //编辑学院
  public async editProvince() {
    let status;
    if (this.form.delivery) {
      status = 0;
    } else {
      status = 1;
    }
    let data: any = await request({
      url: `/wangxiao/kind/updateKind`,
      method: "POST",
      params: {
        kind: this.coolegeKind,
        name: this.form.schoole
      }
    });
    webClient.functionThen(data);
    if (data.code == 0) {
      this.getList();
      this.dialogFormVisible = false;
    }
  }
  //删除
  private async handleDelete(row: any, index: number) {
    let data: any = await request({
      url: `/wangxiao/kind/deleteKind`,
      method: "POST",
      params: {
        kind: row.kind
      }
    });
    webClient.functionThen(data);
    if (data.code == 0) {
      this.list.splice(index, 1);
    }
  }
}
</script>
<style lang="scss" scoped>
.filter-item {
  width: 130px;
}
.screen {
  border: 1px solid #d1d1d1;
  padding: 20px;
  display: flex;
  align-items: center;
  .screen-item {
    width: 280px;
    margin: 0 20px;
    .el-input__inner {
      border: 1px solid #8c8c8c;
    }
  }
  .screen-div {
    display: flex;
    align-items: center;
    margin-left: 20px;
    flex-shrink: 1;
  }
  .el-range-editor.el-input__inner {
    flex-shrink: 1 !important;
  }
  .text {
    flex-shrink: 0;
    margin-right: 10px;
  }
}
.buttonRight {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px 0 20px;
}
.el-pagination {
  margin-top: 10px;
  float: right;
}
.iconRound {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
  line-height: 33px;
  margin-right: 20px;
}
.iconRoundRed {
  background-color: crimson;
}
.iconRoundGreen {
  background-color: chartreuse;
}
</style>