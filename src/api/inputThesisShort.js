import request from '@/utils/request'

export function inputThesisShortInfoInit() {
  return request({
    url: '/api/degree/inputThesisShortInfoInit',
    method: 'POST',
    data: {}
  })
}

export function inputThesisShortInfo(data) {
  return request({
    url: '/api/degree/inputThesisShortInfo',
    method: 'POST',
    data
  })
}
