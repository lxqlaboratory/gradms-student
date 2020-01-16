/**
 * Created by XuPengtao on 19/07/22
 *
 *  提示信息中英文转换
 *  数据格式：
 *      传入数据：res={'code':'','msg':''},其中code代表提示信息的类型是OKorError, msg是消息的内容
 *               lang='en'//'zh'代表当前的语言类型
 *      返回数据：{'type':'', 'code':'', 'message':''}
 *                其中type代表提示信息的类型是OKorError，code代表key匹配的结果0代表失败，1代表成功，message代表信息
 * */
import zhLocal from '@/lang/zh'
import enLocal from '@/lang/en'
export function translation(res, lang) {
  console.log(res);
  if (res.code == 1) { // 失败类型的消息
    for (const i in zhLocal.message.error) {
      if (typeof i === 'object') { // 是嵌套对象
        for (const key in i) {
          if (key === res.msg) {
            if (lang === 'en') {
              console.log(i)
              return { 'type': 'error', 'code': '1', 'message': enLocal.message.error.i[key] }
            } else if (lang === 'zh') {
              return { 'type': 'error', 'code': '1', 'message': zhLocal.message.error.i[key] }
            }
          }
        }
        return { 'type': 'error', 'code': 0, 'message': res.msg }
      } else if (i === res.msg) {
        if (lang === 'en') {
          console.log(i)
          return { 'type': 'error', 'code': '1', 'message': enLocal.message.error[i] }
        } else if (lang === 'zh') {
          return { 'type': 'error', 'code': '1', 'message': zhLocal.message.error[i] }
        }
      }
    }
    return { 'type': 'error', 'code': '0', 'message': res.msg }
  } else if (res.code == 0) { // 成功类型的消息
    for (const i in zhLocal.message.ok) {
      if (typeof i == 'object') {
        for (const key in i) {
          if (key == res.msg) {
            if (lang == 'en') {
              console.log(i)
              return { 'type': 'success', 'code': '1', 'message': enLocal.message.ok.i[key] }
            } else if (lang == 'zh') {
              return { 'type': 'success', 'code': '1', 'message': zhLocal.message.ok.i[key] }
            }
          }
        }
        return { 'type': 'success', 'code': 0, 'message': res.msg }
      } else if (i == res.msg) {
        if (lang == 'en') {
          return { 'type': 'success', 'code': '1', 'message': enLocal.message.ok[i] }
        } else if (lang == 'zh') {
          return { 'type': 'success', 'code': '1', 'message': zhLocal.message.ok[i] }
        }
      }
    }
    return { 'type': 'ok', 'code': '0', 'message': res.msg }
  }
}
