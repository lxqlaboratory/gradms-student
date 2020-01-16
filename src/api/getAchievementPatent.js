import request from '@/utils/request'

export function getAchievementPatentInfoList() {
  return request({
    url: '/api/student/getAchievementPatentInfoList',
    method: 'POST',
    data: {}
  })
}

export function saveAchievementPatentInfoInit() {
  return request({
    url: '/api/student/saveAchievementPatentInfoInit',
    method: 'POST',
    data: {}
  })
}

export function saveAchievementPatentInfoInitById(data) {
  return request({
    url: '/api/student/saveAchievementPatentInfoInit',
    method: 'POST',
    data
  })
}

export function saveAchievementPatentInfo(data) {
  return request({
    url: '/api/student/saveAchievementPatentInfo',
    method: 'POST',
    data
  })
}

export function deleteAchievementPatentInfo(data) {
  return request({
    url: '/api/student/deleteAchievementPatentInfo',
    method: 'POST',
    data
  })
}

export function saveAchievementPatentRemarkInit(data) {
  return request({
    url: '/api/student/saveAchievementPatentRemarkInit',
    method: 'POST',
    data
  })
}

export function saveAchievementPatentRemark(data) {
  return request({
    url: '/api/student/saveAchievementPatentRemark',
    method: 'POST',
    data
  })
}
