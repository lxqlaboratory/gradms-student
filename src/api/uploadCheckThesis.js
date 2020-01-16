import request from '@/utils/request'

export function uploadCheckThesisInit() {
  return request({
    url: '/api/degree/uploadCheckThesisInit',
    method: 'POST',
    data: {}
  })
}
// 修改信息
export function thesisModifyTitle(data) {
  return request({
    url: '/api/degree/thesisModifyTitle',
    method: 'POST',
    data
  })
}
// 提交
export function uploadCheckThesis(data) {
  return request({
    url: '/api/degree/uploadCheckThesis',
    method: 'POST',
    data
  })
}
