import request from '@/utils/request'

export function getStudentBaseicInfo() {
  return request({
    url: '/api/student/getStudentBaseicInfoData',
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
