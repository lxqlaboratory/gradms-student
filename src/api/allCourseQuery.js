import request from '@/utils/request'

export function allCourseQueryInit() {
  return request({
    url: '/api/course/allCourseQueryInit',
    method: 'POST',
    data: {}
  })
}

export function allCourseQueryDoQuery(data) {
  return request({
    url: '/api/course/acrossCourseQueryDoQuery',
    method: 'POST',
    data
  })
}

export function newCultivateCourseDetail(data) {
  return request({
    url: '/api/course/newCultivateCourseDetail',
    method: 'POST',
    data
  })
}


export function degreeThesisAttachmentDownload(data) {
  return request({
    url: '/api/degree/degreeThesisAttachmentDownload',
    method: 'GET',
    data
  })
}
