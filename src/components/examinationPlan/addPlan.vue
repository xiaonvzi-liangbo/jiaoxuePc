<template>
  <div>
    <!-- 创建开考计划弹窗 -->
    <div v-if="projectVal==1">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form
          ref="dataForm"
          :model="tempArticleData"
          label-position="left"
          label-width="100px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item label="所属省份">
            <el-select v-model="project" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item) in $t('province')"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="主考院校">
            <el-select v-model="schoole" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="专业名称">
            <el-select v-model="major" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="课程名称">
            <el-select v-model="kcName" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="课程代码">
            <el-input v-model="kcCode" />
          </el-form-item>
          <el-form-item label="考试日期">
            <el-date-picker v-model="time" type="date" placeholder="选择日期" />
          </el-form-item>

          <el-form-item label="具体时段">
            <div class="time-select">
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              ></el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"
              ></el-time-select>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogChang()">取消</el-button>
          <el-button type="primary" @click="addPlanType?createData():''">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-if="projectVal==2">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form
          ref="dataForm"
          :model="tempArticleData"
          label-position="left"
          label-width="100px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item label="所属省份">
            <el-select v-model="project" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item) in $t('province')"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="课程阶段">
            <el-select v-model="stageVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index) in $t('qualificationsVal') "
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="考试科目">
            <el-select v-model="examSubject" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="考试日期">
            <el-date-picker v-model="time" type="date" placeholder="选择日期" />
          </el-form-item>

          <el-form-item label="具体时段">
            <div class="time-select">
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              ></el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"
              ></el-time-select>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogChang()">取消</el-button>
          <el-button type="primary" @click="addPlanType?createData():''">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-if="projectVal==3">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form
          ref="dataForm"
          :model="tempArticleData"
          label-position="left"
          label-width="100px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item label="学科门类">
            <el-select v-model="categoryVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item) in $t('province')"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="门类代码">
            <el-select v-model="categoryCode" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="考试科目">
            <el-select v-model="examSubject" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="考试日期">
            <el-date-picker v-model="time" type="date" placeholder="选择日期" />
          </el-form-item>

          <el-form-item label="具体时段">
            <div class="time-select">
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              ></el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"
              ></el-time-select>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogChang()">取消</el-button>
          <el-button type="primary" @click="addPlanType?createData():''">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-if="projectVal==20">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form
          ref="dataForm"
          :model="tempArticleData"
          label-position="left"
          label-width="100px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item label="门类">
            <el-select v-model="categoryVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item) in $t('province')"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="学位类型">
            <el-select v-model="degreeTypeVale" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index) in $t('degreeType')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="学科专业">
            <el-select v-model="major" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="考试科目">
            <el-select v-model="examSubject" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="考试日期">
            <el-date-picker v-model="time" type="date" placeholder="选择日期" />
          </el-form-item>

          <el-form-item label="具体时段">
            <div class="time-select">
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              ></el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"
              ></el-time-select>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogChang()">取消</el-button>
          <el-button type="primary" @click="addPlanType?createData():''">确定</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-if="projectVal==21">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form
          ref="dataForm"
          :model="tempArticleData"
          label-position="left"
          label-width="100px"
          style="width: 400px; margin-left:50px;"
        >
          <el-form-item label="门类">
            <el-select v-model="categoryVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item) in $t('province')"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="学位类型">
            <el-select v-model="degreeTypeVale" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index) in $t('degreeType')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="学科专业">
            <el-select v-model="major" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="考试科目">
            <el-select v-model="examSubject" class="filter-item" placeholder="Please select">
              <el-option v-for="(item,index) in 8" :key="index" :label="item" :value="index" />
            </el-select>
          </el-form-item>
          <el-form-item label="考试日期">
            <el-date-picker v-model="time" type="date" placeholder="选择日期" />
          </el-form-item>

          <el-form-item label="具体时段">
            <div class="time-select">
              <el-time-select
                placeholder="起始时间"
                v-model="startTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
              ></el-time-select>
              <el-time-select
                placeholder="结束时间"
                v-model="endTime"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}"
              ></el-time-select>
            </div>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogChang()">取消</el-button>
          <el-button type="primary" @click="addPlanType?createData():''">确定</el-button>
        </div>
      </el-dialog>
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
  dialog: boolean = false;
  @Prop() dialogFormVisible!: boolean; //所属页面

  @Watch("dialogFormVisible")
  change() {
    this.dialog = this.dialogFormVisible;
  }
  @Watch("dialog")
  aa() {
    if (this.dialog == false) {
      this.$emit("dialogChang", this.dialog);
    }
  }
  @Prop()
  addPlanType!: boolean; //所属页面
  tempArticleData: any = {};
  schoolVal: number = 0;
  projectVal: number = 1;
  project: number = 15; //所属省份
  schoole: number = 0; //主考院校
  major: number = 0; //专业名称
  kcName: number = 0; //课程名称
  kcCode: string = ""; //课程代码
  time: string = ""; //考试日期
  startTime: string = ""; //起始时间
  endTime: string = ""; //结束时间
  categoryVal: number = 0; //学科门类
  categoryCode: number = 0; //门类代码
  examSubject: number = 0; //考试科目
  stageVal: number = 0; // 课程阶段
  degreeTypeVale: number = 0; // 学位类型
  created() {
    Bus.$on("projectVal", (e: any) => {
      this.projectVal = e.projectVal;
      this.schoolVal = e.schoolVal;
      console.log(`创建传来的数据是：${e.projectVal}`);
    });
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
  //关闭
  dialogChang() {
    this.dialog = false;
    this.$emit("dialogChang", false);
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