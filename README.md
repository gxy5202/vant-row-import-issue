# vant-row-import-issue

## clone本仓库到本地
1. `pnpm install`
2. `pnpm run dev`

## 问题描述

main.ts文件通过
`import { Row } from 'vant'`和`import Row from 'vant/es/Row/index.mjs`的结果不同
`import { Row } from 'vant'`的方式，gutter属性会生效，`import Row from 'vant/es/Row/index.mjs`的方式gutter属性会失败
