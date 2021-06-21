const getConfig = require('vuepress-bar')
module.exports = {
  sidebar: [
    ...getConfig(`${__dirname}/../..`, {
      multipleSideBar: false,
      maxLevel: 3,
    }).sidebar
  ]
}
