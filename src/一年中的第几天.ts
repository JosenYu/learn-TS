/*
 * @Author: yu li
 * @Date: 2021-12-21 00:29:38
 * @LastEditTime: 2021-12-21 00:41:00
 * @LastEditors: yu li
 * @FilePath: /learn-ts/src/一年中的第几天.ts
 * @Description: 文件描述
 * @ReadMe: 产考资料，学习文献等...
 */

function dayOfYear(date: string): number {

  const year = +date.slice(0, 4);
  const month = +date.slice(5, 7);
  const day = +date.slice(8);
  const amount = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 闰年
  if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    ++amount[1];
  }

  let ans = 0;
  for (let i = 0; i < month - 1; ++i) {
    ans += amount[i];
  }
  return ans + day;
};