const weekdayNames_1 = ['日', '一', '二', '三', '四', '五', '六']
const weekdayNames_2 = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']
const weekdayNames_3 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

/**
 * @param date JavaScript `Date` object, or a string that can be parsed as a `Date` object
 */
export default function formatDate(date: Date | string, format: string) {
    if (typeof date === 'string') date = new Date(date)

    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const weekday = date.getDay()
    const hour = date.getHours()
    const min = date.getMinutes()
    const sec = date.getSeconds()

    let formatted = format

    formatted = formatted.replace('YYYY', year.toString())
    formatted = formatted.replace('MM', (month + 1).toString().padStart(2, '0'))
    formatted = formatted.replace('M', (month + 1).toString())
    formatted = formatted.replace('DD', day.toString().padStart(2, '0'))
    formatted = formatted.replace('D', day.toString())
    formatted = formatted.replace('WWW', weekdayNames_3[weekday])
    formatted = formatted.replace('WW', weekdayNames_2[weekday])
    formatted = formatted.replace('W', weekdayNames_1[weekday])
    formatted = formatted.replace('hh', hour.toString().padStart(2, '0'))
    formatted = formatted.replace('h', hour.toString())
    formatted = formatted.replace('mm', min.toString().padStart(2, '0'))
    formatted = formatted.replace('m', min.toString())
    formatted = formatted.replace('ss', sec.toString().padStart(2, '0'))
    formatted = formatted.replace('s', sec.toString())

    return formatted
}