<template>
  <div>
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
          <el-option
            v-for="(item,index) in  $t('kcType')"
            :key="index"
            :label="item"
            :value="index"
          />
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
  screenVal: string = ""; //搜索
  provinceVal: number = 15; //省份
  kcTypeVal: number = 0; //课程类型
  teacherVal: number = 0; //授课老师
  timeVal: string = ""; //时间
}
</script>
<style lang="scss" scoped>
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
</style>