import request from '@/utils/request'

export function login(jsonForm) {
  return request({
    url: '/api/apiLogin',
    method: 'post',
    data: jsonForm
  })
}

export function getInfo() {
  return request({
    url: '/api/getInfo',
    method: 'post',
    data:{}
  })
}

export function logout() {
  return request({
    url: '/api/logout',
    method: 'post',
    data:{}
  })
}

export function editPassword(data) {
  return request({
    url: '/api/auth/changePassword',
    method: 'POST',
    data
  })
}

export function getStudentBaseicInfo() {
  return request({
    url: '/api/student/getStudentBaseicInfoData',
    method: 'POST',
    data: {}
  })
}

export function getStudentTrainInfo() {
  return request({
    url: '/api/student/getStudentTrainInfoData',
    method: 'POST',
    data: {}
  })
}


export function updateStudentBaseicInfo(data) {
  return request({
    url: '/api/student/updateStudentBaseicInfo',
    method: 'POST',
    data
  })
}

export function getStudentPreSchoolInfo() {
  return request({
    url: '/api/student/getStudentPreSchoolInfoData',
    method: 'POST',
    data: {}
  })
}


export function updateStudentPreSchoolInfo(data) {
  return request({
    url: '/api/student/updateStudentPreSchoolInfo',
    method: 'POST',
    data
  })
}

export function cultivateSchemeShow() {
  return request({
    url: '/api/cultivate/cultivateSchemeShow',
    method: 'POST',
    data: {}
  })
}
export function getMajorList(data) {
  return request({
    url: '/api/cultivate/getMajorList',
    method: 'POST',
    data
  })
}

export function getCultivateTableList(data) {
  return request({
    url: '/api/cultivate/getCultivateTableList',
    method: 'POST',
    data
  })
}

export function showCultivate(data) {
  return request({
    url: '/api/cultivate/showCultivate',
    method: 'POST',
    data
  })
}
// 查看本人培养计划
export function showPersonCultivate() {
  return request({
    url: '/api/cultivate/showCultivate',
    method: 'POST',
    data: {}
  })
}

export function showCourse(data) {
  return request({
    url: '/api/cultivate/showCourse',
    method: 'POST',
    data
  })
}


export function showCultivatePlan() {
  return request({
    url: '/api/cultivate/newPlanSelectCourse',
    method: 'POST',
    data: {}
  })
}

export function pyfadkcsz(data) {
  return request({
    url: '/api/cultivate/pyfadkcsz',
    method: 'POST',
    data
  })
}

export function downloadzxzm(data) {
  return request({
    url: '/api/cultivate/pyfadkcsz',
    method: 'POST',
    data
  })
}

export function stuGradeQuery() {
  return request({
    url: '/api/cultivate/stuGradeQuery',
    method: 'POST',
    data: {}
  })
}

export function uploadFile() {
  return request({
    url: '/api/student/uploadFile',
    method: 'POST',
    data: {}
  })
}

export function courseQueryInfo() {
  return request({
    url: '/api/course/courseQueryInfo',
    method: 'POST',
    data: {}
  })
}
