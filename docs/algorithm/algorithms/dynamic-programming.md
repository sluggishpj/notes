---
title: 动态规划
---

# 动态规划

## 0-1 背包

有一个容量为 N 的背包，要用这个背包装下物品的价值最大，这些物品有两个属性：体积 w 和价值 v。

定义一个二维数组 dp 存储最大价值，其中 `dp[i][j]` 表示前 i 件物品体积不超过 j 的情况下能达到的最大价值。设第 i 件物品体积为 w，价值为 v，根据第 i 件物品是否添加到背包中，可以分两种情况讨论：

第 i 件物品没添加到背包，总体积不超过 j 的前 i 件物品的最大价值就是总体积不超过 j 的前 i-1 件物品的最大价值，`dp[i][j] = dp[i-1][j]`。
第 i 件物品添加到背包中，`dp[i][j] = dp[i-1][j-w] + v`。
第 i 件物品可添加也可以不添加，取决于哪种情况下最大价值更大。因此，0-1 背包的状态转移方程为：

`dp[i][j] = max(dp[i-1][j-w]+v, dp[i-1][j])`

```js
/**
 * 获取背包能装下的最大价值
 * @param {number} W 背包总体积
 * @param {number} N 物品数量
 * @param {number[]} weights N个物品的各个重量
 * @param {number[]} values N个物品的各个价值
 */
function backpack(W, N, weights, values) {
  // 问题定义：dp[i][j] 为 前 i 个物品中，挑选总容量不超过 j 的最大价值
  // 递推：分为是否包含第i个物品
  //       1. 包含： dp[i][j] = dp[i-1][j-weights[i]] + values[i]
  //       2. 不包含：dp[i][j] = dp[i-1][j]
  //       最终 dp[i][j] = 2者中最大值
  // 初始条件: dp[0][j] = 0, dp[i][0] = 0

  const dp = Array.from({ length: N + 1 }, () => [0])
  for (let j = 0; j <= W; j++) {
    dp[0][j] = 0
  }

  for (let i = 1; i <= N; i++) {
    const w = weights[i - 1]
    const v = values[i - 1]
    for (let j = 1; j <= W; j++) {
      if (w <= j) {
        dp[i][j] = Math.max(dp[i - 1][j - w] + v, dp[i - 1][j])
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[N][W]
}
```

**空间优化**

先思考下，自己手动编写下代码试试。

先上代码：

```js
/**
 * 获取背包能装下的最大价值 -- 空间优化版
 * dp[j] = Math.max(dp[j-w]+v, dp[j])
 * @param {number} W 背包总体积
 * @param {number} N 物品数量
 * @param {number[]} weights N个物品的各个重量
 * @param {number[]} values N个物品的各个价值
 */
function backpackLessSpace(W, N, weights, values) {
  const dp = Array(W + 1).fill(0)

  for (let i = 1; i <= N; i++) {
    const w = weights[i - 1]
    const v = values[i - 1]

    // 思考为啥要倒序呢？
    for (let j = W; j >= 1; j--) {
      if (j >= w) {
        dp[j] = Math.max(dp[j - w] + v, dp[j])
      }
    }
  }

  return dp[W]
}
```

看懂了吗？解释一波：
观察状态转移方程可以知道，前 i 件物品的状态仅与前 `i-1` 件物品的状态有关，因此可以将 dp 定义为一维数组，其中 `dp[j]` 既可以表示 `dp[i-1][j]` 也可以表示 `dp[i][j]`。此时

`dp[j] = max(dp[j-w]+v, dp[j])`。
（原先:`dp[i][j] = max(dp[i-1][j-w]+v), dp[i-1][j]`)

因为 `dp[j-w]` 表示 `dp[i-1][j-w]`，因此不能先求 `dp[i][j-w]`，防止将 `dp[i-1][j-w]` 覆盖。换句话说就是 在计算新一轮的 `dp[j]` 时，不能影响本轮待用到的上一轮的 `dp[j-w]`。也就是说要先计算 `dp[i][j]` 再计算 `dp[i][j-w]`，在程序实现时按倒序来循环即可。

