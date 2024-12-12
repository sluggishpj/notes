module.exports = {
  '@vuepress/pwa': {
    serviceWorker: true,
    updatePopup: {
      message: '发现新内容可用.',
      buttonText: '刷新'
    }
  },
  '@vuepress/back-to-top': true,
  'vuepress-plugin-mathjax': {
    target: 'svg',
    macros: {
      '*': '\\times'
    }
  },
  '@vuepress/medium-zoom': true,
  'vuepress-plugin-mermaidjs': {}
}
