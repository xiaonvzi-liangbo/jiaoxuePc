<template>
  <div>
    <!-- 创建开考计划弹窗 -->
    <div v-if="projectVal==1">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="所属省份">
            <el-select v-model="province" class="filter-item" placeholder="Please select">
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
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="所属省份">
            <el-select v-model="province" class="filter-item" placeholder="Please select">
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
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
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
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
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
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="一级学科">
            <el-input v-model="oneSubject" />
          </el-form-item>
          <el-form-item label="二级学科">
            <el-select v-model="twoSubject" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index) in $t('degreeType')"
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
          <el-form-item label="考试课程">
            <el-select v-model="examCourseVal" class="filter-item" placeholder="Please select">
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
    <div v-if="projectVal==5">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="考试代码">
            <el-input v-model="EngTypeCodeVal" />
          </el-form-item>
          <el-form-item label="考试种类">
            <el-select v-model="EngTypeVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('EngType')"
                :key="index"
                :label="item"
                :value="index"
              />
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
    <div v-if="projectVal==51">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="考试级别">
            <el-select v-model="EngLevelVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('EngLevel')"
                :key="index"
                :label="item"
                :value="index"
              />
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
    <div v-if="$t('schooleVal['+schoolVal+'].name')=='教师学院'">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="科目代码">
            <el-input v-model="SubjectCode" />
          </el-form-item>
          <el-form-item label="考试科目">
            <el-select v-model="examSubject" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('EngLevel')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="考试种类">
            <el-select v-model="teacherExamTypeVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('teacherExamType')"
                :key="index"
                :label="item"
                :value="index"
              />
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
    <div v-if="$t('schooleVal['+schoolVal+'].name')=='建筑工程学院'">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="专业">
            <el-select v-model="major" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('EngLevel')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="考试科目">
            <el-input v-model="examSubject" />
          </el-form-item>

          <el-form-item label="考试种类">
            <el-select v-model="teacherExamTypeVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('teacherExamType')"
                :key="index"
                :label="item"
                :value="index"
              />
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
    <div v-if="$t('schooleVal['+schoolVal+'].name')=='医药卫生学院'">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="鉴定级别">
            <el-select v-model="appraisalLevelVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('appraisalLevel')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="鉴定形式">
            <el-select v-model="appraisalFormVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('appraisalForm')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="考试科目">
            <el-select v-model="examSubject" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('EngLevel')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="考试批次">
            <el-input v-model="examBatch" />
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
    <div v-if="$t('schooleVal['+schoolVal+'].name')=='职业培训学院'">
      <el-dialog :title="addPlanType?'创建开考计划':'编辑开考计划'" :visible.sync="dialog">
        <el-form label-position="left" label-width="100px" style="width: 400px; margin-left:50px;">
          <el-form-item label="考试级别">
            <el-select v-model="appraisalLevelVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('appraisalLevel')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="考试方式">
            <el-select v-model="examTypeVal" class="filter-item" placeholder="Please select">
              <el-option
                v-for="(item,index)  in $t('examType')"
                :key="index"
                :label="item"
                :value="index"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="科目名称">
            <el-input v-model="examSubject" />
          </el-form-item>
          <el-form-item label="科目代码">
            <el-input v-model="SubjectCode" />
          </el-form-item>
          <el-form-item label="考核课程代码">
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
  dialog: boolean | null = null;
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
  @Prop() addPlanType!: boolean; //所属页面
  tempArticleData: any = {};
  schoolVal: number = 0;
  projectVal: number = 1;
  province: number = 15; //所属省份
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
  oneSubject: string = ""; // 一级学科
  // 二级学科
  twoSubject: number = 0;
  // 考试课程
  examCourseVal: number = 0;
  // 考试代码
  EngTypeCodeVal: string = "";
  // 考试种类
  EngTypeVal: number = 0;
  // 考试级别
  EngLevelVal: number = 0;
  // 科目代码
  SubjectCode: string = "";
  // 考试种类
  teacherExamTypeVal: number = 0;
  // 鉴定级别
  appraisalLevelVal: number = 0;
  // 鉴定形式
  appraisalFormVal: number = 0;
  // 考试批次
  examBatch: string = "";
  // 考试方式
  examTypeVal: string = "";
  created() {
    Bus.$on("projectVal", (e: any) => {
      this.projectVal = e.projectVal;
      this.schoolVal = e.schoolVal;
      this.$emit("dialogChang", false);
    });
  }
  //创建开考计划
  private createData() {
    if (this.$t("schooleVal[" + this.schoolVal + "].name") == "教师学院") {
      this.tempArticleData = {
        SubjectCode: this.SubjectCode,
        examSubject: this.examSubject,
        teacherExamTypeVal: this.teacherExamTypeVal,
        EngLevelVal: this.EngLevelVal,
        time: this.time,
        startTime: this.startTime,
        endTime: this.endTime
      };
    } else if (
      this.$t("schooleVal[" + this.schoolVal + "].name") == "建筑工程学院"
    ) {
      this.tempArticleData = {
        major: this.major,
        examSubject: this.examSubject,
        time: this.time,
        startTime: this.startTime,
        endTime: this.endTime
      };
    } else if (
      this.$t("schooleVal[" + this.schoolVal + "].name") == "医药卫生学院"
    ) {
      this.tempArticleData = {
        appraisalLevelVal: this.appraisalLevelVal,
        appraisalFormVal: this.appraisalFormVal,
        examSubject: this.examSubject,
        examBatch: this.examBatch,
        time: this.time,
        startTime: this.startTime,
        endTime: this.endTime
      };
    } else if (
      this.$t("schooleVal[" + this.schoolVal + "].name") == "职业培训学院"
    ) {
      this.tempArticleData = {
        appraisalLevelVal: this.appraisalLevelVal,
        examTypeVal: this.examTypeVal,
        examSubject: this.examSubject,
        SubjectCode: this.SubjectCode,
        kcCode: this.kcCode,
        time: this.time,
        startTime: this.startTime,
        endTime: this.endTime
      };
    } else {
      switch (this.projectVal) {
        case 1:
          this.tempArticleData = {
            project: this.project,
            schoole: this.schoole,
            major: this.major,
            kcName: this.kcName,
            kcCode: this.kcCode,
            time: this.time,
            startTime: this.startTime,
            endTime: this.endTime
          };
          break;
        case 2:
          this.tempArticleData = {
            project: this.project,
            stageVal: this.stageVal,
            examSubject: this.examSubject,
            time: this.time,
            startTime: this.startTime,
            endTime: this.endTime
          };
        case 3:
          this.tempArticleData = {
            categoryVal: this.categoryVal,
            categoryCode: this.categoryCode,
            examSubject: this.examSubject,
            time: this.time,
            startTime: this.startTime,
            endTime: this.endTime
          };
          break;
        case 20:
          this.tempArticleData = {
            categoryVal: this.categoryVal,
            degreeTypeVale: this.degreeTypeVale,
            major: this.major,
            examSubject: this.examSubject,
            time: this.time,
            startTime: this.startTime,
            endTime: this.endTime
          };
          break;
        case 21:
          this.tempArticleData = {
            oneSubject: this.oneSubject,
            twoSubject: this.twoSubject,
            examSubject: this.examSubject,
            examCourseVal: this.examCourseVal,
            time: this.time,
            startTime: this.startTime,
            endTime: this.endTime
          };
          break;
        case 5:
          this.tempArticleData = {
            EngTypeCodeVal: this.EngTypeCodeVal,
            EngTypeVal: this.EngTypeVal,
            time: this.time,
            startTime: this.startTime,
            endTime: this.endTime
          };
          break;
        case 51:
          this.tempArticleData = {
            EngLevelVal: this.EngLevelVal,
            time: this.time,
            startTime: this.startTime,
            endTime: this.endTime
          };
          break;
        default:
          break;
      }
    }

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