export default {
  route: {
    education: '教学管理',
    examinationPlan: '开考计划',
    addClassPlan: '开课计划',
    classPlan: '开课计划',
    dashboard: '首页',

  },
  //省份
  province: [{ id: 15, name: "山东省" }, { id: 14, name: "广东省" }],
  //学历
  qualificationsVal: [
    { name: "全部", key: '' },
    { name: "本科", key: '1' },
    { name: "专科", key: '2' },
    // { name: "教师资格", key: '3' },
    // { name: "网教统考辅导", key: '4' },
    // { name: "计算机等级", key: '5' },
    // { name: "12月全日制考研", key: '6' },
  ],
  //课程阶段
  kcStage: [
    { name: "全部", key: '' },
    { name: "高起专", key: 0 },
    { name: "专升本", key: '1' },
  ],
  //专本科院校学历
  qualifications: [
    "本科",
    "专科",],
  //课程类型
  kcType: [
    { name: "全部", key: '' },
    { name: "专业课", key: '1' },
    { name: "公开课", key: '2' },],

  //考试状态
  stateVal: [
    { name: '全部', key: '' },
    { name: '已考', key: '1' },
    { name: '考试中', key: '2' },
    { name: '考试结束', key: '3' }],
  //学位类型
  degreeType: [
    { name: '全部', key: '' },
    { name: '专硕', key: '1' },
    { name: '学硕', key: '2' }],
  //英语四六级考试种类
  EngType: [
    { name: '全部', key: '' },
    { name: '四级', key: '1' },
    { name: '六级', key: '2' }],
  EngLevel: [
    { name: '全部', key: '' },
    { name: '一级', key: '1' },
    { name: '二级', key: '2' },
    { name: '三级', key: '3' },
    { name: '四级', key: '4' }],
  //教师学院类别
  teacherExamType: [
    { name: '全部', key: '' },
    { name: '幼儿园', key: '4' },
    { name: '小学', key: '21' },
    { name: '初中', key: '2' },
    { name: '高中', key: '3' }],
  //造价工程师专业
  engineerMajor: [
    { name: '全部', key: '' },
    { name: '建筑工程专业', key: '' },
    { name: '建筑工程专业', key: '' }
  ],
  //医药卫生学院鉴定形式
  appraisalForm: [
    { name: '全部', key: '' },
    { name: '理论考试', key: '1' },
    { name: '技能操作考试', key: '2' },
    { name: '人机对话考试', key: '3' },
    { name: '工作现场模拟操作', key: '4' }],
  //医药卫生学院鉴定级别
  appraisalLevel: [
    { name: '全部', key: '' },
    { name: '一级', key: '1' },
    { name: '二级', key: '2' },
    { name: '三级', key: '3' }],
  //考试方式
  examType: [
    { name: "面试", key: '3' },
    { name: "笔试", key: '2' }],
  //学科门类
  Disciplines: [
    { name: "职业类", key: '104' },
    { name: "新闻学类", key: '103' },
    { name: "公安学类", key: '102' },
    { name: "社会学类", key: '101' },
    { name: "艺术类", key: '95' },
    { name: "农科类", key: '58' },
    { name: "教育学类", key: '56' },
    { name: "医药学类", key: '55' },
    { name: "工学类", key: '54' },
    { name: "语言文学类", key: '53' },
    { name: "经济管理类", key: '52' },
    { name: "法学类", key: '51' },],
  //学科门类
  Category: [
    { name: "艺术学", key: '105' },
    { name: "护理学", key: '92' },
    { name: "管理学", key: '75' },
    { name: "医学", key: '74' },
    { name: "农学", key: '73' },
    { name: "工学", key: '72' },
    { name: "理学", key: '71' },
    { name: "历史学", key: '70' },
    { name: "文学", key: '69' },
    { name: "教育学", key: '68' },
    { name: "法学", key: '67' },
    { name: "经济学", key: '66' },],
  //学科门类
  //院校
  schooleVal: [{
    name: "专本科学院",
    types: [{
      name: "自学考试辅导",
      Kind: '1'
    },
    {
      name: "普通专升本",
      Kind: '3'
    },
    {
      name: "成考考前辅导",
      Kind: '2'
    }
    ]
  },
  {
    name: "考研学院",
    types: [{
      name: "专硕",
      Kind: 20
    }, {
      name: "学硕",
      Kind: 22
    }, {
      name: "五月同等学历",
      Kind: 21
    }]
  },
  {
    name: "语培学院",
    types: [{
      name: "英语四六级",
      Kind: '5'
    },
    {
      name: "学位英语",
      Kind: 51
    }]
  },
  {
    name: "教师学院",
  },
  {
    name: "建筑工程学院",
    types: [
      {
        name: "建造师",
        Kind: 9
      }, {
        name: "工程造价实操",
        Kind: 10
      }, {
        name: "造价工程师",
        Kind: 41
      }
    ]
  },
  {
    name: "医药卫生学院",
    types: [
      {
        name: "健康管理师",
        Kind: 71
      }
    ]
  },
  {
    name: "财会学院"

  },
  {
    name: "职业培训学院",
    types: [
      {
        name: "计算机等级",
        Kind: 7
      }
    ]
  }

  ],

}
