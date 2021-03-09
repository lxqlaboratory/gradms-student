import request from '@/utils/request'

export function thesisReviewAndReplyInfoShow() {
  return request({
    url: '/api/degree/thesisReviewAndReplyInfoShow',
    method: 'POST',
    data: {}
  })
}

// 学位申请书
export function degreeThesisApplyDownload() {
  return request({
    url: '/api/degree/degreeThesisApplyDownload',
    method: 'GET',
    data: {}
  })
}
// 学位审批书
export function degreeThesisApprovalDownload() {
  return request({
    url: '/api/degree/degreeThesisApprovalDownload',
    method: 'GET',
    data: {}
  })
}

// 答辩记录纸
export function degreethesisAnswerRecordDownload() {
  return request({
    url: '/api/degree/degreethesisAnswerRecordDownload',
    method: 'GET',
    data: {}
  })
}

// 毕业审批表
export function degreeGraduationAuditFormDownload() {
  return request({
    url: '/api/degree/degreeGraduationAuditFormDownload',
    method: 'GET',
    data: {}
  })
}
// 博士申请登记表
export function degreePrintApplyTable() {
  return request({
    url: '/api/degree/degreePrintApplyTable',
    method: 'GET',
    data: {}
  })
}

// 科研和奖励情况表
export function degreeResearchRewardFormDownload() {
  return request({
    url: '/api/degree/degreeResearchRewardFormDownload',
    method: 'GET',
    data: {}
  })
}
// 博士自评表
export function downLoadZiPingBiao() {
  return request({
    url: '/api/degree/downLoadZiPingBiao',
    method: 'GET',
    data: {}
  })
}

// 学位论文终稿
export function degreeThesisAttachmentDownload() {
  return request({
    url: '/api/degree/degreeThesisAttachmentDownload',
    method: 'GET',
    data: {}
  })
}