变种

- 完全背包：物品数量为无限个
- 多重背包：物品数量有限制
- 多维费用背包：物品不仅有重量，还有体积，同时考虑这两种限制
- 其他：物品之间相互约束或者依赖

### 416. 分割等和子集

```md
给你一个 只包含正整数 的 非空 数组 nums。
请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

示例 1
输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。

示例 2
输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。
```

[416. 分割等和子集](https://leetcode.cn/problems/partition-equal-subset-sum/description/)

<details>
<summary>查看代码</summary>

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  if (nums.length <= 1) {
    return false
  }

  const target = sum(nums) / 2
  if (target % 1 !== 0) {
    // 非整数
    return false
  }

  // 问题转化为：数组是否存在某几项之和为 target
  return isExistSum(nums, target)
}

function sum(nums) {
  return nums.reduce((acc, num) => acc + num, 0)
}

//  动态规划，理解为0-1背包问题
function isExistSum(nums, target) {
  // 也可以理解为背包问题，各个物品的价值为 nums[i]，重量也为 nums[i]，包承重为 target，看最大价值是否为 target
  // 问题定义：dp[i][j] 为 前i个物品，容量为j时的 最大价值
  // 递推：记第i个物品的重量为w = nums[i], 价值为 v=nums[i]
  //      dp[i][j] = max(dp[i-1][j-w]+v, dp[i-1][j])
  //     空间优化：dp[j] = max(dp[j-w]+v, dp[j])
  // 初始条件：dp[j] = 0

  // 此处为优化版本
  const dp = Array(target + 1).fill(0)

  const count = nums.length
  for (let i = 1; i <= count; i++) {
    const w = nums[i - 1]
    const v = w

    for (let j = target; j >= 1; j--) {
      if (j >= w) {
        dp[j] = Math.max(dp[j - w] + v, dp[j])
      }
    }

    if (dp[target] === target) {
      // 已经存在能装满的情况了
      return true
    }
  }
  return false
}
```

</details>

### 494. 目标和

```md
给你一个整数数组 nums 和一个整数 target。

向数组中的每个整数前添加  '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

示例 1
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3

示例 2
输入：nums = [1], target = 1
输出：1
```

[494. 目标和](https://leetcode.cn/problems/target-sum/)

<details>
<summary>查看代码</summary>

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, S) {
  // 假设 nums = [a, b, c, d, e]，和为 OriginSum
  //      且存在 [a, -b, -c, d, e] 和 为 S
  // 那么这2者相加，会得出 2*(a+d+e) = OriginSum+S
  // 当然 不一定是 a/d/e，但一定是数组中的子集
  // 问题转化为 数组中某些项的 和为 (OriginSum+S)/2 的情况个数，又是 0-1 背包问题

  const target = (sum(...nums) + S) / 2
  if (target < 0 || target % 1 !== 0) {
    // 说明是负数或小数，不存在这种组合（非负整数的和是非负整数）
    return 0
  }

  return sumsetsLessSpace(nums, target)
}

// nums 中，和为 target 的子集个数
function sumsets(nums, target) {
  // 问题定义：
  // dp[i][j] 为 nums[0,...i-1] 中，和为 j 的子集个数
  // 递推：分为是否把 nums[i] 放进去，nums[i] 值为 v
  //      dp[i][j] = sum(dp[i-1][j-v] + dp[i-1][j])
  // 初始条件（请思考）：dp[0][j] = 0 (j!=0)，dp[i][0] = 1;

  const len = nums.length
  const dp = Array.from({ length: len + 1 }, () => [1])
  for (let j = 1; j <= target; j++) {
    dp[0][j] = 0
  }

  for (let i = 1; i <= len; i++) {
    const v = nums[i - 1]
    for (let j = 0; j <= target; j++) {
      if (j >= v) {
        dp[i][j] = dp[i - 1][j - v] + dp[i - 1][j]
      } else {
        dp[i][j] = dp[i - 1][j]
      }
    }
  }

  return dp[len][target]
}

// nums 中，和为 target 的子集个数，空间优化版
function sumsetsLessSpace(nums, target) {
  // 原先的递推条件是：dp[i][j] = dp[i-1][j-v] + dp[i-1][j]
  // 观察可优化为 : dp[j] = dp[j-v]+dp[j]
  // 初始条件：dp[0] = 1

  const len = nums.length
  const dp = Array(target + 1).fill(0)
  dp[0] = 1

  for (let i = 1; i <= len; i++) {
    const v = nums[i - 1]
    for (let j = target; j >= 0; j--) {
      if (j >= v) {
        dp[j] = dp[j - v] + dp[j]
      }
    }
  }

  return dp[target]
}

function sum(...args) {
  return args.reduce((res, val) => {
    res += val
    return res
  }, 0)
}
```

