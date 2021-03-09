import request from '@/utils/request'

export function getStudentDegreeInfo() {
  return request({
    url: '/api/degree/getStudentDegreeInfo',
    method: 'POST',
    data: {}
  })
}
