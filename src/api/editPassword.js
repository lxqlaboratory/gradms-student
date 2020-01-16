import request from '@/utils/request'

export function editPassword(data) {
  return request({
    url: '/api/auth/changePassword',
    method: 'POST',
    data
  })
}
