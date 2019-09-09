// 格式化演员
export const getActors = (value) => {
  if (!value) return '暂无主演'
  let str = ''
  value.forEach((element, index) => {
    let space = ' '
    if (index == value.length - 1) {
      space = ''
    }
    str += element.name + space
  })
  return str
}

// 格式化上演日期 周x 8月30日
export const getPremiereAt = (value, format) => {
  let time = value * 1000
  let date = new Date(time)
  if (format === 'ymd') {
    return date.toLocaleDateString()
  }
  if (format === 'dmd') {
    let res = ''
    let d = new Date().getUTCDate()
    let s = date.toLocaleDateString().split('/')
    if (s[2] - d == 0) {
      res = `今天${s[1]}月${s[2]}日`
      return res
    }
    if (s[2] - d == 1) {
      res = `明天${s[1]}月${s[2]}日`
      return res
    }
    if (s[2] - d == 2) {
      res = `后天${s[1]}月${s[2]}日`
      return res
    }
    if (s[2] - d > 2) {
      let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
      res += weeks[date.getDay()]
      res += `${s[1]}月${s[2]}日`
      return res
    }
    return date.toLocaleDateString()
  }
  if (format === 'schedule') {
    let str = ''
    let h = date.getHours()
    let f = date.getMinutes()
    h < 10 ? h = '0' + h : h
    f < 10 ? f = '0' + f : f
    str += h + ':' + f
    return str
  }
  let str = ''
  let weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
  str += weeks[date.getDay()] + ' '
  str += (date.getMonth() + 1) + '月'
  str += date.getDate() + '日'
  return str
}
