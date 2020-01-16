import request from '@/utils/request'

export function cultivateSchemeShow() {
  return request({
    url: '/api/cultivate/cultivateSchemeShow',
    method: 'POST',
    data: {}
  })
}

export function getMajorList(data) {
  return request({
    url: '/api/cultivate/getMajorList',
    method: 'POST',
    data
  })
}

export function getCultivateTableList(data) {
  return request({
    url: '/api/cultivate/getCultivateTableList',
    method: 'POST',
    data
  })
}


export function showCultivate(data) {
  return request({
    url: '/api/cultivate/showCultivate',
    method: 'POST',
    data
  })
}

export function showCourse(data) {
  return request({
    url: '/api/cultivate/showCourse',
    method: 'POST',
    data
  })
}
