import request from '@/utils/request'

export function degreeInfoSubmitInit() {
  return request({
    url: '/api/degree/degreeInfoSubmitInit',
    method: 'POST',
    data: {}
  })
}

export function degreeInfoSubmit(data) {
  return request({
    url: '/api/degree/degreeInfoSubmit',
    method: 'POST',
    data
  })
}
