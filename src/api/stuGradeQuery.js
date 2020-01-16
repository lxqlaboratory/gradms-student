import request from '@/utils/request'

export function stuGradeQuery() {
  return request({
    url: '/api/course/stuGradeQuery',
    method: 'POST',
    data: {}
  })
}
