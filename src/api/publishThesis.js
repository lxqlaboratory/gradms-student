import request from '@/utils/request'
export function publishThesis(data) {
  return request({
    url: '/api/auth/changePassword',
    method: 'POST',
    data
  })
}
