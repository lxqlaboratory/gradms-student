export default {
  base: {
    curLanguage: '当前语言'
  },
  login: {
    graduateSdu: '山东大学研究生院',
    rememberPassword: '记住密码',
    forgetPassword: '忘记密码',
    showPassword: '显示密码',
    hidePassword: '隐藏密码',
    placeholdUsername: '您的学生账户',
    placeholdPassword: '请输入密码',
    loginTitle: '登录',
    authenticationLogin: '统一认证登录',
    manaegerTitle: '留学生研究生信息管理系统',
    noticeTitle: '友情提示',
    verification: '验证码',
    inputverification: '请输入验证码',
    correctverification: '请输入正确验证码',
    notice1: '（1）学生登陆为学生学号，缺省密码为前缀D（博士）/ 硕士（M）+证件号码后7位，证件号码中的字母为大写字母',
    notice2: '（2）建议使用9.0以上的IE浏览器或google浏览器,360浏览器请选用极速模式'
  },
  menu: {
    application_menu: '应用菜单'
  },
  notify:{
    notice:'通知'
  },
  message:{
    ok:{
      '插入成功': '插入成功',
      '删除成功': '删除成功',
      '该课程已锁定，不能退选！': '该课程已锁定，不能退选！'
    },
    error:{
      '学院与（课程名或课程号）不能同时为空': '学院与（课程名或课程号）不能同时为空',
      'userError': '用户信息错误',
      '该课程已锁定，不能退选！': '该课程已锁定，不能退选！',
      '您输入的旧密码不正确': '您输入的旧密码不正确'
    }
  },
  route: {
    loginTitle: '标题',
    personInformation: '个人信息',
    changePassword: '修改密码',
    schoolRoll: '学籍信息',
    studentInformance: '学生表现信息',
    pygl: '培养管理',
    xjhpygl: '学籍和培养管理',
    dyzxzm: '打印在学证明',
    pyfayxsgrjh: '培养方案与学生个人计划',
    pyfacx: '培养方案查询',
    ckbrpyfa: '查看本人培养方案',
    zdckpyjh: '制订查看培养计划',
    kcyxk: '课程与选课',
    kccx: '课程查询',
    jxapdc: '教学安排导出',
    xsxk: '学生选课',
    cjgl: '成绩管理',
    cjcx: '成绩查询',
    zqkh: '中期考核',
    tjktbg: '提交开题报告',
    byhxwgl: '毕业和学位管理',
    txxwxx: '填写学位信息',
    txlwgzybz: '填写论文工作与不足',
    txbslwzpb: '填写博士论文自评表',
    tjbysq: '提交毕业申请',
    xxsclw: '学生上传论文',
    cklwpyjg: '查看论文评阅结果',
    txbsdbgg: '填写博士答辩公告',
    lrdbjv: '录入答辩记录',
    pydbxxck: '评阅答辩信息查看',
    byxxhd: '毕业信息核对',
    xwxxhd: '学位信息核对',
    dagl: '档案管理',
    txqnml: '填写卷内目录',
    submit: '提交',
    modify: '修改',
    save: '保存',
    curPage: '现在位置',
    dashboard: '首页'
  },

  // 个人信息修改密码模块
  modifyPasswordModal: {
    oldPassword: '旧密码',
    inputNewPassword: '输入新密码',
    retypePassword: '重新输入密码',
    passwordminLength: ' 密码长度必须大于等于8个字符，请重新输入！',
    passwordLength: ' 密码长度最大为20位',
    passwordWrong: '两次输入的密码不一致',
    passwordWrong1: '请重新输入新密码',
    oldpwdEmpty: '旧密码不能为空',
    passwordzf: '密码至少包含大写字母、小写字母、数字和符号两种以上的类型，请重新输入！',
    reset: '重置'
  },

  // 个人信息联系方式维护模块
  updateContactModal: {
    updateContact: '个人联系方式更新',
    Msn: 'MSN',
    MainPageAddree: '主页地址',
    SdEmail: '山大邮件',
    ContactAddress: '通讯地址'
  },

  // 学籍信息中个人基本信息
  baseInformationModal: {
    baseInformation: '基本信息',
    cultivationInformation: '培养信息',
    beforeSchool: '入学前信息',
    personalInformation: '个人基本信息',
    name: '姓名',
    englishName: '英文姓名',
    studentNumber: '学 号',
    sex: '性 别',
    nationality: '国 别 ',
    photo: '照片',
    date: '出生日期',
    ID: '证件号码',
    religion: '宗教信仰',
    person: '个人联系方式',
    contact: '联系电话',
    phone: '移动电话',
    qq: 'QQ号',
    wechat: '微信号',
    email: '电子邮件',
    remark: '备注'
  },

  cultivationInformationModal: {
    studentCultivationInfo: '学生培养信息',
    studentType: '学生类型',
    department: '所属院系',
    trainingWay: '培养方式',
    major: '所属专业',
    entranceDate: '入学年月',
    dapartTime: '预计离校时间',
    languageLevel: '外语水平',
    examNo: '准考证号',
    healthStatus: '健康状况',
    speciaties: '有何特长',
    economicStatus: '经济状况',
    financeSource: '本人经济来源',
    grade: '年级',
    tutor: '导师',
    studyStatus: '在学状态',
    class: '所在班级',
    campus: '所属校区',
    system: '学制',
    direction: '研究方向',
    sedCultivation: '二级培养单位',
    thirdCultivation: '三级培养单位',
    StudentStatusOrNot: '是否有学籍',
    courseTime: '上课时间',
    Note: '加 * 的为必填信息',
    Note1: '格式为"20070101" '
  },

  // 入学前信息模块
  preSchoolInfoModal: {
    preSchoolInfoDisplay: '入学前信息显示',
    undergraduate: '本科阶段',
    undergraduateType: '本科毕业类别',
    undergraduateMajor: '本科毕业专业',
    undergraduateUniversity: '本科毕业学校',
    undergraduateDate: '本科毕业年月',
    undergraduateSchool: '本科毕业院系',
    undergraduateThesisTitle: '本科论文题目',
    bachelarDegree: '学士学位',
    bachelarDegreeMajor: '学士学位专业',
    bachelarDegreeType: '学士学位门类',
    bachelarDegreeUnit: '学士学位授予单位',
    bachelarDegreeGrantedDate: '获取学士学位年月',
    postgraduate: '硕士阶段',
    postgraduateType: '硕士毕业类别',
    postgraduateMajor: '硕士毕业专业',
    postgraduateUniversity: '硕士毕业学校',
    postgraduateDate: '硕士毕业年月',
    postgraduateSchool: '硕士毕业院系',
    postgraduateThesisTitle: '硕士论文题目',
    MasterDegree: '硕士学位',
    MasterDegreeMajor: '获硕士学位专业',
    MasterSubjectType: '硕士学科门类',
    MasterDegreeGrantUnit: '硕士学位授予单位',
    MasterDegreeDate: '获取硕士学位年月',
    remark: '备注'
  },

  // 学生表现信息
  punishViolation:
    {
      PunishViolation: '惩处违纪',
      PunishInfo: '惩处信息',
      Num: '序号',
      PunishReason: '惩处原因',
      PunishClass: '惩处等级',
      punishType: '惩处类别',
      paperNumber: '文案编号',
      punishDepartment: '惩处部门',
      violationTime: '违纪时间',
      punishTime: '处罚时间',
      noPunishRecord: '无惩处记录'

    },

  // 发表论文
  publishThesis: {
    publishThesis: '发表论文',
    thesisInfo: '论文信息',
    note1: '1.与学位论文相关信息是博士论文自评表中发表论文相关的重要内容，请务必在博士匿名评阅送审前认真填写完成。',
    note2: '2.学院秘书/书记审核通过该论文后，该论文信息则不可修改。若要修改论文信息，请联系审核通过的相应的学院秘书/书记，将该论文状态置为审核不通过后进行修改。',
    note3: '3.学院秘书审核主要用研究生优秀成果评审和毕业与学位审核，书记审核主要用于奖学金评审。',
    publicationYear: '论文发表年度',
    publicationTime: '论文发表时间',
    to: '至',
    authorRanking: '作者位次',
    query: '查询',
    export: '导出',
    number: '序号',
    choice: '选择',
    thesisName: '论文名称',
    publicationTime1: '发表时间',
    conferenceTitle: '期刊会议名称',
    level: '级别',
    inclusion: '收录情况',
    selfRank: '本人位次',
    openOrNot: '是否公开',
    status: '状态',
    operation: '操作',
    setOpen: '设置公开',
    setNotOpen: '设置不公开',
    add: '添加'
  },

  // 发表专著
  publishMonograph: {
    publishMonograph: '发表专著',
    note: '管理员审核通过该专著/教材后，该专著/教材信息则不可修改。 \n' +
      '学生->若要修改专著/教材信息，请联系审核通过的相应的学院秘书/书记将该专著/教材状态置为审核不通过后进行修改! \n' +
      '教师->若要修改专著/教材信息，请联系相应的学院秘书将该专著/教材状态置为审核不通过后进行修改!',
    monographInfo: '专著/教材信息',
    publishTime: '',
    to: '至',
    autherRank: '作者位次',
    number: '序号',
    choice: '选择',
    name: '名称',
    type: '类型',
    publishHouse: '出版社',
    publishDate: '出版日期',
    pageNumber: '页码数',
    version: '版次',
    price: '定价(元)',
    selfRank: '本人位次',
    isOpen: '是否公开',
    status: '状态',
    operation: '操作',
    note2: '没有符合的数据！',
    setOpen: '设置公开',
    setNotOpen: '设置不公开',
    add: '添加'
  },

  // 专利
  patent: {
    note: '专利',
    note11: '1.与学位论文相关信息是博士论文自评表中发表论文相关的重要内容，请务必在博士匿名评阅送审前认真填写完成。',
    note1: '2.管理员审核通过该专利/著作权后，该专利/著作权信息则不可修改。 ',
    note2: '3.学生->若要修改专利/著作权信息，请联系审核通过的相应的学院秘书/书记将该专利/著作权状态置为审核不通过后进行修改',
    note3: '4.教师->若要修改专利/著作权信息，请联系相应的学院秘书将该专利/著作权状态置为审核不通过后进行修改!',
    registerDate: '颁证日/登记日期:',
    to: '至',
    authorRanking: '作者位次:',
    query: '查询',
    number: '序号',
    choice: '选择',
    patentInfo: '专利/著作权名称',
    type: '类别',
    patentNo: '专利号/著作登记号',
    typeNo: '分类号',
    grantingDate: '颁证日/登记日期',
    selfRank: '本人位次',
    openOrNot: '是否公开',
    status: '状态',
    operation: '操作',
    note12: 'SORRY:没有符合的数据!',
    setOpen: '设置公开',
    edit: '编辑',
    modify: '修改',
    delete: '删除',
    setNotOpen: '设置不公开',
    infoadd: '专利/著作权信息添加',
    patentTypeq: '专利/著作权类别',
    patentDate1: '颁证日/登记日期',
    add: '添加'
  },

  // 成果奖励信息查看
  achievement: {
    note: '限填用于毕业审核的科研成果奖励，以及用于奖学金评审的奖励奖项，不包括教学成果奖等奖励 ',
    note1: '填报完成后，请将相关材料交学院审核。审核通过后不可修改，若需修改相关信息，请先联系学院将状态设置为不通过',
    certificateTime: '奖励证书时间',
    to: '至',
    authorRanking: '作者位次',
    awardYear: '奖励年度',
    note3: 'e.g.2012',
    query: '查询',
    export: '导出',
    number: '序号',
    choice: '选择',
    awardName: '获奖名称',
    type: '类型',
    awardType: '获奖类别',
    awardRating: '获奖等级',
    awardLevel: '奖励级别',
    awardCertificateTime: '奖励证书时间',
    selfRanking: '本人位次',
    dataSource: '数据来源',
    status: '状态',
    operation: '操作',
    note4: 'SORRY:没有符合的数据!',
    note5: '添加'
  },

  // 参与项目
  projectParticipation: {
    title: '项目信息',
    note: '填报完成后，请将相关材料交学院审核。审核通过后不可修改，若需修改相关信息，请先联系学院将状态设置为不通过',
    note1: '学生->若要修改项目信息，请联系审核通过的相应的学院秘书/书记将该项目状态置为审核不通过后进行修改!',
    note2: '教师->若要修改项目信息，请联系相应的学院秘书将该项目状态置为审核不通过后进行修改!',
    projectTime: '立项时间',
    to: '至',
    projectType: '项目类型',
    autherRank: '作者位次',
    query: '查询',
    number: '序号',
    choice: '选择',
    porjectName: '项目名称',
    type: '类别',
    projectRating: '项目等级',
    selfRank: '本人位次',
    openOrNot: '是否公开',
    status: '状态',
    operation: '操作',
    note3: 'SORRY:没有符合的数据!',
    setOpen: '设置公开',
    setNotOpen: '设置不公开',
    add: '添加'
  },

  // 查看本人培养方案
  cultivatingScheme: {
    cultivatingSchemeDetail: '培养方案详细信息',
    basicInfomation: '基本信息',
    studentType: '学生类型',
    major: '所属专业',
    schemeName: '方案名称',
    startTime: '起始时间',
    compulsoryCredit: '必修学分',
    totalCredit: '总学分',
    cultivatingObj: '培养目标',
    researchDirection: '研究方向',
    cultivatingMeans: '培养方式',
    studyYear: '学习年限',
    totalCreditAndCourse: '应修总学分与课程设置',
    cultivatingStep: '培养环节',
    researchandDissertation: '科学研究与学位论文',
    graduationAndDegree: '毕业及学位授予',
    comment: '备注'
  },

  // 培养方案查询
  cultivatingSchemeQuery: {
    studentType: '学生类型',
    school: '学院',
    major: '专业',
    year: '年份',
    query: '查询',
    ListOfCultivation: '培养方案列表',
    cultivatingSchemeName: '培养方案名称',
    major1: '所属专业',
    startTime: '起始时间',
    detail: '详细',
    fulu: '附：本培养方案的课程设置'
  },

  // 培养方案详细信息
  cultivatingSchemeInfo: {
    cultivatingSchemeDetail: '培养方案详细信息',
    basicInfomation: '基本信息',
    studentType: '学生类型',
    major: '所属专业',
    schemeName: '方案名称',
    startTime: '起始时间',
    compulsoryCredit: '必修学分',
    totalCredit: '总学分',
    cultivatingObj: '培养目标',
    realmIntroduction: '领域简介',
    cultivatingMeans: '培养方式',
    studyYear: '学习年限',
    totalCreditAndCourse: '应修总学分与课程设置',
    cultivatingStep: '专业实习',
    interimCheck: '中期考核',
    researchandDissertation: '科学研究与学位论文',
    graduationAndDegree: '毕业及学位授予',
    comment: '备注'
  },

  // 制定查看培养计划
  cuiltivatingSchemeCheckAndDrawup: {
    selectedCourses: '已选择课程列表',
    note1: ' 所选课程（包括培养环节学分）已满足必修课学分和总学分要求!',
    title1: '必修课',
    type: '类别',
    number: '序号',
    courseNumber: '课程号',
    courseName: '课程名',
    courseTerm: '开课学期',
    totalClassHours: '总学时',
    credit: '学分',
    evaluationMode: '考核方式',
    courseNum: '课序号',
    tutor: '任课老师',
    grade: '成绩',
    testTime: '考试时间',
    cultivationStepList: '培养环节列表',
    form: '形式',
    statement: '说明',
    print: '打印',
    trainProgram: '培养方案课程',
    addPublic: '添加公共选修课',
    interCollege: '跨学院选课',
    isPubSelectCourse: '是否公选课',
    compulsoryCourse: '必修课',
    delete: '删除'
  },

  // 课程查询
  courseQuery: {
    school: '学院',
    courseStatus: '课程状态',
    courseType: '课程类别',
    courseProperty: '课程属性',
    courseNumber: '课程号',
    courseName: '课程名',
    query: '查询'
  },

  // 课程安排导出
  courseExport: {
    courseNumber: '课程号',
    courseName: '课程名',
    courseNo: '课序号',
    YearSemester: '学年学期',
    coursePlace: '上课地点',
    OddOrEvenWeek: '是否单双周',
    courseDate: '上课日期',
    startWeek: '上课起始周',
    startWeekNumber: '上课周数',
    courseSection: '课程节次',
    teacher: '上课老师'
  },

  // 学生选课
  selectCourse: {
    courseNum: '课程号',
    courseName: '课程名',
    courseSeq: '课序号',
    courseProperty: '课程性质',
    exammeans: '考核方式',
    teacher: '上课老师',
    semester: '上课学期',
    restCourse: '课余量',
    examPlace: '考试地点',
    examTime: '考试时间',
    remark: '备注',
    courseArrangement: '课程安排',
    operation: '操作'
  },

  // 成绩查询
  gradeQuery: {
    seqNum: '序号',
    courseNum: '课程号',
    courseName: '课程名',
    teacher: '任课教师',
    credit: '学分',
    courseProperty: '课程属性',
    examTime: '考试时间'
  },

  // 提交开题报告
  submitOpeningReport: {
    note: '说明:\n' +
      '1. 自开题报告通过至提交答辩申请，研究生应有充足的时间进行学位论文的研究与撰写，请及时提交开题报告信息并关注审核结果。\n' +
      '2. 未制订个人培养计划或培养计划导师未审核，中期考核不能通过，请及时制订并联系导师予以审核。',
    thesisTitle: '论文题目',
    thesisType: '论文类型',
    thesisTopic: '选题来源',
    opentingReportTime: '开题报告审核时间',
    opentingReportResult: '开题报告审核结果',
    midtermResult: '中期考核结果',
    subjectReaserch: '课题研究设计选题简介(500-800字)'
  },
  // 填写学位信息
  fillInTheDegreeInfo: {
    note: '说明:\n' +
      '1.如果要在当前学期申请学位，在填完学位信息和学籍信息之后，请点击菜单“毕业和学位管理--提交毕业申请”并选择“是”，提交以后才申请成功，否则申请学位不成功。\n' +
      '2.论文主题词须以英文逗号（“,”）隔开，3-5个，不能少于3个，也不能多于5个。\n',
    note1: '1.如果要在当前学期申请学位，在填完学位信息和学籍信息之后，请点击菜单“毕业和学位管理--提交毕业申请”并选择“是”，提交以后才申请成功，否则申请学位不成功。',
    note2: '2.论文主题词须以英文逗号（“,”）隔开，3-5个，不能少于3个，也不能多于5个。',
    degreeThesisInfo: '学位论文信息',
    thesisKeyWords: '论文主题词',
    thesisType: '论文类型',
    thesisDissertation: '学位论文题目',
    thesisTopicSource: '论文选题来源',
    thesisWords: '论文字数（万）',
    thesisStartDate: '论文开始日期',
    thesisEndDate: '论文结束日期',
    format: '格式为20070101',
    feesPaidByTutor: '完成本论文导师支付的费用',
    employmentInfo: '就业信息',
    employmentOfGrad: '毕业去向',
    TypeOfWorkplace: '就业单位性质类别',
    LocationOfWorkplace: '就业单位省市',
    WorkProperty: '工作性质',
    introduction: '论文介绍(包括 论文选题的来源 理论意义和应用价值; 论文的创新性及意义; 论文的不足之处) (500-800字)'
  },

  // 提交毕业申请
  // 学生上传学位查重论文
  uploadThesisPaper: {
    note: '注意：',
    note1: ' 1、论文基本信息主要用于论文评审，学位报盘、图书馆收录等，论文主题词须以英文逗号（“,”）隔开，3-5个，不能少于3个，也不能多于5个，信息完善后点击修改保存，并随时可以修改，以最后一次修改为准。',
    note2: ' 2、学位论文终稿用于毕业后论文审核和学术不端检测，请在上传后及时联系导师进行审核，导师审核通过后，可以进行学术不端检测，导师审核通过后，不能再上传论文。',
    studentNum: '学号',
    name: '姓名',
    language: '语种',
    typeNum: '分类号',
    theisTitle: '论文题目',
    foreignTitle: '外文题名',
    researchDirection: '研究方向',
    ChineseKeyWords: '中文关键词',
    EnglishKeyWords: '英文关键词',
    ChineseAbstract: '中文摘要',
    EnglilshAbstract: '英文摘要',
    reference: '参考文献',
    modifyAndSave: '修改保存',
    note3: '请上传pdf格式的论文,再次提交将覆盖上次提交内容',
    degreeTheisFinal: '学位论文终稿',
    uploadingResult: '上传结果',
    reviewingResult: '审核结果',
    reviewingAdvice: '审核意见',
    upload: '上传',
    selectFiles: '选择文件',
    submit: '提交'
  },
  // 评阅答辩信息查看
  reviewTheDefenseInformation: {
    DuplicateRatioTest: '重复比检测申请表',
    ApplicationForDegree: '学位申请书',
    DegreeApproval: '学位审批书',
    DefenseRecord: '答辩记录纸',
    GraduationApprovalForm: '毕业审批表',
    DoctorApplicationRegistrationForm: '博士申请登记表',
    TableOfResearcAndAwards: '科研和奖励情况表',
    DownloadDoctorSelfEvaluationForm: '博士自评表下载',
    FinalDissertation: '学位论文终稿',
    studentBasicInfomation: '学生基本信息',
    name: '姓名',
    studentNum: '学号',
    studentType: '学生类型',
    belongingCollege: '所属学院',
    major: '所属专业',
    tutur: '导师',
    title: '论文题目',
    defenceTime: '答辩时间',
    defencePlace: '答辩地点',
    DissertationEvaluationInformation: '学位论文评阅信息',
    TitleofDissertation: '学位论文题目',
    PaperTestResults: '论文检测结果',
    process: '进程',
    name1: '姓名',
    professionalposts: '专业技术职务',
    mastersupervisor: '博/硕导',
    workUnit: '工作单位',
    OverallRating: '总体评价等级',
    OverallConclusion: '总体评价结论',
    Operation: '操作',
    MemberofDefenseCommittee: '答辩委员会成员',
    Membership: '成员身份',
    MemberName: '成员姓名',
    ProfessionalAndTechnicalPosts: '专业技术职务',
    unit: '所属单位', // 所属单位
    mastersupervisor2: '博/硕导', // 博/硕导
    ChairmanofTheDefenseCommittee: 'Chairman of the defense committee',
    NOTE1: '学位论文答辩委员会决议',
    NOTE2: '学位论文答辩记录',
    NOTE3: '答辩委员会对学位论文及答辩情况的总体评价: ',
    NOTE4: '学位论文答辩委员会表决情况',
    NumberOfMembers: '出席委员人数',
    NumberOfAb: '缺席委员人数', // 缺席委员人数
    DegreeVotes: '建议授予学位票数', // 建议授予学位票数
    DegreeVotesNot: '建议不授予学位票数', // 建议不授予学位票数
    ReviseAndRedefend: '建议修改论文重新答辩', // 建议修改论文重新答辩
    BackUp: '后退'
  },
  // 课程查询
  CourseQuery: {
    college: '学院',
    courseNum: '课程号',
    query: '查询',
    creator: '创建者',
    college1: '所属学院', // 所属学院负责人
    courseType: '课程类别', // 课程类别
    courseName: '课程名', // 课程名
    courseEName: '课程英文名', // 课程英文名
    college3: '开课学院', // 开课学院
    semester: '开课学期',
    total: '总学时', // 总学时
    credit: '学分', // 学分
    lectureLesson: '讲课学时', // 讲课学时
    experimentalLesson: '实验课学时', // 实验课学时
    computerLesson: '上机学时', // 上机学时
    courseProperty: '课程属性',
    teachingWays: '教学方式',
    teachingLanguage: '授课语言', // 授课语言
    semesterNumber: '学期持续数', // 学期持续数
    examWays: '考试方式', // 考试方式
    gradeConfiguration: '成绩配置', // 成绩配置
    CoursePerson: '课程负责人', //
    TypeForStu: '面向学生类型',
    CourseApplyingType: '申请课程类型', // 申请课程类型
    TeacherGroup: '教师组', // 教师组
    Textbook: '教材',
    CourseHomePage: '课程主页',
    Reference: '参考书目',
    PreClass: '预修需求',
    courseStatement: '课程说明',
    courseIntroduction: '课程简介',
    teachingOutline: '教学大纲', // 教学大纲
    note: '备注',
    courseStatus: '课程状态',
    SchoolAdvise: '学院意见',
    GraduateAdvise: '研究生院意见',
    BackUp: '后退',
    Whether: '是否申请毕业',
    Whether2: '没有提交毕业申请'
  },
  //博士论文自评
  DoctorPaperSelfEvaluate:{
    note:'请确认学生表现信息中的已发表论文已经通过学院秘书审核，并认真填写完成与学位论文相关信息，以确保自评表信息完整',
    title:'山东大学博士学位论文自评表（匿名评审专用） ',
    paperTitle:'论文题目 ',
    subjectMajor:'学科专业（二级学科名称）',
    researchDirection:'研究方向',
    note1:'论文主要创新点（每点不超过100字） ',
    sequence:'序号',
    innovationalPoints:'创新点',
    innovationPoints1:'创新点1:',
    innovationPoints2:'创新点2:',
    innovationPoints3:'创新点3:',
    shortcomings:'论文的不足之处（含原因及改进方法）:',
    shortcomings1:'不足之处:',
    submit:'提交',
    reset:'重置',
    downloadSelfEvalutionForm:'自评表下载查看',
  },
  //提交毕业申请
  tjbysq:{
    byzt: '毕业状态:不是研究生院同意提交毕业申请状态，不能提交毕业申请!',
    txlwgzybz: '内容的格式必须是：本文的主要工作是.............。本文的不足之处是...........。\n' +
      '          请写在一段话里即可，不用分段，字数请控制在200-300字，以免超出300的部分被删除。',
    txxwxx1: '论文介绍(包括',
    txxwxx2: '论文选题的来源',
    txxwxx3: '理论意义和应用价值',
    txxwxx4: '论文的创新性及意义',
    txxwxx5: '论文的不足之处',
    txxwxx6: '(500-800字)'
  },

  //填写卷内记录
  FilesDirectory:{
    title:'卷内目录 （全日制攻读博士学位研究生)',
    name:'姓名',
    degreeTime:'授学位时间',
    degreeCertificate:'学位证书号',
    materialName:'材料名称',
    formationTime:'形成时间',
    copies:'份数',
    pages:'页数',
    remark:'备注'
},
  //论文信息添加
  paperInfoAdd:{
    paperInfoAdd:'论文信息添加',
    thesisName:'论文名称',
    periodical:'期刊或会议名称',
    publicationNumber:'发表刊物刊号',
    thesisClass:'论文级别',
    note:'没有请填写无',
    factor:'影响因子',
    publicationTime:'发表时间',
    authorRank:'作者位次',
    volume:'第几卷',
    series:'s第几期',
    startPage:'起始页',
    endPage:'终止页',
    CollectingWays:'收录方式',
    enterEI:'录入EI检索号',
    remark:'备注',
  },
  //说明
  statement:{
    discript: '说明',
    note1:'请申请本学期毕业的学生选择是，并提交',
    note2:'本学期不申请毕业的学生请不要操作',
    note3:'申请毕业的学生请及时填写并确认学籍信息和学位信息',
    note4:'这些信息用于国家报盘，请认真填写各项信息',
    note5:'填写之前请认真阅读填写说明',
    note:'填写别业申请时间为 2017-02-02 08:00 至 2019-12-31 17:01:01, 请尽快提交毕业申请',
  }




}
