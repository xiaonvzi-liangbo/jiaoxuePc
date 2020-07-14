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
    "全部",
    "本科",
    "专科",
    "教师资格",
    "网教统考辅导",
    "计算机等级",
    "12月全日制考研",
  ],
  //课程阶段
  kcStage: [
    "全部", "高起专", "专升本",
  ],
  //专本科院校学历
  qualifications: [
    "全部",
    "本科",
    "专科",
  ],
  //课程类型
  kcType: [
    "全部",
    "专业课",
    "公开课",
  ],
  //project
  project: [
    '普通专升本',
    '自学考试辅导',
    '成考考前辅导',
  ],
  //考试状态
  stateVal: ['全部', '已考', '未考'],
  //学位类型
  degreeType: ['全部', '专硕', '学硕'],
  //英语四六级考试种类
  EngType: ['全部', '四级', '六级'],
  EngLevel: ['全部', '一级', '二级', '三级', '四级'],
  //教师学院类别
  teacherExamType: ['全部', '幼儿园', '小学', '初中', '高中'],
  //造价工程师专业
  engineerMajor: ['全部', '建筑工程专业', '建筑工程专业'],
  //医药卫生学院鉴定形式
  appraisalForm: ['全部', '理论考试', '技能操作考试', '人机对话考试', '工作现场模拟操作'],
  //医药卫生学院鉴定级别
  appraisalLevel: ['全部', '一级', '二级', '三级'],
  //考试方式
  examType: ["面试", "笔试"],
  //院校
  schooleVal: [{
    name: "专本科学院",
    types: [{
      name: "自学考试辅导",
      Kind: 1
    },
    {
      name: "普通专升本",
      Kind: 3
    },
    {
      name: "成考考前辅导",
      Kind: 2
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
      Kind: 5
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
  login: {
    title: '系统登录',
    logIn: '登录',
    username: '账号',
    password: '密码',
    any: '随便填',
    thirdparty: '第三方登录',
    thirdpartyTips: '本地不能模拟，请结合自己业务进行模拟！！！'
  },

  tagsView: {
    refresh: '刷新',
    close: '关闭',
    closeOthers: '关闭其它',
    closeAll: '关闭所有'
  },
  settings: {
    title: '系统布局配置',
    theme: '主题色',
    showTagsView: '显示 Tags-View',
    showSidebarLogo: '显示侧边栏 Logo',
    fixedHeader: '固定 Header',
    sidebarTextTheme: '侧边栏文字主题色'
  },

}
