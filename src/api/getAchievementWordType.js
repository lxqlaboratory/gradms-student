import request from '@/utils/request'

export function getAchievementWordTypeInfoList() {
  return request({
    url: '/api/student/getAchievementWordTypeInfoList',
    method: 'POST',
    data: {}
  })
}

export function getAchievementWordTypeInfoInitList() {
  return request({
    url: '/api/student/saveAchievementWordTypeInfoInit',
    method: 'POST',
    data: {}
  })
}

export function getAchievementWordTypeInfoInitById(data) {
  return request({
    url: '/api/student/saveAchievementWordTypeInfoInit',
    method: 'POST',
    data
  })
}

export function saveAchievementWordTypeInfoInit(data) {
  return request({
    url: '/api/student/saveAchievementWordTypeInfoInit',
    method: 'POST',
    data
  })
}

export function saveAchievementWordTypeInfo(data) {
  return request({
    url: '/api/student/saveAchievementWordTypeInfo',
    method: 'POST',
    data
  })
}

export function deleteAchievementWordTypeInfo(data) {
  return request({
    url: '/api/student/deleteAchievementWordTypeInfo',
    method: 'POST',
    data
  })
}

export function getAchievementWordTypeRemarkInit(data) {
  return request({
    url: '/api/student/saveAchievementWordTypeRemarkInit',
    method: 'POST',
    data
  })
}

export function saveAchievementWordTypeRemark(data) {
  return request({
    url: '/api/student/saveAchievementWordTypeRemark',
    method: 'POST',
    data
  })
}
