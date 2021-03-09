import request from '@/utils/request'

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
