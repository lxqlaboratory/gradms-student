export default {
  base: {
    curLanguage: 'Language'
  },
  login: {
    graduateSdu: 'Graduate School of Shandong University',
    rememberPassword: 'remember-password',
    forgetPassword: 'forget',
    showPassword: 'show',
    hidePassword: 'hide',
    placeholdUsername: 'please input your username',
    placeholdPassword: 'please input your password',
    loginTitle: 'Login',
    verification: 'Verification code',
    authenticationLogin: 'Unified authentication login ',
    manaegerTitle: 'SDU Graduates Academic Affairs Portal',
    noticeTitle: 'Friendship tips',
    inputverification: 'please enter verification code',
    correctverification: 'Please enter the correct verification code',
    notice1: 'The default password is prefix D (Doctor)/Master (M)+7 digits after the ID number. The letters in the ID number are capital letters.',
    notice2: 'It is recommended to use IE browser or Google browser above 9.0, and 360 browser should choose extreme speed mode'
  },
  menu: {
    application_menu: 'application menu'
  },
  notify: {
    notice: 'Notice'
  },
  message: {
    ok:{
      '插入成功': 'Inserted successfully',
      '删除成功': 'successfully delete',
      '该课程已锁定，不能退选！': 'This course is locked and cannot be dropped!'
    },
    error:{
      '学院与（课程名或课程号）不能同时为空': 'College and (course name or course number) cannot be empty at the same time',
      'userError': 'userError',
      '该课程已锁定，不能退选！': 'This course is locked and cannot be dropped!',
      '您输入的旧密码不正确': 'The old password you entered is incorrect'
    }
  },
  route: {
    loginTitle: 'title',
    personInformation: 'personal information',
    changePassword: 'change password',
    schoolRoll: 'enrollment status',
    studentInformance: 'student informance',
    pygl: 'cultivation management',
    xjhpygl: 'status and cultivation',
    dyzxzm: 'print the education certificate',
    pyfayxsgrjh: 'cultivation and students\' plan',
    pyfacx: 'cultivation  inquiry',
    ckbrpyfa: 'cultivation scheme inquiry',
    zdckpyjh: 'check cultivation scheme',
    kcyxk: 'courses and course selection',
    kccx: 'course inquiry',
    jxapdc: 'export teaching arrangement',
    xsxk: 'student\'s course selection',
    cjgl: 'grade management',
    cjcx: 'grade inquiry',
    zqkh: 'midterm assessment',
    tjktbg: 'submit opening report',
    byhxwgl: 'graduation and degree',
    txxwxx: 'degree information',
    txlwgzybz: 'work and shortcomings of paper',
    txbslwzpb: 'self-evaluation of doctoral thesis',
    tjbysq: 'graduation application',
    xxsclw: 'thesis uploading',
    cklwpyjg: 'thesis review',
    txbsdbgg: 'doctor oral defence announcement',
    lrdbjv: 'oral defence record input',
    pydbxxck: 'oral defence review',
    byxxhd: 'check the graduatrion information',
    xwxxhd: 'degree information check',
    dagl: 'archive management',
    txqnml: 'file directory',
    submit: 'submit',
    modify: 'modify',
    save: 'save',
    curPage: 'current page',
    dashboard: 'Dashboard'

  },

  // 个人信息修改密码模块
  modifyPasswordModal: {
    oldPassword: 'Previous password',
    inputNewPassword: 'Input new password',
    retypePassword: 'Retype password',
    passwordminLength: 'The password must be longer than or equal to 8 characters. Please re-enter!',
    passwordLength: 'The maximum length of the password is 20',
    passwordWrong: 'Inconsistent password entered twice',
    passwordWrong1: 'Please re-enter the new password',
    oldpwdEmpty: 'Old password cannot be empty',
    passwordzf: 'The password must contain at least two types of uppercase letters, lowercase letters, numbers and symbols. Please re-enter!',
    reset: 'reset'
  },

  // 个人信息联系方式维护模块
  updateContactModal: {
    updateContact: 'Update personal contact',
    Msn: 'MSN',
    mainPageAddress: 'home page address',
    SdEmail: 'Email of ShanDong university',
    ContactAddress: 'Contact address'
  },

  // 学籍信息中个人基本信息
  baseInformationModal: {
    baseInformation: 'base information',
    cultivationInformation: 'cultivation information',
    beforeSchool: 'before school information',
    personalInformation: 'personal information',
    name: 'name',
    englishName: 'English name',
    studentNumber: 'student number',
    sex: 'sex',
    nationality: 'nationality',
    photo: 'photo',
    date: 'date of birth',
    ID: 'ID number',
    religion: 'religion',
    person: 'personal contact number',
    contact: 'Contact number',
    phone: 'mobile phone number',
    qq: 'qq number',
    wechat: 'wechat',
    email: 'E-mail',
    remark: 'remark'
  },

  cultivationInformationModal: {
    studentCultivationInfo: 'Student cultivating information',
    studentType: 'Student type',
    department: 'School',
    trainingWay: 'Cultivating mode',
    major: 'Major',
    entranceDate: 'Date of entrance',
    dapartTime: 'Expected date of departure',
    languageLevel: 'Language level',
    examNo: 'Candidate number',
    healthStatus: 'Health status',
    speciaties: 'Specialties',
    financeStatus: 'Financial status',
    financeSource: 'Financial source',
    grade: 'Grade',
    tutor: 'Tutor',
    studyStatus: 'Status of study',
    class: 'Class',
    campus: 'Campus',
    system: 'System',
    direction: 'Research direction',
    sedCultivation: 'Secondary cultivating unit',
    thirdCultivation: 'Tertiary cultivating unit',
    StudentStatusOrNot: 'With or withour status',
    CourseName: 'Course time',
    Note: 'Blanks with * are required information',
    Note1: 'The format is 20070101'
  },

  // 入学前信息模块
  preSchoolInfoModal: {
    preSchoolInfoDisplay: 'Pre-School Information',
    undergraduate: 'Undergraduate ',
    undergraduateType: 'Graduation type',
    undergraduateMajor: 'Major',
    undergraduateUniversity: 'University',
    undergraduateDate: 'Date of Graduation.(eg.20070101)',
    undergraduateSchool: 'School',
    undergraduateThesisTitle: 'Thesis title',
    bachelarDegree: "Bachelar's degree",
    bachelarDegreeMajor: 'Major of bachelor’s degree',
    bachelarDegreeType: 'Type of bachelor’s degree',
    bachelarDegreeUnit: "Bachelor's degree granting institution",
    bachelarDegreeGrantedDate: "Date of bachelor's degree granting",
    postgraduate: 'Postgraduate',
    postgraduateType: 'Graduation type',
    postgraduateMajor: 'Major',
    postgraduateUniversity: 'University',
    postgraduateDate: 'Date of graduation.(eg.20070101)',
    postgraduateSchool: 'School',
    postgraduateThesisTitle: 'Thesis title',
    MasterDegree: "Master's degree",
    MasterDegreeMajor: 'Major of master’s degree',
    MasterSubjectType: 'Type of master’s degree',
    MasterDegreeGrantUnit: "Master's degree granting institution",
    MasterDegreeDate: "Date of bachelor's degree granting",
    remark: 'remark'
  },

  // 发表论文
  publishThesis: {
    publishThesis: 'publish thesis',
    thesisInfo: 'thesis information',
    note1: '1. The information related to the dissertation is an important part of the dissertation published in the doctoral dissertation self-assessment form. Please be sure to fill it out carefully before the doctor\'s anonymous review.',
    note2: '2. After the college secretary/secretary approves the paper, the paper information cannot be modified. To modify the paper information, please contact the corresponding college secretary/secretary approved by the review and set the status of the paper to be revised after the review is not passed.',
    note3: '3. The college secretary audit mainly uses postgraduate excellent results evaluation and graduation and degree review. The secretary review is mainly used for scholarship review.',
    publicationYear: 'Thesis publication year',
    publicationTime: 'Thesis publication date',
    to: 'to',
    authorRanking: 'author rank',
    query: 'query',
    export: 'export',
    number: 'number',
    choice: 'choice',
    thesisName: 'thesis name',
    publicationTime1: 'Thesis publication date',
    conferenceTitle: 'Journal conference name',
    level: 'level',
    inclusion: 'inclusion situdation',
    selfRank: 'My ranking',
    openOrNot: 'Open or not',
    status: 'status',
    operation: 'Operation',
    setOpen: 'Set it opem',
    setNotOpen: 'Set it private ',
    add: 'add'
  },
  // 发表专著
  publishMonograph: {
    publishMonograph: 'Publish monograph',
    note: 'After approved by the administrator,the monograph/textbook informaton can not be modified \n' +
      'student->If modifying monograph/textbook information，please contact 请联系审核通过的相应的学院秘书/书记将该专著/教材状态置为审核不通过后进行修改! \n' +
      '教师->若要修改专著/教材信息，请联系相应的学院秘书将该专著/教材状态置为审核不通过后进行修改!',
    monographInfo: '专著/教材信息',
    publishTime: '',
    to: 'to',
    autherRank: '作者位次',
    number: 'serial number',
    choice: 'choice',
    name: 'name',
    type: 'type',
    publishHouse: 'publishing house',
    publishDate: 'publishing date',
    pageNumber: 'page number',
    version: 'version',
    price: 'price(yuan)',
    selfRank: 'self ranking',
    isOpen: 'Open or not',
    status: 'status',
    operation: 'operation',
    note2: 'No qualified data！',
    setOpen: 'set it open',
    setNotOpen: 'set it not open',
    add: 'add'
  },

  // 专利
  patent: {
    note: 'patent/copyright information',
    note11: '1.The information related to the dissertation is an important part of the dissertation published in the doctoral dissertation self-assessment form. Please be sure to fill it out carefully before the doctor\'s anonymous review.',
    note1: '2.After the administrator has passed the patent/copyright, the patent/copyright information cannot be modified. ',
    note2: '3.Student->If you want to modify the patent/copyright information, please contact the corresponding college secretary/secretator who passed the review and set the patent/copyright status to be revised after the review is not passed!',
    note3: '4.Teacher->If you want to modify the patent/copyright information, please contact the corresponding college secretary to set the patent/copyright status to be revised after the review is not passed! ',
    registerDate: 'Date of granting certificate/registeration:',
    to: 'to',
    authorRanking: 'auther ranking:',
    query: 'query',
    number: 'number',
    choice: 'chocie',
    patentInfo: 'patent/copyright name',
    type: 'type',
    patentNo: 'patent/book registration number',
    typeNo: 'type number',
    /* grantingDate:'date of /登记日期',*/
    selfRank: 'self ranking',
    openOrNot: 'open or not',
    status: 'status',
    operation: 'operation',
    note12: 'SORRY:No approprrate data!!',
    setOpen: 'set open',
    setNotOpen: 'set not open',
    edit: 'edit',
    modify: 'modify',
    delete: 'delete',
    infoadd: 'Patent/copyright information added',
    patentTypeq: 'Patent/copyright category',
    patentDate1: 'Certificate date / registration date',
    add: 'add'
  },

  // 成果奖励信息查看
  achievement: {
    note: 'The awards for scientific research achievements used for ' +
      'graduation examination and awards for scholarship review shall be restricted, excluding awards for teaching achievements',
    note1: 'After the completion of filling, please submit the relevant materials to the school for review and approval, ' +
      'and they cannot be modified. If you need to modify the relevant information, please contact the school to set the status as "fail"',
    certificateTime: 'certificate time',
    to: 'to',
    authorRanking: 'author ranking',
    awardYear: 'reward year',
    note3: 'e.g.2012',
    query: 'query',
    export: 'export',
    number: 'number',
    choice: 'choice',
    awardName: 'reward name',
    type: 'type',
    awardType: 'reward type',
    awardRating: 'reward rating',
    awardLevel: 'reward level',
    awardCertificateTime: 'certificate time',
    selfRanking: 'self ranking',
    dataSource: 'data source',
    status: 'status',
    operation: 'operation',
    note4: 'SORRY:No appropriate data!',
    note5: 'add'
  },

  // 参与项目
  projectParticipation: {
    title: 'projectInfomation',
    note: 'After completing the report, please submit the relevant materials to the college for review. ' +
      'It cannot be modified after the approval. If you need to modify the relevant information, please contact the college to set the status to not pass.',
    note1: 'Student->If you want to modify the project information, please contact the corresponding college secretary/secretator ' +
      'who passed the review and set the status of the project to be revised after the review is not passed',
    note2: 'Teacher->If you want to modify the project information, ' +
      'please contact the corresponding college secretary to set the status of the project to be revised after the review is not passed!',
    projectTime: 'Project time',
    to: 'to',
    projectType: 'project type',
    autherRank: 'author ranking',
    query: 'query',
    number: 'number',
    choice: 'choice',
    porjectName: 'project name',
    type: 'type',
    projectRating: 'project rating',
    selfRank: 'self level',
    openOrNot: 'openOrNot',
    status: 'status',
    operation: 'operation',
    note3: 'SORRY:No appropriate data!',
    setOpen: 'set it open',
    setNotOpen: 'set it not open',
    add: 'add'
  },

  // 查看本人培养方案
  cultivatingScheme: {
    cultivatingSchemeDetail: 'Cultivating Scheme Detail',
    basicInfomation: 'Basic information',
    studentType: 'Student type',
    major: 'Major',
    schemeName: 'Scheme',
    startTime: 'Starting Time',
    compulsoryCredit: 'Compulsory Credits',
    totalCredit: 'Total Credits',
    cultivatingObj: 'Cultivating Objective',
    researchDirection: 'Research Direction',
    cultivatingMeans: 'Cultivating Means',
    studyYear: 'Period of Schooling',
    totalCreditAndCourse: 'Total credits required and course setup',
    cultivatingStep: 'Cultivating Step',
    researchandDissertation: 'Scientific Research and Academic Dissertation',
    graduationAndDegree: 'Graduation and Degree Awarding',
    comment: 'Comment'
  },

  // 培养方案查询
  cultivatingSchemeQuery: {
    studentType: 'Student Type',
    school: 'School',
    major: 'Major',
    year: 'Year',
    query: 'Query',
    ListOfCultivation: 'Cultivating Scheme List',
    cultivatingSchemeName: 'Cultivating Scheme Name',
    major1: 'Major',
    startTime: 'Starting Time',
    detail: 'Detail',
    fulu: 'Attachment: Course setting of this training program'
  },

  // 培养方案详细信息
  cultivatingSchemeInfo: {
    cultivatingSchemeDetail: 'Cultivating Scheme Detail',
    basicInfomation: 'Basic information',
    studentType: 'Student type',
    major: 'Major',
    schemeName: 'Scheme',
    startTime: 'Starting Time',
    compulsoryCredit: 'Compulsory Credits',
    totalCredit: 'Total Credits',
    cultivatingObj: 'Cultivating Objective',
    realmIntroduction: 'Brief introduction of the realm',
    cultivatingMeans: 'Cultivating Means',
    studyYear: 'Period of Schooling',
    totalCreditAndCourse: 'Total credits required and course setup',
    majorIntern: 'Professional internship',
    interimCheck: 'Mid-term assessment',
    researchandDissertation: 'Scientific research and academic dissertation',
    graduationAndDegree: 'Graduation and Degree Awarding',
    comment: 'Comment'
  },

  // 制定查看培养计划
  cuiltivatingSchemeCheckAndDrawup: {
    selectedCourses: 'List of selected courses',
    note1: 'The selected courses (including training credits) ' +
      'have met the requirements of required course credits and total credits!',
    title1: 'compulsory course',
    type: 'type',
    number: 'number',
    courseNumber: 'course number',
    courseName: 'course name',
    courseTerm: 'course semester',
    totalClassHours: 'total class period',
    credit: 'credit',
    evaluationMode: 'evaluation mode',
    courseNum: 'course number',
    tutor: 'teacher',
    grade: 'grade',
    testTime: 'testing time',
    cultivationStepList: 'List of cultivation steps',
    form: 'form',
    statement: 'statement',
    print: 'print',
    trainProgram: 'Training program',
    addPublic: 'Add a public elective course',
    interCollege: 'Inter-college selection',
    isPubSelectCourse: 'isPubSelectCourse',
    compulsoryCourse: ' Compulsory course',
    delete: 'delete'
  },

  // 课程查询
  courseQuery: {
    school: 'school',
    courseStatus: 'course status',
    courseType: 'course type',
    courseProperty: 'course property',
    courseNumber: 'course number',
    courseName: 'course name',
    query: 'query'
  },

  // 教学安排导出
  courseExport: {
    courseNumber: 'course number',
    courseName: 'course name',
    courseNo: 'course no',
    YearSemester: 'school semester',
    coursePlace: 'class location',
    OddOrEvenWeek: 'odd or even week',
    courseDate: 'starting date',
    startWeek: 'starting week',
    startWeekNumber: 'the number of course weeks',
    courseSection: 'course section',
    teacher: 'teacher'
  },

  // 学生选课
  selectCourse: {
    courseNum: 'course number',
    courseName: 'course name',
    courseSeq: 'course serial number',
    courseProperty: 'course property',
    exammeans: 'evaluation mode',
    teacher: 'teacher',
    semester: 'semester',
    restCourse: 'remaining class hours',
    examPlace: 'exam place',
    examTime: 'exam time ',
    remark: 'remark',
    courseArrangement: 'course arrangement',
    operation: 'operation'
  },

  // 成绩查询
  gradeQuery: {
    seqNum: 'number',
    courseNum: 'course number',
    courseName: 'course name',
    teacher: 'teacher',
    credit: 'credit',
    courseProperty: 'course property',
    examTime: 'date of exam'
  },

  // 提交开题报告
  submitOpeningReport: {
    note: 'Description: 1. Since the opening report through to submit his application, the graduate should have plenty of time for dissertation research and writing, please timely submit opening report ' +
      'information and focus on audit results 2. Not personal cultivation plan or plan mentor not audit, mid-term examination not through, please contact us in time to formulate and verifying of the instructor',
    thesisTitle: 'Thesis title',
    thesisType: 'Thesis type',
    thesisTopic: 'Source of thesis topic',
    opentingReportTime: 'Date of opening report reviewing',
    opentingReportResult: 'Result of opening report reviewing',
    midtermResult: 'Result of mid-term evaluation',
    subjectReaserch: 'Brief introduction of your reaserch topic'
  },
  // 填写学位信息
  fillInTheDegreeInfo: {
    note: 'description:',
    note1: '1.If you want to apply for degree in the current semester, after completed the degree information and student information, ' +
      'please click on the menu and graduation degree management, submit an application for graduation and select is submitted after the application is successful, otherwise the application degree is not successful',
    note2: '2.Paper keywords must be separated by commas (,) in English, 3-5, it may not be less than',
    note3: '3.also can\'t more than 5 (3) working unit of employment information in accordance with the now work unit to fill in',
    degreeThesisInfo: 'Dissertation information',
    thesisKeyWords: 'key words of thesis paper',
    thesisDissertation: 'Title of dissertation',
    thesisType: 'type of thesis paper',
    thesisTopicSource: 'source of thesis topic',
    thesisWords: 'thesis words(ten thousand)',
    thesisStartDate: 'start date of thesis',
    thesisEndDate: 'end date of thesis',
    format: 'the format is 20070101',
    feesPaidByTutor: 'costs paid by tutor for completing the thesis',
    employmentInfo: 'employment information',
    employmentOfGrad: 'employment of graduation',
    TypeOfWorkplace: 'property of workplace',
    LocationOfWorkplace: 'location of workplace',
    WorkProperty: 'job property',
    introduction: 'Introduction of the thesis (including the theoretical significance and application ' +
      'value of the topic selection; Innovation and significance of the paper; (500-800 words)'

  },

  // 提交毕业申请
  uploadThesisPaper: {
    note: 'Attention',
    note1: '1. The basic information of the paper is mainly used for the evaluation of the paper, the offer of the degree, the collection of the library, etc. ' +
      'The main words of the paper should be separated by English commas (", "), 3-5, no less than 3, no more than 5. After the information is complete, click modify and save, and it can be modified at any time.',
    note2: '2. The final dissertation is used for the review and detection of academic misconduct after graduation. Please contact your tutor for review after uploading.',
    studentNum: 'student number',
    name: 'name',
    language: 'language',
    typeNum: 'type number',
    theisTitle: 'thesis title',
    foreignTitle: 'foreign title',
    researchDirection: 'research direction ',
    ChineseKeyWords: 'Chinese key words',
    EnglishKeyWords: 'English key words',
    ChineseAbstract: 'Chinese abstract',
    EnglilshAbstract: 'English abstract',
    reference: 'Refernces',
    modifyAndSave: 'Modify and Save',
    note3: 'Please upload your paper in PDF format. Resubmission will overwrite the previous submission',
    degreeTheisFinal: 'Final dissertation',
    uploadingResult: 'Uploading result',
    reviewingResult: 'Audit result',
    reviewingAdvice: 'Audit advice',
    upload: 'uploadImage.vue',
    selectFiles: 'select a file',
    submit: 'submit'
  },
  // 评阅答辩信息查看
  reviewTheDefenseInformation: {
    DuplicateRatioTest: 'Duplicate Test of Application Form',
    ApplicationForDegree: 'Application for degree',
    DegreeApproval: 'Degree aapproval',
    DefenseRecord: 'Defense Record',
    GraduationApprovalForm: 'Graduation Approval Form',
    DoctorApplicationRegistrationForm: 'Doctor Application Registration Form',
    TableOfResearcAndAwards: 'Table of Research And Awards',
    DownloadDoctorSelfEvaluationForm: 'Download Doctor Self-evaluation Form',
    FinalDissertation: 'Final Dissertation',
    studentBasicInfomation: 'Student Basic Infomation',
    name: 'Name',
    studentNum: 'Student Number',
    studentType: 'Student Type',
    belongingCollege: 'School',
    major: 'Major',
    tutur: 'Tutor',
    title: 'Title of Thesis',
    defenceTime: 'Defence Time',
    defencePlace: 'Defence Place',
    DissertationEvaluationInformation: 'Dissertation evaluation information',
    TitleofDissertation: 'Title of dissertation',
    PaperTestResults: 'Paper Test Results',
    process: 'Process',
    name1: 'Name',
    professionalposts: 'Professional and Technical Posts ',
    mastersupervisor: 'Master/PhD Supervisor',
    workUnit: 'Work Unit',
    OverallRating: 'Overall Rating',
    OverallConclusion: 'Overall Conclusion',
    Operation: 'operation',
    MemberofDefenseCommittee: 'Member of Defense Committee',
    Membership: 'Membership',
    MemberName: 'Member Name',
    ProfessionalAndTechnicalPosts: 'professional and technical posts ',
    unit: 'unit', // 所属单位
    mastersupervisor2: 'Master/PhD Supervisor', // 博/硕导
    ChairmanofTheDefenseCommittee: 'Chairman of the defense committee',
    NOTE1: 'Resolution of dissertation defense committee (no less than 500 words and no more than 800 words)',
    NOTE2: 'Record of dissertation defense',
    NOTE3: 'Overall evaluation of the dissertation and the defense by the defense committee:',
    NOTE4: 'Voting of the dissertation committee',
    NumberOfMembers: 'Number of members present',
    NumberOfAb: 'Number of absent members', // 缺席委员人数
    DegreeVotes: 'Degree votes recommended', // 建议授予学位票数
    DegreeVotesNot: 'Degree votes not recommended', // 建议不授予学位票数
    ReviseAndRedefend: 'It is suggested to revise the thesis and re-defend it', // 建议修改论文重新答辩
    BackUp: 'back'
  },
  // 课程查询
  CourseQuery: {
    college: 'School',
    courseNum: 'Course Number',
    query: 'Query',
    creator: 'Creator',
    college1: 'School of the Course', // 所属学院
    courseType: 'Course Type', // 课程类别
    courseName: 'Course Name', // 课程名
    courseEName: 'Course English Name', // 课程英文名
    college3: 'School Offered the Course', // 开课学院
    semester: 'Sememster of the Course',
    total: 'Total Lesson', // 总学时
    credit: 'Credit', // 学分
    lectureLesson: 'Lesson Hours', // 讲课学时
    experimentalLesson: 'Experimental Course Lesson Hours', // 实验课学时
    computerLesson: 'Computer Lesson Hours', // 上机学时
    courseProperty: 'Course Property',
    teachingWays: 'Teaching Ways',
    teachingLanguage: 'Teaching Language', // 授课语言
    semesterNumber: 'Semester Numbers', // 学期持续数
    examWays: 'Exam Ways', // 考试方式
    gradeConfiguration: 'Grade Configuration', // 成绩配置
    CoursePerson: 'Course manager', //
    TypeForStu: 'Type Oriented for Students',
    CourseApplyingType: 'Course Applying Type', // 申请课程类型
    TeacherGroup: 'Teacher Group', // 教师组
    Textbook: 'Textbook',
    CourseHomePage: 'Course Home Page',
    Reference: 'Reference',
    PreClass: 'Pre-courses',
    courseStatement: 'Course Statement',
    courseIntroduction: 'Course introduction',
    teachingOutline: 'Teaching Outline', // 教学大纲
    note: 'Note',
    courseStatus: 'Course Status',
    SchoolAdvise: 'Advice of School',
    GraduateAdvise: 'Advice of Postgraduate School',
    BackUp: 'go back',
    Whether: 'Whether to apply for graduation',
    Whether2: 'No graduation application was submitted'
  },
  //博士论文自评
  DoctorPaperSelfEvaluate:{
    note:'Please confirm that the published papers in the student performance information have been approved'+
      'by the secretary of the school, and carefully fill in the information related to the dissertation, so as to'+
      'ensure the complete information of the self-evaluation form',
    title:'Self-evaluation Form for Doctoral Dissertation of Shandong University (for Anonymous Evaluation Only)',
    paperTitle:'Paper Title',
    subjectMajor:'Subject and Major(Name of second-level discipline)',
    researchDirection:'Research Direction',
    note1:'The research direction can be maintained on the page where students upload their dissertations',
    sequence:'Sequence',
    innovationalPoints:'The Main Innovation Points of This Paper（no more than 100 words for each points）',
    innovationPoints1:'Innovation Points 1:',
    innovationPoints2:'Innovation Points 2:',
    innovationPoints3:'Innovation Points 3:',
    shortcomings:'Shortcomings of Your Paper:',
    shortcomings1:'shortcomings:',
    submit:'submit',
    reset:'reset',
    downloadSelfEvalutionForm:'Download and View the Self-evaluation Form',
  },
  //提交毕业申请
  tjbysq:{
    byzt: 'Graduation status: if the graduate school does not agree to submit the graduation application status, you can not submit the graduation application!',
    txlwgzybz: 'The format of the content must be: The main work of this paper is.............。The shortcoming of this article is...........。Please write in a paragraph, no segmentation, please control the number of words in 200-300 words, so that the part beyond 300 is deleted.',
    txxwxx1: 'Paper introduction(include',
    txxwxx2: 'Source of the topic',
    txxwxx3: 'Theoretical significance and application value',
    txxwxx4: 'The innovation and significance of the thesis',
    txxwxx5: 'Inadequacies of the paper',
    txxwxx6: '(500-800 words)'
  },
  //填写卷内记录
  FilesDirectory: {
    title: 'File Directory(A full-time doctoral candidate)',
    name: 'Name',
    degreeTime: 'Degree awarding time',
    degreeCertificate: 'degree certificate number',
    materialName: 'Material name',
    formationTime: 'formation time',
    copies: 'copies',
    pages: 'pages',
    remark: 'remark'
  },
  //论文信息添加
  paperInfoAdd:{
    paperInfoAdd:'Add thesis information',
    thesisName:'Thesis Title',
    periodical:'Periodical and conference',
    publicationNumber:'Publication periodical number',
    thesisClass:'Level of thisis',
    note:'If there is not, please fill in no',
    factor:'Impact factor',
    publicationTime:'Publication time',
    authorRank:'Rank of author',
    volume:'volume number',
    series:'series number',
    startPage:'Start page',
    endPage:'End page',
    CollectingWays:'Ways of collection',
    enterEI:'Enter EI searching number',
    remark:'remark',
  },
  //说明
  statement:{
    discript: 'Description',
    note1:'For those applying to graduate this semester,please choose yes and submit',
    note2:'For those who do not apply to graduate this semester,please do not operate',
    note3:'For those who apply to graduate, please fill in and confirm the student status information and degree information',
    note4:'This information is used for national offers,please fill in seriously',
    note5:'Please read the statement carefully before you fill in',
    note:'You can only submit the graduation application from 2017-02-02 08:00 to 2019-12-31 17:01:01, please fill in the application immediately',
  }
}