</details>

### 474. 一和零

```md
给你一个二进制字符串数组 strs 和两个整数 m 和 n 。
请你找出并返回 strs 的最大子集的长度，该子集中 最多 有 m 个 0 和 n 个 1 。
如果 x 的所有元素也是 y 的元素，集合 x 是集合 y 的 子集 。

示例 1：
输入：strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
输出：4
解释：最多有 5 个 0 和 3 个 1 的最大子集是 {"10","0001","1","0"} ，因此答案是 4 。
其他满足题意但较小的子集包括 {"0001","1"} 和 {"10","1","0"} 。{"111001"} 不满足题意，因为它含 4 个 1 ，大于 n 的值 3 。

示例 2：
输入：strs = ["10", "0", "1"], m = 1, n = 1
输出：2
解释：最大的子集是 {"0", "1"} ，所以答案是 2 。
```

[474. 一和零](https://leetcode.cn/problems/ones-and-zeroes/)

<details>
<summary>查看代码</summary>

```js
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
/**
 * 可以理解为背包问题，每个子串的价值都为1, 包含0的个数为重量，1的个数为体积。
 * 背包能承重m，体积为 n
 * 求能放下的最大价值（子串个数）
 */
var findMaxForm = function (strs, m, n) {
  // 问题定义：
  // dp[i][j][k] 为 前i个子串，0的个数<=j，1的个数<=k 子串的最大长度
  // 递推：分为是否把 strs[i-1] 放进去，记 strs[i-1] 的0的个数为 w，1的个数为 v
  //       dp[i][j][k] = max(dp[i-1][j][k], dp[i-1][j-w][k-v]+1)
  // 初始条件：dp[0][j][k] = 0

  const wvArr = resolveZeroOneCnt(strs) // 每项都记录了strs各项 0,1 的个数
  const len = strs.length
  const dp = Array.from({ length: len + 1 }, () => Array.from({ length: m + 1 }, () => []))

  for (let i = 1; i <= len; i++) {
    const { 0: w, 1: v } = wvArr[i - 1]

    for (let j = 0; j <= m; j++) {
      for (let k = 0; k <= n; k++) {
        if (j >= w && k >= v) {
          dp[i][j][k] = Math.max(dp[i - 1][j][k] || 0, (dp[i - 1][j - w][k - v] || 0) + 1)
        } else {
          dp[i][j][k] = dp[i - 1][j][k] || 0
        }
      }
    }
  }

  return dp[len][m][n]
}

function resolveZeroOneCnt(strs) {
  const mnCntArr = [] // 记录 strs 中每个字符中 0 的个数和 1 的个数
  for (let str of strs) {
    let zeroCnt = 0
    let oneCnt = 0

    for (const char of str) {
      if (char === '0') {
        zeroCnt++
      } else {
        oneCnt++
      }
    }

    mnCntArr.push({ 0: zeroCnt, 1: oneCnt })
  }

  return mnCntArr
}
```

</details>
