import request from '@/utils/request'

export function newCultivateCourseExportInit() {
  return request({
    url: '/api/course/newCultivateCourseExportInit',
    method: 'POST',
    data: {}
  })
}
