<template>
  <div>
    <div class="addTitle">{{addPlanType==true?'创建开课计划-'+title:'编辑开课计划-'+title}}</div>

    <div class="list">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="left"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <div v-if="projectVal==1||projectVal==2||projectVal==3">
          <el-form-item label="所属学院" value="belongSchoolVal" prop="belongSchool">
            <el-input v-model="addPlanAssociatedData.belongSchool" />
          </el-form-item>
          <el-form-item label="所属项目" prop="belongPro">
            <el-input v-model="addPlanAssociatedData.belongPro" />
          </el-form-item>
        </div>
        <el-form-item v-if="projectVal==1" label="所属专业" prop="major">
          <el-input v-model="addPlanAssociatedData.major" />
        </el-form-item>
        <el-form-item v-if="projectVal==3" label="所属门类" prop="category">
          <el-input v-model="addPlanAssociatedData.category" />
        </el-form-item>
        <el-form-item v-if="projectVal==1||projectVal==2||projectVal==3" label="课程名称" prop="kcName">
          <el-input v-model="addPlanAssociatedData.kcName" />
        </el-form-item>
        <el-form-item v-if="projectVal==2" label="课程阶段" prop="stage">
          <el-input v-model="addPlanAssociatedData.stage" />
        </el-form-item>
        <el-form-item v-if="projectVal==1" label="课程类型" prop="kcType">
          <el-input v-model="addPlanAssociatedData.kcType" />
        </el-form-item>
        <el-form-item v-if="projectVal==2" label="所属省份" prop="province">
          <el-select v-model="addPlanAssociatedData.province" class="filter-item" placeholder="请选择">
            <el-option
              v-for="(item) in $t('province')"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <div class="list">
      <div class="list-title">课程基本信息</div>
      <el-form
        class="list-form"
        :model="KcBasicInf"
        :rules="rulesBasic"
        label-position="left"
        label-width="100px"
      >
        <el-form-item v-if="projectVal==1" label="所属省份" prop="province">
          <el-select v-model="KcBasicInf.province" class="filter-item" placeholder="请选择">
            <el-option
              v-for="(item) in $t('province')"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="选择学年" prop="schoolYear">
          <el-select
            v-model="KcBasicInf.schoolYear"
            class="filter-item"
            placeholder="Please select"
          >
            <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
          </el-select>
        </el-form-item>
        <el-form-item label="选择学期" prop="semester">
          <el-select v-model="KcBasicInf.semester" class="filter-item" placeholder="Please select">
            <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>

    <div class="list">
      <div class="list-title">添加直播课程</div>
      <el-form
        :model="live"
        :rules="rulesLive"
        label-position="left"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="直播课程" prop="associatedPlan">
          <div>{{live.associatedPlan}}</div>
          <el-button type="primary">直播课程</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Bus from "../../utils/bus.js";
import { log } from "util";
@Component({
  name: "screen",
  components: {}
})
export default class extends Vue {
  schoolVal: number = 0;
  projectVal: number = 1;
  addPlanType: boolean = false;
  title: any = "";
  //关联开课计划
  addPlanAssociatedData: any = {
    associatedPlan: "", //关联计划
    belongSchool: "", //所属院校
    belongPro: "", // 所属项目
    major: "", // 所属专业
    kcName: "", // 课程名称};
    kcType: "", // 课程类型
    category: "", //学科门类
    stage: "", //课程阶段
    province: "" //所属省份
  };
  //课程基础信息
  KcBasicInf: any = {
    province: "", //所属省份
    schoolYear: 0, //学年
    semester: 0 //学期
  };
  live: any = { associatedPlan: "" };
  //关联开课计划验证
  rules: any = {
    associatedPlan: [
      { required: true, message: "请关联开考计划", trigger: "blur" }
    ],
    belongSchool: [
      { required: true, message: "请输入所属院校", trigger: "blur" }
    ],
    belongPro: [{ required: true, message: "请输入所属项目", trigger: "blur" }],
    major: [{ required: true, message: "请输入所属专业", trigger: "blur" }],
    kcName: [{ required: true, message: "请输入课程名称", trigger: "blur" }],
    kcType: [{ required: true, message: "请输入课程类型", trigger: "blur" }],
    category: [{ required: true, message: "请输入所属门类", trigger: "blur" }],
    stage: [{ required: true, message: "请输入所属门类", trigger: "blur" }],
    province: [{ required: true, message: "请输入所属门类", trigger: "blur" }]
  };
  rulesBasic: any = {
    province: [{ required: true, message: "请输入所属省份", trigger: "blur" }],
    schoolYear: [
      {
        type: "number",
        required: true,
        message: "请选择学年",
        trigger: "change"
      }
    ],
    semester: [
      {
        type: "number",
        required: true,
        message: "请选择学期",
        trigger: "change"
      }
    ]
  };
  rulesLive: any = {
    associatedPlan: [
      {
        required: true,
        message: "关联直播课程",
        trigger: "change"
      }
    ]
  };
  created() {
    this.addPlanType = Boolean(this.$route.query.addPlanType);
    this.schoolVal = Number(this.$route.query.schoolVal);
    this.projectVal = Number(this.$route.query.projectVal);
    this.title = this.$route.query.title;
    console.log(this.projectVal);
  }
}
</script>
<style lang="scss" scoped>
.addTitle {
  border-left: 4px solid #3399ff;
  font-weight: bold;
  margin: 20px;
  padding: 0 5px;
}
.list {
  margin: 20px 23px;
  .list-title {
    border-left: 1px solid #3399ff;
    padding: 0 5px;
    margin-bottom: 20px;
  }
  .list-form {
    width: 400px;
    margin-left: 50px;
  }
}
</style>