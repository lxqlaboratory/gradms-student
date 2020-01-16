import request from '@/utils/request'

export function getStudentTrainInfo() {
  return request({
    url: '/api/student/getStudentTrainInfoData',
    method: 'POST',
    data: {}
  })
}
