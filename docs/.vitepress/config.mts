import { defineConfig } from 'vitepress'

import navConf from './config/navConf.ts'
import headConf from './config/headConf.ts'
import sidebarConf from './config/sidebarConf.js'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Notes",
  description: "Just notes",
  base: '/notes/',
  head: headConf,
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: navConf,
    sidebar: sidebarConf.sidebar,
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
})
