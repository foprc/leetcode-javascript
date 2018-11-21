/**
 * Given a collection of intervals, merge all overlapping intervals.
 * 给出一个区间的集合，请合并所有重叠的区间。
 */

/**
 * Example:
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6]
 * overlaps, merge them into [1,6].
 */

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
const merge = (intervals) => {
  let res = []
  intervals.sort((i1, i2) => (i1.start > i2.start ? 1 : -1))
  console.log(intervals)

  if (intervals.length) {
    res.push(intervals[0])
  }

  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i]
    let last = res.pop()

    if (interval.start > last.end) {
      res.push(last)
      res.push(interval)
    } else {
      last.end = Math.max(last.end, interval.end)
      res.push(last)
    }
  }

  return res
}

console.log(merge([[1, 3], [2, 6], [8, 10], [15, 18]]))
