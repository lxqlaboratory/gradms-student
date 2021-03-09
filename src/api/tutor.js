import request from '@/utils/request'

export function tutorInfoQueryBrowseInit(data) {
  return request({
    url: '/api/tutor/tutorEngInfoQueryBrowseInit',
    method: 'POST',
    data
  })
}
export function tutorInfoQueryBrowseQuery(data) {
  return request({
    url: '/api/tutor/tutorEngInfoQueryBrowseQuery',
    method: 'POST',
    data
  })
}
export function tutorDetailInfoShow(data) {
  return request({
    url: '/api/tutor/tutorDetailEngInfoShow',
    method: 'POST',
    data
  })
}
export function studentViewCollegeTutor(data) {
  return request({
    url: '/api/tutor/studentViewEngCollegeTutor',
    method: 'POST',
    data
  })
}
