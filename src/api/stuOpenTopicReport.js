import request from '@/utils/request'

export function stuOpenTopicReportInit() {
  return request({
    url: '/api/degree/stuOpenTopicReportInit',
    method: 'POST',
    data: {}
  })
}

export function stuOpenTopicReportInsert(data) {
  return request({
    url: '/api/degree/stuOpenTopicReportInsert',
    method: 'POST',
    data
  })
}
