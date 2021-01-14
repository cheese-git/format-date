# format-date

一个只有 30 行代码的日期格式化函数。
## 为什么？

- 没有必要仅仅为了格式化显示日期，就引入一个 day.js 或 date-fns 包，特别是在开发一些对打包体积很敏感的项目时（比如微信小程序）。
-  JavaScript 原生的方法不但存在兼容性问题，而且写法较为繁琐。
-  大部分时候，我们并不需要 i18n 支持

## 安装

```
npm i @cheesejs/format-date
```

## 使用

```ts
import formatDate from '@cheesejs/format-date'

formatDate(new Date(),'YYYY-MM-DD WWW hh:mm:ss')
// 2021-01-13 星期三 22:20:03

formatDate('2021-1-3 22:20:03','YYYY-MM-DD WW hh:mm:ss')
// 2021-01-13 周三 22:20:03
```

符号表：

| 符号 | 示例   | 含义       |
| ---- | ------ | ---------- |
| YYYY | 2021   | 完整的年份 |
| M    | 7      | 月份       |
| MM   | 07     | 月份       |
| D    | 7      | 日期       |
| DD   | 07     | 日期       |
| W    | 五     | 星期       |
| WW   | 周五   | 星期       |
| WWW  | 星期五 | 星期       |
| h    | 7      | 小时       |
| hh   | 07     | 小时       |
| m    | 7      | 分钟       |
| mm   | 07     | 分钟       |
| s    | 7      | 秒数       |
| ss   | 07     | 秒数       |