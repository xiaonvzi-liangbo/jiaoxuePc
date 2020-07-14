<template>
  <!-- 创建开课计划弹窗 -->
  <div>
    <div class="addTitle">{{addPlanType==true?'创建开课计划-'+title:'编辑开课计划-'+title}}</div>
    <div class="list" v-if="projectVal==1">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary" @click="planShow=true">关联计划</el-button>
        </el-form-item>
        <el-form-item label="所属学院" value="belongSchoolVal" prop="belongSchool">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属学院"
            v-model="addPlanAssociatedData.belongSchool"
          />
        </el-form-item>
        <el-form-item label="所属项目" prop="belongPro">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属项目"
            v-model="addPlanAssociatedData.belongPro"
          />
        </el-form-item>
        <el-form-item label="所属专业" prop="major">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属专业"
            v-model="addPlanAssociatedData.major"
          />
        </el-form-item>
        <el-form-item label="课程名称" prop="kcName">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示课程名称"
            v-model="addPlanAssociatedData.kcName"
          />
        </el-form-item>
        <el-form-item label="课程类型" prop="kcType">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示课程类型"
            v-model="addPlanAssociatedData.kcType"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list" v-if="projectVal==2">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <el-form-item label="所属学院" value="belongSchoolVal" prop="belongSchool">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属学院"
            v-model="addPlanAssociatedData.belongSchool"
          />
        </el-form-item>
        <el-form-item label="所属项目" prop="belongPro">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属项目"
            v-model="addPlanAssociatedData.belongPro"
          />
        </el-form-item>
        <el-form-item label="所属专业" prop="major">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属专业"
            v-model="addPlanAssociatedData.major"
          />
        </el-form-item>
        <el-form-item label="课程名称" prop="kcName">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示课程名称"
            v-model="addPlanAssociatedData.kcName"
          />
        </el-form-item>
        <el-form-item label="课程阶段" prop="stage">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示课程阶段"
            v-model="addPlanAssociatedData.stage"
          />
        </el-form-item>
        <el-form-item label="所属省份" prop="province">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属省份"
            v-model="addPlanAssociatedData.province"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list" v-if="projectVal==3">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <el-form-item label="所属学院" value="belongSchoolVal" prop="belongSchool">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属学院"
            v-model="addPlanAssociatedData.belongSchool"
          />
        </el-form-item>
        <el-form-item label="所属项目" prop="belongPro">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属项目"
            v-model="addPlanAssociatedData.belongPro"
          />
        </el-form-item>

        <el-form-item label="所属门类" prop="category">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属门类"
            v-model="addPlanAssociatedData.category"
          />
        </el-form-item>
        <el-form-item label="课程名称" prop="kcName">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示课程名称"
            v-model="addPlanAssociatedData.kcName"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list" v-if="projectVal==8||projectVal==9||projectVal==10">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <el-form-item label="所属学院" value="belongSchoolVal" prop="belongSchool">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属学院"
            v-model="addPlanAssociatedData.belongSchool"
          />
        </el-form-item>
        <el-form-item label="学位类型">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示学位类型"
            v-model="addPlanAssociatedData.belongPro"
          />
        </el-form-item>

        <el-form-item label="门类">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示门类"
            v-model="addPlanAssociatedData.category"
          />
        </el-form-item>
        <el-form-item label="课程名称">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示课程名称"
            v-model="addPlanAssociatedData.kcName"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list" v-if="projectVal==5">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <el-form-item label="所属学院" value="belongSchoolVal" prop="belongSchool">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属学院"
            v-model="addPlanAssociatedData.belongSchool"
          />
        </el-form-item>
        <el-form-item label="所属项目" prop="belongPro">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示所属项目"
            v-model="addPlanAssociatedData.belongPro"
          />
        </el-form-item>
        <el-form-item label="考试种类" prop="belongPro">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示考试种类"
            v-model="addPlanAssociatedData.EngType"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list" v-if="schoolKind==16">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <el-form-item label="专业" value="belongSchoolVal" prop="major">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示专业"
            v-model="addPlanAssociatedData.major"
          />
        </el-form-item>

        <el-form-item label="考试科目" prop="examSubjects">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示考试科目"
            v-model="addPlanAssociatedData.examSubjects"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list" v-if="schoolKind==13">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <el-form-item label="鉴定级别" value="belongSchoolVal">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示鉴定级别"
            v-model="addPlanAssociatedData.appraisalLevel"
          />
        </el-form-item>

        <el-form-item label="鉴定形式">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示鉴定形式"
            v-model="addPlanAssociatedData.appraisalForm"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list" v-if="schoolKind==18">
      <div class="list-title">关联开课计划</div>
      <el-form
        :rules="rules"
        :model="addPlanAssociatedData"
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="开考计划" prop="associatedPlan">
          <div>{{addPlanAssociatedData.associatedPlan}}</div>
          <el-button type="primary">关联计划</el-button>
        </el-form-item>
        <el-form-item label="级别" value="belongSchoolVal">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示级别"
            v-model="addPlanAssociatedData.appraisalLevel"
          />
        </el-form-item>

        <el-form-item label="科目名称">
          <el-input
            :disabled="true"
            placeholder="关联开考计划以后显示科目名称"
            v-model="addPlanAssociatedData.examSubjects"
          />
        </el-form-item>
      </el-form>
    </div>
    <div class="list">
      <div class="list-title">课程基本信息</div>
      <el-form
        class="list-form"
        :model="KcBasicInf"
        :rules="rulesBasic"
        label-position="right"
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
        <el-form-item
          v-if="projectVal==8||projectVal==9||projectVal==10"
          label="课程类型"
          prop="province"
        >
          <div class="KcBasicInfKcBox" v-for="(item) in $t('qualificationsVal')" :key="item.key">
            <div
              :class="KcBasicInf.kcType==item.key?'on':''"
              class="KcBasicInfKc"
              v-if="item.key!=''"
              @click="KcBasicInfKc(item.key)"
            >{{item.name}}</div>
          </div>
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
        <el-form-item
          v-if="schoolKind!=13&&schoolKind!=16&&schoolKind!=18"
          label="选择学期"
          prop="semester"
        >
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
        label-position="right"
        label-width="100px"
        class="list-form"
      >
        <el-form-item label="直播课程" prop="live">
          <div>{{live.live}}</div>
          <el-button @click="liveShow=true" type="primary">直播课程</el-button>
        </el-form-item>
      </el-form>
      <el-button class="save" type="primary">保存</el-button>
    </div>
    <el-dialog title="关联开考计划" :visible.sync="planShow">
      <class-dialog :schoolKind="schoolKind" :schoolVal="schoolVal" :projectVal="projectVal"></class-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChang()">取消</el-button>
        <el-button type="primary" @click="createData()">确定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="选择课程" :visible.sync="liveShow">
      <class-live :schoolKind="schoolKind" :schoolVal="schoolVal" :projectVal="projectVal"></class-live>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogChang()">取消</el-button>
        <el-button type="primary" @click="createData()">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Bus from "../../../utils/bus.js";
