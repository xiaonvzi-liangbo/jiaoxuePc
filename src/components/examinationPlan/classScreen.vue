<template>
  <div>
    <div class="screen">
      <div class="screen-div" v-if="projectVal=1||projectVal==3||projectVal==2">
        <div class="screen-div-item">
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
        <div class="screen-div-item" v-if="projectVal==1||projectVal==3">
          <div class="text">课程类型</div>
          <el-select v-model="kcTypeVal" class="filter-item">
            <el-option
              v-for="(item,index) in  $t('kcType')"
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </div>
        <div class="screen-div-item" v-else>
          <div class="text">课程阶段</div>
          <el-select v-model="stageVal" class="filter-item">
            <el-option
              v-for="(item,index) in $t('kcStage') "
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </div>
      </div>
      <div class="screen-div-item" v-if="projectVal==20||projectVal==22">
        <div class="screen-div-item">
          <div class="text">课程类型</div>
          <el-select v-model="kcTypeVal" class="filter-item">
            <el-option
              v-for="(item,index) in  $t('kcType')"
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </div>

        <div class="screen-div-item">
          <div class="text">所属门类</div>
          <el-select v-model="categoryVal" class="filter-item">
            <el-option v-for="(item,index) in 3 " :key="index" :label="item" :value="index" />
          </el-select>
        </div>
      </div>
      <div class="screen-div-item" v-if="projectVal==21">
        <div class="screen-div-item">
          <div class="text">一级学科</div>
          <el-select v-model="oneCategory" class="filter-item">
            <el-option
              v-for="(item,index) in  $t('kcType')"
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </div>
        <div class="screen-div-item">
          <div class="text">二级学科</div>
          <el-select v-model="twoCategory" class="filter-item">
            <el-option
              v-for="(item,index) in  $t('kcType')"
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </div>

        <div class="screen-div-item">
          <div class="text">所属门类</div>
          <el-select v-model="categoryVal" class="filter-item">
            <el-option v-for="(item,index) in 3 " :key="index" :label="item" :value="index" />
          </el-select>
        </div>
      </div>
      <div class="screen-div-item" v-if="projectVal==5||projectVal==51">
        <div class="screen-div-item">
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
      </div>
      <div class="screen-div-item" v-if="$t('schooleVal['+schoolVal+'].name')=='教师学院'">
        <div class="screen-div-item">
          <div class="text">类别</div>
          <el-select v-model="category" class="filter-item">
            <el-option
              v-for="(item,index)  in $t('teacherExamType')"
              :key="index"
              :label="item"
              :value="index"
            />
          </el-select>
        </div>
      </div>
      <div
        class="screen-div-item"
        v-if="$t('schooleVal['+schoolVal+'].name')=='建筑工程学院'||$t('schooleVal['+schoolVal+'].name')=='医药卫生学院'||$t('schooleVal['+schoolVal+'].name')=='职业培训学院'"
      >
        <div class="screen-div-item">
          <div class="text">专业</div>
          <el-select v-model="major" class="filter-item">
            <el-option v-for="(item,index)  in 5" :key="index" :label="item" :value="index" />
          </el-select>
        </div>
      </div>
      <div class="screen-div">
        <div class="text">授课老师</div>
        <el-select v-model="teacherVal" class="filter-item">
          <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
        </el-select>
      </div>
      <div class="screen-div">
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
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Bus from "../../utils/bus.js";
@Component({
  name: "screen",
  components: {}
})
export default class extends Vue {
  schoolVal: number = 0;
  projectVal: number = 1;
  screenData: any = {};
  screenVal: string = ""; //搜索
  provinceVal: number = 15; //省份
  kcTypeVal: number = 0; //课程类型
  teacherVal: number = 0; //授课老师
  timeVal: string = ""; //时间
  stageVal: number = 0; //课程阶段
  categoryVal: number = 0; //门类
  oneCategory: number = 0; // 一级学科
  twoCategory: number = 0; // 二级学科
  EngTypeVal: number = 0; //英语四六级考试种类
  category: number = 0; //类别
  major: number = 0; //专业
  created() {
    Bus.$on("projectVal", (e: any) => {
      this.projectVal = e.projectVal;
      this.schoolVal = e.schoolVal;
      console.log(`传来的数据是：${e}`);
    });
  }
  private sreen() {
    if (this.$t("schooleVal[" + this.schoolVal + "].name") == "教师学院") {
      this.screenData = {
        category: this.category,
        screenVal: this.screenVal,
        teacherVal: this.teacherVal,
        timeVal: this.timeVal
      };
    } else if (
      this.$t("schooleVal[" + this.schoolVal + "].name") == "建筑工程学院" ||
      this.$t("schooleVal[" + this.schoolVal + "].name") == "医药卫生学院" ||
      this.$t("schooleVal[" + this.schoolVal + "].name") == "职业培训学院"
    ) {
      this.screenData = {
        major: this.major,
        screenVal: this.screenVal,
        teacherVal: this.teacherVal,
        timeVal: this.timeVal
      };
    } else {
      switch (this.projectVal) {
        case 1 || 3:
          this.screenData = {
            provinceVal: this.provinceVal,
            kcTypeVal: this.kcTypeVal,
            stageVal: this.stageVal,
            screenVal: this.screenVal,
            teacherVal: this.teacherVal,
            timeVal: this.timeVal
          };
          break;
        case 2:
          this.screenData = {
            provinceVal: this.provinceVal,
            stageVal: this.stageVal,
            screenVal: this.screenVal,
            teacherVal: this.teacherVal,
            timeVal: this.timeVal
          };
          break;
        case 20 || 22:
          this.screenData = {
            kcTypeVal: this.kcTypeVal,
            categoryVal: this.categoryVal,
            screenVal: this.screenVal,
            teacherVal: this.teacherVal,
            timeVal: this.timeVal
          };
          break;
        case 21:
          this.screenData = {
            oneCategory: this.oneCategory,
            twoCategory: this.twoCategory,
            categoryVal: this.categoryVal,
            screenVal: this.screenVal,
            teacherVal: this.teacherVal,
            timeVal: this.timeVal
          };
          break;
        case 2 || 51:
          this.screenData = {
            EngTypeVal: this.EngTypeVal,
            screenVal: this.screenVal,
            teacherVal: this.teacherVal,
            timeVal: this.timeVal
          };
          break;
        default:
          break;
      }
    }
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

  .screen-div-item,
  .screen-div {
    display: flex;
    align-items: center;
    margin-right: 20px;
    flex-shrink: 1;
  }
  .screen-div-item:last-child,
  .screen-div:last-child {
    margin-right: 0px !important;
  }
  .mr-20 {
    margin-right: 20px;
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
</style>