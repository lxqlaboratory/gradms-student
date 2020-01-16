import request from '@/utils/request'

export function initInfoMethod() {
  return request({
    url: '/api/student/initInfoMethod',
    method: 'POST',
    data: {}
  })
}

export function entryInfoSubmit(data) {
  return request({
    url: '/api/student/entryInfoSubmit',
    method: 'POST',
    data
  })
}