import { log } from "util";
import { Active } from "../../../utils/school";
import classDialog from "@/components/examinationPlan/classDialog.vue";
import classLive from "@/components/examinationPlan/classLiveShow.vue";

let active = new Active();

@Component({
  name: "screen",
  components: { classDialog, classLive }
})
export default class extends Vue {
  schoolList: any = "";
  schoolKind: number = 4;
  schoolVal: number = 0;
  projectVal: number = 1;
  addPlanType: boolean = false;
  planShow: boolean = false;
  liveShow: boolean = false;
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
    province: "", //所属省份
    EngType: "", //考试种类
    examSubjects: "", //考试科目
    appraisalLevel: "", //鉴定级别
    appraisalForm: "" //鉴定形式
  };
  //课程基础信息
  KcBasicInf: any = {
    kcType: "1", // 课程类型
    province: "", //所属省份
    schoolYear: 0, //学年
    semester: 0 //学期
  };
  live: any = { live: "" };
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
    province: [{ required: true, message: "请输入所属门类", trigger: "blur" }],
    examSubjects: [
      { required: true, message: "请输入考试科目", trigger: "blur" }
    ]
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
    kcType: [
      {
        type: "number",
        required: true,
        message: "请选择课程类型",
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
    live: [
      {
        required: true,
        message: "关联直播课程",
        trigger: "change"
      }
    ]
  };
  async created() {
    let data = await active.getAllKindList();
    this.schoolList = data.data;
    this.addPlanType = Boolean(this.$route.query.addPlanType);
    this.schoolKind = Number(this.$route.query.schoolKind);
    this.schoolVal = Number(this.$route.query.schoolVal);
    this.projectVal = Number(this.$route.query.projectVal);
    this.title = this.$route.query.title;
  }
  public KcBasicInfKc(val: string) {
    this.KcBasicInf.kcType = val;
  }
  //关闭
  dialogChang() {
    this.planShow = false;
    this.liveShow = false;
  }
  //关联开考计划
  createData() {
    this.$notify({
      title: "成功",
      message: "创建成功",
      type: "success",
      duration: 2000
    });
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
  .KcBasicInfKcBox {
    display: inline-block;
    .KcBasicInfKc {
      height: 36px;
      padding: 0px 25px;
      border: 1px solid #dcdfe6;
      margin-right: 10px;
    }
    .on {
      border: 1px solid #3399ff;
    }
  }
  .el-select {
    width: 100% !important;
  }
}
.el-dialog {
  color: red;
  border-bottom: 1px solid #dfe6ec !important;
}
.save {
  margin: 10px 151px 0;
  border-radius: 0;
  width: 145px;
}
</style>