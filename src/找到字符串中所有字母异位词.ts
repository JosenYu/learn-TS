/*
 * @Author: yu li
 * @Date: 2021-11-28 14:23:47
 * @LastEditTime: 2021-11-28 23:58:06
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/找到字符串中所有字母异位词.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...

总体思路，先统计p中所需字符的个数，放入need，用Map存储。
滑动窗口遍历s，若窗口中的字符串满足need中的数量，则将左指针放入res。

判断满足条件的标准：窗口中字符串的有效字符数 === need的大小
判断是有效字符：窗口中出现该字符的个数 === need中出现该字符的个数

*/


const findAnagrams = (s:string, p:string) => {
  const need = new Map();
  const window = new Map();
  // 统计p中字符的个数
  for (const char of p) {
    need.set(char, (need.get(char) || 0) + 1);
  }
  // 定义左右指针
  let [left, right] = [0, 0];
  // 达到要求的字符数
  let valid = 0;
  const res = [];
  const lenS = s.length;
  const lenP = p.length;
  while (right < lenS) {
    // 右指针对应的字符，右指针右移
    const c = s[right++];
    if (need.get(c)) {
      // 若在need中，window中相应的+1
      window.set(c, (window.get(c) || 0) + 1);
      // 若window中，此字符达到了need中的数量，说明此字符满足要求
      if (window.get(c) === need.get(c)) valid++;
    }
    while (right - left >= lenP) {
      // 若valid等于need的大小，说明need中每个字符都满足要求了
      // 把左指针放入res
      if (valid === need.size) res.push(left);
      // 左指针对应的字符，左指针右移
      const d = s[left++];
      if (need.get(d)) {
        // 若出窗口的字符在need中，肯定不满足条件了，valid--
        if (window.get(d) === need.get(d)) valid--;
        // 将window中相应字符数-1
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return res;
};
