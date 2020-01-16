import request from '@/utils/request'

export function doctorThesisSelfEstimationInit() {
  return request({
    url: '/api/degree/doctorThesisSelfEstimationInit',
    method: 'POST',
    data: {}
  })
}

export function doctorThesisSelfEstimationInsert(data) {
  return request({
    url: '/api/degree/doctorThesisSelfEstimationInsert',
    method: 'POST',
    data
  })
}
