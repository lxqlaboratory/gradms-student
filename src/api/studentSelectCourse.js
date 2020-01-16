import request from '@/utils/request'

export function coursenewStuSelectInit() {
  return request({
    url: '/api/course/coursenewStuSelectInit',
    method: 'POST',
    data: {}
  })
}

export function newcultivateCourseOperation(data) {
  return request({
    url: '/api/course/newcultivateCourseOperation',
    method: 'POST',
    data
  })
}
