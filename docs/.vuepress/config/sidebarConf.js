const getConfig = require('vuepress-bar')
module.exports = {
  sidebar: [
    ...getConfig(`${__dirname}/../..`, {
      multipleSideBar: false
    }).sidebar
  ]
}
