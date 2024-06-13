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

// 演示正则匹配
const formatDemo = () => {
  const REGEX_FORMAT =
    /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;

  const formatString = "YYYY-MM-DD";
  formatString.replace(REGEX_FORMAT, (match, $1) => {
    console.log("match: ", match);
    console.log("$1: ", $1);

    return match;
  });
  // log
  // match:  YYYY
  // $1:  undefined
  // match:  MM
  // $1:  undefined
  // match:  DD
  // $1:  undefined
};
formatDemo();
