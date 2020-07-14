<template>
  <!-- 开考计搜索区域-->
  <div>
    <div class="screen" v-if="projectVal==1">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">创建人</div>
        <el-select v-model="founderVal" class="filter-item">
          <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">所属省份</div>
        <el-select v-model="provinceVal" class="filter-item">
          <el-option
            v-for="(item) in $t('province')"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">学历层次</div>
        <el-select v-model="qualificationsVal" class="filter-item">
          <el-option
            v-for="(item) in $t('qualificationsVal') "
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="projectVal==2">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">课程阶段</div>
        <el-select v-model="stageVal" class="filter-item">
          <el-option
            v-for="(item) in $t('qualificationsVal') "
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="projectVal==3">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">学科门类</div>
        <el-select v-model="categoryVal" class="filter-item">
          <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="projectVal==9||projectVal==8">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">学位类型</div>
        <el-select v-model="degreeTypeVale" class="filter-item">
          <el-option
            v-for="(item) in $t('degreeType')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="projectVal==10">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">所属省份</div>
        <el-select v-model="provinceVal" class="filter-item">
          <el-option
            v-for="(item) in $t('province')"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="projectVal==5">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">考试种类</div>
        <el-select v-model="EngTypeVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('EngType')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="projectVal==51">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">考试级别</div>
        <el-select v-model="EngLevelVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('EngLevel')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div v-if="schoolList[schoolVal].name=='教师学院'" class="screen">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">类别</div>
        <el-select v-model="teacherExamTypeVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('teacherExamType')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>

    <div class="screen" v-if="schoolKind==16">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">专业</div>
        <el-select v-model="engineerMajorVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('engineerMajor')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="schoolKind==13">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">鉴定级别</div>
        <el-select v-model="appraisalLevelVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('appraisalLevel')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">鉴定形式</div>
        <el-select v-model="appraisalFormVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('appraisalForm')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
    <div class="screen" v-if="schoolKind==18">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">鉴定级别</div>
        <el-select v-model="appraisalLevelVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('appraisalLevel')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">鉴定形式</div>
        <el-select v-model="appraisalFormVal" class="filter-item">
          <el-option
            v-for="(item)  in $t('appraisalForm')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item) in $t('stateVal')"
            :key="item.key"
            :label="item.name"
            :value="item.key"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试周期</div>
        <el-date-picker
          v-model="timeVal"
          type="datetimerange"
          align="right"
          start-placeholder="开始日期"
          range-separator="至"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Bus from "../../utils/bus.js";
import { Active } from "../../utils/school";
let active = new Active();
@Component({
  name: "screen",
  components: {}
})
export default class extends Vue {
  schoolList: any = "";
  schoolKind: number = 4;
  schoolVal: number = 0;
  projectVal: number = 1;
  screenData: any = {};
  screenVal: string = ""; //搜索
  founderVal: number = 0; //创建人
  provinceVal: number = 15; //省份
  qualificationsVal: string = ""; //学历
  categoryVal: number = 0; //学科门类
  stageVal: number = 0; //课程阶段
  stateVal: string = ""; //考试状态
  degreeTypeVale: string = ""; //学位类型
  EngTypeVal: string = ""; //英语四六级考试种类
  EngLevelVal: string = ""; //学位英语考试等级
  teacherExamTypeVal: string = ""; //教师学院类别
  engineerMajorVal: string = ""; //造价工程师专业
  appraisalLevelVal: string = ""; //医药卫生学院鉴定级别
  appraisalFormVal: string = ""; //医药卫生学院鉴定形式
  timeVal: string = ""; //时间
  async created() {
    let data = await active.getAllKindList();
    this.schoolList = data.data;
    Bus.$on("projectVal", (e: any) => {
      this.schoolKind = e.schoolKind;
      this.projectVal = e.projectVal;
      this.schoolVal = e.schoolVal;
    });
  }
  //创建开考计划
  private createData() {
    if (this.$t("schooleVal[" + this.schoolVal + "].name") == "教师学院") {
      this.screenData = {
        teacherExamTypeVal: this.teacherExamTypeVal,
        stateVal: this.stateVal,
        screenVal: this.screenVal,
        timeVal: this.timeVal
      };
    } else if (
      this.$t("schooleVal[" + this.schoolVal + "].name") == "建筑工程学院"
    ) {
      this.screenData = {
        engineerMajorVal: this.engineerMajorVal,
        stateVal: this.stateVal,
        screenVal: this.screenVal,
        timeVal: this.timeVal
      };
    } else if (
      this.$t("schooleVal[" + this.schoolVal + "].name") == "医药卫生学院"
    ) {
      this.screenData = {
        appraisalLevelVal: this.appraisalLevelVal,
        appraisalFormVal: this.appraisalFormVal,
        stateVal: this.stateVal,
        screenVal: this.screenVal,
        timeVal: this.timeVal
      };
    } else if (
      this.$t("schooleVal[" + this.schoolVal + "].name") == "职业培训学院"
    ) {
      this.screenData = {
        screenVal: this.screenVal,
        timeVal: this.timeVal,
        appraisalLevelVal: this.appraisalLevelVal,
        appraisalFormVal: this.appraisalFormVal,
        stateVal: this.stateVal
      };
    } else {
      switch (this.projectVal) {
        case 1:
          this.screenData = {
            screenVal: this.screenVal,
            timeVal: this.timeVal,
            founderVal: this.founderVal,
            provinceVal: this.provinceVal,
            qualificationsVal: this.qualificationsVal,
            stateVal: this.stateVal
          };
          break;
        case 2:
          this.screenData = {
            stageVal: this.stageVal,
            stateVal: this.stateVal,
            screenVal: this.screenVal,
            timeVal: this.timeVal
          };
        case 3:
          this.screenData = {
            categoryVal: this.categoryVal,
            stateVal: this.stateVal,
            screenVal: this.screenVal,
            timeVal: this.timeVal
          };
          break;
        case 20:
          this.screenData = {
            degreeTypeVale: this.degreeTypeVale,
            stateVal: this.stateVal,
            screenVal: this.screenVal,
            timeVal: this.timeVal
          };
          break;
        case 21:
          this.screenData = {
            provinceVal: this.provinceVal,
            stateVal: this.stateVal,
            screenVal: this.screenVal,
            timeVal: this.timeVal
          };
          break;
        case 5:
          this.screenData = {
            EngTypeVal: this.EngTypeVal,
            stateVal: this.stateVal,
            screenVal: this.screenVal,
            timeVal: this.timeVal
          };
          break;
        case 51:
          this.screenData = {
            EngLevelVal: this.EngLevelVal,
            stateVal: this.stateVal,
            screenVal: this.screenVal,
            timeVal: this.timeVal
          };
          break;
        default:
          break;
      }
    }
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
.screen {
  border: 1px solid #d1d1d1;
  padding: 20px;
  display: flex;
  .screen-item {
    width: 380px;
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
</style>