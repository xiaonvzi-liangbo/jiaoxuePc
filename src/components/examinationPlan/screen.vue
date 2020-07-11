<template>
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
            v-for="(item,index) in $t('qualificationsVal') "
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
            v-for="(item,index) in $t('qualificationsVal') "
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
    <div class="screen" v-if="projectVal==20">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">学位类型</div>
        <el-select v-model="degreeTypeVale" class="filter-item">
          <el-option
            v-for="(item,index) in $t('degreeType')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
    <div class="screen" v-if="projectVal==21">
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
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
            v-for="(item,index)  in $t('EngType')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
            v-for="(item,index)  in $t('EngLevel')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
    <div v-if="$t('schooleVal['+schoolVal+'].name')=='教师学院'" class="screen">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">类别</div>
        <el-select v-model="teacherExamTypeVal" class="filter-item">
          <el-option
            v-for="(item,index)  in $t('teacherExamType')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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

    <div class="screen" v-if="$t('schooleVal['+schoolVal+'].name')=='建筑工程学院'">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">专业</div>
        <el-select v-model="engineerMajorVal" class="filter-item">
          <el-option
            v-for="(item,index)  in $t('engineerMajor')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
    <div class="screen" v-if="$t('schooleVal['+schoolVal+'].name')=='医药卫生学院'">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">鉴定级别</div>
        <el-select v-model="appraisalLevelVal" class="filter-item">
          <el-option
            v-for="(item,index)  in $t('appraisalLevel')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">鉴定形式</div>
        <el-select v-model="appraisalFormVal" class="filter-item">
          <el-option
            v-for="(item,index)  in $t('appraisalForm')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
     <div class="screen" v-if="$t('schooleVal['+schoolVal+'].name')=='职业培训学院'">
      <el-input placeholder="查询提示：专业代码/课程代码/课程名称" v-model="screenVal" class="screen-item">
        <el-button slot="append">搜索</el-button>
      </el-input>
      <div class="screen-div">
        <div class="text">鉴定级别</div>
        <el-select v-model="appraisalLevelVal" class="filter-item">
          <el-option
            v-for="(item,index)  in $t('appraisalLevel')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">鉴定形式</div>
        <el-select v-model="appraisalFormVal" class="filter-item">
          <el-option
            v-for="(item,index)  in $t('appraisalForm')"
            :key="index"
            :label="item"
            :value="index"
          />
        </el-select>
      </div>
      <div class="screen-div">
        <div class="text">考试状态</div>
        <el-select v-model="stateVal" class="filter-item">
          <el-option
            v-for="(item,index) in $t('stateVal')"
            :key="index"
            :label="item"
            :value="index"
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
@Component({
  name: "screen",
  components: {}
})
export default class extends Vue {
  schoolVal: number = 0;
  projectVal: number = 1;
  screenVal: string = ""; //搜索
  founderVal: number = 0; //创建人
  provinceVal: number = 15; //省份
  qualificationsVal: number = 0; //学历
  categoryVal: number = 0; //学科门类
  stageVal: number = 0; //课程阶段
  stateVal: number = 0; //考试状态
  degreeTypeVale: number = 0; //学位类型
  EngTypeVal: number = 0; //英语四六级考试种类
  EngLevelVal: number = 0; //学位英语考试等级
  teacherExamTypeVal: number = 0; //教师学院类别
  engineerMajorVal: number = 0; //造价工程师专业
  appraisalLevelVal: number = 0; //医药卫生学院鉴定级别
  appraisalFormVal: number = 0; //医药卫生学院鉴定形式
  timeVal: string = ""; //时间
  created() {
    Bus.$on("projectVal", (e: any) => {
      this.projectVal = e.projectVal;
      this.schoolVal = e.schoolVal;
      console.log(`传来的数据是：${e}`);
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