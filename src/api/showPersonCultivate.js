import request from '@/utils/request'

export function showPersonCultivate() {
  return request({
    url: '/api/cultivate/showCultivate',
    method: 'POST',
    data: {}
  })
}

export function pyfadkcsz(data) {
  return request({
    url: '/api/cultivate/pyfadkcsz',
    method: 'POST',
    data
  })
}
