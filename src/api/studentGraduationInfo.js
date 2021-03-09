import request from '@/utils/request'

export function getStudentGraduationInfo() {
  return request({
    url: '/api/student/getStudentGraduationInfo',
    method: 'POST',
    data: {}
  })
}
