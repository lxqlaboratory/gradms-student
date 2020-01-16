import request from '@/utils/request'

export function degreeGradApplyInit() {
  return request({
    url: '/api/degree/degreeGradApplyInit',
    method: 'POST',
    data: {}
  })
}

export function degreeGradApplyInsert() {
  return request({
    url: '/api/degree/degreeGradApplyInsert',
    method: 'POST',
    data: {}
  })
}
