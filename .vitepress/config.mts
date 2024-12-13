import { defineConfig } from 'vitepress'

import navConf from './config/navConf.ts'
import headConf from './config/headConf.ts'
import sidebarConf from './config/sidebarConf.js'
import { withMermaid } from "vitepress-plugin-mermaid";


// https://vitepress.dev/reference/site-config
export default withMermaid(defineConfig({
  title: "Notes",
  description: "Just notes",
  // srcDir: 'docs',
  base: '/notes/',
  rewrites: {
    'docs/:category/:sub/:child': ':category/:sub/:child',
    'docs/:category/:sub': ':category/:sub',
    'docs/:category': ':category',
  },
  head: headConf,
  markdown: {
    // lineNumbers: true,
    math: true,
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: navConf,
    sidebar: sidebarConf.sidebar,
    outline: {
      // 页面导航层级
      level: 'deep',
    },
    editLink: {
      pattern: 'https://github.com/sluggishpj/notes/edit/master/docs/:path',
      text: 'Edit this page on GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sluggishpj/notes' }
    ],
    algolia: process.env.NODE_ENV === 'production'? {
      indexName: 'notes',
      apiKey: '8e4716393f1a52c17e11c74e1d018419',
      appId: 'EK9P3OJVR1',
    }: undefined
  }
}))
