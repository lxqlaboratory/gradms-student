import request from '@/utils/request'

export function studentGraduateDegreeStateView(data) {
  return request({
    url: '/api/graduate/studentGraduateDegreeStateView2',
    method: 'POST',
    data
  })
}

export function studentGraduateDegreeStateView2(data) {
  return request({
    url: '/api/graduate/studentGraduateDegreeStateView3',
    method: 'POST',
    data
  })
}

export function uploadStateGraphImageData(data) {
  return request({
    url: '/api/graduate/uploadStateGraphImageData',
    method: 'POST',
    data
  })
}
