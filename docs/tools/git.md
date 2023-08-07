---
title: Git
---

## Git 配置

- 初始化项目

```sh
git init
```

- 设置全局 git 用户名和邮箱

```sh
git config --global user.name "输入你的用户名" # 不用带双引号
git config --global user.email "输入你的邮箱" # 不用带双引号
```

- 针对特定项目使用不同的用户名称与邮件地址。在项目内执行命令

```sh
git config user.name "输入你的用户名" # 不用带双引号
git config user.email "输入你的邮箱" # 不用带双引号
```

- 查看配置

```sh
git config --list [--local]
```

## 分支管理

- 关联当前分支到远程的某个分支

```sh
git branch --set-upstream-to <remote-branch>

# 简写
git branch -u <remote-branch>
```

> `--set-upstream-to` 和 `--set-upstream` 等同，后者不再推荐用

- 关联并推送到远程同名分支

```sh
git push --set-upstream origin local-branch

# 简写
git push -u origin local-branch
```

## 提取某些提交 `cherry-pick`

- 提取某次提交

```sh
git cherry-pick <commit sha>
```

- 提取某个 2 个 commit 之间的多次提交【注意边界】，A, B 都是 commit sha。且 A 比 B 先提交

```sh
git cherry-pick A^..B # 包括A
```

```sh
git cherry-pick A..B # 不包括A
```

## 暂存 `git stash`

### 增加暂存

- 包含未跟踪的那些文件（即从未 add 过的那些文件）

```sh
git stash push --include-untracked -m "test stash include untracked"
```

- 只针对版本库中已跟踪的文件

```sh
git stash push -m "test stash"
```

### 查看暂存列表

```sh
git stash list
```

### 应用某个 stash

- 弹出最近提交的 1 个 stash，会同步从 stash list 中删除

```sh
git stash pop
```

- 使用特定的某个 stash `git stash apply stash@{n}`，不会从 stash list 中删除

eg. 已知 `git stash list` 列表如下

```sh
stash@{0}: On add-tool-note: test stash v3
stash@{1}: On add-tool-note: test stash v2
stash@{2}: On add-tool-note: test stash v1
```

要应用中间那个，需要执行下面命令。

```sh
git stash apply stash@{1}
```

### 删除某个 stash

```sh
git stash drop stash@{n}
```

## 撤销操作

- 提交信息写错了，或者想把新的修改合并到上一次 commit 中。【注意：**必须保证上一次的 commit 还没推送到远程**，否则本次修改无法推送到远程（除非强制推送），容易造成冲突】

```sh
git commit --amend
```

- 取消暂存的文件（已 add 未 commit）

```sh
git restore --staged <file>...
```

- 撤销对文件的本地修改（未 add）

```sh
git restore <file>...
```

## 撤销提交 revert commit

通过新增新的提交 用于撤销已经提交的变更

- revert 上一个 commit

```sh
git revert HEAD
```

- revert 多个 commit

```sh
git revert [倒数第一个提交的sha] [倒数第二个提交sha] [...]
```

或者

```sh
git revert [需要撤销的最早的提交的前一个提交sha]..[最晚的提交sha]
git revert abcdef^..123456
```

> `abcdef^` 表示 `abcdef`的上一个提交
> 也就是撤销了 abcdef（包括） 到 123456（包括） 的全部提交

- 选项
  - `--no-commit`: 在执行撤销操作后不要自动创建一个新的提交

## 版本回退 `git reset`

![stack overflow](https://i.stack.imgur.com/qRAte.jpg)

> [图片来源](https://stackoverflow.com/questions/3528245/whats-the-difference-between-git-reset-mixed-soft-and-hard)

```sh
git reset [--soft | --mixed [-N] | --hard | --merge | --keep] [-q] [<commit>]
```

- `--soft`: 移动 HEAD，但不改变 Index 和工作区，表现为 有很多已经 add 进去的文件待 commit(这些文件是 reset 前跟 reset 目标 commit 的变动)。(**uncommit**)
- `--mixed`: 默认行为。移动 HEAD，也重置了 Index，但不改变工作目录中的文件。表现为 有很多文件待 add。(**uncommit + unstage changes, changes are left in working tree.**)
- `--hard`: 移动 HEAD，重置 Index，重置工作区，直接回到目标 commit 当初的状态。(**uncommit + unstage + delete changes, nothing left.**)
