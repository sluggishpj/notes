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

### 494. 目标和

```md
给你一个整数数组 nums 和一个整数 target 。

向数组中的每个整数前添加 '+' 或 '-' ，然后串联起所有整数，可以构造一个 表达式 ：

例如，nums = [2, 1] ，可以在 2 之前添加 '+' ，在 1 之前添加 '-' ，然后串联起来得到表达式 "+2-1" 。
返回可以通过上述方法构造的、运算结果等于 target 的不同 表达式 的数目。

示例1
输入：nums = [1,1,1,1,1], target = 3
输出：5
解释：一共有 5 种方法让最终目标和为 3 。
-1 + 1 + 1 + 1 + 1 = 3
+1 - 1 + 1 + 1 + 1 = 3
+1 + 1 - 1 + 1 + 1 = 3
+1 + 1 + 1 - 1 + 1 = 3
+1 + 1 + 1 + 1 - 1 = 3


示例2
输入：nums = [1], target = 1
输出：1
```

[494. 目标和](https://leetcode.cn/problems/target-sum/)
