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
        <div class="major">
          <div class="text">所属专业：</div>
          <el-select v-model="majorVal" class="filter-item">
            <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
          </el-select>
        </div>
      </div>
    </div>
    <div class="screen">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="input3" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="founder">
        <div class="text">创建人</div>
        <el-select v-model="founderVal" class="filter-item">
          <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="province">
        <div class="text">所属省份</div>
        <el-select v-model="provinceVal" class="filter-item">
          <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="qualifications">
        <div class="text">学历层次</div>
        <el-select v-model="qualificationsVal" class="filter-item">
          <el-option v-for="(item,index) in 5" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="state">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
    </div>
    <div class="filter-container">
      <el-select v-model="listQuery.type" :placeholder="$t('table.type')" class="filter-item">
        <el-option
          v-for="item in 6"
          :key="item.key"
          :label="item.displayName+'('+item.key+')'"
          :value="item.key"
        />
      </el-select>
      <el-select
        v-model="listQuery.sort"
        style="width: 140px"
        class="filter-item"
        @change="handleFilter"
      >
        <el-option
          v-for="item in sortOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        />
      </el-select>
      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >{{ $t('table.search') }}</el-button>
      <el-button
        class="filter-item"
        style="margin-left: 10px;"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >{{ $t('table.add') }}</el-button>
      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >{{ $t('table.export') }}</el-button>
      <el-checkbox
        v-model="showReviewer"
        class="filter-item"
        style="margin-left:15px;"
        @change="tableKey=tableKey+1"
      >{{ $t('table.reviewer') }}</el-checkbox>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
      @sort-change="sortChange"
    >
      <el-table-column
        :label="$t('table.id')"
        prop="id"
        sortable="custom"
        align="center"
        width="80"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.date')" width="180px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.timestamp | parseTime }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.title')" min-width="150px">
        <template slot-scope="{row}">
          <span class="link-type" @click="handleUpdate(row)">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.author')" width="180px" align="center">
        <template slot-scope="{row}">
          <span>{{ row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showReviewer"
        :label="$t('table.reviewer')"
        width="110px"
        align="center"
      >
        <template slot-scope="{row}">
          <span style="color:red;">{{ row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.importance')" width="105px">
        <template slot-scope="{row}">
          <svg-icon v-for="n in +row.importance" :key="n" name="star" class="meta-item__icon" />
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.readings')" align="center" width="95">
        <template slot-scope="{row}">
          <span
            v-if="row.pageviews"
            class="link-type"
            @click="handleGetPageviews(row.pageviews)"
          >{{ row.pageviews }}</span>
          <span v-else>0</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('table.status')" class-name="status-col" width="100">
        <template slot-scope="{row}">
          <el-tag :type="row.status | articleStatusFilter">{{ row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        :label="$t('table.actions')"
        align="center"
        width="230"
        class-name="fixed-width"
      >
        <template slot-scope="{row, $index}">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">{{ $t('table.edit') }}</el-button>
          <el-button
            v-if="row.status!=='published'"
            size="mini"
            type="success"
            @click="handleModifyStatus(row,'published')"
          >{{ $t('table.publish') }}</el-button>
          <el-button
            v-if="row.status!=='draft'"
            size="mini"
            @click="handleModifyStatus(row,'draft')"
          >{{ $t('table.draft') }}</el-button>
          <el-button
            v-if="row.status!=='deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >{{ $t('table.delete') }}</el-button>
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

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="tempArticleData"
        label-position="left"
        label-width="100px"
        style="width: 400px; margin-left:50px;"
      >
        <el-form-item :label="$t('table.type')" prop="type">
          <el-select v-model="tempArticleData.type" class="filter-item" placeholder="Please select">
            <el-option
              v-for="item in 8"
              :key="item.key"
              :label="item.displayName"
              :value="item.key"
            />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker
            v-model="tempArticleData.timestamp"
            type="datetime"
            placeholder="Please pick a date"
          />
        </el-form-item>
        <el-form-item :label="$t('table.title')" prop="title">
          <el-input v-model="tempArticleData.title" />
        </el-form-item>
        <el-form-item :label="$t('table.status')">
          <el-select
            v-model="tempArticleData.status"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option v-for="item in statusOptions" :key="item" :label="item" :value="item" />
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.importance')">
          <el-rate
            v-model="tempArticleData.importance"
            :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
            :max="3"
            style="margin-top:8px;"
          />
        </el-form-item>
        <el-form-item :label="$t('table.remark')">
          <el-input
            v-model="tempArticleData.abstractContent"
            :autosize="{minRows: 2, maxRows: 4}"
            type="textarea"
            placeholder="Please input"
          />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{ $t('table.cancel') }}</el-button>
        <el-button
          type="primary"
          @click="dialogStatus==='create'?createData():updateData()"
        >{{ $t('table.confirm') }}</el-button>
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
import { IArticleData } from "@/api/types";
import { exportJson2Excel } from "@/utils/excel";
import { formatJson } from "@/utils";
import Pagination from "@/components/Pagination/index.vue";
import { log } from "util";

@Component({
  name: "ComplexTable",
  components: {
    Pagination
  }
})
export default class extends Vue {
  schoolVal: number = 0;//院校
  projectVal: number = 0;//项目
  majorVal: number = 0;//专业
  founderVal: number = 0;//创建人
  provinceVal: number = 0;//省份
  qualificationsVal: number = 0;//学历
  stateVal: number = 0;//考试状态

  private tableKey = 0;
  private list: IArticleData[] = [];
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
  private importanceOptions = [1, 2, 3];
  private sortOptions = [
    { label: "ID Ascending", key: "+id" },
    { label: "ID Descending", key: "-id" }
  ];

  private statusOptions = ["published", "draft", "deleted"];
  private showReviewer = false;
  private dialogFormVisible = false;
  private dialogStatus = "";
  private textMap = {
    update: "Edit",
    create: "Create"
  };

  private dialogPageviewsVisible = false;
  private pageviewsData = [];
  private rules = {
    type: [{ required: true, message: "type is required", trigger: "change" }],
    timestamp: [
      { required: true, message: "timestamp is required", trigger: "change" }
    ],
    title: [{ required: true, message: "title is required", trigger: "blur" }]
  };

  private downloadLoading = false;
  private tempArticleData = defaultArticleData;

  created() {
    this.getList();
  }
  //院校选中
  chooseSchool(val: number) {
    console.log(val);

    this.schoolVal = val;
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

  private handleFilter() {
    this.listQuery.page = 1;
    this.getList();
  }

  private handleModifyStatus(row: any, status: string) {
    this.$message({
      message: "操作成功",
      type: "success"
    });
    row.status = status;
  }

  private sortChange(data: any) {
    const { prop, order } = data;
    if (prop === "id") {
      this.sortByID(order);
    }
  }

  private sortByID(order: string) {
    if (order === "ascending") {
      this.listQuery.sort = "+id";
    } else {
      this.listQuery.sort = "-id";
    }
    this.handleFilter();
  }

  private getSortClass(key: string) {
    const sort = this.listQuery.sort;
    return sort === `+${key}` ? "ascending" : "descending";
  }

  private resetTempArticleData() {
    this.tempArticleData = cloneDeep(defaultArticleData);
  }

  private handleCreate() {
    this.resetTempArticleData();
    this.dialogStatus = "create";
    this.dialogFormVisible = true;
    this.$nextTick(() => {
      (this.$refs.dataForm as Form).clearValidate();
    });
  }

  private createData() {
    (this.$refs.dataForm as Form).validate(async valid => {
      if (valid) {
        const articleData = this.tempArticleData;
        articleData.id = Math.round(Math.random() * 100) + 1024; // mock a id
        articleData.author = "vue-typescript-admin";
        const { data } = await createArticle({ article: articleData });
        data.article.timestamp = Date.parse(data.article.timestamp);
        this.list.unshift(data.article);
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "创建成功",
          type: "success",
          duration: 2000
        });
      }
    });
  }

  private handleUpdate(row: any) {
    this.tempArticleData = Object.assign({}, row);
    this.tempArticleData.timestamp = +new Date(this.tempArticleData.timestamp);
    this.dialogStatus = "update";
    this.dialogFormVisible = true;
    this.$nextTick(() => {
      (this.$refs.dataForm as Form).clearValidate();
    });
  }

  private updateData() {
    (this.$refs.dataForm as Form).validate(async valid => {
      if (valid) {
        const tempData = Object.assign({}, this.tempArticleData);
        tempData.timestamp = +new Date(tempData.timestamp); // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
        const { data } = await updateArticle(tempData.id, {
          article: tempData
        });
        const index = this.list.findIndex(v => v.id === data.article.id);
        this.list.splice(index, 1, data.article);
        this.dialogFormVisible = false;
        this.$notify({
          title: "成功",
          message: "更新成功",
          type: "success",
          duration: 2000
        });
      }
    });
  }

  private handleDelete(row: any, index: number) {
    this.$notify({
      title: "Success",
      message: "Delete Successfully",
      type: "success",
      duration: 2000
    });
    this.list.splice(index, 1);
  }

  private async handleGetPageviews(pageviews: string) {
    const { data } = await getPageviews({ pageviews });
    this.pageviewsData = data.pageviews;
    this.dialogPageviewsVisible = true;
  }

  private handleDownload() {
    this.downloadLoading = true;
    const tHeader = ["timestamp", "title", "type", "importance", "status"];
    const filterVal = ["timestamp", "title", "type", "importance", "status"];
    const data = formatJson(filterVal, this.list);
    exportJson2Excel(tHeader, data, "table-list");
    this.downloadLoading = false;
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
    width: 420px;
    .el-input__inner {
      border: 1px solid #8c8c8c;
    }
  }
  .founder,
  .province,
  .qualifications,
  .state {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .text {
    margin-right: 10px;
  }
}
</style>