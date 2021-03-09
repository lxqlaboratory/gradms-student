import request from '@/utils/request'

export function getStudentBaseicInfo() {
  return request({
    url: '/base/getPersonBaseInfo',
    method: 'POST',
    data: {}
  })
}

export function updateStudentBaseicInfo(data) {
  return request({
    url: '/studentms/studentBaseInfoMaintain',
    method: 'POST',
    data
  })
}
