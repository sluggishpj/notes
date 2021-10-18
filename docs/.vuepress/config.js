const pluginConf = require('./config/pluginConf.js')
const navConf = require('./config/navConf.js')
const headConf = require('./config/headConf.js')
const sidebarConf = require('./config/sidebarConf.js')

module.exports = {
  title: 'Notes ',
  description: 'Just notes',
  head: headConf,
  base: '/notes/',
  serviceWorker: false,
  markdown: {
    lineNumbers: true
  },
  plugins: pluginConf,
  themeConfig: {
    nav: navConf,
    sidebar: sidebarConf.sidebar,
    repo: 'sluggishpj/notes',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebarDepth: 6,
    collapsable: true,
    algolia: process.env.NODE_ENV === 'production'? {
      indexName: 'notes',
      apiKey: '8e4716393f1a52c17e11c74e1d018419',
      appId: 'EK9P3OJVR1',
      algoliaOptions: {
        hitsPerPage: 6,
        facetFilters: ''
      }
    }: null
  }
}
