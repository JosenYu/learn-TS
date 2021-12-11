/*
 * @Author: yu li
 * @Date: 2021-12-11 23:01:05
 * @LastEditTime: 2021-12-12 00:01:50
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/最短补全词.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */
function shortestCompletingWord(licensePlate: string, words: string[]): string {
  if (licensePlate.length === 0) return ''
  // 最大匹配度的字符串
  interface maxStr {
    word: string;
    num: number;
  }
  var strs: string[] = licensePlate.replace(/[^a-zA-Z]/g, '').toLocaleLowerCase().split(''),
    ansObj: maxStr = {
      num: 0,
      word: ''
    },
    maxNum = 0
  for (const word of words) {
    var _strs = [...strs]
    // 获取每个字母匹配了多少次
    for (let index = 0; index < word.length; index++) {
      const w = word[index];
      var i = _strs.indexOf(w)
      if (i >= 0) {
        _strs.splice(i, 1)
        ++maxNum
      }
    }
    // 比较当前值谁大 取大值
    if (maxNum > ansObj.num || (maxNum === ansObj.num && ansObj.word.length > word.length)) {
      ansObj.num = maxNum
      ansObj.word = word
    }
    maxNum = 0
  }
  return ansObj.word
};


var shortestCompletingWord2 = function (licensePlate: any, words: any) {
  licensePlate = licensePlate.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').sort();
  const n = licensePlate.length;
  let res = '';
  let max = 0;
  for (const w of words) {
    const word = w.split('').sort();
    const m = word.length;
    let tmp = 0;
    // 按字典序排序后比较出相同字符数
    for (let i = 0, j = 0; i < n && j < m;) {
      if (licensePlate[i] === word[j]) {
        tmp++, i++, j++;
      } else {
        licensePlate[i] < word[j] ? i++ : j++;
      }
    }
    // 判断是最短补全词
    if (tmp > max || (tmp === max && word.length < res.length)) {
      res = w;
      max = tmp;
    }
  }
  return res;
};
var aa: string = shortestCompletingWord(
  "1s3 456",
  ["looks", "pest", "stew", "show"]
)
console.log(aa);
