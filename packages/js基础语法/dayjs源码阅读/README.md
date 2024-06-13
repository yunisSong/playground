# dayjs 源码阅读

### format

[format](https://github.com/iamkun/dayjs/blob/f4cb2cfd77246116cb4151c74ca2f600a17cd951/src/index.js)

```js
  format(formatStr) {
    const locale = this.$locale()

    // 如果当前日期对象无效，则返回 locale 中的无效日期信息或默认的无效日期字符串。
    if (!this.isValid()) return locale.invalidDate || C.INVALID_DATE_STRING

    // 如果没有传入格式化字符串，则使用默认的格式化字符串。
    const str = formatStr || C.FORMAT_DEFAULT
    const zoneStr = Utils.z(this)
    //从当前日期对象中获取小时、分钟和月份信息。
    const { $H, $m, $M } = this
    //从 locale 中获取星期和月份信息以及 meridiem（上午/下午）信息。
    const {
      weekdays, months, meridiem
    } = locale
    //定义了一个函数用于获取缩写的星期和月份名称。
    const getShort = (arr, index, full, length) => (
      (arr && (arr[index] || arr(this, str))) || full[index].slice(0, length)
    )
    //定义了一个函数用于获取格式化后的小时信息。
    const get$H = num => (
      Utils.s($H % 12 || 12, num, '0')
    )

    //定义了一个函数用于获取上午/下午信息。
    const meridiemFunc = meridiem || ((hour, minute, isLowercase) => {
      const m = (hour < 12 ? 'AM' : 'PM')
      return isLowercase ? m.toLowerCase() : m
    })

    //定义了一个函数 matches。
   const matches = (match) => {
      switch (match) {
        case 'YY':
          return String(this.$y).slice(-2)
        case 'YYYY':
          return Utils.s(this.$y, 4, '0')
        case 'M':
          return $M + 1
        case 'MM':
          return Utils.s($M + 1, 2, '0')
        case 'MMM':
          return getShort(locale.monthsShort, $M, months, 3)
        case 'MMMM':
          return getShort(months, $M)
        case 'D':
          return this.$D
        case 'DD':
          return Utils.s(this.$D, 2, '0')
        case 'd':
          return String(this.$W)
        case 'dd':
          return getShort(locale.weekdaysMin, this.$W, weekdays, 2)
        case 'ddd':
          return getShort(locale.weekdaysShort, this.$W, weekdays, 3)
        case 'dddd':
          return weekdays[this.$W]
        case 'H':
          return String($H)
        case 'HH':
          return Utils.s($H, 2, '0')
        case 'h':
          return get$H(1)
        case 'hh':
          return get$H(2)
        case 'a':
          return meridiemFunc($H, $m, true)
        case 'A':
          return meridiemFunc($H, $m, false)
        case 'm':
          return String($m)
        case 'mm':
          return Utils.s($m, 2, '0')
        case 's':
          return String(this.$s)
        case 'ss':
          return Utils.s(this.$s, 2, '0')
        case 'SSS':
          return Utils.s(this.$ms, 3, '0')
        case 'Z':
          return zoneStr // 'ZZ' logic below
        default:
          break
      }

    // 使用正则表达式替换格式化字符串中的内容，
    // 其中 \$1 表示匹配到的内容，如果匹配到了内容则返回该内容，
    // 否则返回 matches 函数的结果或者替换时区信息中的冒号。

    // export const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g
    return str.replace(C.REGEX_FORMAT, (match, $1) => $1 || matches(match) || zoneStr.replace(':', '')) // 'ZZ'
  }




```

#### REGEX_FORMAT 具体解释

这段代码定义了一个正则表达式常量 `REGEX_FORMAT`，该正则表达式用于匹配日期格式化字符串中的各种格式标记。让我详细解释一下这段代码的意思：

1. `const REGEX_FORMAT = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g`：这行代码定义了一个正则表达式，其中包含以下匹配规则：

   - `\[([^\]]+)]`：匹配方括号中的内容，用于处理方括号内的文本。
   - `Y{1,4}`：匹配 1 到 4 个连续的大写字母 Y，用于匹配年份部分。
   - `M{1,4}`：匹配 1 到 4 个连续的大写字母 M，用于匹配月份部分。
   - `D{1,2}`：匹配 1 到 2 个连续的大写字母 D，用于匹配日期部分。
   - `d{1,4}`：匹配 1 到 4 个连续的小写字母 d，用于匹配星期几部分。
   - `H{1,2}`：匹配 1 到 2 个连续的大写字母 H，用于匹配 24 小时制的小时部分。
   - `h{1,2}`：匹配 1 到 2 个连续的小写字母 h，用于匹配 12 小时制的小时部分。
   - `a`：匹配小写字母 a，表示上午/下午标记。
   - `A`：匹配大写字母 A，表示上午/下午标记。
   - `m{1,2}`：匹配 1 到 2 个连续的小写字母 m，用于匹配分钟部分。
   - `s{1,2}`：匹配 1 到 2 个连续的小写字母 s，用于匹配秒部分。
   - `Z{1,2}`：匹配 1 到 2 个连续的大写字母 Z，用于匹配时区部分。
   - `SSS`：匹配精确到毫秒的时间部分。

2. `/g`：标志位，表示全局搜索，即匹配所有符合规则的部分。

这个正则表达式用于匹配日期格式化字符串中可能出现的各种格式标记，以便在日期格式化过程中进行相应的替换操作。

#### string.replace

`string.replace(searchValue, replaceValue)`

`searchValue` 可以是一个字符串或者一个正则表达式，用来匹配要替换的子串。
`replaceValue` 可以是一个字符串或者一个函数，用来替换匹配到的子串。

` return str.replace(C.REGEX_FORMAT, (match, $1) => $1 || matches(match) || zoneStr.replace(':', '')) // 'ZZ'`

这行代码的意思就是，匹配到 格式化支付串中的特定内容，然后调用 `matches` 函数替换为新的内容。
譬如 `formatString` 为 `YYYY-MM-dd`

就会被正则匹配为三段 `YYYY、MM、DD` 然后分别调用后续的函数 ` (match, $1) => $1 || matches(match) || zoneStr.replace(':', '')` 替换为相应的内容

### 如何做到格式化补位的

[padStart](https://github.com/iamkun/dayjs/blob/f4cb2cfd77246116cb4151c74ca2f600a17cd951/src/utils.js#L3)

```js
const padStart = (string, length, pad) => {
  // 转换为 string
  const s = String(string);
  // 判断长度是否大于 要返回的长度 length
  if (!s || s.length >= length) return string;
  // 如果小于 length 前面补位 pad
  // Array(length + 1 - s.length) 创建一个长度为 缺失的长度的空数组，
  return `${Array(length + 1 - s.length).join(pad)}${string}`;
};

console.log('padStart("12", 4, 0) : ', padStart("12", 4, 0)); // log: 0012
```

### 插件加载

[extend plugin](https://github.com/iamkun/dayjs/blob/f4cb2cfd77246116cb4151c74ca2f600a17cd951/src/index.js)

```js
dayjs.extend = (plugin, option) => {
  if (!plugin.$i) {
    // install plugin only once
    plugin(option, Dayjs, dayjs);
    plugin.$i = true;
  }
  return dayjs;
};
```

[plugin 具体实现](https://github.com/iamkun/dayjs/blob/f4cb2cfd77246116cb4151c74ca2f600a17cd951/src/plugin/isTomorrow/index.js)

```js
export default (o, c, d) => {
  const proto = c.prototype;
  proto.isTomorrow = function () {
    const comparisonTemplate = "YYYY-MM-DD";
    const tomorrow = d().add(1, "day");

    return (
      this.format(comparisonTemplate) === tomorrow.format(comparisonTemplate)
    );
  };
};
```
