// const getConfig = require('vuepress-bar')
module.exports = {
  // sidebar: [
  //   ...getConfig(`${__dirname}/../..`, {
  //     multipleSideBar: false,
  //     maxLevel: 3,
  //   }).sidebar
  // ]
  sidebar: {
    '/algorithm/': [
      '/algorithm/',
      {
        title: '算法与数据结构',
        collapsable: false,
        sidebarDepth: 1,
        children: [
          '/algorithm/',
          {
            title: '数据结构',
            children: ['/algorithm/data-structure/', '/algorithm/data-structure/01-linked-list']
          }
        ]
      }
    ],
    '/frontend/': [
      '/frontend/',
      { title: '前端', collapsable: false, sidebarDepth: 1, children: ['/frontend/js/'] }
    ]
  }
}
