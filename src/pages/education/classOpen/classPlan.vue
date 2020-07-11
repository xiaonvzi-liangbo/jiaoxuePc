<template>
  <div class="app-container">
    <div class="choose">
      <div class="school">
        <div
          :class="schoolVal==index?'on':''"
          class="schoolItem"
          @click="chooseSchool(index)"
          v-for="(item,index) in 8"
          :key="index"
        >{{item}}</div>
      </div>
      <div class="chooseMajor">
        <div class="project">
          <div class="text">所属项目：</div>
          <el-select v-model="projectVal" class="filter-item">
            <el-option v-for="(item,index) in 7" :key="index" :label="item" :value="index" />
          </el-select>
        </div>
        <div class="major" v-if="projectVal!=2">
          <div class="text">所属专业：</div>
          <el-select v-model="majorVal" class="filter-item">
            <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
          </el-select>
        </div>
      </div>
    </div>
    <div class="screen">
      <div class="province">
        <div class="text">所属地区</div>
        <el-select v-model="provinceVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('province')"
            :key="index"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </div>
      <div class="qualifications">
        <div class="text">课程类型</div>
        <el-select v-model="kcTypeVal" class="filter-item">
          <el-option v-for="(item,index) in 5" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="state">
        <div class="text">授课老师</div>
        <el-select v-model="teacherVal" class="filter-item">
          <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="time">
        <div class="text">学期时间</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <el-input placeholder="查询提示：课程名称/创建人" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
    </div>
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
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column
        v-for="(item,index) in tabHeader"
        :key="index"
        :label="item.name"
        align="center"
        width="80"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="$t('table.actions')"
        align="center"
        width="230"
        class-name="fixed-width"
      >
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
    <!-- 创建开考计划弹窗 -->
    <el-dialog :title="addPlan?'创建开考计划':'编辑开考计划'" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :model="tempArticleData"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item label="所属省份">
          <el-select
            v-model="tempArticleData.project"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
          </el-select>
        </el-form-item>
        <el-form-item label="主考院校">
          <el-select
            v-model="tempArticleData.schoole"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
          </el-select>
        </el-form-item>
        <el-form-item label="专业名称">
          <el-select
            v-model="tempArticleData.major"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程名称">
          <el-select
            v-model="tempArticleData.kcName"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程代码">
          <el-input v-model="tempArticleData.kcCode" />
        </el-form-item>
        <el-form-item label="考试日期">
          <el-date-picker v-model="tempArticleData.time" type="date" placeholder="选择日期" />
        </el-form-item>

        <el-form-item label="具体时段">
          <div class="time-select">
            <el-time-select
              placeholder="起始时间"
              v-model="tempArticleData.startTime"
              :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
            ></el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="tempArticleData.endTime"
              :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: tempArticleData.startTime}"
            ></el-time-select>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="addPlan?createData():''">确定</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogPageviewsVisible" title="Reading statistics">
      <el-table :data="pageviewsData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pageviews" label="Pageviews" />
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPageviewsVisible = false">{{ $t('table.confirm') }}</el-button>
      </span>
    </el-dialog>
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
import { exportJson2Excel } from "@/utils/excel";

import { formatJson } from "@/utils";
import Pagination from "@/components/Pagination/index.vue";

@Component({
  name: "ComplexTable",
  components: {
    Pagination
  }
})
export default class extends Vue {
  schoolVal: number = 0; //院校
  projectVal: number = 0; //项目
  majorVal: number = 0; //专业
  screenVal: string = ""; //搜索
  provinceVal: number = 0; //省份
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
  addPlan: boolean = true; //弹窗创建或是修改
  private downloadLoading = false;
  list: any[] = [];

  tabHeader = [
    { name: "序号", val: "id" },
    { name: "专业代码", val: "id" },
    { name: "专业名称", val: "id" },
    { name: "学历层次", val: "id" },
    { name: "所属省份", val: "id" },
    { name: "主考院校", val: "id" },
    { name: "课程名称", val: "id" },
    { name: "课程代码", val: "id" },
    { name: "考试日期", val: "id" },
    { name: "考试状态", val: "id" },
    { name: "具体时间", val: "id" },
    { name: "创建时间", val: "id" },
    { name: "创建人", val: "id" }
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

  created() {
    this.getList();
  }
  //院校选中
  chooseSchool(val: number) {
    this.schoolVal = val;
  }
  //创建开考计划按钮点击事件
  private handleCreate() {
    this.addPlan = true;
    this.dialogFormVisible = true;
  }
  //创建开考计划
  private createData() {
    console.log(this.tempArticleData);
    this.$notify({
      title: "成功",
      message: "创建成功",
      type: "success",
      duration: 2000
    });
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
    this.addPlan = false;
    // this.tempArticleData = Object.assign({}, row);
    // this.tempArticleData.timestamp = +new Date(this.tempArticleData.timestamp);
    this.dialogFormVisible = true;
    /*   this.$nextTick(() => {
      (this.$refs.dataForm as Form).clearValidate();
    }); */
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
    this.total = data.total;
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
.screen {
  border: 1px solid #d1d1d1;
  padding: 20px;
  display: flex;
  .screen-item {
    width: 380px;
    margin-left: 20px;
    .el-input__inner {
      border: 1px solid #8c8c8c;
    }
  }

  .qualifications,
  .state,
  .time {
    display: flex;
    align-items: center;
    margin-left: 20px;
    flex-shrink: 1;
  }
  .province {
    display: flex;
    align-items: center;
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