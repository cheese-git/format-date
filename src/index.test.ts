import formatDate from './index'

test('format date', () => {
    const date = new Date('2021-1-13 9:08:43')
    expect(formatDate(date, 'YYYY-M-D WWW hh:mm:ss')).toBe('2021-1-13 星期三 09:08:43')
    expect(formatDate(date, 'YYYY-MM-DD WW h:m:s')).toBe('2021-01-13 周三 9:8:43')
})