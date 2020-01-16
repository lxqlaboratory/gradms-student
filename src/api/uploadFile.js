import request from '@/utils/request'

export function uploadFile() {
  return request({
    url: '/api/student/uploadFile',
    method: 'POST',
    data: {}
  })
}
