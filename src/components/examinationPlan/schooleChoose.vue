<template>
  <!-- 开考开课院校选择 -->
  <div>
    <div class="choose">
      <div class="school">
        <div
          :class="schoolVal==index?'on':''"
          class="schoolItem"
          @click="chooseSchool(index)"
          v-for="(item,index) in schoolList"
          :key="index"
        >{{item.name}}</div>
      </div>
      <div v-if="schoolList[schoolVal].name=='教师学院'" class="chooseMajor">
        <div class="chooseMajor-item">
          <div class="text">考试类型：</div>
          <div @click="examTypeChoose(0)" :class="examTypeVal==0?'examTypeText':'examTypeNo'">笔试</div>
          <div @click="examTypeChoose(1)" :class="examTypeVal==1?'examTypeText':'examTypeNo'">面试</div>
        </div>
      </div>
      <div v-else class="chooseMajor">
        <div class="chooseMajor-item">
          <div class="text">所属项目：</div>
          <el-select v-model="projectVal" class="filter-item" @change="projectchange()">
            <el-option
              v-for="(item) in schoolList[schoolVal].types"
              :key="item.kind"
              :label="item.name"
              :value="item.kind"
            />
          </el-select>
        </div>
        <div class="chooseMajor-item" v-if="projectVal==1&&from=='classPlan'">
          <div class="text">学历层次：</div>
          <el-select v-model="qualificationsVal" class="filter-item">
            <el-option
              v-for="(item) in $t('qualificationsVal') "
              :key="item.key"
              :label="item.name"
              :value="item.key"
            />
          </el-select>
        </div>
        <div
          class="chooseMajor-item"
          v-if="projectVal==1||projectVal==2 ||projectVal==3&&from=='classPlan'"
        >
          <div class="text">所属专业：</div>
          <el-select v-model="majorVal" class="filter-item">
            <el-option v-for="(item,index) in 3" :key="index" :label="item" :value="index" />
          </el-select>
        </div>
        <div class="chooseMajor-item" v-if="projectVal==9||projectVal==8">
          <div class="text">考试类型：</div>
          <div class="examTypeText">初试</div>
        </div>
      </div>
    </div>
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
  schoolVal: number = 0; //院校
  schoolList: any = "";
  projectVal: number = 1; //项目
  majorVal: number = 0; //专业
  examTypeVal: number = 0; //考试类型
  @Prop() from!: string; //所属页面
  qualificationsVal: number | string = ""; // 学历层次：
  async created() {
    let data = await active.getAllKindList();
    this.schoolList = data.data;
    this.schoolVal = 0;
    this.projectVal = 1;
  }
  //院校选中
  chooseSchool(val: number) {
    this.schoolVal = val;
    let data: any = this.schoolList[this.schoolVal].types[0];

    if (data) {
      this.projectVal = Number(data.kind);
    } else {
      this.projectVal = 0;
    }
    Bus.$emit("projectVal", {
      schoolKind: this.schoolList[this.schoolVal].kind,
      projectVal: this.projectVal,
      schoolVal: this.schoolVal
    });
  }
  //项目切换
  projectchange() {
    Bus.$emit("projectVal", {
      schoolKind: this.schoolList[this.schoolVal].kind,
      projectVal: this.projectVal,
      schoolVal: this.schoolVal
    });
  }
  //考试类型切换
  examTypeChoose(value: number) {
    this.examTypeVal = value;
  }
}
</script>
<style lang="scss" scoped>
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
    cursor: pointer; //鼠标变小手
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
    .chooseMajor-item {
      display: flex;
      align-items: center;
      cursor: pointer; //鼠标变小手
      margin-right: 20px;
    }
    .examTypeText {
      color: #45a0ff;
      font-size: 15px;
      padding: 0 5px;
      border-bottom: 2px solid #0091ff;
    }
    .examTypeNo {
      font-size: 15px;
      padding: 0 5px;
    }
  }
}
</style>